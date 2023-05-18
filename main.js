const FORM = document.getElementById('form-input')

const MY_MPG = []
const MY_TRIP_COST = []

const updateDOM = (input) => {
const divEL = document.querySelector('#output')
const h1 = document.createElement('h1')
h1.textContent = input
divEL.appendChild(h1)
}

const trackMPGandCost = (miles, gallons, price = 3.79) =>  {
const MPG = Math.round(miles/gallons)
const tripCost = Math.round(gallons * price)
updateDOM(`Mileage is ${MPG} and trip cost is ${tripCost}`)
MY_MPG.push(MPG)
MY_TRIP_COST.push(tripCost)
}

const calculateSUM = (arr) => {
    let sum = 0
    // for(let i=0; i < arr.length; i++) {
        // sum = sum + arr[i]
    // }
    // arr.forEach(element => {
        // sum += element
    // })

    for(value of arr) {
        sum += value
    }
    return sum
}

const calculateAvg = () => {
    let sumMPG = calculateSUM(MY_MPG)
    let sumTripCost = calculateSUM(MY_TRIP_COST)
    let avgMPG = Math.round(sumMPG/MY_MPG.length)
    let avgTripCost = sumTripCost/MY_TRIP_COST.length
    updateDOM(`Average MPG is ${avgMPG}`)
    updateDOM(`Average Trip is ${avgTripCost}`)
}

FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    const miles = parseInt(e.target.miles.value)
    const gallons = parseInt(e.target.gallons.value)
    const price = parseInt(e.target.price.value)
    trackMPGandCost(miles, gallons, price)
})

// trackMPGandCost(300, 10, 5.40)
// trackMPGandCost(320, 12, 5)
// trackMPGandCost(100, 7, 4.20)
// trackMPGandCost(600, 24, 5.70)
// trackMPGandCost(50, 2, 3.40)
// trackMPGandCost(320, 12, 5)
// calculateAvg()