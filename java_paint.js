var micolor = "#000000";
var micuadrito = 4;
let coordX = 0, coordY = 0;
var cuadro_o_circulo = 1;
var a = 0;

function comenzar(){
    document.getElementById("myCanvas").addEventListener( "mousedown" , clickDown, false);
    document.getElementById("myCanvas").addEventListener( "mouseup" , clickUp, false);
    document.getElementById("myCanvas").addEventListener( "mousemove" , cuando_se_mueve, false);
    document.getElementById("colores").addEventListener( "change" , obtener_color, false);
    document.getElementById("cursor").addEventListener( "change" , obtener_cuadro, false);
    document.getElementById("nuevo").addEventListener("click" , borra, false);
    document.getElementById("forma").addEventListener("click" , cambia_forma, false);
    document.getElementById("cursor").addEventListener("input", validar_tiempo_real, false);
    document.getElementById("green").addEventListener("click", cambia_color1, false);
    document.getElementById("yellow").addEventListener("click", cambia_color2, false);
    document.getElementById("blue").addEventListener("click", cambia_color3, false);
    document.getElementById("red").addEventListener("click", cambia_color4, false);
    document.getElementById("gray").addEventListener("click", cambia_color5, false);
    document.getElementById("purple").addEventListener("click", cambia_color6, false);
    document.getElementById("orange").addEventListener("click", cambia_color7, false);
    document.getElementById("violet").addEventListener("click", cambia_color8, false);
    document.getElementById("borrar").addEventListener("click", cambia_color9, false);
    document.getElementById("circ").addEventListener("click", circunferencia, false);
}    

function obtener_color(){
    let valor_color = document.getElementById("colores");
    micolor = valor_color.value;
}

function obtener_cuadro(){
    let rango = document.getElementById("cursor");
    micuadrito = rango.value;
}

function borra(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let valor_color = document.getElementById("colores");
 
    ctx.fillStyle = valor_color.value;
    ctx.fillRect(0, 0, 800, 400);
}

function cuando_se_mueve(posicion){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let salida = document.getElementById("coord");
    if( a == 1){
        ctx.fillStyle = micolor;
        if(cuadro_o_circulo == 1){
            ctx.fillRect(coordX - micuadrito/2, coordY - micuadrito/2, micuadrito, micuadrito);
        }
        else if(cuadro_o_circulo == 0){
            ctx.beginPath();
            ctx.arc(coordX,coordY,micuadrito,0,Math.PI*2,true);
            ctx.fill();
        }
        else if(cuadro_o_circulo == 2){
            ctx.beginPath();
            ctx.arc(coordX,coordY,micuadrito,0,(Math.PI/180)*360,true);
            ctx.strokeStyle = micolor;
            ctx.lineWidth = 4;
            ctx.stroke();
        }
    }
    coordX = posicion.pageX - canvas.offsetLeft;
    coordY = posicion.pageY - canvas.offsetTop;
    salida.innerHTML = "X,Y = (" + coordX + ", " + coordY + ")";
}

function circunferencia(){
    let salida = document.getElementById("cursortxt");
    salida.innerHTML = "Radio"
    cuadro_o_circulo = 2;
    
}

function clickDown(posicion){
    a = 1;
    cuando_se_mueve(posicion);
}
function clickUp(){
    a = 0;
}

function validar_tiempo_real(e){

    let elemento=e.target;

    if(elemento.validity.valid==true){

        elemento.style.background="#FFFFFF";

    }
    else{
        elemento.style.background="#FFDDDD";
        alert("Este valor no puede ser mayor a 60 ni menor a 1")

    }
}

function cambia_forma(){
    let texto = document.getElementById("forma");
    let salida = document.getElementById("cursortxt");
    salida.innerHTML = "Tamaño";
    if(cuadro_o_circulo == 0){
        cuadro_o_circulo = 1;
        texto.value = "Cuadro"
    }
    else{
        cuadro_o_circulo = 0;
        texto.value = "Circulo"
    }
}

function cambia_color1(){
    let color = document.getElementById("green");
    let valor_color = document.getElementById("colores");
    micolor = color.id;
    valor_color.value = "#008000";
}
function cambia_color2(){
    let color = document.getElementById("yellow");
    let valor_color = document.getElementById("colores");
    micolor = color.id;
    valor_color.value = "#ffff00";
}
function cambia_color3(){
    let color = document.getElementById("blue");
    let valor_color = document.getElementById("colores");
    micolor = color.id;
    valor_color.value = "#0000ff";
}
function cambia_color4(){
    let color = document.getElementById("red");
    let valor_color = document.getElementById("colores");
    micolor = color.id;
    valor_color.value = "#ff0000";
}
function cambia_color5(){
    let color = document.getElementById("gray");
    let valor_color = document.getElementById("colores");
    micolor = color.id;
    valor_color.value = "#808080";
}
function cambia_color6(){
    let color = document.getElementById("purple");
    let valor_color = document.getElementById("colores");
    micolor = color.id;
    valor_color.value = "#800080";
}
function cambia_color7(){
    let color = document.getElementById("orange");
    let valor_color = document.getElementById("colores");
    micolor = color.id;
    valor_color.value = "#ffa500";
}
function cambia_color8(){
    let color = document.getElementById("violet");
    let valor_color = document.getElementById("colores");
    micolor = color.id;
    valor_color.value = "#ee82ee";
}

function cambia_color9(){
    let color = document.getElementById("borrar");
    let valor_color = document.getElementById("colores");
    micolor = "#FFFFFF";
    valor_color.value = "#FFFFFF";
}


window.addEventListener( "load" , comenzar, false);