"use strict";

// 1)გაიარეთ რეგისტრაცია mongoDB-ზე დააგენერირეთ connect link და დაქონექთდით ბაზასთან.
// (npm i mongoose,npm i express) დასერჩეთ არარის ძაან რთული.
const mongoose = require("mongoose")

module.exports = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:lizoo2007@test.j6mzthn.mongodb.net/")
        console.log("Connected")
    } catch (error) {
        console.log(error, "this is from mongo")
    }
}