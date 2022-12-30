function encriptar (){
    var texto = document.querySelector("#mensajes").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#r").value = textoCifrado;
    document.querySelector("#mensajes").value;

}



function desencriptar (){
    var texto = document.querySelector("#mensajes").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector("#r").value = textoCifrado;
    document.querySelector("#mensajes").value;

}

function copiar(){
    textocopiado = document.querySelector("#r").value;
}

function pegar(){
    document.querySelector("#mensajes").value = textocopiado;
}

