const toggles = document.querySelectorAll('.checkbox_switch'); 
let themeKey = localStorage.getItem("themeKey")|| 'light';

const body = document.querySelector('body');




function colorTheme(e){
    if (e.type==='click')  {
        themeKey = themeKey==='light'?'dark':'light';

     localStorage.setItem("themeKey", themeKey);

    }   


    body.classList.toggle('light__theme');
    body.classList.toggle('dark__theme');//body





}



document.addEventListener("DOMContentLoaded", (e)=> {
    if (themeKey === 'dark') {
        colorTheme(e);
    }
});

toggles.forEach(toggle=> {toggle.addEventListener('click',colorTheme)
  if(themeKey === 'dark'){
    toggle.checked=true;}
    else{toggle.checked=false;}
});
