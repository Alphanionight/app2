// function for removing an element
var container_slid = document.getElementById('container_popup_menu');
var popup = document.getElementById('popup');
var menu = document.querySelector(".container_popup_menu");

function toggleMenu(){
	popup.style["transition-delay"] = "0ms";
	popup.style.left = "0px";
	menu.classList.toggle("container_popup_menu--open");
}

var parent_sub = document.querySelector("#parent_sub");
var button_name = document.querySelector(".botton_name");
var drop_menu_ico = document.querySelector(".drop_menu_ico");
var button_name = document.querySelector(".botton_name");
var layer = document.querySelector("#Layer_1");
var ddp = document.querySelector("#ddp");
var rot = document.querySelector("#rot");

window.addEventListener("mouseup", function(event){
	if(event.target != parent_sub && event.target != button_name && event.target != rot && 
		event.target != layer && event.target != ddp && event.target != drop_menu_ico){
		console.log("fu");
		
		menu.classList.remove("container_popup_menu--open");
		popup.style["transition-delay"] = "500ms";
		popup.style.left = "-100%";
    } else {
		console.log("fufu");
		
	}
});

var parent = document.getElementById('parent_sub');
var subMenu = document.getElementById('sub_menu');
var b = document.getElementById('rot');
var isOpened = false;
function toggleSubMenu(){
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