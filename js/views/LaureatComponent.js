function LaureatComponent(service){
    this.service = service;
}

LaureatComponent.prototype.get = function(id){
    return document.getElementById(id);
}

LaureatComponent.prototype.addLaur = function(laureat){
    var laur_div = document.createElement("div");
    laur_div.setAttribute("class", "laur-div");
    
    var laur_pho = document.createElement("div");
    laur_pho.setAttribute("class", "laur-pho");

    var photo = document.createElement("img");
    if(laureat.photo != "null"){
        photo.setAttribute("src", laureat.photo);
    } else {
        photo.setAttribute("src", "images/Laureats/aucune.png");
    }
    photo.setAttribute("id", "photo");
    laur_pho.appendChild(photo);

    var laur_info = document.createElement("div");
    laur_info.setAttribute("class", "laur-info");

    var laur_name = document.createElement("div");
    laur_name.setAttribute("class", "laur-name");

    var b = document.createElement("b");
    b.appendChild(document.createTextNode("Nom:\xa0"));

    laur_name.appendChild(b);
    laur_name.appendChild(document.createTextNode(laureat.nom + "\xa0" + laureat.prenom));

    var laur_promo = document.createElement("div");
    laur_promo.setAttribute("class", "laur-promo");

    var b = document.createElement("b");
    b.appendChild(document.createTextNode("Promotion:\xa0"));

    laur_promo.appendChild(b);
    laur_promo.appendChild(document.createTextNode(laureat.promotion));

    var laur_email = document.createElement("div");
    laur_email.setAttribute("class", "laur-email");

    var b = document.createElement("b");
    b.appendChild(document.createTextNode("Email:\xa0"));

    laur_email.appendChild(b);
    laur_email.appendChild(document.createTextNode(laureat.email));

    var laur_ent_stage = document.createElement("div");
    laur_ent_stage.setAttribute("class", "laur-ent-stage");

    var b = document.createElement("b");
    b.appendChild(document.createTextNode("Entreprise de stage:\xa0"));

    laur_ent_stage.appendChild(b);
    laur_ent_stage.appendChild(document.createTextNode(laureat.ent_stage));

    var laur_ent_contrat = document.createElement("div");
    laur_ent_contrat.setAttribute("class", "laur-ent-contrat");

    var b = document.createElement("b");
    b.appendChild(document.createTextNode("Entreprise de signature de Contract CDI:\xa0"));

    laur_ent_contrat.appendChild(b);
    laur_ent_contrat.appendChild(document.createTextNode(laureat.ent_contrat));

    var laur_ent_actuelle = document.createElement("div");
    laur_ent_actuelle.setAttribute("class", "laur-ent-actuelle");

    var b = document.createElement("b");
     b.appendChild(document.createTextNode("Entreprise actuelle:\xa0"));

     laur_ent_actuelle.appendChild(b);
     laur_ent_actuelle.appendChild(document.createTextNode(laureat.ent_actuelle));

    var laur_post_actuel = document.createElement("div");
    laur_post_actuel.setAttribute("class", "laur-post-actuel");

    var b = document.createElement("b");
    b.appendChild(document.createTextNode("Poste actuelle:\xa0"));

    laur_post_actuel.appendChild(b);
    laur_post_actuel.appendChild(document.createTextNode(laureat.poste_actuelle));

    var laur_local = document.createElement("div");
    laur_local.setAttribute("class", "laur-local");

    var b = document.createElement("b");
    b.appendChild(document.createTextNode("Localisation actuelle:\xa0"));

    laur_local.appendChild(b);
    laur_local.appendChild(document.createTextNode(laureat.localisation));


    laur_info.appendChild(laur_name);
    laur_info.appendChild(laur_promo);
    laur_info.appendChild(laur_email);
    laur_info.appendChild(laur_ent_stage);
    laur_info.appendChild(laur_ent_contrat);
    laur_info.appendChild(laur_ent_actuelle);
    laur_info.appendChild(laur_post_actuel);
    laur_info.appendChild(laur_local);
    
    laur_div.appendChild(laur_pho);
    laur_div.appendChild(laur_info);

    return laur_div;
}

LaureatComponent.prototype.printLaurs = function(){
    var oldSection = document.getElementById("acceuil-section");
    oldSection.style.display = "none";

    var parent = document.getElementById("others");

    var laur_section = document.createElement("section");
    laur_section.setAttribute("class", "laur-section");
    
    var div_title = document.createElement("h2");
    div_title.setAttribute("class", "div-title");

    var laur_list = document.createElement("div");
    laur_list.setAttribute("class", "laur-list");

    var first_word = document.createElement("div");
    first_word.setAttribute("class", "first-word");

    first_word.appendChild(document.createTextNode("Lauréats\xa0"));
    div_title.appendChild(first_word);
    div_title.appendChild(document.createTextNode("MQL"));

    laur_section.appendChild(div_title);

    for(let i = 0; i < this.service.size(); i++){
        laur_list.appendChild(this.addLaur(this.service.get(i)));
    }
    laur_section.appendChild(laur_list);
    parent.appendChild(laur_section);
}