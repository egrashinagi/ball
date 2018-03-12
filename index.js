const field = document.querySelector('.field');
const ball = field.querySelector('.ball');

const coordsField = field.getBoundingClientRect();
const coordsInner = {
    top: coordsField.top + field.clientTop,
    left: coordsField.left + field.clientLeft
};

function moveBall(x,y) {
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
}

// move ball to center
moveBall(200 - ball.clientHeight/2, 100 - ball.clientWidth/2);

function onFieldClick(event) {
    const coordsBall = {
        top: event.clientY - coordsInner.top - ball.clientHeight/2,
        left: event.clientX - coordsInner.left - ball.clientWidth/2
    };

    if (coordsBall.top < 0) coordsBall.top = 0;

    if (coordsBall.left < 0) coordsBall.left = 0;

    if (coordsBall.left + ball.clientWidth > field.clientWidth) {
        coordsBall.left = field.clientWidth - ball.clientWidth;
    }

    if (coordsBall.top + ball.clientHeight > field.clientHeight) {
        coordsBall.top = field.clientHeight - ball.clientHeight;
    }

    // move ball to coordinates - coordsBall
    moveBall(coordsBall.left, coordsBall.top);
}

field.addEventListener('click', onFieldClick);

