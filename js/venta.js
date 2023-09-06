//declaracion de variables
let nombre = '';

let opcion = '';

let animatronico = '';

let dias = '';

let valido = 0;

let dinero = 0;

let listaAnimatronicos = [];

let salir = 0;

let contador = 0;

let menu = `1.- [ADMINISTRACIÓN] Agregar animatronicos al Stock
2.- Rentar un animatronico.
3.- [NUEVA OPCIÓN] ¿Para que me alcanzá?
4.- Consultar puntos de distribución.
5.- Limpiar consola.
6.- Finalizar.
`;

let menuAnimatronicos = `1.- Freddy Fazbear $1.000 x dia
2.- Bonnie $1.400 x dia
3.- Chica $1.700 x dia
4.- Foxy $800 x dia
`;

class Animatronico{

    constructor(nombre, precio, stock){
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }
}

//declaracion de funciones
function rentarAnimatronico(valor, dias){
    if(valor==1){
        console.log("Usted tendra a Freddy Fazbear por "+dias+" dia(s) por el valor de: $"+1000*dias);
        console.log(menu);
    }else if(valor==2){
        console.log("Usted tendra a Bonnie por "+dias+" dia(s) por el valor de: $"+1400*dias);
        console.log(menu);
    }else if(valor==3){
        console.log("Usted tendra a Chica por "+dias+" dia(s) por el valor de: $"+1700*dias);
        console.log(menu);
    }else if(valor==4){
        console.log("Usted tendra a Foxy por "+dias+" dia(s) por el valor de: $"+800*dias);
        console.log(menu);
    }else{
        console.log("Usted no ha seleccionado una opcion valida, será enviado al menu.");
        console.log(menu);
    }
}

function alcanzaAnimatronico(valor){
    if(valor>=1000){
        console.log("Usted puede arrendar a Freddy Fazbear por "+Math.floor(valor/1000)+" dia(s) valor referencial: $1.000 x dia.")
    }else{
        console.log("Lamentamos informarle que no puede rentar a Freddy Fazbear valor referencial: $1.000 x dia.")
    }
    if(valor>=1400){
        console.log("Usted puede arrendar a Bonnie por "+Math.floor(valor/1400)+" dia(s) valor referencial: $1.400 x dia.")
    }else{
        console.log("Lamentamos informarle que no puede rentar a Bonnie valor referencial: $1.000 x dia.")
    }
    if(valor>=1700){
        console.log("Usted puede arrendar a Chica por "+Math.floor(valor/1700)+" dia(s) valor referencial: $1.700 x dia.")
    }else{
        console.log("Lamentamos informarle que no puede rentar a Chica valor referencial: $1.000 x dia.")
    }
    if(valor>=800){
        console.log("Usted puede arrendar a Foxy por "+Math.floor(valor/800)+" dia(s) valor referencial: $800 x dia.")
    }else{
        console.log("Lamentamos informarle que no puede rentar a Foxy valor referencial: $800 x dia.")
    }
    console.log(menu);
}

//codigo de ejecucion
nombre = prompt("Bienvenido nuevo usuario, por favor dime tu nombre");

console.log(` _____        _                       _____      _            _        _                            _       _____
|  ___|      | |                     |  ___|    | |          | |      (_)                          | |     |_   _|
| |_ __ _ ___| |__   ___  __ _ _ __  | |__ _ __ | |_ ___ _ __| |_ __ _ _ _ __  _ __ ___   ___ _ __ | |_      | | _ __   ___
|  _/ _\` |_  / '_ \\ / _ \\/ _\` | '__| |  __| '_ \\| __/ _ \\ '__| __/ _\` | | '_ \\| '_ \` _ \\ / _ \\ '_ \\| __|     | || '_ \\ / __|
| || (_| |/ /| |_) |  __/ (_| | |    | |__| | | | ||  __/ |  | || (_| | | | | | | | | | |  __/ | | | |_ _   _| || | | | (__ 
\\_| \\__,_/___|_.__/ \\___|\\__,_|_|    \\____/_| |_|\\__\\___|_|   \\__\\__,_|_|_| |_|_| |_| |_|\\___|_| |_|\\__( )  \\___/_| |_|\\___|
                                                                                                       |/

Bienvenido(a) `+nombre+` a nuestro sistema de elección de animatronicos, elige el animatronico que deseas rentar:

`+menu);

while (opcion != 6){
    opcion = prompt('Indicanos tu opción: ');
    if(opcion==1){
        salir=0;
        while(salir!="SALIR"){ 
            let nombre = "";
            contador = 0;
            while(nombre.trim()===""){
                if(contador == 0){
                    nombre = prompt("Ingrese el nombre del animatronico");
                }else{
                    nombre = prompt("Ingrese el nombre del animatronico. No se permite nombre vacio.");
                }
                contador++;
                if(nombre==null){ //validacion para excluir nulos
                    nombre="";
                }
            }
            contador = 0;
            let precio = "";
            while(precio.trim()===""){
                if(contador == 0){
                    precio = prompt("Ingrese el precio del animatronico");
                }else{
                    precio = prompt("Ingrese el precio del animatronico. No se permite precio vacio o letras.");
                }
                contador++;
                if(precio==null){ //validacion para excluir nulos
                    precio="";
                }else if(isNaN(precio)){ //validacion para excluir valores no numericos
                    precio="";
                }else if(!isNaN(precio)){ //validacion para excluir negativos o 0
                    if(precio<1){
                        precio="";
                    }
                }
            }
            contador = 0;
            let stock = "";
            while(stock.trim()===""){
                if(contador == 0){
                    stock = prompt("Ingrese el stock del animatronico");
                }else{
                    stock = prompt("Ingrese el stock del animatronico. No se permite stock vacio o letras.");
                }
                contador++;
                if(stock==null){ //validacion para excluir nulos
                    stock = "";
                }else if(isNaN(stock)){ //validacion para excluir valores no numericos
                    stock = "";
                }else if(!isNaN(stock)){ //validacion para excluir valores negativos o 0
                    if(stock<1){
                        stock="";
                    }
                }
            }
            salir = prompt("Ingrese SALIR para volver al menú, para agregar otro animatronico presione enter o ingrese cualquier valor.")

            precio = parseFloat(precio);

            let animatronico = new Animatronico(nombre,precio,stock);

            listaAnimatronicos.push(animatronico);

        }
        console.log(menu);
    }else if(opcion==2){
        valido = 0;
        while(valido==0){
            console.log(menuAnimatronicos);
            animatronico=prompt("Ingrese el animatronico que desea rentar:");
            dias=prompt("Ingrese la cantidad de dias que desea rentar:");
            if(!isNaN(animatronico)&&!isNaN(dias)){
                if(dias>0){
                    rentarAnimatronico(animatronico,dias);
                    valido = 1;
                }else{
                    console.log("La cantidad de dias no puede ser negativo, intentelo de nuevo.");
                }
            }else{
                console.log("Una de las opciones ingresadas no son validas, intentelo de nuevo.");
            }
        }
    }else if(opcion==3){
        dinero=prompt("Indicanos por favor tu presupuesto para arrendar animatronicos:")
        alcanzaAnimatronico(dinero);
    }else if(opcion==4){
        console.log(`Los puntos de distribuicion para nuestros animatronicos en su ciudad son:

        1.- Freddy Fazbear's Mega Pizzaplex.
        2.- Fredbear's Family Diner.
        3.- Freddy Fazbear's Pizza.
        4.- Freddy Pizza Place
        5.- El Chip
        6.- Oficinas principales
        
Ante información actualizada de horarios por favor comuniquese por teléfono.

`+menu);
    }
    else if(opcion==5){
        console.clear();
        console.log(menu);
    }else if(opcion==6){
        console.log("!Les agradecemos su visita y esperamos que hayan disfrutado de nuestros animatronicos! Recuerde que junto con la firma del contrato legal con el que nos libera de toda la responsabilidad por lo que podría ocurrir tendra unos lentes novedosos y un vale por una recarga gratis en cualquiera de nuestros locales. !Que tenga una maravillosa noche y nos vemos pronto!");
    }else{
        console.log("Opción no valida, intentelo de nuevo.")
    }
}