function ActivityComponent(service){
    this.service = service;
}

ActivityComponent.prototype.get = function(id){
    return document.getElementById(id);
}

ActivityComponent.prototype.addActiv = function(activity){
    var column = document.createElement("div");
    column.setAttribute("class", "column");

    var article = document.createElement("article");

    var img = document.createElement("img");
    img.setAttribute("src", activity.image);

    var content_post = document.createElement("div");
    content_post.setAttribute("class", "content-post");

    var post_title = document.createElement("h3");
    post_title.setAttribute("class", "post-title");

    var a = document.createElement("div");
    a.setAttribute("href", "");
    a.appendChild(document.createTextNode(activity.label));

    var div = document.createElement("div");

    var text = document.createElement("p");
    text.setAttribute("class", "text");
    text.appendChild(document.createTextNode(activity.text));

    var container_post_date = document.createElement("div");
    container_post_date.setAttribute("class", "container-post-date");

    var icon_post_date = document.createElement("img");
    icon_post_date.setAttribute("class", "icon-post-date");
    icon_post_date.setAttribute("src", "images/activities/overtime.png");

    var text_post_date = document.createElement("span");
    text_post_date.setAttribute("class", "text-post-date");
    text_post_date.appendChild(document.createTextNode(activity.date));

    container_post_date.appendChild(icon_post_date);
    container_post_date.appendChild(text_post_date);

    div.appendChild(text);

    post_title.appendChild(a);

    content_post.appendChild(post_title);
    content_post.appendChild(div);
    content_post.appendChild(container_post_date);

    article.appendChild(img);
    article.appendChild(content_post);

    column.appendChild(article);

    return column;
}

ActivityComponent.prototype.printActivs = function(){
    var oldSection = document.getElementsByClassName("acceuil-section")[0];
    oldSection.style.display = "none";

    var parent = document.getElementsByClassName("row")[0];

    for(let i = 0; i < this.service.size(); i++){
        parent.appendChild(this.addActiv(this.service.get(i)));
    }
}

ActivityComponent.prototype.printResult = function(arr){
    if(arr.length != 0 ){
        var parent = document.getElementsByClassName("row")[0];
        parent.innerHTML = "";

        for(let i = 0; i < arr.length; i++){
            parent.appendChild(this.addActiv(arr[i]));
        }
    }
}