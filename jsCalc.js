var resultado = 0;
var sumando = false;
var restando = false;
var multiplicando = false;
var dividiendo = false;
var numero_en_pantalla = "";
var salir = false;
var pelotaY = 40;
// 
var scaleMultiplier = 0.8;
var startDragOffset = {};
var mouseDown = false;
var scale = 1.0;
var translatePos = {
    x: 0,
    y: 0
};

var isDraw = false;

//   

function print(numero){

    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    
    numero_en_pantalla = numero_en_pantalla + numero;

    ctx.fillStyle = "rgb(231, 233, 248)";           //borra
    ctx.fillRect(5, 150, 292, 45);

    ctx.fillStyle = "black";                        //refresca
    ctx.font = '40px serif';
    let text = ctx.measureText(numero_en_pantalla);
    ctx.fillText(numero_en_pantalla, 295 - text.width, 195);      
}

function print_total(numero){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "rgb(231, 233, 248)";
    ctx.fillRect(5, 150, 292, 45);
    ctx.fillStyle = "Black";
    ctx.font = '40px serif';
    let text = ctx.measureText(numero);
    ctx.fillText(numero, 295 - text.width, 195);
}

function suma(){
    sumando = true;
    resultado = resultado + parseFloat(numero_en_pantalla);
    print_total(resultado);
    numero_en_pantalla = "";
}

function resta(){
    restando = true;
    if(resultado == 0){
        resultado = parseFloat(numero_en_pantalla) - resultado;
    }
    else{
        resultado = resultado - parseFloat(numero_en_pantalla);
    }
    
    print_total(resultado);
    numero_en_pantalla = "";
}

function multiplicacion(){
    multiplicando = true;
    if(resultado == 0){
        resultado = 1;
    }
    resultado = resultado * parseFloat(numero_en_pantalla);
    print_total(resultado);
    numero_en_pantalla = "";
}

function division(){
    dividiendo = true;
    if(resultado == 0){
        resultado = 1;
    }
    resultado = parseFloat(numero_en_pantalla)/resultado;
    let entero = esEntero(resultado);
    if(!entero){
        resultado = resultado.toFixed(8);
    }
    print_total(resultado);
    numero_en_pantalla = "";
}

function esEntero(numero){
    return numero % 1 == 0 ? true : false;
}

function raizCuadrada(){
    resultado = Math.sqrt(parseFloat(numero_en_pantalla)).toFixed(8);
    numero_en_pantalla = String(resultado);
    resultado = 0;
    print_total(numero_en_pantalla);

}

function alcuadrado(){
    resultado = Math.pow(parseFloat(numero_en_pantalla), 2);
    numero_en_pantalla = String(resultado);
    resultado = 0;
    print_total(numero_en_pantalla);

}

function inversa(){
    if(parseFloat(numero_en_pantalla) == 0){
        print_total('Error!!');
        numero_en_pantalla = "";
        resultado = 0;
    }
    else{
        resultado = 1/parseFloat(numero_en_pantalla);
        let entero = esEntero(resultado);
        if(!entero){
            resultado = resultado.toFixed(8);
        }
        numero_en_pantalla = String(resultado);
        resultado = 0;
        print_total(numero_en_pantalla);
    }

}

function total(){
    let cifra = 0;
    if(sumando){
        resultado = parseFloat(resultado) + parseFloat(numero_en_pantalla);       
    }
    else if(restando){
        cifra = parseFloat(numero_en_pantalla);
        if(resultado == 0){
            resultado = parseFloat(cifra) - resultado;
        }
        else{
            resultado = resultado - parseFloat(cifra);
        }
    }
    else if(multiplicando){
        if(resultado == 0){
            resultado = 1;
        }
        resultado = resultado * parseFloat(numero_en_pantalla);
    }
    else if(dividiendo){
        if(resultado == 0){
            resultado = 1;
        }
        resultado = resultado/parseFloat(numero_en_pantalla);
        let entero = esEntero(resultado);
        if(!entero){
            resultado = resultado.toFixed(8);
        }
    }
    else{
        resultado = resultado;
    }
    numero_en_pantalla = String(resultado);
    print_total(numero_en_pantalla);
    resultado = 0;
    cifra = 0;
    sumando = false;
    restando = false;
    multiplicando = false;
    dividiendo = false;
}

function reset(){
    activar_teclado_calculadora();
    let ides = ["mousedown","mouseup","mouseover","mouseout","mousemove"];
    let funciones = [mouse_down, mouse_up, mouse_over, mouse_out, mouse_move];

    for(let i=0; i<ides.length; i++){
        document.getElementById("myCanvas").removeEventListener( ides[i] , funciones[i], false);
    }

    ides = ["Up","Dwn","Ok","Esc", "mas", "menos"];
    funciones = [up, down, okey, esc, aumentar, disminuir];
    for(let i=0; i<ides.length; i++){
        document.getElementById(ides[i]).removeEventListener( "click" , funciones[i], false);
    }
    

    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    canvas.style.cursor="default";
    ctx.fillStyle = "rgb(231, 233, 248)";
    ctx.fillRect(5, 5, 292, 195);
    resultado = 0;
    sumando = false;
    restando = false;
    multiplicando = false;
    dividiendo = false;
    numero_en_pantalla = "";
    pelotaY = 40;
    print_total(0);
}


function _init(){
    // eventos:
    activar_teclado_calculadora();

    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let cadena = '0';
    ctx.fillStyle = "rgb(231, 233, 248)";
    ctx.fillRect(5, 5, 292, 195);

    ctx.strokeStyle = "rgba(0, 0, 0, 1)";
    ctx.lineWidth = 1;
    ctx.strokeRect(3, 3, 295, 195); 

    ctx.fillStyle = "Black";
    ctx.font = '40px serif';
    let text = ctx.measureText(cadena);
    ctx.fillText(cadena, 295 - text.width, 195);

}

function _initGraphs(){

    desactivar_teclado_calculadora();

    let ides = ["mousedown","mouseup","mouseover","mouseout","mousemove"];
    let funciones = [mouse_down, mouse_up, mouse_over, mouse_out, mouse_move];

    for(let i=0; i<ides.length; i++){
        document.getElementById("myCanvas").addEventListener( ides[i] , funciones[i], false);
    }

    ides = ["Up","Dwn","Ok","Esc", "mas", "menos"];
    funciones = [up, down, okey, esc, aumentar, disminuir]; //, arriba, abajo, derecha, izquierda];

    for(let i=0; i<ides.length; i++){
        document.getElementById(ides[i]).addEventListener( "click" , funciones[i], false);
    }
    graphs();
}

function graphs(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    // canvas.style.cursor="crosshair";

    /// menu de funciones a graficar:
    ctx.fillStyle = "rgb(231, 233, 248)";
    ctx.fillRect(5, 5, 292, 195);

    ctx.fillStyle = "black";                        //refresca
    ctx.font = '20px serif';
    ctx.fillText('Funciones Predefinidas', 60, 25);
    ctx.fillText('sin(x)', 20, 45);
    ctx.fillText('cos(x)', 20, 65);
    ctx.fillText('x^2', 20, 85);

    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.arc(10,40,4,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
    
}

function esc(){
    pelotaY = 40;
    isDraw = false;
    graphs();

}



function coord(posicion){
    let coordenadas_en_pantalla = 0;
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");






    // coordX = (posicion.pageX - canvas.offsetLeft);
    // coordY = (posicion.pageY - canvas.offsetTop);

    // ctx.fillStyle = "rgb(231, 233, 248)";           //borra
    // ctx.fillRect(150, 184, 292, 14);

    // if(pelotaY == 40 || pelotaY == 60){
    //     coordenadas_en_pantalla = "(" + ((coordX-150)/20) + ", " + (((coordY-100)/50)*-1) + ")";
    // }
    // else if(pelotaY == 80){
    //     coordenadas_en_pantalla = "(" + ((coordX-152)/6).toFixed(2) + ", " + ((coordY-180)*-1) + ")";
    // }
    // else{
    // //     coordenadas_en_pantalla = "(" + coordX + ", " + coordY + ")";   
    // // }

    // ctx.fillStyle = "black";                        //refresca
    // ctx.font = '15px serif';
    // let text = ctx.measureText(coordenadas_en_pantalla);
    // ctx.fillText(coordenadas_en_pantalla, 295 - text.width, 195); 

}

function up(){

    pelotaY = pelotaY - 20;
    if(pelotaY < 30){
        pelotaY = 80
    }
    dibujar_pelota();
}

function down(){
    pelotaY = pelotaY + 20;
    if(pelotaY > 80){
        pelotaY = 40
    }
    dibujar_pelota();
}

function dibujar_pelota(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(231, 233, 248)";           //borra
    ctx.fillRect(4, 4, 15, 80);

    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.arc(10,pelotaY,4,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();

}

function okey(){
    if(pelotaY == 40){
        funcion_sin(scale, translatePos);
    }
    else if(pelotaY == 60){
        funcion_cos(scale, translatePos);
    }
    else if(pelotaY == 80){
        funcion_pow(scale, translatePos);
    }
    else{
        alert('Error!! revisar la variable pelotaY');
    }
}

function funcion_sin(scale, translatePos){
    let y = 0;
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    ctx.translate(translatePos.x, translatePos.y);
    ctx.scale(scale, scale);

   // ejes coordenados para la funcion sin(x) y cos(x)
   ctx.beginPath();
   ctx.moveTo(150, 5);
   ctx.lineTo(150, 195);
   ctx.moveTo(145, 50);
   ctx.lineTo(155, 50);
   ctx.moveTo(145, 150);
   ctx.lineTo(155, 150);
   ctx.moveTo(30, 95);
   ctx.lineTo(30, 105);
   ctx.moveTo(60, 95);
   ctx.lineTo(60, 105);
   ctx.moveTo(90, 95);
   ctx.lineTo(90, 105);
   ctx.moveTo(120, 95);
   ctx.lineTo(120, 105);
   ctx.moveTo(180, 95);
   ctx.lineTo(180, 105);
   ctx.moveTo(210, 95);
   ctx.lineTo(210, 105);
   ctx.moveTo(240, 95);
   ctx.lineTo(240, 105);
   ctx.moveTo(270, 95);
   ctx.lineTo(270, 105);
   ctx.moveTo(5, 100);
   ctx.lineTo(295, 100);
   ctx.closePath();
   ctx.stroke();
   // graficar funcion sin(x):
   for(let i=-20; i<20;i+=0.01){
       y = Math.sin(i);
       ctx.fillStyle = "rgba(0, 0, 0, 1)";
       ctx.fillRect(150 + (20.4*i), (100 - (50*y)), 1, 1); 
   }
   ctx.restore();

   isDraw = true;
}

function funcion_cos(){
    let y = 0;
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    ctx.translate(translatePos.x, translatePos.y);
    ctx.scale(scale, scale);

   // ejes coordenados para la funcion sin(x) y cos(x)
   ctx.beginPath();
   ctx.moveTo(150, 5);
   ctx.lineTo(150, 195);
   ctx.moveTo(145, 50);
   ctx.lineTo(155, 50);
   ctx.moveTo(145, 150);
   ctx.lineTo(155, 150);
   ctx.moveTo(30, 95);
   ctx.lineTo(30, 105);
   ctx.moveTo(60, 95);
   ctx.lineTo(60, 105);
   ctx.moveTo(90, 95);
   ctx.lineTo(90, 105);
   ctx.moveTo(120, 95);
   ctx.lineTo(120, 105);
   ctx.moveTo(180, 95);
   ctx.lineTo(180, 105);
   ctx.moveTo(210, 95);
   ctx.lineTo(210, 105);
   ctx.moveTo(240, 95);
   ctx.lineTo(240, 105);
   ctx.moveTo(270, 95);
   ctx.lineTo(270, 105);
   ctx.moveTo(5, 100);
   ctx.lineTo(295, 100);
   ctx.closePath();
   ctx.stroke();
   for(let i=-7; i<7;i+=0.01){
       y = Math.cos(i);
       ctx.fillStyle = "rgba(0, 0, 0, 1)";
       ctx.fillRect(150 + (20.4*i), (100 - (50*y)), 1, 1); 
   }
   ctx.restore();
   isDraw = true;
}

function funcion_pow(){
    let y = 0;
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    ctx.translate(translatePos.x, translatePos.y);
    ctx.scale(scale, scale);
    
    ctx.beginPath();
    ctx.moveTo(150, 5);
    ctx.lineTo(150, 195);
    ctx.moveTo(5, 180);
    ctx.lineTo(295, 180);
    ctx.closePath();
    ctx.stroke();

   for(let i = -13; i<=13; i+=0.2){
       y = Math.pow(i, 2);
       ctx.fillStyle = "rgba(0, 0, 0, 1)";
       ctx.fillRect(150 + (i*6), (180 - y), 2, 2); 
   }
   ctx.restore();
   isDraw = true;
}

// function atras(){
//     salir = true;
// }



function activar_teclado_calculadora(){

    let ides = ["numero1","numero2","numero3","numero4","numero5","numero6","numero7","numero8","numero9","numero0",
               "sumar", "restar", "multiplicar","dividir", "igual", "punto", "sqrt", "sqr", "inv"]
    let funciones = [print_1, print_2, print_3, print_4, print_5, print_6, print_7, print_8, print_9, print_0, suma,
                    resta, multiplicacion, division, total, print_punto, raizCuadrada, alcuadrado, inversa];

    for(let i=0; i<ides.length; i++){
        document.getElementById(ides[i]).addEventListener( "click" , funciones[i], false);
    }
}

function desactivar_teclado_calculadora(){
    let ides = ["numero1","numero2","numero3","numero4","numero5","numero6","numero7","numero8","numero9","numero0",
               "sumar", "restar", "multiplicar","dividir", "igual", "punto", "sqrt", "sqr", "inv"]
    let funciones = [print_1, print_2, print_3, print_4, print_5, print_6, print_7, print_8, print_9, print_0, suma,
                    resta, multiplicacion, division, total, print_punto, raizCuadrada, alcuadrado, inversa];

    for(let i=0; i<ides.length; i++){
        document.getElementById(ides[i]).removeEventListener( "click" , funciones[i], false);
    }
}
function print_1(){
    print(1);
}
function print_2(){
    print(2);
}function print_3(){
    print(3);
}function print_4(){
    print(4);
}function print_5(){
    print(5);
}function print_6(){
    print(6);
}function print_7(){
    print(7);
}function print_8(){
    print(8);
}function print_9(){
    print(9);
}function print_0(){
    print(0);
}function print_punto(){
    print('.');
}

// funciones del evento draguear la imagen
function mouse_down(evt){
    mouseDown = true;
    startDragOffset.x = evt.clientX - translatePos.x;
    startDragOffset.y = evt.clientY - translatePos.y;
}

function mouse_up(){
    mouseDown = false;
}

function mouse_over(){
    mouseDown = false;
}

 function mouse_out(){
    mouseDown = false;
}

function mouse_move(evt){
    if (mouseDown && isDraw) {
        translatePos.x = evt.clientX - startDragOffset.x;
        translatePos.y = evt.clientY - startDragOffset.y;
        if(pelotaY == 40){
            funcion_sin(scale, translatePos);
        }
        else if(pelotaY == 60){
            funcion_cos(scale, translatePos);
        }
        else if(pelotaY == 80){
            funcion_pow(scale, translatePos);
        }
        else{
            alert('Error!! revisar la variable pelotaY');
        }
    } 
}

// funciones para hacer zoom
function aumentar(){
    if(isDraw){
        scale *=1.2;
        if(pelotaY == 40){
            funcion_sin(scale, translatePos);
        }
        else if(pelotaY == 60){
            funcion_cos(scale, translatePos);
        }
        else if(pelotaY == 80){
            funcion_pow(scale, translatePos);
        }
        else{
            alert('Error!! revisar la variable pelotaY');
        }
    }
}

function disminuir(){

    if(isDraw){
        scale /=1.2;
        if(pelotaY == 40){
            funcion_sin(scale, translatePos);
        }
        else if(pelotaY == 60){
            funcion_cos(scale, translatePos);
        }
        else if(pelotaY == 80){
            funcion_pow(scale, translatePos);
        }
        else{
            alert('Error!! revisar la variable pelotaY');
        }
    }
}

window.addEventListener( "load" , _init, false);