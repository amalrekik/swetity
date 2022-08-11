var okk= document.getElementById("ok");
var imco= document.getElementById("imc");
var result= document.getElementById("id34");
var v1= document.getElementById("1");
var v2= document.getElementById("2");
var v3= document.getElementById("3");
var v4= document.getElementById("4");
var v5= document.getElementById("5");
var v6= document.getElementById("6");
var val= document.getElementById("valeure");
var taille= document.getElementById("formGroupExampleInput").value;
var poid= document.getElementById("formGroupExampleInput2").value;
okk.onclick = function() {oki ()}
function oki (){
   confirm( "vous aller avoir notre actualité sur votre mail" ) 
}
var x=0;
imco.onclick = function() {IMC ()}
function IMC () {
    var taille= parseInt(document.getElementById("formGroupExampleInput").value);
    var poid= parseInt(document.getElementById("formGroupExampleInput2").value);
   console.log(poid);
   console.log(taille);
   x= poid/((taille/100)**2);
    console.log(x);
    result.style.display='block';
    val.innerHTML=x.toFixed(2);
    if (x<18.5){
v1.style.background ='rgb(237, 100, 132)';
v2.style.background ='none';  
v3.style.background ='none';  
v4.style.background ='none';  
v5.style.background ='none';  
v6.style.background ='none';  
    }
    else if (x>=18.5 && x<25){
        v1.style.background ='none';
        v2.style.background ='rgb(237, 100, 132)';  
        v3.style.background ='none';  
        v4.style.background ='none';  
        v5.style.background ='none';  
        v6.style.background ='none';       
    }
    else if(x>=25 && x<30){
        v1.style.background ='none';
        v2.style.background ='none';  
        v3.style.background ='rgb(237, 100, 132)';  
        v4.style.background ='none';  
        v5.style.background ='none';  
        v6.style.background ='none';     
    }
    else if (x>=30 && x<35){
        v1.style.background ='none';
        v2.style.background ='none';  
        v3.style.background ='none';  
        v4.style.background ='rgb(237, 100, 132)';  
        v5.style.background ='none';  
        v6.style.background ='none';        
    }
    else if (x>=35 && x<40){
        v1.style.background ='none';
        v2.style.background ='none';  
        v3.style.background ='none';  
        v4.style.background ='none';  
        v5.style.background ='rgb(237, 100, 132)';  
        v6.style.background ='none';       
    }
    else {
        v1.style.background ='nonr';
        v2.style.background ='none';  
        v3.style.background ='none';  
        v4.style.background ='none';  
        v5.style.background ='none';  
        v6.style.background ='rgb(237, 100, 132)';     
    }
}