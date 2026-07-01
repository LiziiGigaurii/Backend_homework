// ArrayTasks

// 1)დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop
let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]] 
let newArr = arr.flat(2).sort((a,b) => a-b)
let resArr = []
for (let num of newArr) {
    if (!resArr.includes(num)) {
        resArr.push(num)
    }
}
console.log(resArr)



// 2) იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი, მაგრამ ისეთი, რომლის ფასიც < 1000.
let products = [
  { name:"Phone", price:1200, rating:4.5 },
  { name:"Laptop", price:2500, rating:4.8 },
  { name:"Book", price:30, rating:4.9 },
  { name:"TV", price:800, rating:4.0 }
]

let bestProduct = null

for (let i = 0; i < products.length; i++) {
  if (products[i].price >= 1000) {
    continue
  }
  if (bestProduct === null || products[i].rating > bestProduct.rating) {
    bestProduct = products[i]
  }
}
console.log(bestProduct)



// 3) რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for 
// ლუპის დახმარებით იპოვე მეტჯერგამეორებული
let sentence = "dog cat dog bird cat dog fish bird"
let grouped = sentence.split(" ").reduce((total,curr) => {
    if (total[curr]) {
        total[curr] += 1
    } else {
        total[curr] = 1
    }
    return total
},{})

let maxAnimal = ""
let maxCount = 0

for (let animal in grouped) {
    if(grouped[animal] > maxCount) {
        maxCount = grouped[animal]
        maxAnimal = animal
    }
}

console.log(grouped)
console.log(`${maxAnimal} მეორდება ${maxCount}-ჯერ`)



// ForLoop tasks

// 1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის
//  რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში. 
let sentence = 'Hello how are you'
let letterCount = {}

for(let i = 0; i < sentence.length; i++) {
    if (letterCount[sentence[i]]) {
        letterCount[sentence[i]] += 1
    } else{
        letterCount[sentence[i]] = 1
    }
}

console.log(letterCount)



// 2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი 
// (ეს სიტყვა თუ იკითხება ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig) 
function findPalindrome(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return "არ არის პალინდრომი"
        } 
    }
    return "არის პალინდრომი"
}

console.log(findPalindrome("racecar"))
console.log(findPalindrome('byebyeee'))



// 3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, 
// წაშლის დუბლიკატებს და დაითვლის ჯამს. გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.
function combineNums(num1Arr, num2Arr) {
    let combinedArr = [...num1Arr, ...num2Arr]
    let cleanArr = []
    for (let i = 0; i < combinedArr.length; i ++) {
        if (!cleanArr.includes(combinedArr[i])) {
            cleanArr.push(combinedArr[i])
        }
    }
    let sumOfArr = cleanArr.reduce((total,curr) => total + curr,0)
    return sumOfArr
}

console.log(combineNums([1,2,2,3], [3,3,4,5,]))



//  4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად. 
function Factorial(num) {
    if (num < 0) {
        return "უარყოფითი რიცხვის ფაქტორიალი არ არსებობს"
    }
    if (num === 0 || num === 1) {
        return 1
    }
    let res = 1
    for (let i = num; i > 0 ; i--) {
        res *= i
    }
    return res
}

console.log(Factorial(0))
console.log(Factorial(-2))
console.log(Factorial(3))



// 5)Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს 
// ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]
function twoSum(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                return [arr[i], arr[j]]
            }
        }
    }
    return "წყვილი ვერ მოიძებნა"
}

console.log(twoSum([1, 2, 3, 4, 5, 6, -7, -8], -15))
console.log(twoSum([1, 2, 3, 4, 5, 6], 6))