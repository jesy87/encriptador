var btnencriptar = document.querySelector(".btn-encriptar");
var btndesencriptar = document.querySelector(".btn-desencriptar");
var imagen =document.querySelector(".contenedor-munieco");
var mensaje=document.querySelector(".mensaje");
var parrafo=document.querySelector(".parrafo");
var final= document.querySelector(".area2")
var btncopiar=document.querySelector(".btn-copiar")
var areaNueva=document.querySelector(".area")

btnencriptar.onclick = encriptar;
btndesencriptar.onclick = desencriptar;
btncopiar.onclick= copiar;


function encriptar(){
    invisibleFrente();
    var areaNueva= recuperarTexto();
    
    final.textContent = encriptado(areaNueva);
}
function desencriptar(){
    invisibleFrente();
    var areaNueva= recuperarTexto();
    
    final.textContent = desencriptado(areaNueva);
}

function borrar(){
    var limpiar= document.querySelector(".area").value="";

}




/*
function copiar(){
    var textCopy=recuperarTextoCop()
    areaNueva.textContent= encriptado(textCopy)
}

function recuperarTextoCop(){
    var areaCopi= document.querySelector(".area2");
    return areaCopi.value;
}
*/



function recuperarTexto(){
    var areaNueva= document.querySelector(".area");
    return areaNueva.value;
}



function invisibleFrente (){
    imagen.classList.add("ocultar");
    mensaje.classList.add("ocultar");
    parrafo.classList.add("ocultar");

}

function encriptado(mensaje){
    var texto = mensaje;
    var textoFinal= "";

    for( var i=0; i < texto.length; i++){
        if( texto[i] == "a"){
            textoFinal=textoFinal + "ai"
        }
        else if( texto[i] == "e"){
            textoFinal=textoFinal + "enter"
        }
        else if( texto[i] == "i"){
            textoFinal=textoFinal + "imes"
        }
        else if( texto[i] == "o"){
            textoFinal=textoFinal + "over"
        }
        else if( texto[i] == "u"){
            textoFinal=textoFinal + "ufat"
        }
        else{
            textoFinal=textoFinal + texto[i];
        }


    }
    return textoFinal;
}
function desencriptado(mensaje){
    var texto = mensaje;
    var textoFinal= "";

    for( var i=0; i < texto.length; i++){
        if( texto[i] == "a"){
            textoFinal=textoFinal + "a"
            i=i+1;
        }
        else if( texto[i] == "e"){
            textoFinal=textoFinal + "e"
            i=i+4;
        }
        else if( texto[i] == "i"){
            textoFinal=textoFinal + "i"
            i=i+3;
        }
        else if( texto[i] == "o"){
            textoFinal=textoFinal + "o"
            i=i+3;
        }
        else if( texto[i] == "u"){
            textoFinal=textoFinal + "u"
            i=i+3;
        }
        else{
            textoFinal=textoFinal + texto[i];
        }


    }

    return textoFinal;
}


   
    


