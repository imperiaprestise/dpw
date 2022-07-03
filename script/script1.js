const h1 = document.getElementById("hai")
h1.style.color = "green";
h1.style.backgroundColor = "black";

const h2 = document.getElementsByTagName("p");
h2[0].style.color = "green";
h2[0].style.backgroundColor = "black"

const h3 = document.getElementsByClassName("halo");
h3[0].style.color = "green";
h3[1].style.color = "blue";

const h4 = document.querySelector("#query");
h4.style.color = "purple";

const h5 = document.querySelectorAll("p");
h5[0].style.color = "purple";