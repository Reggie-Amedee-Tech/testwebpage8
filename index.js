let button1 = document.querySelector('.button1')
let button2 = document.querySelector('.button2')
let button3 = document.querySelector('.button3')

let arrayOfBackgroundColors = [backgroundColor = "yellow", backgroundColor = "grey"]

let randomColor = Math.floor(Math.random(arrayOfBackgroundColors) * 2)

button1.addEventListener('click', function onClick(event) {
    let colorBox1 = document.getElementById('box-1')
    colorBox1.style.backgroundColor = "red";
    
})

button2.addEventListener('click', function onClick(event) {
    let colorBox2 = document.getElementById('box-2')
    colorBox2.style.backgroundColor = "blue";
})

button3.addEventListener('click', function onClick(event) {
    let colorBox3 = document.getElementById('box-3')
    colorBox3.style.backgroundColor = "purple";
})





