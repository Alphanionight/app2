function openAbout(){
    openPresentation();
    hideElements();
    var about = document.getElementById("about");
    about.style.display = "block" ;
    var aboutMenu = document.getElementById("aboutMenu");
    aboutMenu.classList.toggle("isactive-nav-element");
    window.scrollTo(0, 0); 
}

function openGoal(){
    openPresentation();
    hideElements();
    var about = document.getElementById("goal");
    about.style.display = "block" ;
    var aboutMenu = document.getElementById("goalMenu");
    aboutMenu.classList.toggle("isactive-nav-element");
    window.scrollTo(0, 0); 
}

function openAccepted(){
    openPresentation();
    hideElements();
    var about = document.getElementById("accepted");
    about.style.display = "block" ;
    var aboutMenu = document.getElementById("acceptedMenu");
    aboutMenu.classList.toggle("isactive-nav-element");
    window.scrollTo(0, 0); 
}

function openFormation(){
    openPresentation();
    hideElements();
    var about = document.getElementById("formation");
    about.style.display = "block" ;
    var aboutMenu = document.getElementById("formationMenu");
    aboutMenu.classList.toggle("isactive-nav-element");
    window.scrollTo(0, 0); 
}

var memo = [];
function openSubMenu(element){
    var next = element.nextElementSibling;
    var svg = element.lastElementChild;
    console.log(svg);
    
    if(!contains(memo, element)){
        if(next.classList.contains("semestre-content")){
            next.style.display = "flex";
        }
        else next.style.display = "block";
        svg.classList.toggle("rotate");
        memo.push(element);
    } else {
        next.style.display = "none";
        svg.classList.remove("rotate");
        removeElement(memo, element);
    }
}

function hideElements(){
    var elements = document.getElementsByClassName("present-element-content");
    var menuElements = document.getElementsByClassName("present-nav-element");
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.style.display = "none";
    }
    for (let i = 0; i < menuElements.length; i++) {
        const element = menuElements[i];
        element.classList.remove("isactive-nav-element");
    }
}

function contains(arr, value){
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if(e == value) return true;
    }
    return false;
}

function removeElement(arr, element){
    var index = 0;
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if (e == element) {
            index = i;
        }
    }
    let temp = arr[index];
    arr[index] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    arr.pop();
}