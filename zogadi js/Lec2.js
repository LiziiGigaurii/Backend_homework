// 1) შექმენი ცარიელი მასივი და შეავსე მასში რიცხვები 5-დან 15-მდე
let emptyArr = []

for (let i = 5; i < 15; i++){
    emptyArr.push(i)
}

console.log(emptyArr)


// 2) დაბეჭდე მასივის ელემენტები უკუღმა let arr = [1,2,3,4,5]
let arr = [1,2,3,4,5]
console.log(arr.reverse())


// 3) იპოვე მასივში მინიმალური რიცხვი let arr = [100,2,3,9]
let arr = [100,2,3,9]
let minNum = arr[0]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
        minNum = arr[i]
    }
}
console.log(minNum)


// 4) ამოიღე შუა 3 ელემენტი slice-ით.let arr = [1,2,3,4,5,6,7]
let arr = [1,2,3,4,5,6,7]
console.log(arr.slice(2,5))


// 5) გააერთიანე ორი მასივი let arr1 = [1,2] let arr2=[3,4]
let arr1 = [1,2] 
let arr2=[3,4]
let newArr = arr1.concat(arr2)

console.log(newArr)


// 6) წაშალე დუბლირებული ელემენტები let arr = [1,2,3,4,5,6,6,7,7]
let arr = [1,2,3,4,5,6,6,7,7]
let newArr = []

for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i]) == false) {
        newArr.push(arr[i])
    }
}
console.log(newArr)


// 7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). 
// მინიშნება: გამოიყენე % 2 === 0  let arr = [1,2,3,4,5,6,7]
let arr = [1,2,3,4,5,6,7]
let even = []
let odd = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        even.push(arr[i])
    } else {
        odd.push(arr[i])
    }
}

console.log(`ლუწები: ${even}`)
console.log(`კენტები: ${odd}`)


// 8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი.
let arr = [1,2,3,4,5,6,7,-1,-2,-3,-4]
let positiveInt = []
let negativeIntSum = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        positiveInt.push(arr[i])
    } else {
        negativeIntSum += arr[i]
    }
}

console.log(`დადებითი რიცხვების რაოდენობა: ${positiveInt.length}`)
console.log(`უარყოფითი რიცხვების ჯამი: ${negativeIntSum}`)


// 9) დააბრუნე მასივის თითოეული ელემენტის ინვერსი (ანუ [1,-2] მაგივრად [-1,2]). 
// მინიშნება: გამოიყენე push(-arr[i])
let arr = [1,-3,5,6,-4,-9,12]
let inversedArr = []

for (let i = 0; i < arr.length; i++) {
    inversedArr.push(-arr[i])
}

console.log(`ელემენტების ინვერსი: ${inversedArr}`)


// 10) let arr = [1,[2,[3]],[4]] შენი მიზანია მიიღო [1,2,3,4]
let arr = [1,[2,[3]],[4]]
console.log(arr.flat(2))


// 11)let fruits = ["apple", "banana", "orange", "kiwi"] წაშალე "banana" მასივიდან splice()-ით
// "orange"-ის წინ დაამატე "mango"
// ბოლოს დაბეჭდე ახალი მასივი.
// splice-მ არ დაგაბნიოთ splice(საიდან დაიწოს,რამდენი წაშალოს,რითიჩაანაცვლოს)

let fruits = ["apple", "banana", "orange", "kiwi"]
fruits.splice(1, 1)
fruits.splice(1, 0,"mango")

console.log(fruits)
