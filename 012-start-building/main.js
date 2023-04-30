//Update the DOM

    const updateDOM = (input) => {
    const divEL = document.querySelector('#output')
    const h1 = document.createElement('h1')
    h1.textContent = input
    divEL.appendChild(h1)
}

const mileage = (miles, gallons, price) =>  miles/gallons * price
    


updateDOM(mileage(300, 10, 3.50))

