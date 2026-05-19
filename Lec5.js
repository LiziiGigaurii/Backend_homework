// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და
//  ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა
// function countDown(sec) {
//     const timer = setInterval(() => {
//         if (sec < 0) {
//             console.log("Done!")
//             clearInterval(timer)
//             return
//         }
//         console.log(sec);
//         sec--;
//     }, 500);
// }

// countDown(5)


// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული 
// რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს


// 3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი 
// რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია
// function identifier(n, callback) {
//     if(n > 27) {
//         callback()
//     } else {
//         console.log("ნაკლებია")
//     }
// }

// function callbackFunc() {
//     console.log("ნამდვილად მეტია 27-ზე")
// }

// identifier(28, callbackFunc)


// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. 
// https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await


// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20
// let people = [
//   { name: "Giorgi", age: 25 },
//   { name: "Nika", age: 15 },
//   { name: "Mariam", age: 30 },
//   { name: "Luka", age: 18 }
// ];

// 6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს. თუ პირველი მეტია
//  მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".

// 7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და 
// ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები
// let products = [
//   { name: "Mouse", price: 15 },
//   { name: "Keyboard", price: 45 },
//   { name: "USB Cable", price: 7 },
//   { name: "Headphones", price: 29.9 },
//   { name: "Webcam", price: 52 }
// ];