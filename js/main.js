var view;

function Part_main(){
    var others = document.getElementById("other-pages");
    others.innerHTML = "";
    var service = new PartenaireService();
    service.load(partenaires);
    view = new PartenaireComponent(service);
    view.printParts();
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
    var others = document.getElementById("other-pages");
    others.innerHTML = "";
    var service = new ActivityService();
    service.load(activities);
    view = new ActivityComponent(service);
    view.printActivs();
}

function Event_main(){
    var others = document.getElementById("other-pages");
    others.innerHTML = "";
    var service = new EventService();
    service.load(events);
    view = new EventComponent(service);
    view.printEvent();
}

function hideChilds(parent){
    var childs = parent.children;
    for (let i = 0; i < childs.length; i++) {
        const element = childs[i];
        element.style.display = "none";
    }
}

function searsh(){
    var text = document.getElementsByClassName("searchTerm")[0].value;
    console.log(text);
    
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
    console.log(result.length + "idk");
}

function listen(){
    var input = document.getElementsByClassName("searchTerm")[0];
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementsByClassName("searchButton")[0].click();
        }
    });
}