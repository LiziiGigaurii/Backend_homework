// 2)შექმენი პროგრამა, რომელიც ამატებს მომხმარებლის სახელს და ასაკს და აბრუნებს ტექსტს User Nika is 22 years old.
function getUserInfo(name: string, age: number): string {
  return `User ${name} is ${age} years old.`
}

console.log(getUserInfo("Nika", 22))


// 3)აღწერე პროდუქტები ინტერფეისით და გამოითვალე საერთო ფასი.
// თუ ფასი მეტია 100-ზე, დაბეჭდე "Discount available!"
interface IProduct {
  name: string;
  price: number;
}

function totalCount(products: IProduct[]): number {
  const total = products.reduce((tot, curr) => tot + curr.price, 0)

  if (total > 100) {
    console.log("Discount available!")
  }
  return total
}

const products: IProduct[] = [
  { name: "Magida", price: 150 },
  { name: "skami", price: 30 },
  { name: "skami", price: 30 }
]

console.log(totalCount(products))


// 4)შექმენი ორი ინტერფეისი  IHero და ISuperHero.
// IHero უნდა აღწერდეს ჩვეულებრივი გმირის მონაცემებს:
// name: string - გმირის სახელი
// age: number - გმირის ასაკი.

// ISuperHero უნდა დაექსთენდდეს IHero-ით და დაამატოს:
// power: string - გმირის ძალა
// level?: string - optional ველი, რომელიც განისაზღვრება მოგვიანებით

// შექმენი ფუნქცია levelUp(hero: ISuperHero): void, რომელიც:
// ამოწმებს გმირის ასაკს
// თუ ასაკი მეტია 30-ზე - level = "Pro"
// თუ ნაკლებია ან ტოლია 30-ის - level = "Newbie"
// დაბეჭდავს შედეგს კონსოლში:
// "Batman is now level: Pro"
interface IHero {
  name: string
  age: number
}

interface ISuperHero extends IHero {
  power: string
  level?: string
}

function levelUp(hero: ISuperHero): void {
  if (hero.age > 30) {
    hero.level = "Pro"
  } else {
    hero.level = "Newbie"
  }
  console.log(`${hero.name} is now level: ${hero.level}`)
}

const hero1: ISuperHero = {
  name: "Batman",
  age: 35,
  power: "Stealth"
};

levelUp(hero1)


// 5)დაწერე generic ფუნქცია, რომელიც აბრუნებს მასივის პირველ ელემენტს.
function getFirst<T>(arr: T[]): T | undefined {
    return arr[0]
}

const firstNum = getFirst([1, 2, 3])  
console.log(firstNum)