//  1) გაქვს ლეპტოპების მასივი, იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში
//  const laptops = [
//  { model: "Dell XPS 13", price: 1800 },
//  { model: "MacBook Pro 14", price: 2499 },
//  { model: "Lenovo ThinkPad X1", price: 2100 },
//  { model: "Asus Zephyrus G14", price: 1999 },
// ];
const laptops = [
  { model: "Dell XPS 13", price: 1800 },
  { model: "MacBook Pro 14", price: 2499 },
  { model: "Lenovo ThinkPad X1", price: 2100 },
  { model: "Asus Zephyrus G14", price: 1999 },
];

let mostExpensive = laptops[0];

for (let i = 1; i < laptops.length; i++) {
  if (laptops[i].price > mostExpensive.price) {
    mostExpensive = laptops[i];
  }
}

console.log(`ყველაზე ძვირი ლეპტოპია: ${mostExpensive.model}, რომლის ფასია ${mostExpensive.price}$`)


// 2)შექმენი ობიექტი, რომელსაც ექნება width, height და getArea() მეთოდი, რომელიც დააბრუნებს ფართობს.
const shape = {
    width: 5,
    height: 10,

    getArea:function() {
        return this.width * this.height
    }
}

console.log(shape.getArea())


// 3)დაბეჭდე მხოლოდ იმ სტუდენტების სახელები, რომელთაც passed === true.
// const students = [
//   { name: "Giorgi", score: 85, passed: true },
//   { name: "Nika", score: 50, passed: false },
//   { name: "Mariam", score: 92, passed: true },
//   { name: "Luka", score: 60, passed: false }
// ];
const students = [
  { name: "Giorgi", score: 85, passed: true },
  { name: "Nika", score: 50, passed: false },
  { name: "Mariam", score: 92, passed: true },
  { name: "Luka", score: 60, passed: false }
];

const passStudents = students.filter((student) => student.passed === true).map((student) => student.name)
console.log(`წარმატებით ჩაბარებული სტუდენტები: ${passStudents}`)


// 4)გაფილტრე ისეთი პროდუქტები, რომლებიც 10$-ზე იაფია და დააბრუნე მხოლოდ მათი სათაურების მასივი.
// const products = [
//   { title: "Pencil", price: 2 },
//   { title: "Notebook", price: 5 },
//   { title: "Backpack", price: 35 },
//   { title: "Ruler", price: 3 },
//   { title: "Calculator", price: 40 }
// ];
const products = [
  { title: "Pencil", price: 2 },
  { title: "Notebook", price: 5 },
  { title: "Backpack", price: 35 },
  { title: "Ruler", price: 3 },
  { title: "Calculator", price: 40 }
];

const cheapProducts = products.filter((product) => product.price < 10).map((product) => product.title)
console.log(`იაფი პროდუქტების სია: ${cheapProducts}`)


// 5)დაალაგე ზრდადობით rating-ის მიხედვით
// const movies = [
//   { title: "Inception", rating: 9 },
//   { title: "Avatar", rating: 7.5 },
//   { title: "Joker", rating: 8.2 },
//   { title: "Tenet", rating: 6.9 }
// ];
const movies = [
  { title: "Inception", rating: 9 },
  { title: "Avatar", rating: 7.5 },
  { title: "Joker", rating: 8.2 },
  { title: "Tenet", rating: 6.9 }
];

const rates = movies.sort((a,b) => a.rating - b.rating)

console.log(rates)


// 6)იპოვე ყველაზე იაფი ტელეფონი და გამოიტანე მხოლოდ მისი model
// const phones = [
//   { model: "iPhone 15", price: 1200 },
//   { model: "Samsung Galaxy S24", price: 950 },
//   { model: "Xiaomi Redmi 13", price: 250 },
//   { model: "Pixel 8", price: 800 }
// ];
const phones = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 }
];

let cheapPhone = phones[0]

for(i = 0; i < phones.length; i++) {
    if (phones[i].price < cheapPhone.price) {
        cheapPhone = phones[i]
    }
}

console.log(`ყველაზე იაფი ტელეფონის მოდელი: ${cheapPhone.model}`)


// 7)დაბეჭდე 300- გვერდიანზე მეტი 
// const books = [
//   { title: "Harry Potter", pages: 500 },
//   { title: "The Little Prince", pages: 120 },
//   { title: "Lord of the Rings", pages: 700 },
//   { title: "Animal Farm", pages: 250 },
// ];
const books = [
  { title: "Harry Potter", pages: 500 },
  { title: "The Little Prince", pages: 120 },
  { title: "Lord of the Rings", pages: 700 },
  { title: "Animal Farm", pages: 250 },
];
const bigBooks = books.filter((book) => book.pages > 300)
console.log(bigBooks)


// 8)დაალაგე ზრდადობით და შეკრიბე ფასი
// const phones = [
//   { model: "iPhone 15", price: 1200 },
//   { model: "Samsung Galaxy S24", price: 950 },
//   { model: "Xiaomi Redmi 13", price: 250 },
//   { model: "Pixel 8", price: 800 }
// ];
const phones = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 }
];


const sortedPhones = phones.sort((a,b) => a.price - b.price)
const totalPrice = phones.reduce((total,curr) => curr.price + total ,0)
console.log(sortedPhones)
console.log(`ჯამური ფასი: ${totalPrice}`)