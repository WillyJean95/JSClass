const myArr = []

// console.log(typeof myObj)
// console.log(typeof myArr)
// console.log(myArr == myObj)
const myNumber = 23
const myObj = { 
    name: 'Willy',
    age: 23,
    hobbies: ['coding', 'running', 'workout'],
    mobile: {
        make: 'Iphone 11 Pro Max',
        OS: 'IOS'
    },
    myGreeting: function(person) {
        console.log(this)
        return `${this.name} Who loves to ${this.hobbies[0]} Says Whats UP ${person}`
    },
    increaseLikes: function() {
        this. likes += 1
    }
}
const willyObj = myObj
willyObj. increaseLikes ()
console.log(willyObj)
willyObj.age = 24

const greeting = myObj.myGreeting('jane')
console.log(greeting)

console.log(myObj.mobile.make.length)

for (key in myObj) {
    console.log(`${key} and value ${myObj[key]}`)
}
