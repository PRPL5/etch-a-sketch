const container = document.querySelector('.container');
const containerSize = 960;

container.style.maxWidth = `${containerSize}px`;
container.style.maxHeight = `${containerSize}px`;


function grid(size){
    size = prompt();
    let sized = parseInt(size);
    const gridSize = `${(containerSize / size )-2.6 }px`;
    container.innerHTML = ''

    if(size <= 100){

    for(let i = 0; i < sized; i++){
        const row = document.createElement('div');
        row.style.width = row.style.height = gridSize;
        row.className = 'gridBox';
        row.addEventListener('mouseover' , (event) => {
            let random1 = Math.floor(Math.random() * 100) + 1;
            let random2 = Math.floor(Math.random() * 100) + 1;
            let random3 = Math.floor(Math.random() * 100) + 1;

            event.target.style.backgroundColor = 'rgb('+random1+' , 10 , '+random2+'';
        });
        container.appendChild(row);
        for(let j = 0; j <  sized; j++){
            const col = document.createElement('div');
            col.style.width = col.style.height = gridSize;
            col.className = 'gridBox';
            row.appendChild(col);
        }
    }}else{

        alert('Number is too high! Please insert a number lower than 100 !')
    }    
}

