var c = 0;
var image = ["img1.jpg" , "img2.jpg"];

function changeImg(){
    c = (c + 1) % image.length;
    document.getElementById("imgChange").innerHTML = "<img src='" + image[c] + "'>";
}