const mainContainer = document.querySelector('#main-container');
const button = document.querySelector('button');

button.addEventListener('click', makeGrid);

function generateRandomColor() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    const color = `rgb(${r}, ${g}, ${b})`;

    return color;
}

function makeGrid() {
    mainContainer.innerHTML = '';
    const rows = parseInt(prompt('How big is the grid going to be?'));
    const randomColor = generateRandomColor();

    if (rows < 100) {
        
        for (let i = 0; i < rows; i++) {
            const row = document.createElement('div');
            row.className = 'row-color row-border row-width height flex';
            mainContainer.appendChild(row);
        
            for (let j = 0; j < rows; j++) {
                let div = document.createElement('div');
                div.style.width = `${1 / 4 * 100}%`;
                div.className = 'vertical-border';
                row.appendChild(div);
        
                div.addEventListener('mouseenter', (e) => {
                    div.style.backgroundColor = randomColor;
                });
            }
        }
    }
}