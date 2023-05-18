//Update the DOM

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
    


updateDOM(trackMPGCost(300, 10, 5.40))
updateDOM(trackMPGCost(320, 12, 5))
updateDOM(myArr)
