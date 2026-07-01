// 1)დაწერე ფუქნცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს [1,2,3,4,5,6]
function evenAverage(arr) {
    let evenArr = arr.filter(num => num % 2 === 0)
    let sumOfNums = evenArr.reduce((total,curr) => total + curr,0)
    let average = sumOfNums / evenArr.length
    return average
}

console.log(evenAverage([1,2,3,4,5,6]))



// 2)დაწერე ფუნქცია, რომელიც დათვლის სიტყვების რაოდენობას წინადადებაში.
function wordCounter(sentence) {
    let wordCount = sentence.split(" ").length
    return wordCount
}

console.log(wordCounter("I love JavaScript"))



// 3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.
function primeNumber(num) {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

console.log(primeNumber(17))
console.log(primeNumber(6))



// 4)იპოვე ყველაზე გრძელი ისტყვა
let words = ["dog", "elephant", "cat", "hippopotamus"]
let maxWord = ""

for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxWord.length) {
        maxWord = words[i]
    }
}
console.log(maxWord)



// 5)დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ
let arr = [3, 5, 3, 2, 5, 5, 3, 5] 
let counts = arr.reduce((acc, curr) => {
    if (acc[curr]) {
        acc[curr] += 1
    } else {
        acc[curr] = 1
    }
    return acc
}, {})

console.log(counts);

let maxCount = 0
let frequentNum = 0

for (let count in counts) {
    if (counts[count] > maxCount) {
        maxCount = counts[count]
        frequentNum = Number(count)
    }
}

console.log(frequentNum)



// 6)დაწერე ფუქნცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია
function evenAndOddCounter(numsArr) {
    let counter = numsArr.reduce((total,curr) => {
        if (curr % 2 === 0) {
            total["Even"] += 1
        } else {
            total["Odd"] += 1
        }
        return total
    },{"Even": 0, "Odd": 0})
    return counter
}
console.log(evenAndOddCounter([1, 2, 3, 4, 5, 6, 7, 8] ))



// 7)დაწერე ფუქნცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს
function smallestNum(numsArr) {
    let minNum =  numsArr.sort((a,b) => a-b)[0]
    return minNum
}

console.log(smallestNum([10, 2, 33, 5, 7]))
