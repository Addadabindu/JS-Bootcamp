function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

document.addEventListener('click', changeBackgroundColor);



// function setRandomGradient() {
//     const color1 = getRandomColor();
//     const color2 = getRandomColor();
//     const randomGradient = `linear-gradient(to right,${color1}, ${color2})`;
//     document.body.style.background = randomGradient;
// }

// document.addEventListener('click', setRandomGradient);

