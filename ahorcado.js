var   palabras            = ["casa", "perro","luna", "gato","almohada","montaña","nube"];
const palabra           = palabras[Math.floor(Math.random()*palabras.length)];
var   palabraconGuiones = palabra.replace(/./g,"_ ")

var   evaluar           = document.querySelector("#evaluar");
document.querySelector("#output").innerHTML = palabraconGuiones

palabraconGuiones = palabraconGuiones.split(" ")
var cont= 0
const intentos=7
var palabraErrada =[]
evaluar.addEventListener('click',()=>{
    var letra = document.querySelector("#letra").value
    letra=letra.toLowerCase()
    document.querySelector("#letra").value =""
    document.getElementById("letra").focus()
    document.querySelector("#output3").innerHTML= " "
    var estado
    console.log(palabra)
    if(palabraErrada.includes(letra)){
        frase = "La letra ya fue escrita"
        document.querySelector("#output3").innerHTML= frase
        estado = true
        
    }else{
         for (const i in palabra){
                if(letra == palabra[i]){
                palabraconGuiones[i]=letra
                estado = true           
            }              
        }
    }
        
    
     
    if(estado != true){
        palabraErrada.push(letra)        
        cont ++
        console.log("este es el contador", cont,letra)
        ahorcado()
        document.querySelector("#output2").innerHTML = palabraErrada        
        console.log(palabraErrada)
    }

    document.querySelector("#output").innerHTML = palabraconGuiones.join(" ") 
    p2 = unirPalabra()
    if (palabra==p2){
        alert("ganaste")
    }
    if (cont>=7){
        alert("Perdiste")
        }
    
})

function unirPalabra(){
    var p = ""
    for (var i in palabraconGuiones){
        if(palabraconGuiones[i]!='')
            p = p+palabraconGuiones[i]
    } 
    return p
}
function ahorcado(){
    switch(cont){
        case 1:
            patibulo()
            break
        case 2:
            cabeza()
            break
        case 3:
            cuerpo()
            break
        case 4:
            brazoDerecho()
            break
        case 5:
            brazoIzquierdo()
            break
        case 6:
            piernaDerecha ()
            break
        case 7:
            piernaIzquierda()
            break
    }
}







