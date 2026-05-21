// 1) function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }

// console.log("one")
// block()
// console.log("two")
// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი
let handleProblem = new Promise((res,rej) => {
    res("res")
})

function block(){
    for(let i = 1 ;i <10000000000;i++){}
}

console.log("one")
handleProblem.then(res => block())
console.log("two")



// 2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე 
// then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.

/* then/catch */
let promise = new Promise((res,rej) => {
    rej("reject")
})
let promise2 = new Promise((res,rej) => {
    res("resolve")
})

promise2.then((res) => {console.log(res)}).catch((error) => {console.log("error", error)})
promise.then((rej) => {console.log(rej)}).catch((error) => {console.error(error)})

/* Allsettled */
let promise = new Promise((res,rej) => {
    rej("reject")
})
let promise2 = new Promise((res,rej) => {
    res("resolve")
})

Promise.allSettled([promise, promise2]).then((res) => {console.log(res)})



// 3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული
let promise1 = new Promise((res,rej) => {
    rej("reject1")
})
let promise2 = new Promise((res,rej) => {
    res("resolve2")
})
let promise3 = new Promise((res,rej) => {
    rej("reject3")
})
let promise4 = new Promise((res,rej) => {
    res("resolve4")
})

Promise.any([promise1, promise2, promise3, promise4]).then((res) => console.log(res))



// 4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი
let promise1 = new Promise((res,rej) => {
    rej("reject")
})
let promise2 = new Promise((res,rej) => {
    res("resolve")
})
let promise3 = new Promise((res,rej) => {
    rej("reject")
})
let promise4 = new Promise((res,rej) => {
    rej("reject")
})

Promise.allSettled([promise1, promise2, promise3, promise4]).then((res) => {
    let countPromises = res.reduce((total, curr) => {
        if (curr.status === "rejected") {
            total.reject += 1
        } else {
            total.resolve += 1
        }
        return total
    }, {"reject": 0, "resolve": 0})
    console.log(countPromises)
})



// 5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები
let promise1 = new Promise((res,rej) => {
    rej("reject")
})
let promise2 = new Promise((res,rej) => {
    res("resolve")
})
let promise3 = new Promise((res,rej) => {
    res("resolve")
})
let promise4 = new Promise((res,rej) => {
    rej("reject")
})
let promise5 = new Promise((res,rej) => {
    rej("reject")
})

Promise.allSettled([promise1, promise2, promise3, promise4, promise5]).then((res) => {
    let allRejected = res.filter((curr) => curr.status === "rejected")
    console.log(allRejected)
})



// 6)api1 = https://jsonplaceholder.typicode.com/users
// api2 = https://jsonplaceholder.typicode.com/posts
// გაუშვი ეს ორი API ერთდროულად
async function fetchAPI1() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await res.json()
    return data
}
async function fetchAPI2() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await res.json()
    return data
}
Promise.all([fetchAPI1(), fetchAPI2()]).then((res) => console.log(res))