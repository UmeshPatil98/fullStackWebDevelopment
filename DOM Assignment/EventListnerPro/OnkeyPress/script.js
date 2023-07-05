let inputBox = document.getElementById('input-box') 
let display = document.getElementById('display')


// keypress event listener to the inputbox
inputBox.addEventListener('keypress', function(e){
    display.innerText ="you have Pressed " + e.key     ///get or set the text content of an HTML element
})