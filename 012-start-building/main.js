//Update the DOM

    const updateDOM = (input) => {
    const divEL = document.querySelector('#output')
    const h1 = document.createElement('h1')
    h1.textContent = input
    divEL.appendChild(h1)
}

updateDOM('JavaScript is Fun!')