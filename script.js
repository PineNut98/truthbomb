document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("mousemove", function(event) {
        var follower = document.getElementById("follower");
        follower.style.left = event.pageX + "px";
        follower.style.top = event.pageY + "px";
    });
});
