const field = document.querySelector('.field');
const ball = field.querySelector('.ball');

console.log('Это', field);
console.log('А это', ball);

function searchClick(event) {
    const coordsField = this.getBoundingClientRect();
    const coordsInner = {
        top: coordsField.top + field.clientTop,
        left: coordsField.left + field.clientLeft
    };
    const coordsBall = {
        top: event.clientY - coordsInner.top - ball.clientHeight / 2,
        left: event.clientX - coordsInner.left - ball.clientWidth / 2
    };
    if (coordsBall.top < 0) coordsBall.top = 0;
    if (coordsBall.left < 0) coordsBall.left = 0;
    if (coordsBall.left + ball.clientWidth > field.clientWidth) {
        coordsBall.left = field.clientWidth - ball.clientWidth;
    }
    if (coordsBall.top + ball.clientHeight > field.clientHeight) {
        coordsBall.top = field.clientHeight - ball.clientHeight;
    }
    ball.style.left = coordsBall.left + 'px';
    ball.style.top = coordsBall.top + 'px';
}

field.addEventListener('click', searchClick);