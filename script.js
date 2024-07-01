document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("mousemove", function(event) {
        var follower = document.getElementById("follower");
        follower.style.left = (event.pageX - 50) + "px"; // Offset to center the image horizontally
        follower.style.top = (event.pageY - 50) + "px"; // Offset to center the image vertically
    });
});
