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


const body = document.querySelector('body');


const scoreText = document.querySelector('.score');


let count = 1;


firstBtn.addEventListener('click', function (){
    first.style.display = "none";
    second.style.display = "block";
    count++;
    scoreText.innerText = count;
});

secondBtn.addEventListener('click', function (){
    second.style.display = "none";
    third.style.display = "block";
    count++;
    scoreText.innerText = count;
});

thirdBtn.addEventListener('click', function (){
    third.style.display = "none";
    forth.style.display = "block";
    count++;
    scoreText.innerText = count;
});

forthBtn.addEventListener('click', function (){
    forth.style.display = "none";
    five.style.display = "block";
    count++;
    scoreText.innerText = count;
});

fiveBtn.addEventListener('click', function (){
    five.style.display = "none";
    six.style.display = "block";
    count++;
    scoreText.innerText = count;
});

sixBtn.addEventListener('click', function (){
    six.style.display = "none";
    seven.style.display = "block";
    count++;
    scoreText.innerText = count;
});

sevenBtn.addEventListener('click', function (){
    seven.style.display = "none";
    eight.style.display = "block";
    count++;
    scoreText.innerText = count;
});

eightBtn.addEventListener('click', function (){
    eight.style.display = "none";
    nine.style.display = "block";
    count++;
    scoreText.innerText = count;
});

nineBtn.addEventListener('click', function (){
    nine.style.display = "none";
    ten.style.display = "block";
    count++;
    scoreText.innerText = count;
});

tenBtn.addEventListener('click', function (){
    ten.style.display = "none";
    eleven.style.display = "block";
    count++;
    scoreText.innerText = count;
});


elevenBtn.addEventListener('click', function (){
    eleven.style.display = "none";
    twelve.style.display = "block";
    count++;
    scoreText.innerText = count;
});

twelveBtn.addEventListener('click', function (){
    twelve.style.display = "none";
    thirteen.style.display = "block";
    count++;
    scoreText.innerText = count;
});

thirteenBtn.addEventListener('click', function (){
    thirteen.style.display = "none";
    fourteen.style.display = "block";
    count++;
    scoreText.innerText = count;
});

fourteenBtn.addEventListener('click', function (){
    fourteen.style.display = "none";
    fifteen.style.display = "block";
    count++;
    scoreText.innerText = count;
});


fifteenBtn.addEventListener('click', function (){
    fifteen.style.display = "none";
    sixteen.style.display = "block";
    count++;
    scoreText.innerText = count;
});

sixteenBtn.addEventListener('click', function (){
    sixteen.style.display = "none";
    seventeen.style.display = "block";
    count++;
    scoreText.innerText = count;
});

seventeenBtn.addEventListener('click', function (){
    seventeen.style.display = "none";
    eighteen.style.display = "block";
    count++;
    scoreText.innerText = count;
});

eighteenBtn.addEventListener('click', function (){
    eighteen.style.display = "none";
    nineteen.style.display = "block";
    count++;
    scoreText.innerText = count;
});


nineteenBtn.addEventListener('click', function (){
    nineteen.style.display = "none";
    twenty.style.display = "block";
    count++;
    scoreText.innerText = count;
});

twentyBtn.addEventListener('click', function (){
    twenty.style.display = "none";
    twentyOne.style.display = "block";
    count++;
    scoreText.innerText = count;


    // ***end text****
    let tag = document.createElement('div');
    tag.textContent = "တစ်နေ့ကျရင် ချစ်ကို လက်ထက်မယ်...";
    tag.style.textAlign = "center";


    body.append(tag);


});


