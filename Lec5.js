// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და
//  ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა
function countDown(sec) {
    const timer = setInterval(() => {
        if (sec < 0) {
            console.log("Done!")
            clearInterval(timer)
            return
        }
        console.log(sec);
        sec--;
    }, 500);
}

countDown(5)



// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული 
// რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს
function guessNumber(num) {
    let randomNum = 0

    while (num != randomNum) {
        randomNum = Math.floor(Math.random() * 10) + 1
        console.log(`Generated number: ${randomNum}, your number: ${num}`)
    }
    console.log("You got this! The numbers matched! :D")
}

guessNumber(4)



// 3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი 
// რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია
function identifier(n, callback) {
    if(n > 27) {
        callback()
    } else {
        console.log("ნაკლებია")
    }
}

function callbackFunc() {
    console.log("ნამდვილად მეტია 27-ზე")
}

identifier(28, callbackFunc)



// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. 
// https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await

/* async/await */
async function fetchAPI(API) {
    let res = await fetch(API)
    let data = await res.json()
    let slicedData = data.slice(0,4)
    console.log(slicedData)
}
fetchAPI("https://jsonplaceholder.typicode.com/users")

/* then/catch */
function fetchAPI(API) {
    fetch(API).then((res) => res.json()).then((data) => data.slice(0,4)).then((slicedData) => console.log(slicedData)).catch((error) => {
        console.log(error, 'error')
    })
}
fetchAPI("https://jsonplaceholder.typicode.com/users")



// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20
let people = [
  { name: "Giorgi", age: 25 },
  { name: "Nika", age: 15 },
  { name: "Mariam", age: 30 },
  { name: "Luka", age: 18 }
];

let ageDefiner = people.reduce((total, curr) => {
    if (curr.age < 20) {
        total.under20.push(curr.age)
    } 
    if (curr.age > 10) {
        total.over10.push(curr.age)
    }
    return total
}, { over10: [], under20: [] })

console.log(ageDefiner)



// 6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს. თუ პირველი მეტია
//  მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".
function comparison(a,b,callback) {
    if (a > b) {
        callback()
    } else {
        console.log("ნაკლები ან ტოლია")
    }
}

function callbackFunc(){
    console.log("მეტია")
}

comparison(10,5,callbackFunc)
comparison(2,5,callbackFunc)



// 7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და 
// ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები
let products = [
  { name: "Mouse", price: 15 },
  { name: "Keyboard", price: 45 },
  { name: "USB Cable", price: 7 },
  { name: "Headphones", price: 29.9 },
  { name: "Webcam", price: 52 }
];

let arrangedProducts = products.reduce((total,curr) => {
    if (curr.price <= 20) {
        total.lowerOrEqual20.push(curr.price)
    } else {
        total.over20.push(curr.price)
    }
    return total
} ,{over20: [], lowerOrEqual20: []})

console.log(arrangedProducts)