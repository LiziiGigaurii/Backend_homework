// // 1. let str = “javascript” შენი მიზანია ამოიღო ბოლო ასო
// // let str = 'javascript'
// // let last = str[str.length - 1]
// // console.log(last)


// // 2. let text = "Hello world" ამოჭერი მხოლოდ world
// // let text = "Hello world"
// // let slicedText = text.slice(6,)
// // console.log(slicedText)

// // 3. let name = "gio”  გადაიყვანე დიდ ასოებში 
// // let name = "gio"
// // let upperName = name.toUpperCase()
// // console.log(upperName)

// // 4. let first = "Hello" let second = "World” გააერთიანე ეს ორი სტრინგი
// // let first = "Hello" 
// // let second = "World"
// // let joinedStr = `${first} ${second}`
// // console.log(joinedStr)

// // 5. let str  = "   I love js js js   " შენი მიზანია წაშალო თავში და ბოლოში სფეისები da js ჩაანაცვლო javascript-ით
// // let str  = "   I love js js js   "
// // let newStr = str.trim().replaceAll('js', 'javascript')
// // console.log(newStr)



// 1. let nums = [1, 2, 3, 4, 5] იპოვე ჯამი 
// let nums = [1, 2, 3, 4, 5]
// let summedNums = nums.reduce((total,curr) => total + curr ,0)
// console.log(summedNums)

// 2. let arr = [1,2,2,3,4,4,5] დააბრუნე მხოლოდ უნიკლალურები Set ის დახმარებით
// let arr = [1,2,2,3,4,4,5]
// let setArr = new Set(arr)
// console.log(setArr)


// 3. იპოვე სტუდენტი სახელად ნიკა
// let students = [
//   {name: "Giorgi", age: 20},
//   {name: "Nika", age: 22},
//   {name: "Ana", age: 19}
// ]

// let res = students.filter(student => student.name === 'Nika')
// console.log(res)

// 4. დაალაგე სტუდენტები ასაკის მიხედვით
// let people = [
//   {name: "Gio", age: 30},
//   {name: "Luka", age: 25},
//   {name: "Ana", age: 28}
// ]
// let res = people.sort((a,b) => a.age - b.age)
// console.log(res)

// 5.  let sentence = "apple orange apple banana apple orange kiwi" შენი მიზანია ეს სტრინგი 
// გადააქციო მასივად და რედიუსის დახმარებით  დათავლო თითოეული ხილი რამდენჯერ მეორდება
// let sentence = "apple orange apple banana apple orange kiwi"
// let fruitsArray = sentence.split(" ")
// let fruitCount = fruitsArray.reduce((total, currentFruit) => {
//   if (total[currentFruit]) {
//     total[currentFruit] += 1
//   } else {
//     total[currentFruit] = 1
//   }
//   return total;
// }, {})
// console.log(fruitCount)

// 6. let arr = [[1,[12,46],4,5,6,7]] დაალაგე ზრდის მიხედვით და დათვალე ჯამი
// let arr = [[1,[12,46],4,5,6,7]]
// let newArr = arr.flat(2).sort((a,b) => a-b).reduce((total,curr) => total + curr ,0)
// console.log(newArr)

// 7 let arr = [1,20,90,100,3,3] ყველა გადააქციე 1-იანად ანუ უნდა დააბრუნოს [1,1,1,1,1,1]
// let arr = [1,20,90,100,3,3]
// let newArr = arr.map(l => l = 1)
// console.log(newArr)

// 8 let text = "I love JavaScript and I love coding in JavaScript JavaScript";
// შენი მიზანია გაიგო რომელი მეორდება ყველაზე ხშირად
// let text = "I love JavaScript and I love coding in JavaScript JavaScript"
// let splittedText = text.split(" ")
// let grouped = splittedText.reduce((total,curr) => {
//     if(total[curr]){
//         total[curr] += 1
//     }else{
//         total[curr] =1
//     }
//     return total
// }, {})

// console.log(grouped)

// let maxCount = 0
// let maxWord = ""

// for(let word in grouped) {
//     if(grouped[word] > maxCount) {
//         maxCount = grouped[word]
//         maxWord = word
//     }
// }

// console.log(`yvelaze metad meordeba es sityva: ${maxWord},${maxCount}-jer`)















// 1.დააკონსოლე ცალკე key-ს  ცალკე value-ს
// let person = {name: "Giorgi", age: 25, city: "Tbilisi"}
// let personKeys = Object.keys(person)
// let personValues = Object.values(person)
// console.log(personKeys, personValues)

// 2. დაამატე year
// let car = {brand: "BMW", model: "X5"} 
// car["year"] = 2000
// console.log(car)

// 3  იპოვე ისეთი ობიექტი რომლის ფასიც 40-ია
// let products = [
//   {name:"Phone", price: 1200},
//   {name:"Book", price: 40},
//   {name:"Pen", price: 5}
// ]

// let res = products.filter(product => product.price === 40)
// console.log(res)


// 4 შექმენი კალკულატორის ობიექტი სადაც გექნება დამატება წაშლა გაყოფა და გამრავლება
// class Calculator {
//     constructor(a,b) {
//         this.a = a
//         this.b = b
//     }
//     add() {
//         return this.a + this.b
//     }
//     substract() {
//         return this.a - this.b
//     }
//     divide() {
//         return this.a / this.b
//     }
//     multiply() {
//         return this.a * this.b
//     }
// }

// let test = new Calculator(2,5)
// console.log(test.add())