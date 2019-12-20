
function generateCat(){
    var image = document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    image.src = "https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/7l0.gif";
    div.appendChild(image);
}