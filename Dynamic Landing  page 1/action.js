var prev=document.getElementById('prev');
var next=document.getElementById('next');
var thumbnil=document.getElementsByClassName('thumbnil');
var hero=document.getElementById('hero');
var backgroundimg=new Array(
    "images/img5.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img1.jpg",
);
let i=0;
next.onclick=function(){
    if(i<4){
        hero.style.backgroundImage='url("'+backgroundimg[i+1]+'")';
        thumbnil[i+1].classList.add("active");
        thumbnil[i].classList.remove("active");
        i++;
        if(thumbnil[i]==1){
        document.getElementsByClassName('info h1').innerHTML="Amarnath Sharma";
        }
    }
    
    
}
prev.onclick=function(){
    if(i>0){
        hero.style.backgroundImage='url("'+backgroundimg[i-1]+'")';
        thumbnil[i-1].classList.add("active");
        thumbnil[i].classList.remove("active");
        i--;
    }
}
