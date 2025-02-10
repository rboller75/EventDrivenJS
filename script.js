function customFunction() {
    console.log("Changed the picture");
}

document.getElementById("clickBtn").addEventListener("click", function() {
    const img = document.getElementById("image");
    img.src = "image2.jpg";

    customFunction();
})

document.getElementById("mouseoverImage").addEventListener("mouseover", function() {
    const imgTitle = document.getElementById("image").alt;
    alert("You are hovering over " + imgTitle);
});
