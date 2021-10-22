const typingDelay = 35;
let currentWord = 0;
let currentChar = 0;
if (window.location.pathname != "/") {
    var headerText = document.getElementById("mainheader").innerHTML;
    headerText = headerText.split(" ");
    document.getElementById("mainheader").innerHTML = '';

    function type() {
        if (currentChar < headerText[currentWord].length) {
            document.getElementById("mainheader").innerHTML += headerText[currentWord].charAt(currentChar);
            currentChar++;
            setTimeout(type, typingDelay);
        }
        else {
            document.getElementById("mainheader").innerHTML += " ";
            currentChar = 0;
            currentWord++;
            setTimeout(type, typingDelay);
        }
    }
}
else {
    var homeHeader = ["Back-End Devel", "Front-End Dev", "Full-Stack Developer ", "& Student."]

    function hometype() {
        if (currentChar < homeHeader[currentWord].length) {
            document.getElementById("typed-text").innerHTML += homeHeader[currentWord].charAt(currentChar);
            currentChar++;
            setTimeout(hometype, typingDelay);
        }
        else {
            if (currentWord == 2) {
                currentWord++;
                currentChar = 0;
                setTimeout(hometype, 800);
            }
            else if (currentWord == 3){
                
            }
            else {
                setTimeout(erase, 250);
            }
        }
    }

    function erase () {
        if (currentChar > 0) {
            document.getElementById("typed-text").innerHTML = document.getElementById("typed-text").innerHTML.substring(0, currentChar-1);
            currentChar--;
            setTimeout(erase, 50);
        }
        else {
            currentWord++;
            setTimeout(hometype, typingDelay);
        }
    }
}

function expand() {
    document.getElementsByClassName("navbar-list")[0].classList.toggle("active");
}

function languageBars () {
    var element = document.querySelectorAll(".language-bar");
    for (var i=0; i<5;i++) {    
        element[i].classList.add("bar-width");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname != "/") {
        type();
    }
    else {
        setTimeout(hometype, 800); 
    }
    languageBars();
});