//coeur j'aime
var heartred = document.getElementsByClassName("ph")

console.log(heartred[0]);

for (let n=0; n<heartred.length; n++)
{
let i =0;
 var heart1=heartred[n].getAttribute("src");

 heartred[n].onclick = function() {incr(), heartred1()};

 function heartred1() {  
    i+= 1;
}
function incr() {
if (i%2==0) {heartred[n].setAttribute("src", "COEUR2.png");}
else {heartred[n].setAttribute("src", "COeur1.png");}
  }
 
}
//somme
var summe = document.getElementById("total");
var plus =document.getElementsByClassName("plus")
var moins =document.getElementsByClassName("moins")
var prix =document.getElementsByClassName("prix")
var numbre =document.getElementsByClassName("nbr")

//var prix1=prix[0]
console.log(summe.innerHTML);
console.log(plus[0].innerHTML); 
console.log(moins[0].innerHTML);
console.log(prix[0].innerHTML); 
console.log(numbre[0].innerHTML); 

var s=0;
for (let q=0; q<heartred.length; q++){
let ni=0;
let mi=0;

var C=new Array();
for (let l=0;l<heartred.length; l++){C[l]=0;}

plus[q].onclick = function() {nplus(), PRIXART() };


function nplus() {
ni+=1;
} 

moins[q].onclick = function() {mmoins(), PRIXART() };


function mmoins() {
mi+=1;
} 
const cs =prix[q].innerHTML;
function PRIXART (){
     C[q]= prix[q].innerHTML;
if (ni-mi>0)
 {
   C[q]= cs *(ni-mi);
   

}
 else {
    mi=ni;
    C [q]= 0; 
}

prix[q].innerHTML=C[q];
    console.log(C);
    console.log (ni-mi);
    numbre[q].innerHTML=ni-mi;

let x=0;
let f=0;
while (f<C.length)
{x+=C[f];
f+=1;
}
console.log(x); 
summe.innerHTML=x; 

}

}













