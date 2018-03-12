const ball = document.querySelector('.ball');

ball.onmousedown = function(e) {

    let coords = getCoords(ball);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;


    ball.style.position = 'absolute';
    moveAt(e);
    document.body.appendChild(ball);

    ball.style.zIndex = 1000;

    function moveAt(e) {
        ball.style.left = e.pageX - shiftX + 'px';
        ball.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    ball.onmouseup = function() {
        document.onmousemove = null;
        ball.onmouseup = null;
    };

    ball.ondragstart = function() {
        return false;
    };
};

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}