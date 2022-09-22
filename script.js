const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    return `rgb(${red}, ${green}, ${blue})`
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