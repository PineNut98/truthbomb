document.addEventListener('mousemove', function(e) {
    var follower = document.getElementById('follower');
    var xOffset = -30; // Adjust these values as needed
    var yOffset = -30; // Adjust these values as needed
    
    follower.style.top = (e.clientY + yOffset) + 'px';
    follower.style.left = (e.clientX + xOffset) + 'px';
});
