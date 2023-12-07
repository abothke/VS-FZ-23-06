let gallery = document.querySelector("#gallery");
console.log(gallery);

let counter = 0;
while (counter <3){
    gallery.innerHTML += "<figure><img src=\"https://source.unsplash.com/random/300×300\" width=\"200\"></figure>";
    counter = counter +1;
}


