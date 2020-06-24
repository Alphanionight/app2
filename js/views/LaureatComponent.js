function LaureatComponent(service){
    this.service = service;
}

LaureatComponent.prototype.get = function(id){
    return document.getElementById(id);
}

LaureatComponent.prototype.createElementList = function(icon, label, value){
    var element_list = document.createElement("div");
    element_list.setAttribute("class", "element-list");

    var object = document.createElement("object");
    object.setAttribute("data", icon);
    object.setAttribute("type", "image/svg+xml");

    var div = document.createElement("div");

    var title = document.createElement("label");
    title.appendChild(document.createTextNode(label));

    var span = document.createElement("span");
    span.appendChild(document.createTextNode(value));

    div.appendChild(title);
    div.appendChild(span);

    element_list.appendChild(object);
    element_list.appendChild(div);

    return element_list;
}

LaureatComponent.prototype.SMButton = function(link ,icon){
    var card_icon = document.createElement("span");
    card_icon.setAttribute("class", "card-icon");

    var a = document.createElement("a");
    a.setAttribute("href", link);

    var span = document.createElement("span");

    var object = document.createElement("object");
    object.setAttribute("data", icon);
    object.setAttribute("type", "image/svg+xml");

    span.appendChild(object);
    a.appendChild(span);
    card_icon.appendChild(a);

    return card_icon;
}

LaureatComponent.prototype.addLaur = function(laureat){
    var laureat_card = document.createElement("div");
    laureat_card.setAttribute("class", "laureat-card");

    var laureat_img = document.createElement("div");
    laureat_img.setAttribute("class", "laureat-img");

    var img = document.createElement("img");
    if(laureat.photo !== "null"){
        img.setAttribute("src", laureat.photo);
    } else {
        img.setAttribute("src", "images/Laureats/aucune.png");
    }

    laureat_img.appendChild(img);
    laureat_card.appendChild(laureat_img);

    var under_img_container = document.createElement("div");
    under_img_container.setAttribute("class", "under-img-container");

    var h4 = document.createElement("h4");
    h4.setAttribute("class", "name-container");
    h4.appendChild(document.createTextNode(laureat.nom + " " + laureat.prenom));

    var h6 = document.createElement("h6");
    h6.setAttribute("class", "job-title");
    h6.appendChild(document.createTextNode(laureat.poste_actuelle));

    under_img_container.appendChild(h4);
    under_img_container.appendChild(h6);

    under_img_container.appendChild(this.createElementList("images/Laureats/icon1.svg", "Promotion:\xa0", laureat.promotion));
    under_img_container.appendChild(this.createElementList("images/Laureats/icon2.svg", "Entreprise de stage:\xa0", laureat.ent_stage));
    under_img_container.appendChild(this.createElementList("images/Laureats/icon5.svg", "Entrepeise de signature contrat CDI:\xa0", laureat.ent_contrat));
    under_img_container.appendChild(this.createElementList("images/Laureats/icon3.svg", "Entrepeise actuelle:\xa0", laureat.ent_actuelle));
    under_img_container.appendChild(this.createElementList("images/Laureats/icon4.svg", "Localisation actuelle:\xa0", laureat.localisation));

    var social_media = document.createElement("div");
    social_media.setAttribute("class", "social-media");
    social_media.appendChild(this.SMButton(laureat.linkedIn, "images/Laureats/linkedin.svg"));
    if(laureat.email != "")
    social_media.appendChild(this.SMButton("mailto:" + laureat.email, "images/Laureats/gmail.svg"));

    under_img_container.appendChild(social_media);
    laureat_card.appendChild(under_img_container);

    return laureat_card;
}

LaureatComponent.prototype.printLaurs = function(){
    var oldSection = document.getElementsByClassName("acceuil-section")[0];
    oldSection.style.display = "none";

    var parent = document.getElementsByClassName("laureat-container")[0];
    parent.innerHTML = "";

    for(let i = 0; i < this.service.size(); i++){
        parent.appendChild(this.addLaur(this.service.get(i)));
    }
}

LaureatComponent.prototype.printResult = function(arr){
    if(arr.length != 0 ){
        var parent = document.getElementsByClassName("laureat-container")[0];
        parent.innerHTML = "";

        for(let i = 0; i < arr.length; i++){
            parent.appendChild(this.addLaur(arr[i]));
        }
    }
}