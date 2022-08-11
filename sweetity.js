


var heart11 = document.getElementsByClassName("coeur");



for (let i=0; i<heart11.length; i++){
 

 


heart11[i].onclick = function() {red (), conteur ()}
let n =0;  
function conteur () { 
    n+= 1;
}

function red () {  
    if ( heart11[i].style.color=='grey')
     {for (let q=Math.floor(i/5)*5; q<i+1; q++){
        heart11[q].style.color='rgb(180, 3, 3)';}
       }
else {for (let q=i; q<(Math.floor(i/5)+1)*5; q++){
    heart11[q].style.color='grey';}
    }
  }}

  var prixGour =document.getElementsByClassName("prixG")
  const G=new Array();
  for (let i=0; i<prixGour.length; i++)
  { G[i]=prixGour[i].innerHTML;}
  var prixHelt =document.getElementsByClassName("prixH")
  const H=new Array();
  for (let i=0; i<prixHelt.length; i++)
  { H[i]=prixHelt[i].innerHTML;}
  var prixNor =document.getElementsByClassName("prixN")
  const N=new Array();
  for (let i=0; i<prixNor.length; i++)
  { N[i]=prixNor[i].innerHTML;}
  var plusGour =document.getElementsByClassName("plusG")
  const ppg=new Array();
  for (let i=0; i<plusGour.length; i++)
  { ppg[i]=0;}
  var plusHelt =document.getElementsByClassName("plusH")
  const pph=new Array();
  for (let i=0; i<plusGour.length; i++)
  { pph[i]=0;}
  var plusNor =document.getElementsByClassName("plusN")
  const ppn=new Array();
  for (let i=0; i<plusGour.length; i++)
  { ppn[i]=0;}
  var moinsGour =document.getElementsByClassName("moinsG")
  const mmg=new Array();
  for (let i=0; i<plusGour.length; i++)
  { mmg[i]=0;}
  var moinsHelt =document.getElementsByClassName("moinsH")
  const mmh=new Array();
  for (let i=0; i<plusGour.length; i++)
  { mmh[i]=0;}
  var moinsNor =document.getElementsByClassName("moinsN")
  const mmn=new Array();
  for (let i=0; i<plusGour.length; i++)
  { mmn[i]=0;}
  var nbrN =document.getElementsByClassName("nN")
  var nbrG =document.getElementsByClassName("nG")
  var nbrH =document.getElementsByClassName("nH")
  var nbe =document.getElementsByClassName("num")
  var som =document.getElementsByClassName("sum")
  var com =document.getElementsByClassName("commande")
  var tot = document.getElementById("total1");
  var  annulation= document.getElementById("annul"); 
  var  ZEROO= document.getElementById("id00"); 

  const W=new Array();
  for (let i=0; i<som.length; i++)
  { W[i]=som[i].innerHTML;}
 
  for (let i=0; i<som.length; i++)
  {

var C=new Array();
for (let l=0;l<15; l++){C[l]=0;}


var x=0;
let xg=0;
let xh=0;

  plusNor[i].onclick = function() { plusN (), totalN (), Ntotal (), NN (), Stotal ()}
  
  let pn=0;
  function plusN (){pn+=1; console.log(pn);}
  
    

  plusGour[i].onclick = function() { plusG (), totalG (), Ntotal (), NG (), Stotal ()}
  let pg=0;
  function plusG (){pg+=1;}
  
  plusHelt[i].onclick = function() { plusH (), totalH (), Ntotal (), NH (), Stotal ()}
  let ph=0;
  function plusH (){ph+=1;}
 
  moinsNor[i].onclick = function() { moinsN (), totalN (), Ntotal (), NN (), Stotal ()}
  let mn=0;
  function moinsN (){mn+=1;}
 
  moinsGour[i].onclick = function() { moinsG (), totalG (), Ntotal (), NG (), Stotal ()}
  let mg=0;
  function moinsG (){mg+=1;}

  moinsHelt[i].onclick = function() { moinsH (), totalH (), Ntotal (), NH (), Stotal ()}
  let mh=0;
  function moinsH (){mh+=1;}

  const cN =prixNor[i].innerHTML;
  const cG =prixGour[i].innerHTML;
  const cH =prixHelt[i].innerHTML;
  let CNor=0;
  let CGour=0;
  let CHelt=0;

  function totalN (){
    if (pn-mn>0){CNor=cN*(pn-mn);}
    else{mn=pn; CNor=0;}
    prixNor[i].innerHTML=CNor;
   
  }

  function totalG (){
    if (pg-mg>0){CGour=cG*(pg-mg);}
    else{mg=pg; CGour=0;}
    prixGour[i].innerHTML=CGour;

  }
  
  function totalH (){
    if (ph-mh>0){CHelt=cH*(ph-mh);}
    else{mh=ph; CHelt=0;}
    prixHelt[i].innerHTML=CHelt;
  
  }
var d=0;
  function NN (){nbrN[i].innerHTML=pn-mn; d=pn-mn;}
  function NH (){if (cH!=0) {xh=ph-mh;}
                else{xh=0};
                nbrH[i].innerHTML=xh;}
  function NG (){if (cG!=0) {xg=pg-mg;}
                 else{xg=0}; 
                 nbrG[i].innerHTML=xg;}
  function Ntotal (){nbe[i].innerHTML=xh+xg+(pn-mn);}
  function Stotal (){som[i].innerHTML=CNor+CHelt+CGour;
  }
  
    com[i].onclick = function() {totalle (), annpn (), annpg (), annph (), annmn (), annmh (), annmg (), anncom ()}

    function totalle (){
      x+=Number(som[i].innerHTML)
      tot.innerHTML=x;}
      function annpn (){pn=0;console.log(pn);}
      function annpg (){pg=0;}
      function annph (){ph=0;} 
      function annmn (){mn=0;} 
      function annmg (){mg=0;} 
      function annmh (){mh=0;} 
      function anncom (){
        nbe[i].innerHTML=1;
    som[i].innerHTML=W[i];
    nbrN[i].innerHTML =1;
    nbrG[i].innerHTML =1;
    nbrH[i].innerHTML =1;
    prixNor[i].innerHTML=N[i];
    prixHelt[i].innerHTML=H[i];
    prixGour[i].innerHTML=G[i];
    CNor=0;
    CGour=0;
    CHelt=0;
      }
  }


  var conf =document.getElementsByClassName("btn btn-primary mb-2");
  var pannif =document.getElementsByClassName("prixannif");


  var totannif = document.getElementById("total2");
  var pan1 = document.getElementById("summe1");
  var pan2 = document.getElementById("summe2");
  var  panii1= document.getElementById("pa1");
  var  panii2= document.getElementById("pa2");
  var  panii= document.getElementById("total");
  var  ind= document.getElementById("indice"); 
  var  fin= document.getElementById("sommefinale");
  var  fin7= document.getElementById("sommefinale7"); 
  var annannif0= document.getElementById("id20");
  var annannif1= document.getElementById("id21");
  var annannif2= document.getElementById("id22");
  var annannif3= document.getElementById("id23");
  var annannif4= document.getElementById("id24");
  var annannif5= document.getElementById("id25");
  var annannif6= document.getElementById("id26");
  var annannif7= document.getElementById("id27");
  var envoyez= document.getElementById("envoi");
  var rayy= document.getElementById("ray");
  var rayi= document.getElementById("id28");

 for (let k=0; k<pannif.length; k++)
  {
    var o=0;
  conf[k].onclick = function() {confir ()}
function confir (){
  if ( confirm( "vous vouler vraiment commander?" ) ) {
   o+=Number(pannif[k].innerHTML);
   annannif0.style.display='none';
   annannif1.style.display='none';
   annannif2.style.display='none';
   annannif3.style.display='none';
   annannif4.style.display='none';
   annannif5.style.display='none';
   annannif6.style.display='none';
   annannif7.style.display='none'; 
} else {
    return false;
}

totannif.innerHTML=o;
}}

panii1.onclick = function() {panier1 (), fac ()}
function panier1 (){

  pan1.innerHTML=x;
  indice.innerHTML='1';
  indice.style.background ='red';
}

panii2.onclick = function() {panier2 (),  fac ()}
function panier2 (){

pan2.innerHTML=o;
indice.innerHTML='2';
indice.style.background ='red';
}
var t=0;
function fac (){
t =x+o;
console.log(t);
fin.innerHTML=t;
fin7.innerHTML=t+7;

}

annulation.onclick = function() {ann ()}
function ann (){
  indice.innerHTML='';
  indice.style.background ='none';
  totannif.innerHTML='Total';
  tot.innerHTML='Total';
  fin.innerHTML=0;
  x=0;
  o=0;
  console.log(t);
  fin7.innerHTML=7;
  pan2.innerHTML=0;
  pan1.innerHTML=0;
   
  ZEROO.style.display='none'; 
}

envoyez.onclick = function() {confirfin ()}
function confirfin (){
  if ( confirm( "votre commande est en cour de traitement" ) ) {
    ZEROO.style.display='none';
    indice.innerHTML='';
  indice.style.background ='none';
  totannif.innerHTML='Total';
  tot.innerHTML='Total';
  fin.innerHTML=0;
  x=0;
  o=0;
  console.log(t);
  fin7.innerHTML=7;
  pan2.innerHTML=0;
  pan1.innerHTML=0;
 } else {
     return false;
 }
}

rayy.onclick = function() {rai ()}
function rai (){
  if ( confirm( "merci de partager avec nous votre avis" ) ) {
    rayi.style.display='none';
 } else {
  rayi.style.display='none';
     return false;
 }

}