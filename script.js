const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    return `rgb(${red}, ${green}, ${blue})`
}

const addToMyPalette = (event) => {
    // snatching the color of the clicked div
    const color = event.target.style.backgroundColor
    // creating a new div to be added to MYPALETTE
    const newSquare = document.createElement('div')
    // add all the good square styles
    newSquare.classList.add('square')
    // give the new div the snatched background color
    newSquare.style.backgroundColor = color
    // append the new div to my palette
    document.querySelector('.my-palette').appendChild(newSquare)
}

const generatePalette = () => {
    console.log("generating palette....")
    // generate 150 divs using a loop
    for(let i=0; i<140; i++) {
        // step 1: create a new div
        const square = document.createElement('div')
        // step 2: give it a class (style)
        let color = generateRandomColor()
        square.style.backgroundColor = color
        square.classList.add('square')
        square.addEventListener('click', addToMyPalette)
        // step 3: append it to an eisting element
        let colorPalette = document.querySelector('.color-palette')
        colorPalette.appendChild(square)
    }
}


document.addEventListener('DOMContentLoaded', ()=>{
    // all the dom manipulation goes inside here
    generatePalette()
    btn.addEventListener('click', ()=>{
        //clean up old palette
        const colorPalette = document.querySelector('.color-palette')
        while(colorPalette.firstChild) {
            colorPalette.removeChild(colorPalette.firstChild)
        }
        // generate new palatte
        generatePalette()
    })
})