const square = document.querySelector('.square');

square.onmousedown = function(e) {

    let coords = getCoords(square);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;


    square.style.position = 'absolute';
    moveAt(e);
    document.body.appendChild(square);

    square.style.zIndex = 1000;

    function moveAt(e) {
        square.style.left = e.pageX - shiftX + 'px';
        square.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    square.onmouseup = function() {
        document.onmousemove = null;
        square.onmouseup = null;
    };

    square.ondragstart = function() {
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
