document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("mousemove", function(event) {
        var follower = document.getElementById("follower");
        follower.style.left = (event.pageX + 10) + "px"; // Offset to center the image horizontally
        follower.style.top = (event.pageY + 10) + "px"; // Offset to center the image vertically
    });
});
