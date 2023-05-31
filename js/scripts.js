// User Interface Logic
window.onload = function() {
    let darkMode = document.querySelector(".btn2");
    let body = document.body;
    let button1 = document.querySelector(".btn1");
    let button2 = document.querySelector(".btn2");
    darkMode.onclick = function() {
        body.style.background = 'black';
        body.style.color = 'white'
        button1.style.background = 'black';
        button1.style.color = 'white';
        button2.style.background = 'black';
        button2.style.color = 'white';
        
    }
    let lightMode = document.querySelector(".btn1");
    lightMode.onclick = function() {
        body.style.background = 'white';
        body.style.color = 'black'
        button2.style.background = 'white';
        button2.style.color = 'black';
        button1.style.background = 'white';
        button1.style.color = 'black';
    }
 }