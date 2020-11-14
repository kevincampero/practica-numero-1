alert("SITIO CREADO POR: KEVIN CAMPERO ALVAREZ")
let circ =document.getElementById("circle");
let im=document.getElementById("guitars");
function cambiar_circulo(color){
    if(color=="red")
    {
        circ.style.background="#5f0506";
        im.src="./img/img1.png"
        document.getElementById("mas").style.background="#5f0506";
        document.getElementById("clave").style.color="#5f0506";
        
        
    }
    if(color=="orange")
    {
        im.src="./img/img2.png"
        circ.style.background="#954f0c";
        document.getElementById("mas").style.background="#954f0c";
        document.getElementById("clave").style.color="#954f0c";
    }
    if(color=="blue")
    {
        im.src="./img/img3.png"
        circ.style.background="#243d63";
        document.getElementById("mas").style.background="#243d63";
        document.getElementById("clave").style.color="#243d63";
    }
}

