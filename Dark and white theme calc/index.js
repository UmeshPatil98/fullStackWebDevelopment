const display = document.querySelector(`#display`);
const buttons = document.querySelectorAll(`button`);

buttons.forEach((items)=>{
  items.onclick = () =>{
    if(items.id == `clear`){
       display.innerText = '';
    } else if (items.id == `backspace`){
      let string = display.innerText.tostring();
     display.innerText = string .substr(0,string.lenth -1);
     
    }else if (display.innerText != '' && items.id == `equal`) {
      display.innerText = eval(display.innerText);
    }else if (display.innerText == '' && items.id == 'equal') {                             // i want to add cursor and backspace?
      display.innerText = 'Empty !';
      setTimeout(() => (display.innerText = ``),2000);
    } else{
      display.innerText += items.id;
    }
  }
})
const themeToggleBtn = document.querySelector('.theme-toggler');  
 const calculator = document.querySelector('.dark');  
 const toggleIcon = document.querySelector('.toggler-icon');  
 let isDark = true;  
 themeToggleBtn.onclick = () => {  
   calculator.classList.toggle('dark');  
   themeToggleBtn.classList.toggle('active');  
   isDark = !isDark;  
 }  
