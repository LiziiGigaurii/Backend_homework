// 1) გაამრავლე თითოეული ელემენტი 3-ზე.
// Input: [1,2,3] - Output: [3,6,9]
let arr = [1,2,3]
let doubledArr = arr.map((num) => num * 3)
console.log(doubledArr)


// 2)გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე
let nums = [1,2,3,4,5,6,7,8,9,11,15,12,33,30,20]
let filteredNums = nums.filter((num) => num % 3 === 0)
console.log(filteredNums)


// 3)დააბრუნე ყველა დადებითი რიცხვის ჯამი
let nums = [-1,-2,5,-5,10,6,3]
let positiveNums = nums.reduce((tot,curr) => {
    if (curr > 0) {
        return tot+curr
    }
    return tot
},0)
console.log(positiveNums)

// ან

let nums = [-1,-2,5,-5,10,6,3]
let positiveNums = 0
for (i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
        positiveNums += nums[i]
    }
}
console.log(positiveNums)


// 4)მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
let namesArr = ["giorgi","nika","mariami"]
let namesArr = ["giorgi","nika","mariami"]
let newNames = namesArr.map((name) => name.slice(0, -1))
console.log(newNames)


// 5)გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე
let nums = [1,2,3,4,20,23,63,30,40,9]
let newNums = nums.map((num) => num * 2).filter((num) => num % 3 === 0)
console.log(newNums)


// 6) დაალაგე რიცხვები ზრდადობით let numsArr = [1,-1,-2,-10,111,3,2,5]
let numsArr = [1,-1,-2,-10,111,3,2,5]
let sortedNumsArr = numsArr.sort((a,b) => a-b)
console.log(sortedNumsArr)


// 7)გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია.
let nums = [1,2,3,4,5,6,7,8,9]
let newNums = nums.map((num) => num * 2).filter((num) => num > 5)
console.log(newNums)


// 8)let arr = [1,1,1,1,2,2,3,3,3] დააბრუნე let unque = [1,2,3]
let arr = [1,1,1,1,2,2,3,3,3]
let uniqueArr = [...new Set(arr)]
console.log(uniqueArr)


// 9), დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამს let arr = [-1,20,90,4,5,111]
let arr = [-1,20,90,4,5,111]
let sortedArr = arr.sort((a,b) => a-b)
let numSum = sortedArr[0] + sortedArr[1]

console.log(numSum)
