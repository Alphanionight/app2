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
	if(event.target.id != "parent_sub" && !event.target.classList.contains("botton_name") && 
		!event.target.classList.contains("button_for_cat_slid") && event.target.id != "Layer_1" && 
		event.target.id != "ddp" && !event.target.classList.contains("drop_menu_ico")){
		menu.classList.remove("container_popup_menu--open");
		popup.style["transition-delay"] = "500ms";
		popup.style.left = "-100%";
    }
});

var isOpened = false;

function toggleSubMenu(element){
	var subMenu = element.nextElementSibling;
	var b = element.lastElementChild;
	if(isOpened == false){
		b.style.transform = "rotate(180deg)";
		subMenu.style.display = "block";
		subMenu.style["transition"] = "500ms";
		isOpened = true;
    } else {
		b.style.transform = "rotate(0deg)";
		subMenu.style.display = "none";
		isOpened = false;
	}
}