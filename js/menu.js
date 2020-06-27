// function for removing an element
var container_slid = document.getElementById('container_popup_menu');
var popup = document.getElementById('popup');
var menu = document.querySelector(".container_popup_menu");

function toggleMenu(){
	popup.style["transition-delay"] = "0ms";
	popup.style.left = "0px";
	menu.classList.toggle("container_popup_menu--open");
}

window.addEventListener("mouseup", function(event){
	if(event.target.id != "parent_sub" && !event.target.classList.contains("mrq") && 
		!event.target.classList.contains("button_for_cat_slid") && event.target.id != "Layer_1" && 
		event.target.id != "ddp" && !event.target.classList.contains("ico_menu_drop")){
		menu.classList.remove("container_popup_menu--open");
		popup.style["transition-delay"] = "500ms";
		popup.style.left = "-100%";
		if(opened.length != 0){
			for (let i = 0; i < opened.length; i++) {
				const e = opened[i];
				toggleSubMenu(e);
			}
		}
    }
});

var opened = [];

function toggleSubMenu(element){
	var subMenu = element.nextElementSibling;
	var b = element.lastElementChild;
	if(!contains(opened, element)){
		b.style.transform = "rotate(180deg)";
		subMenu.style.display = "block";
		subMenu.style["transition"] = "500ms";
		isOpened = true;
		opened.push(element);
    } else {
		b.style.transform = "rotate(0deg)";
		subMenu.style.display = "none";
		isOpened = false;
		removeElement(opened, element);
	}
}