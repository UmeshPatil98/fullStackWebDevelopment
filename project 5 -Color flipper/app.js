const colors =["green","red", "rgba[133,122,100]","#152025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".class");

btn.addEventListener("click", function (){
    const randomNumber= getrandomNumber();
    console.log(randomNumber);

    
document.body.style.backgroundColor = colors[randomNumber];
color.textContent=colors[randomNumber]

});


function getrandomNumber(){
    return Math.floor(Math.random()*colors.length)
}


 