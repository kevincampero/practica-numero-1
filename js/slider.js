alert("SITIO CREADO POR: KEVIN CAMPERO ALVAREZ")
var i=0;
var img=[];
var time=3000;

img[0]='../img/fondo1.jpg';
img[1]='../img/fondo2.jpg';
img[2]='../img/fondo3.jpg';
img[3]='../img/fondo4.jpg';
img[4]='../img/fondo5.jpg';

function cambiar(){
    document.slide.src =img[i];
    if(i<img.length-1)
    {
        i++;
    }
    else{
        i=0;
    }
    setTimeout("cambiar()", time)
}
window.onload= cambiar;
