var view;

function Part_main(){
    var others = document.getElementsByClassName("other-pages")[0];
    hideChilds(others);
    var part_section = document.getElementsByClassName("part-section")[0];
    part_section.style.display = "block";
    var service = new PartenaireService();
    service.load(partenaires);
    view = new PartenaireComponent(service);
    view.printParts();
    window.scrollTo(0, 0); 
}

function Laur_main(){
    var others = document.getElementsByClassName("other-pages")[0];
    hideChilds(others);
    var laureat_section = document.getElementsByClassName("laureat-section")[0];
    laureat_section.style.display = "block";
    var service = new LaureatService();
    service.load(laureats);
    view = new LaureatComponent(service);
    view.printLaurs();
    window.scrollTo(0, 0); 
}

function Activ_main(){
    var others = document.getElementsByClassName("other-pages")[0];
    hideChilds(others);
    var activ_section = document.getElementsByClassName("activ-section")[0];
    activ_section.style.display = "block";
    var service = new ActivityService();
    service.load(activities);
    view = new ActivityComponent(service);
    view.printActivs();
    window.scrollTo(0, 0); 
}

function Event_main(id){
    var oldSection = document.getElementsByClassName("acceuil-section")[0];
    oldSection.style.display = "none";
    var others = document.getElementsByClassName("other-pages")[0];
    hideChilds(others);
    var event = document.getElementsByClassName("event-section")[0];
    event.style.display = "block";
    var ec = document.getElementById("event-c");
    hideChilds(ec);
    var e = document.getElementById(id);
    e.style.display = "block";
}

function hideChilds(parent){
    var childs = parent.children;
    for (let i = 0; i < childs.length; i++) {
        const element = childs[i];
        element.style.display = "none";
    }
}

function searshLaureat(){
    var text = document.getElementsByClassName("searchTerm")[0].value;
    var result = [];
    for (let i = 0; i < laureats.length; i++) {
        const element = laureats[i];
        if(element.nom.toUpperCase().includes(text.toUpperCase()) 
        || element.prenom.toUpperCase().includes(text.toUpperCase()) 
        || element.email.toUpperCase().includes(text.toUpperCase()) 
        || element.promotion.toUpperCase().includes(text.toUpperCase())
        || element.ent_stage.toUpperCase().includes(text.toUpperCase()) 
        || element.ent_contrat.toUpperCase().includes(text.toUpperCase()) 
        || element.ent_actuelle.toUpperCase().includes(text.toUpperCase()) 
        || element.poste_actuelle.toUpperCase().includes(text.toUpperCase()) 
        || element.localisation.toUpperCase().includes(text.toUpperCase())){
            result.push(element);
        }
    }
    view.printResult(result);
}

function searshPartenaire(){
    var text = document.getElementsByClassName("searchTerm")[1].value;
    var result = [];
    for (let i = 0; i < partenaires.length; i++) {
        const element = partenaires[i];
        if(element.name.toUpperCase().includes(text.toUpperCase())){
            result.push(element);
        }
    }
    view.printResult(result);
}

function searshActivity(){
    var text = document.getElementsByClassName("searchTerm")[2].value;
    var result = [];
    for (let i = 0; i < activities.length; i++) {
        const element = activities[i];
        if(element.label.toUpperCase().includes(text.toUpperCase()) 
        || element.date.toUpperCase().includes(text.toUpperCase()) ){
            result.push(element);
        }
    }
    view.printResult(result);
}

function listen(){
    for (let i = 0; i < 3; i++) {
        const input = document.getElementsByClassName("searchTerm")[i];
        input.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementsByClassName("searchButton")[i].click();
            }
        });
    }
}

function openPresentation(){
    var oldSection = document.getElementsByClassName("acceuil-section")[0];
    oldSection.style.display = "none";
    var others = document.getElementsByClassName("other-pages")[0];
    hideChilds(others);
    var present_section = document.getElementsByClassName("present-section")[0];
    present_section.style.display = "block";
    window.scrollTo(0, 0); 
}