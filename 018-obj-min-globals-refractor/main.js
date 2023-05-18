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
    }
}

const greeting = myObj.myGreeting('jane')
console.log(greeting)

console.log(myObj.name.length)
