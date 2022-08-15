const container = document.querySelector('#container');

const buttons = document.createElement('div');
buttons.classList.add('content');
buttons.textContent = 'Select:   ';

container.appendChild(buttons)

const rock = document.createElement('button');
rock.textContent = 'rock';
rock.addEventListener('click', () => {
    console.log("rock")
})
buttons.appendChild(rock);


const paper = document.createElement('button');
paper.textContent = 'paper';
paper.addEventListener('click', () => {
    console.log("paper")
})
buttons.appendChild(paper);

const scissors = document.createElement('button');
scissors.textContent = 'scissors';
scissors.addEventListener('click', () => {
    console.log('scissors')
})
buttons.appendChild(scissors)