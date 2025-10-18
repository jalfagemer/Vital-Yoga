// JavaScript Document
function abre_menu() {
		document.getElementById("navegador").style.display = "block";	
 	}
	
	
function cierra_menu() {
    	document.location.href = document.location.href;
}

function ampliar1() {
    document.getElementById("ampliar1").style.display = "block";
}
function ampliar2() {
    document.getElementById("ampliar2").style.display = "block";
}
function cerrar1() {
    document.getElementById("ampliar1").style.display = "none";
	$('html,body').animate({
    scrollTop: $("#ancla1").offset().top
}, 1000);
}
function cerrar2() {
    document.getElementById("ampliar2").style.display = "none";
	$('html,body').animate({
    scrollTop: $("#ancla2").offset().top
}, 1000);
}


function CompFB() {
	var a="https://www.facebook.com/sharer/sharer.php?u=";
	a= a + document.location.href; 
	window.open(a , "" , "width=600,height=400") 
}

function CompTW() {
	var a="https://twitter.com/home?status=";
	a= a + document.location.href; 
	window.open(a , "" , "width=600,height=400") 
}

function CompWA() {
	var a="whatsapp://send?text=";
	a= a + document.location.href;
	a=a+" share/whatsapp/share"
	window.open(a , "" , "width=600,height=400") 
}

function CompMail() {
//OJO, ESCOGER MENSAJE SEGÚN CADA CASO. VER CÓDIGOS ESPECIALES EN http://www.w3schools.com/tags/ref_urlencode.asp

	var a=document.title; 
	var	b= document.location.href; 
	var mensaje=escape(a); 

	//var mensaje="Para leer este art%EDculo,"
	window.location.href="mailto:?subject="+a+"&body= %0A%0A"+mensaje+":%0A%0AHacer clic en el siguiente enlace para leer el contenido:%0A"+b   

}

