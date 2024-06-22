const inputcocinaancho= document.querySelector ("#cocinaancho")
const inputcocinalargo= document.querySelector ("#cocinalargo")
const inputfalsotecho= document.querySelector ("#buttonfalsotecho")
const boton= document.querySelector ("#buttoncalcular")
const Cocina= new Nuevacocina ()
const Encimera = new calcularencimera()
/*var metrolinealinstalado= 650 /*mueble alto+ mueble bajo */ 
var metromueblestandard = 550 /*precio sevilla instalado x metro*/
var metromueblepremium = 650 /*precio soho instalado x metro*/
var metroimportado= 850 /*metro */ 
var metronacional= 620 /*metro */
var metrodekton= 950 /*metro */
var griferia= 450 /* griferia + pica*/ 
var suelo= 23 /*metrocuadradostandard*/
var ceramica=23 /*metrocuadradostandard*/ 
const checkboxes = document.querySelectorAll ('#checkbox');
const checkboxfalsotech = document.querySelector ('#checkboxfalso');
const arrayelectrodomesticos= []
const arraydatosdecocina= []
const preciofinal = document.querySelector ("#precio")
const letrachica = document.querySelector ("#letrachic")



for (var checkbox of checkboxes) {
    checkbox.addEventListener ( "click", function () {
        if (this.checked == true ) {
        arrayelectrodomesticos.push(this.value)} 
        else { console.log ("descheckeaste el boton")}
    } )
}



function verificarmueble(calidatemueble) { debugger
    this.ancho= inputcocinaancho.value;
    this.largo= inputcocinalargo.value;
    this.valormetrolineal= calidatemueble; 
    this.griferia= griferia; 

    if (document.getElementById ("buttonlinear").checked) {return (largo*valormetrolineal)+ griferia} 
     if (document.getElementById ("buttonenele").checked) {return (largo*valormetrolineal) +((0.6*ancho)*valormetrolineal)+ griferia} 
     if (document.getElementById ("buttonenu").checked) { return ((1.5*largo)*valormetrolineal)+(ancho*valormetrolineal)+ griferia}  
     else {alert ("no se seleccionó configuración de cocina") };
    
     }

function totalencimera(Encimer) { debugger
        this.ancho= inputcocinaancho.value;
        this.largo= inputcocinalargo.value;
        this.valor= Encimer; 
        
    
        if (document.getElementById ("buttonlinear").checked) {return (largo*valor)} 
         if (document.getElementById ("buttonenele").checked) {return ((largo*valor) +((0.6*ancho)*valor))} 
         if (document.getElementById ("buttonenu").checked) { return (((1.5*largo)*valor)+(ancho*valor))}  
         else {console.log ("no se seleccionó configuración de cocina") };
        
         }

function calcularencimera() {
    this.metroimport= metroimportado;
    this.metrogranito= metronacional;
    this.metrodekton= metrodekton;
    this.anchor= inputcocinaancho.value;
    this.largor= inputcocinalargo.value;

    this.costoencimera = function () {  
    if (document.getElementById ("laminada").checked) {return (metroimport)} 
    if (document.getElementById ("granitonacional").checked) {return (metrogranito)} 
    if (document.getElementById ("dekton").checked) { return (metrodekton)} 
    else {console.log ("no se seleccionó configuración de cocina") };

} }

function calidadmueble() { debugger
    this.metrostandard= metromueblestandard;
    this.metropremium= metromueblepremium;
    

    this.costocalidadmueble = function () {  
    if (document.getElementById ("standard").checked) {return (metrostandard)} 
    if (document.getElementById ("premium").checked) {return (metropremium)} 
    else {console.log ("no se seleccionó modelo mueble de cocina") };

} }


function Nuevacocina (){
        this.codigo= 0,
        this.ancho= inputcocinaancho.value;
        this.largo= inputcocinalargo.value;
        
        

    
this.areacocina = function() { 
        return (ancho*largo)}

this.falsotech = function () { debugger
if (checkboxfalsotech.checked){
    return (largo*ancho*75)} else { return (0)}}

this.revestimiento = function () { debugger
        return ((largo*ancho*suelo)+(((largo*2)+(ancho*2))*2.60)*ceramica)}
    
}
  
this.encimera = function () {
        if (this.desarrolloencimera=="granitonacional") {return("es granito nacional")}
        else if (this.desarrolloencimera=="dekton") {return ("es dekton")} else 
        if ( this.desarrolloencimera=="laminada") {return ("es laminada")}}
        


boton.addEventListener ("click", ()=>{

calidadmueble ()
let calidatemueble=costocalidadmueble ()    

verificarmueble (calidatemueble)
let moples = verificarmueble (calidatemueble) 
console.log (moples)


Nuevacocina ()
let areacoc = areacocina ()
let mfalso = falsotech ()
let revest = revestimiento ()

metropaleta()
let mpaleta = metropaleta ()
console.log ( mpaleta)

function metropaleta () { debugger
    if (areacoc<5.5) {return (4210)} else 
    if (areacoc<6.5) {return (4645)} else
    if (areacoc<7.5) {return (4965)} else
    if (areacoc<8.5) {return (5200)} else
    if (areacoc<9.5) {return (5500)} else
    if (areacoc<10.5) {return (5800)} else
     {return (6100)}
}


console.log ( areacoc)
calcularencimera()
let Encimer  = costoencimera()


totalencimera(Encimer)
let Valorfinal = totalencimera (Encimer)

console.log (Valorfinal)
        
function Sumaa (){
this.moplese= moples;
this.areacoci= areacoc; 
this.encimer=Valorfinal;
this.metrocuadrado=mpaleta;
this.falsotech=mfalso;
this.electro= totalelectro;
this.revestimientos=revest;
                
this.suma = function() { 
return (moplese+totalelectro+encimer+metrocuadrado+falsotech+griferia+revestimientos)}}


function calcularelectro () { debugger
    let suman=0 ;  
    for (var i=0 ; i< arrayelectrodomesticos.length ;i++)
    suman += +arrayelectrodomesticos[i] 
    if (i=arrayelectrodomesticos.length){return (suman)} else  {return (suman)}}
    

let totalelectro = calcularelectro()   

Sumaa ()
let sumatotal=suma()

preciofinal.innerText= ("Precio Aproximado:") + sumatotal + ("€")
letrachica.innerText= ("El precio es estimativo y en condiciones ideales de reforma. Incluye instalación de cerámicas de suelo y paredes")
alert ("Precio Estimativo final es " + sumatotal + "€")          
console.log (totalelectro)

        
            
        
console.table (arrayelectrodomesticos)
console.table (arraydatosdecocina)
console.table (Cocina)
console.log (Cocina.areacocina())
console.log (Cocina)
console.log (Encimer)
            
            
 })