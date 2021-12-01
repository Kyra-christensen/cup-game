// import functions and grab DOM elements
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');
const imgOne = document.getElementById('cup-one-img');
const imgTwo = document.getElementById('cup-two-img');
const imgThree = document.getElementById('cup-three-img');
const winEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

console.log(buttonOne);
console.log(buttonTwo);
console.log(buttonThree);
console.log(imgOne);
console.log(imgTwo);
console.log(imgThree);
console.log(winEl);
console.log(lossesEl);
console.log(totalEl);

// let state
let wins = 0;
let total = 0;

 
// set event listeners 
buttonOne.addEventListener('click', () => {
    resetImages();

    total++;

    const randomCup = Math.floor(Math.random() * 3);
    
    if (randomCup === 0) {
        wins++;

        imgOne.src = './assets/correct-cup.png';
    } else if (randomCup === 1) {
        imgTwo.src = './assets/correct-cup.png';
    } else {
        imgThree.src = './assets/correct-cup.png';
    }

    winsLossesandTotal();
  
});

buttonTwo.addEventListener('click', () => {
    resetImages();

    total++;

    const randomCup = Math.floor(Math.random() * 3);

    if (randomCup === 0) {
        wins++;

        imgOne.src = './assets/correct-cup.png';

    } else if (randomCup === 1) {
        imgTwo.src = './assets/correct-cup.png';

    } else {
        imgThree.src = './assets/correct-cup.png';
    }

    winsLossesandTotal();

});

buttonThree.addEventListener('click', () => {
    resetImages();

    total++;

    const randomCup = Math.floor(Math.random() * 3);

    if (randomCup === 0) {
        wins++;

        imgOne.src = './assets/correct-cup.png';

    } else if (randomCup === 1) {
        imgTwo.src = './assets/correct-cup.png';

    } else {
        imgThree.src = './assets/correct-cup.png';
    }

    winsLossesandTotal();

});

function resetImages(){
    imgOne.src = './assets/cup.png';
    imgTwo.src = './assets/cup.png';
    imgThree.src = './assets/cup.png';
}

function winsLossesandTotal(){
    winEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
}
   