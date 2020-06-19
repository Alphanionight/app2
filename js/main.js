var view;

function Part_main(){
    var others = document.getElementById("others");
    others.innerHTML = "";
    var service = new PartenaireService();
    service.load(partenaires);
    view = new PartenaireComponent(service);
    view.printParts();
}

function Laur_main(){
    var others = document.getElementById("others");
    others.innerHTML = "";
    var service = new LaureatService();
    service.load(laureats);
    view = new LaureatComponent(service);
    view.printLaurs();
}

function Activ_main(){
    var others = document.getElementById("others");
    others.innerHTML = "";
    var service = new ActivityService();
    service.load(activities);
    view = new ActivityComponent(service);
    view.printActivs();
}

function Event_main(){
    var others = document.getElementById("others");
    others.innerHTML = "";
    var service = new EventService();
    service.load(events);
    view = new EventComponent(service);
    view.printEvent();
}

function btnHover(obj){
    var svg = obj.firstElementChild;
    svg.style.fill = "white";
    obj.style.color = "white";
    obj.style['background-color'] = "#35456c";
}

function btnOut(obj){
    var svg = obj.firstElementChild;
    svg.style.fill = "#35456c";
    obj.style.color = "#35456c";
    obj.style['background-color'] = "white";
}

function btnDown(obj){
    obj.style['background-color'] = "#1d44af";
}

function btnUp(obj){
    obj.style['background-color'] = "#35456c";
}

var menuOpened = false;
function toggleMenu(){
    var menu = document.querySelector(".nav-menu");
    if(menuOpened == true){
        menuOpened = false;
        menu.classList.remove("nav-menu--open");
    } else {
        menuOpened = true;
        menu.classList.toggle("nav-menu--open");
    }
}

window.addEventListener("mouseup", function(event){
    var menu = document.querySelector(".nav-menu");
    if(event.target != menu){
        menu.classList.remove("nav-menu--open");
    }
});

function openPresentation(){
    var others = document.getElementById("others");
    others.innerHTML = "";

    var acceuil_section = document.getElementById("acceuil-section");
    acceuil_section.style.display = "block";
    
    var container_form = document.querySelector(".container-form");
    container_form.style.display = "flex";
    var section_top = document.querySelector(".section-top");
    section_top.style.display = "none";
    var containerr = document.querySelector(".containerr");
    containerr.style.display = "none";
    var hist_section1 = document.querySelector(".hist-section1");
    hist_section1.style.display = "none";
    var container = document.querySelector(".container-cond");
    container.style.display = "none";
    var hist_section2 = document.querySelector(".hist-section2");
    hist_section2.style.display = "none";
}

function openHistorique(){
    var others = document.getElementById("others");
    others.innerHTML = "";

    var acceuil_section = document.getElementById("acceuil-section");
    acceuil_section.style.display = "block";

    var containerr = document.querySelector(".containerr");
    containerr.style.display = "block";
    var hist_section1 = document.querySelector(".hist-section1");
    hist_section1.style.display = "none";
    var container_form = document.querySelector(".container-form");
    container_form.style.display = "none";
    var section_top = document.querySelector(".section-top");
    section_top.style.display = "none";
    var container = document.querySelector(".container-cond");
    container.style.display = "none";
    var hist_section2 = document.querySelector(".hist-section2");
    hist_section2.style.display = "none";
}

function openCondition(){
    var others = document.getElementById("others");
    others.innerHTML = "";

    var acceuil_section = document.getElementById("acceuil-section");
    acceuil_section.style.display = "block";

    var container = document.querySelector(".container-cond");
    container.style.display = "block";
    var hist_section2 = document.querySelector(".hist-section2");
    hist_section2.style.display = "none";
    var containerr = document.querySelector(".containerr");
    containerr.style.display = "none";
    var hist_section1 = document.querySelector(".hist-section1");
    hist_section1.style.display = "none";
    var container_form = document.querySelector(".container-form");
    container_form.style.display = "none";
    var section_top = document.querySelector(".section-top");
    section_top.style.display = "none";
}