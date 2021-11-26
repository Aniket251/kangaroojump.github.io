score = 0;
cross = true;
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        kangaroo = document.querySelector('.kangaroo');
        kangaroo.classList.add('animateKangaroo');
        setTimeout(() => {
            kangaroo.classList.remove('animateKangaroo');
        }, 700);
    }
    if (e.keyCode == 39) {
        kangaroo = document.querySelector('.kangaroo');
        kangarooX = parseInt(window.getComputedStyle(kangaroo, null).getPropertyValue('left'));
        kangaroo.style.left = kangarooX + 100 + "px";
    }
    if (e.keyCode == 37) {
        kangaroo = document.querySelector('.kangaroo');
        kangarooX = parseInt(window.getComputedStyle(kangaroo, null).getPropertyValue('left'));
        kangaroo.style.left = (kangarooX - 100) + "px";
    }
}
setInterval(() => {
    kangaroo = document.querySelector('.kangaroo');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    kx = parseInt(window.getComputedStyle(kangaroo, null).getPropertyValue('left'));
    ky = parseInt(window.getComputedStyle(kangaroo, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(kx - ox);
    offsetY = Math.abs(ky - oy);
    // console.log(offsetX, offsetY);
    if (offsetX < 93 && offsetY < 52) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAnimation');
    }
    else if (offsetX < 145 && cross) {
        score += 10;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            animationDuration = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDuration = animationDuration - 0.1;
            obstacle.style.animationDuration = newDuration + 's';
            console.log('New Duration Animation: ', newDuration)
        }, 500);

    }
}, 100);
function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}