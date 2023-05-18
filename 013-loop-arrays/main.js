const myArr = []

const updateDOM = (input) => {
const divEL = document.querySelector('#output')
const h1 = document.createElement('h1')
h1.textContent = input
divEL.appendChild(h1)
}

const trackMPGCost = (miles, gallons, price = 3.79) =>  {
const MPG = Math.round (miles/gallons)
const tripCost = MPG * price
updateDOM(`Mileage is ${MPG} and trip cost is ${tripCost}`)
myArr.push(MPG, tripCost)
}

const calculateAVg = () => {
const avgMPG = (myArr[0] + myArr[2]) / 2
updateDOM(`Average Miles per gallon is ${avgMPG}`)
}

trackMPGCost(300, 10, 5.40)
trackMPGCost(320, 12, 5)
updateDOM(myArr)
calculateAVg()
