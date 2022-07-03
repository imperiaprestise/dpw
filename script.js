console.log ("Halo");

const a = document.querySelectorAll("a");
for (let i=0; i<a.length; i++){
a[i].style.color= "salmon";
a[i].style.fontFamily= "times new roman";
a[i].style.fontSize= "20px";
}

var judul = document.querySelector(".heading1");
judul.innerHTML="Welcome!!!";
judul.style.fontSize="70px";
judul.style.fontFamily="Times New Roman";
judul.style.marginBottom= "60px";
judul.style.color= "pink";

const p = document.getElementsByTagName('p')
p[0].style.color= "black";

const card = document.getElementsByClassName("column");
card[0].style.backgroundColor="yellow";
card[1].style.backgroundColor="yellow";


const h2 = document.getElementById("judulkiri");
h2.style.color= "black";
h2.style.fontSize= "25px";

const h3 = document.getElementById("judulkanan");
h3.style.color= "lightcoral";
h3.style.fontSize= "25px";

const button = document.getElementsByClassName("readmore");
button[0].style.backgroundColor= "blue";
button[1].style.backgroundColor= "blue";
