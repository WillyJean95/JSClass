const myMPG = []
const myTripCost = []

const updateDOM = (input) => {
const divEL = document.querySelector('#output')
const h1 = document.createElement('h1')
h1.textContent = input
divEL.appendChild(h1)
}

const trackMPGCost = (miles, gallons, price = 3.79) =>  {
const MPG = Math.round(miles/gallons)
const tripCost = Math.round(gallons * price)
updateDOM(`Mileage is ${MPG} and trip cost is ${tripCost}`)
myMPG.push(MPG)
myTripCost.push(tripCost)
}

const calculateAvg = () => {
    let sumMPG = 0
    let sumTripCost = 0
for(let i = 0; i < myMPG.length; i++) {
    sumMPG = sumMPG + myMPG[i]
    sumTripCost = sumTripCost + myTripCost[i]
}
    let avgMPG = Math.round(sumMPG/myMPG.length)
    let avgTripCost = sumTripCost/myTripCost.length
    updateDOM(`Average MPG is ${avgMPG}`)
    updateDOM(`Average Trip is ${avgTripCost}`)
}

// calculateavgCost
trackMPGCost(300, 10, 5.40)
trackMPGCost(320, 12, 5)
trackMPGCost(100, 7, 4.20)
trackMPGCost(600, 24, 5.70)
trackMPGCost(50, 2, 3.40)
trackMPGCost(320, 12, 5)
calculateAvg()
