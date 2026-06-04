"use client"

import { useEffect, useState } from "react";
import axios from "axios"
import { AnimatePresence, motion } from "framer-motion";

interface Product {
  _id: string
  name: string
  price: number
  category: string
  description: string
}

interface ProductForm {
  name: string
  price: string
  category: string
  description: string
}

const API_URL = "http://localhost:3001/products"

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [form, setForm] = useState<ProductForm>({
    name: "",
    price: "",
    category: "",
    description: "",
  })
  const [editingId, setEditingId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function fetchProducts() {
    try {
      const res = await axios.get(API_URL)
      setProducts(res.data)
    } catch (error) {
      console.log(error, "fetch products error")
    }
  }

  function onInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function resetForm() {
    setForm({
      name: "",
      price: "",
      category: "",
      description: "",
    })
    setEditingId(null)
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const payload = {
      name: form.name.trim(),
      price: Number(form.price),
      category: form.category.trim(),
      description: form.description.trim(),
    }

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, payload)
      } else {
        await axios.post(API_URL, payload)
      }
      await fetchProducts()
      resetForm()
    } catch (error) {
      console.log(error, "submit error")
    } finally {
      setLoading(false)
    }
  }

  function startEdit(product: Product) {
    setEditingId(product._id)
    setForm({
      name: product.name,
      price: String(product.price),
      category: product.category,
      description: product.description,
    })
  }

  async function deleteProduct(id: string) {
    try {
      await axios.delete(`${API_URL}/${id}`)
      if (editingId === id) {
        resetForm()
      }
      await fetchProducts()
    } catch (error) {
      console.log(error, "delete error")
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <main className="mx-auto w-full max-w-3xl p-6">
      <motion.h1
        className="mb-4 text-2xl font-bold"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        Products CRUD
      </motion.h1>

      <motion.form
        onSubmit={onSubmit}
        className="mb-8 flex flex-col gap-3 border p-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <input
          name="name"
          value={form.name}
          onChange={onInputChange}
          placeholder="Name"
          className="border p-2"
          required
        />
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={onInputChange}
          placeholder="Price"
          className="border p-2"
          min="0"
          required
        />
        <input
          name="category"
          value={form.category}
          onChange={onInputChange}
          placeholder="Category"
          className="border p-2"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={onInputChange}
          placeholder="Description"
          className="border p-2"
          rows={3}
          required
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="border bg-black px-4 py-2 text-white disabled:opacity-50"
            disabled={loading}
          >
            {editingId ? "Update" : "Create"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="border px-4 py-2"
            >
              Cancel edit
            </button>
          )}
        </div>
      </motion.form>

      <section className="flex flex-col gap-4">
        <AnimatePresence mode="popLayout">
          {products.map((product) => (
            <motion.div
              key={product._id}
              layout
              className="flex flex-col gap-2 border p-4"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <div>Name: {product.name}</div>
              <div>Price: {product.price}</div>
              <div>Category: {product.category}</div>
              <div>Description: {product.description}</div>
              <div>Id: {product._id}</div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => startEdit(product)}
                  className="border px-3 py-1"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => deleteProduct(product._id)}
                  className="border px-3 py-1"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}