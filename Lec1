// -პრაქტიკა-
// 1) let fullName = "Lika Mamaladze" - საბოლოო პასუხი "L.M."
let fullName = "Lika Mamaladze" 
console.log(`${fullName[0]}.${fullName[5]}.`) 


// 2) let email = " EXAMPLE@MAIL.COM " - გაწმინდე (trim) და გადაიყვანე lowercase-ში.+
//  გადაამოწმე, შეიცავს თუ არა "@"
let email = " EXAMPLE@MAIL.COM " 
let trimmedEmail = email.trim().toLowerCase()
let checkEmail = trimmedEmail.includes("@")

console.log(`email: ${trimmedEmail}, does it include "@"?: ${checkEmail}`)


// 3) let str = "luka" ამოიღეთ ბოლო ასო და გადააქციეთ upperCase-ად
let str = "luka"
let newStr = str[str.length - 1].toUpperCase()

console.log(newStr)


// 4)გამოიყენე for ლუპი 1-დან 100-მდე რიცხვებზე.
// თუ რიცხვი იყოფა 3-ზე დააბრუნე - "Foo"
// თუ იყოფა 5-ზე დააბრუნე - "Bar"
// თუ იყოფა ორივეზე დააბრუნე - "FooBar"
// თუ არა დააბრუნე - უბრალოდ რიცხვი
for(let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log("Foobar")
    } else if (i % 3 == 0) {
        console.log("Foo")
    } else if (i % 5 == 0) {
        console.log("Bar")
    } else {
        console.log(i)
    }
}


// 5)let text = "JS is stupid but sometimes cool" - სიტყვა "stupid" შეცვალე "s****d"-ით.
let text = "JS is stupid but sometimes cool"
let replacedText = text.replace("stupid", "s****d")

console.log(replacedText)



// -თეორია-
// 1)რამდენი ცვლადი გვაქვს ჯავასკრიპტში.(პასუხი თეორიულად გაეცი)
// გვაქვს 3 ცვლადი: let, const და var, თუმცა var არის მოძველებული

// 2)რამდენიტიპი გვაქვს ჯავასკრიპტში.(ჩამოთვალე)(პასუხი თეორიულად გაეცი)
// გვაქვს 9 ტიპი: string, number, boolean, null, undefined, big int, symbol, function, object/array

// 3) რომელი მეთოდი აქცევს სტრინგს მასივად.(პასუხი თეორიულად გაეცი)
// split(), მას არგუმენტად გადავცემთ იმას, რის მიხედვითაც გვინდა რომ დავსპლიტოთ ეს სტრინგი

// 4) სტრინგი პრიმიტიული ტიპია თუ არა ? .(პასუხი თეორიულად გაეცი)
// სტრინგი არის პრიმიტიული ტიპის, რადგან უშუალოდ შიგნით ვერაფერს შევუცვლით, ის შეუცვლელია
//  და ვერ ახდენს მუტაციას

// 5)ჩამოთვალე რა მეთოდები ვისწავლეთ მაგ -> length(პასუხი თეორიულად გაეცი)
// length - სტრინგის სიგრძეს ითვლის
// charAt() - არგუმენტად მითითებულ ინდექსის ადგილას მყოფი სიმბოლო გამოაქვს
// slice() - საიდან სადამდე (ინდექსებით) გვსურს სტრინგის გამოტანა
// toLowerCase()/toUpperCase() - მაღალი რეგისტრის მქონე ასო გადააქვს დაბალში და პირიქით
// concat() - ამის დახმარებით ხდება სტრინგების გაერთიანება
// trim() - ზედმეტ სფეისებს აცილებს (თავში და ბოლოში) სტრინგს
// split() - მითითებული არგუმენტის მიხედვით ყოფს სტრინგს
// replace() - რასაც გადავცემთ პირველ არგუმენტად, იმას ანაცვლებს მეორეთი სტრინგში
// includes() - ეძებს არგუმენტად გადაცემული მნიშვნელობა არის თუ არა ჩვენ ობიექტში და თუ არის
// აბრუნებს true, თუ არა false

