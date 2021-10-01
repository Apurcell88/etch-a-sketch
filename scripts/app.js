const mainContainer = document.querySelector('#main-container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.className = 'row-color row-border row-width height flex';
    mainContainer.appendChild(row);

    for (let j = 0; j < 16; j++) {
        let div = document.createElement('div');
        div.className = 'vertical-border width';
        row.appendChild(div);
    }
}