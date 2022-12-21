const firstBtn = document.querySelector('#first-btn');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const secondBtn = document.querySelector('#second-btn');
const third = document.querySelector('.third');
const thirdBtn = document.querySelector('#third-btn');
const forth = document.querySelector('.forth');
const forthBtn = document.querySelector('#forth-btn');
const five = document.querySelector('.five');
const fiveBtn = document.querySelector('#five-btn');
const six = document.querySelector('.six');
const sixBtn = document.querySelector('#six-btn');
const seven = document.querySelector('.seven');
const sevenBtn = document.querySelector('#seven-btn');
const eight = document.querySelector('.eight');
const eightBtn = document.querySelector('#eight-btn');
const nine = document.querySelector('.nine');
const nineBtn = document.querySelector('#nine-btn');
const ten = document.querySelector('.ten');
const tenBtn = document.querySelector('#ten-btn');
const eleven = document.querySelector('.eleven');
const elevenBtn = document.querySelector('#eleven-btn');
const twelve = document.querySelector('.twelve');
const twelveBtn = document.querySelector('#twelve-btn');
const thirteen = document.querySelector('.thirteen');
const thirteenBtn = document.querySelector('#thirteen-btn');
const fourteen = document.querySelector('.fourteen');
const fourteenBtn = document.querySelector('#fourteen-btn');
const fifteen = document.querySelector('.fifteen');
const fifteenBtn = document.querySelector('#fifteen-btn');
const sixteen = document.querySelector('.sixteen');
const sixteenBtn = document.querySelector('#sixteen-btn');
const seventeen = document.querySelector('.seventeen');
const seventeenBtn = document.querySelector('#seventeen-btn');
const eighteen = document.querySelector('.eighteen');
const eighteenBtn = document.querySelector('#eighteen-btn');
const nineteen = document.querySelector('.nineteen');
const nineteenBtn = document.querySelector('#nineteen-btn');
const twenty = document.querySelector('.twenty');
const twentyBtn = document.querySelector('#twenty-btn');
const twentyOne = document.querySelector('.twenty-one');
const twentyOneBtn = document.querySelector('#twenty-one-btn');

const prevBtns = document.querySelectorAll('.wrapper > div > button');

const wrapper = document.querySelector('.wrapper');
const lastWord = document.querySelector('#last-words');


prevBtns.forEach(btn => {
    btn.addEventListener('click', () =>{
        if(btn.id === "second-prev-btn"){
            second.style.display = "none";
            first.style.display = "block";
            scoreText.innerText = 1;

        }else if(btn.id === "third-prev-btn"){
            third.style.display = "none";
            second.style.display = "block";
            scoreText.innerText = 2;
        }else if(btn.id === "forth-prev-btn"){
            forth.style.display = "none";
            third.style.display = "block";
            scoreText.innerText = 3;
        }else if(btn.id === "five-prev-btn"){
            five.style.display = "none";
            forth.style.display = "block";
            scoreText.innerText = 4;
        }else if(btn.id === "six-prev-btn"){
            six.style.display = "none";
            five.style.display = "block";
            scoreText.innerText = 5;
        }else if(btn.id === "seven-prev-btn"){
            seven.style.display = "none";
            six.style.display = "block";
            scoreText.innerText = 6;
        }else if(btn.id === "eight-prev-btn"){
            eight.style.display = "none";
            seven.style.display = "block";
            scoreText.innerText = 7;
        }else if(btn.id === "nine-prev-btn"){
            nine.style.display = "none";
            eight.style.display = "block";
            scoreText.innerText = 8;
        }else if(btn.id === "ten-prev-btn"){
            ten.style.display = "none";
            nine.style.display = "block";
            scoreText.innerText = 9;
        }else if(btn.id === "eleven-prev-btn"){
            eleven.style.display = "none";
            ten.style.display = "block";
            scoreText.innerText = 10;
        }else if(btn.id === "twelve-prev-btn"){
            twelve.style.display = "none";
            eleven.style.display = "block";
            scoreText.innerText = 11;
        }else if(btn.id === "thirteen-prev-btn"){
            thirteen.style.display = "none";
            twelve.style.display = "block";
            scoreText.innerText = 12;
        }else if(btn.id === "fourteen-prev-btn"){
            fourteen.style.display = "none";
            thirteen.style.display = "block";
            scoreText.innerText = 13;
        }else if(btn.id === "fifteen-prev-btn"){
            fifteen.style.display = "none";
            fourteen.style.display = "block";
            scoreText.innerText = 14;
        }else if(btn.id === "sixteen-prev-btn"){
            sixteen.style.display = "none";
            fifteen.style.display = "block";
            scoreText.innerText = 15;
        }else if(btn.id === "seventeen-prev-btn"){
            seventeen.style.display = "none";
            sixteen.style.display = "block";
            scoreText.innerText = 16;
        }else if(btn.id === "eighteen-prev-btn"){
            eighteen.style.display = "none";
            seventeen.style.display = "block";
            scoreText.innerText = 17;
        }else if(btn.id === "nineteen-prev-btn"){
            nineteen.style.display = "none";
            eighteen.style.display = "block";
            scoreText.innerText = 18;
        }else if(btn.id === "twenty-prev-btn"){
            twenty.style.display = "none";
            nineteen.style.display = "block";
            scoreText.innerText = 19;
        }else if(btn.id === "twenty-one-prev-btn"){
            twentyOne.style.display = "none";
            twenty.style.display = "block";
            scoreText.innerText = 20;
        }
    })
});






const body = document.querySelector('body');


const scoreText = document.querySelector('.score');


let count = 1;


firstBtn.addEventListener('click', function (){
    first.style.display = "none";
    second.style.display = "block";
    scoreText.innerText = 2;
});

secondBtn.addEventListener('click', function (){
    second.style.display = "none";
    third.style.display = "block";

    scoreText.innerText = 3;
});

thirdBtn.addEventListener('click', function (){
    third.style.display = "none";
    forth.style.display = "block";
    scoreText.innerText = 4;
});

forthBtn.addEventListener('click', function (){
    forth.style.display = "none";
    five.style.display = "block";
    scoreText.innerText = 5;
});

fiveBtn.addEventListener('click', function (){
    five.style.display = "none";
    six.style.display = "block";
    scoreText.innerText = 6;
});

sixBtn.addEventListener('click', function (){
    six.style.display = "none";
    seven.style.display = "block";
    scoreText.innerText = 7;
});

sevenBtn.addEventListener('click', function (){
    seven.style.display = "none";
    eight.style.display = "block";
    scoreText.innerText = 8;
});

eightBtn.addEventListener('click', function (){
    eight.style.display = "none";
    nine.style.display = "block";
    scoreText.innerText = 9;
});

nineBtn.addEventListener('click', function (){
    nine.style.display = "none";
    ten.style.display = "block";
    scoreText.innerText = 10;
});

tenBtn.addEventListener('click', function (){
    ten.style.display = "none";
    eleven.style.display = "block";
    scoreText.innerText = 11;
});


elevenBtn.addEventListener('click', function (){
    eleven.style.display = "none";
    twelve.style.display = "block";
    scoreText.innerText = 12;
});

twelveBtn.addEventListener('click', function (){
    twelve.style.display = "none";
    thirteen.style.display = "block";
    scoreText.innerText = 13;
});

thirteenBtn.addEventListener('click', function (){
    thirteen.style.display = "none";
    fourteen.style.display = "block";
    scoreText.innerText = 14;
});

fourteenBtn.addEventListener('click', function (){
    fourteen.style.display = "none";
    fifteen.style.display = "block";
    scoreText.innerText = 15;
});


fifteenBtn.addEventListener('click', function (){
    fifteen.style.display = "none";
    sixteen.style.display = "block";
    scoreText.innerText = 16;
});

sixteenBtn.addEventListener('click', function (){
    sixteen.style.display = "none";
    seventeen.style.display = "block";
    scoreText.innerText = 17;
});

seventeenBtn.addEventListener('click', function (){
    seventeen.style.display = "none";
    eighteen.style.display = "block";
    scoreText.innerText = 18;
});

eighteenBtn.addEventListener('click', function (){
    eighteen.style.display = "none";
    nineteen.style.display = "block";
    scoreText.innerText = 19;
});


nineteenBtn.addEventListener('click', function (){
    nineteen.style.display = "none";
    twenty.style.display = "block";
    scoreText.innerText = 20;
});

twentyBtn.addEventListener('click', function (){
    twenty.style.display = "none";
    twentyOne.style.display = "block";
    scoreText.innerText = 21;
    lastWord.style.display = "block";
});


