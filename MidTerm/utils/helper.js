// 1)შექმენი utils/helepr.js. შექმენი ფუნქცია რომელსაც მიიღებს სტრინგს 
// და გადააქცევს capital letter-ად. აუცილებელია გამოიყენო module(package-დან შეცვალე)

export function toCapital(str) {
    let result = str.toUpperCase()
    return result
}



// 2)დაწერე ფუქნცია რომელიც შეამოწმებს გადმოცემული სტრინგი პალინდრომია თუ არა
// (ანუ ორივე მხრიდან თუ ერთნაირად იკითხება).აუცილებელია module(package-დან შეცვალე) გამოიყენო

export function checkPalindrom(str) {
    let checked = str.toLowerCase()
    if (checked === checked.split('').reverse().join('')) {
        return 'პალინდრომია'
    } else {
        return 'არ არის პალინდრომი'
    }
}


// 3)დაწერე ფუქნცია რომელიც იპოვის ყველაზე გრძელ სიტყვას როცა გადავცემ (I love JavaScript very much) - 
// უნდა დააბრუნოს JavaScript. აუცილებელია გამოიყენო module.

export function biggestWord(str) {
    let arrStr = str.split(' ')
    let maxCount = 0
    let maxWord = ''
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].length > maxCount) {
            maxCount = arrStr[i].length
            maxWord = arrStr[i]
        }
    }
    return maxWord
}