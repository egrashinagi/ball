const square = document.querySelector('.square');

square.addEventListener('onmousedown', (e)=> {

    let coords = getCoords(square);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;

    square.classList.add('position');
    moveAt(e);
    document.body.appendChild(square);

    square.classList.add('index');

    function moveAt(e) {
        square.style.left = e.pageX - shiftX + 'px';
        square.style.top = e.pageY - shiftY + 'px';
    }

    document.addEventListener('onmousemove', (e)=> {
        moveAt(e)
    });

    square.addEventListener('onmouseup',()=> {
        document.onmousemove = null;
        square.onmouseup = null;
    });

    square.addEventListener('onmouseup', ()=> {
        document.onmousemove = null;
        square.onmouseup = null;
    });

    square.ondragstart =  function() {
        return false;
    };
});

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
