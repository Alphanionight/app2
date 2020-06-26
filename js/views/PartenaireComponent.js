function PartenaireComponent(service){
    this.service = service;
}

PartenaireComponent.prototype.get = function(id){
    return document.getElementById(id);
}

PartenaireComponent.prototype.addPart = function(part){
    document.getElementById("body").style["background-color"] = "rgb(241, 241, 241)";

    var part_list = document.createElement("div");
    part_list.setAttribute("class", "part-list");
    var part_logo = document.createElement("div");
    part_logo.setAttribute("class", "part-logo");
    var image = document.createElement("img");
    image.setAttribute("src", part.image);
    
    part_logo.appendChild(image);
    part_list.appendChild(part_logo);

    var text_container = document.createElement("div");
    text_container.setAttribute("class", "text-container");
    var part_blog = document.createElement("div");
    part_blog.setAttribute("class", "part-blog");
    var part_name = document.createElement("div");
    part_name.setAttribute("class", "part-name");
    var part_text = document.createElement("div");
    part_text.setAttribute("class", "part-text");

    var ul = document.createElement("ul");

    for (let i = 0; i < part.about.length-1; i++) {
        var li = document.createElement("li");
        li.setAttribute("class", "mb mt");
        var li_content = document.createTextNode(part.about[i]);
        li.appendChild(li_content);
        ul.appendChild(li);
    }

    var a = document.createElement("a");
    a.setAttribute("href", part.about[part.about.length-1]);
    a.setAttribute("target", "_blank");
    var a_content = document.createTextNode("Lire plus");
    a.appendChild(a_content);
    ul.appendChild(a);
    part_text.appendChild(ul);

    var name = document.createTextNode(part.name);
    part_name.appendChild(name);
    part_blog.appendChild(part_name);
    part_blog.appendChild(part_text);
    text_container.appendChild(part_blog);

    var side_bar = document.createElement("div");
    side_bar.setAttribute("class", "side-bar");
    var part_name = document.createElement("div");
    part_name.setAttribute("class", "part-name");
    var part_text = document.createElement("div");
    part_text.setAttribute("class", "part-text");

    var title_name = document.createTextNode("Plus d'information");
    part_name.appendChild(title_name);
    
    var ul = document.createElement("ul");

    for (let i = 0; i < part.info.length-1; i++) {
        var li = document.createElement("li");
        li.setAttribute("class", "mb mt");
        var li_content = document.createTextNode(part.info[i]);
        li.appendChild(li_content);
        ul.appendChild(li);
    }

    var li = document.createElement("li");
    li.setAttribute("class", "mt");
    var li_content = document.createTextNode(part.info[part.info.length-1]);
    li.appendChild(li_content);
    ul.appendChild(li);
    part_text.appendChild(ul);

    side_bar.appendChild(part_name);
    side_bar.appendChild(part_text);

    text_container.appendChild(side_bar);
    part_list.appendChild(text_container);
    return part_list;
}

PartenaireComponent.prototype.printParts = function(){
    var oldSection = document.getElementsByClassName("acceuil-section")[0];
    oldSection.style.display = "none";

    var parent = document.getElementsByClassName("part-section")[0];

    for(let i = 0; i < this.service.size(); i++){
        parent.appendChild(this.addPart(this.service.get(i)));
    }
}

PartenaireComponent.prototype.printResult = function(arr){
    if(arr.length != 0 ){
        var parent = document.getElementsByClassName("part-section")[0];
        parent.innerHTML = "";

        for(let i = 0; i < arr.length; i++){
            parent.appendChild(this.addPart(arr[i]));
        }
    }
}