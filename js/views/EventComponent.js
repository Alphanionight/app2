function EventComponent(service){
    this.service = service;
}

EventComponent.prototype.get = function(id){
    return document.getElementById(id);
}

EventComponent.prototype.addEvent = function(event){
    var column = document.createElement("div");
    column.setAttribute("class", "column-event");

    var article = document.createElement("article");
    column.appendChild(article);

    var img = document.createElement("img");
    img.setAttribute("src", event.image);
    article.appendChild(img);


    var content_post = document.createElement("div");
    content_post.setAttribute("class", "content-post-event");
    article.appendChild(content_post);

    var unit_body = document.createElement("div");
    unit_body.setAttribute("class", "unit-body");
    content_post.appendChild(unit_body);

    var post_title = document.createElement("h3");
    post_title.setAttribute("class", "post-title-event");
    unit_body.appendChild(post_title);
    var a = document.createElement("span");
    a.appendChild(document.createTextNode(event.label));
    post_title.appendChild(a);


    //here
    var container_post_date = document.createElement("div");
    container_post_date.setAttribute("class", "container-post-date-event");
    unit_body.appendChild(container_post_date);

    
    var text_post_date = document.createElement("div");
    text_post_date.setAttribute("class", "text-post-date-event");
    text_post_date.appendChild(document.createTextNode(event.text));
    container_post_date.appendChild(text_post_date);

    var event_time = document.createElement("div");
    event_time.setAttribute('class', 'event-time');
    content_post.appendChild(event_time);
    var event_day =document.createElement("div");
    event_day.setAttribute('class','event-day');
    event_day.appendChild(document.createTextNode(event.day));
    event_time.appendChild(event_day);
    var event_month =document.createElement("p");
    event_month.setAttribute('class','event-month');
    event_month.appendChild(document.createTextNode(event.mounth));
    event_time.appendChild(event_month);
    var event_hour = document.createElement("span");
    event_hour.appendChild(document.createTextNode(event.hour + ":" + event.minute));
    event_time.appendChild(event_hour); 

    return column;
}

EventComponent.prototype.printEvent = function(){
    var oldSection = document.getElementById("acceuil-section");
    oldSection.style.display = "none";

    var parent = document.getElementById("others");

    var event_section = document.createElement("section");
    event_section.setAttribute("class", "event-section");

    var row = document.createElement("div");
    row.setAttribute("class", "row-event");

    var div_title = document.createElement("h2");
    div_title.setAttribute("class", "div-title");

    var first_word = document.createElement("div");
    first_word.setAttribute("class", "first-word");
    first_word.appendChild(document.createTextNode("Les\xa0"));

    div_title.appendChild(first_word);
    div_title.appendChild(document.createTextNode("Evénements"));

    event_section.appendChild(div_title);

    for(let i = 0; i < this.service.size(); i++){
        row.appendChild(this.addEvent(this.service.get(i)));
    }
    event_section.appendChild(row);
    parent.appendChild(event_section);
}