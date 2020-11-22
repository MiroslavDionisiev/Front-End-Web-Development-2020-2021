//Task 1
var person = {
    _salary: 1000,
    getSecretSalaryInfo: function (){
        return this._salary;
    }
};

var stoleSalaryInfo = person.getSecretSalaryInfo();

console.log(person.getSecretSalaryInfo()); 
console.log(stoleSalaryInfo);

// Task 2

class Person
{
    constructor(name)
    {
        this.name = name;
        this.planet = "Earth";
    }

    sayHello()
    {
        console.log(`Hello ${this.name} from planet ${this.planet}`);
    }
}

let p1 = new Person("Chuck");
console.log(p1.sayHello());
let p2 = new Person("Harry");
console.log(p2.sayHello());
let p3 = new Person("May");
console.log(p3.sayHello());

// Task 3

class Item
{
    constructor(name, discount)
    {
        this.name = name;
        this.discount = discount;
        this.basePrice = 1000;
    }

    getBasePrice()
    {
        return this.basePrice;
    }
}

let i = new Item("console", 15);
console.log(i.getBasePrice());
Item.prototype.calculateNewPrice = function()
{
    return this.basePrice - (this.basePrice*this.discount/100);
}

console.log(i.calculateNewPrice());

//Task 4
class PersonAgain // sorry for the name
{
    constructor()
    {
        let salary = 1000;
        this.getSalary = function()
        {
            return  salary;
        }
    }
}

let pAgain = new PersonAgain();
console.log(pAgain.getSalary());
console.log(pAgain.salary); // undefined

// Task 8
class PaymentMethod
{
    constructor()
    {
    }
    getAmount()
    {
        let text = "Your amount in the account is: ";
        return text;
    }
}
 
class CashMethod extends PaymentMethod
{
    constructor()
    {
        super()
        let amount = 0;
        this.addToAmount = function(money)
        {
            amount +=money;
        }
        this.reduceFromAmount = function(money)
        {
            amount -=money;
        }
        this.getMoney = function()
        {
            return amount;
        }
    }
    getAmount()
    {
        let info = super.getAmount();
        info+=this.getMoney();
        return info;
    }
}

class CreditMethod extends PaymentMethod
{
    constructor()
    {
        super()
        let amount = 0;
        let percentage = 90;
        this.addToAmount = function(money)
        {
            amount +=(money*percentage)/100;
        }
        this.reduceFromAmount = function(money)
        {
            amount -=money;
        }
        this.getMoney = function()
        {
            return amount;
        }
    }
    getAmount()
    {
        let info = super.getAmount();
        info+=this.getMoney();
        return info;
    }
}

const cashAccount = new CashMethod();
cashAccount.getAmount(); // returns “Your amount in the account is: 0”
cashAccount.addToAmount(100); // returns cashAccount instance (useful for method chaining)
cashAccount.getAmount(); // returns “Your amount in the account is: 140”

const creditAccount = new CreditMethod();
creditAccount.addToAmount(100); // returns creditAccount instance (useful for method chaining)
creditAccount.getAmount(); // returns “Your amount in the account is: 90”;