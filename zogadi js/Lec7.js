// 1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c) და დაამატე მეთოდები: 
// getPerimeter(), getArea() , isRightTriangle().
class Triangle {
    constructor(a,b,c) {
        this.a = a
        this.b = b
        this.c = c
    }

    getPerimeter() {
        let perimeter = this.a + this.b + this.c
        return perimeter
    }

    getArea() {
        let p = this.getPerimeter() / 2
        let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
        return area
    }

    isRightTriangle() {
        if (this.a**2 + this.b**2 == this.c**2 || this.a**2 + this.c**2 === this.b**2 || this.b**2 + this.c**2 === this.a**2){
            return "It is right triangle"
        } else{
            return "It is not right triangle"
    }
    }
}

let triangle = new Triangle(12,13,5)
console.log(triangle.getPerimeter())
console.log(triangle.getArea())
console.log(triangle.isRightTriangle())



// 2) შექმენი Smartphone (სმარტფონი) კლასი property-ებით: brand, model, releaseYear. 
// გააკეთე ექსტენშენი GamingPhone, რომელსაც დაემატება gpuScore და batteryCapacity,
//  და დაამატე მეთოდი performanceIndex().
class Smartphone {
    constructor(brand, model, releaseYear) {
        this.brand = brand
        this.model = model
        this.releaseYear = releaseYear
    }
}

class GamingPhone extends Smartphone {
    constructor(brand, model, releaseYear, gpuScore, batteryCapacity) {
        super(brand, model, releaseYear)
        this.gpuScore = gpuScore
        this.batteryCapacity = batteryCapacity
    }

    performanceIndex() {
        let index = (this.gpuScore  * 0.7) + (this.batteryCapacity * 0.3)
        return index
    }
}

let phone = new GamingPhone("ASUS", "ROG Phone 8", 2024, 9500, 5500)
console.log(phone.performanceIndex())


// 3)შექმენი CryptoWallet (კრიპტო საფულე) კლასი, მეთოდებით: deposit(), withdraw(), transfer(), getHistory(),
class CryptoWallet {
    constructor() {
        this.balance = 0
        this.history = []
    }

    deposit(amount) {
        this.balance += amount
        this.history.push(`ჩაირიცხა ${amount} ლარი`)
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return "არ არის საკმარისი თანხა"
        } else {
            this.balance -= amount
            this.history.push(`ჩამოიჭრა ${amount} ლარი`)
        }
    }

    transfer(transferWallet, amount) {
        if (amount > this.balance) {
            return "არ არის საკმარისი თანხა"
        } else {
            this.balance -= amount
            transferWallet.deposit(amount)
            this.history.push(`${amount} ლარი გადაირიცხა სხვა ანგარიშზე`)
        }
    }

    getHistory() {
        return this.history
    }
}

let wallet = new CryptoWallet()
let wallet2 = new CryptoWallet()

wallet.deposit(10000)
wallet.withdraw(5000)
wallet.transfer(wallet2, 1000)
console.log(wallet.getHistory())
console.log(wallet2.getHistory())



// 4)შექმენი Wishlist (სურვილების სია) კლასი, რომელიც ინახავს ნივთებს. მეთოდები: 
// addItem(), deleteItem(id), updateItem()
class Wishlist {
    constructor() {
        this.DreamItems = []
        this.firstId = 1
    }

    addItem(item) {
        let NewItem = {
            id: this.firstId,
            name: item
        }
        this.DreamItems.push(NewItem)
        this.firstId++
    }

    deleteItem(id) {
        this.DreamItems = this.DreamItems.filter((item) => item.id != id)
    }

    updateItem(id, newName) {
        for (let i = 0; i < this.DreamItems.length; i++) {
            if (this.DreamItems[i].id === id) {
                this.DreamItems[i].name = newName
                return
            }
        }
        return "ვერ მოიძებნა"
    }
    showList() {
        return this.DreamItems
    }
}

let wish1 = new Wishlist()

wish1.addItem("Toy1")
wish1.addItem("Toy2")
wish1.addItem("Toy3")
wish1.addItem("Toy4")
wish1.deleteItem(3)
wish1.addItem("toy5")
wish1.updateItem(2, "Princess")
console.log(wish1.showList())



// 5)შექმენი Freelancer (ფრილანსერი) კლასი მეთოდით calculateEarnings(), რომელიც 
// დათვლის შემოსავალს შესრულებული საათებისა და საათობრივი ტარიფის მიხედვით, 
// დამატებით optional bonus-ს გადამეტებულ საათებზე (მაგ >160 სთ).
class Freelancer {
    calculateEarnings(workingHours, hourlyIncome) {
        let earning = workingHours * hourlyIncome
        if (workingHours > 160) {
            let optional_bonus = 500
            let total_earning = earning + optional_bonus
            return `${total_earning} ლარი (აქედან ${optional_bonus} ლარი ბონუსი)!`
        } else {
            return `${earning} ლარი`
        }
    }
}

let freelance1 = new Freelancer()

console.log(freelance1.calculateEarnings(200,40))
console.log(freelance1.calculateEarnings(50,30))
