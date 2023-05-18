const myMPG = []
const myTripCost = []

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
myMPG.push(MPG)
myTripCost.push(tripCost)
}

const calculateMPGAvg = () => {
// const avgMPG = (myArr[0] + myArr[2]) / 2
// updateDOM(`Average Miles per gallon is ${avgMPG}`)
let totalMPG = 0
for(let i = 0; i < myMPG.length; i++) {
    totalMPG = totalMPG + myMPG[i]
}
    let avgMPG = totalMPG/myMPG.length
    updateDOM(`Average MPG is ${avgMPG}`)
}

trackMPGCost(300, 10, 5.40)
trackMPGCost(320, 12, 5)
trackMPGCost(100, 7, 4.20)
trackMPGCost(600, 24, 5.70)
trackMPGCost(50, 2, 3.40)
trackMPGCost(320, 12, 5)
calculateMPGAvg()
