const resultText = document.querySelector('#result');
const button = document.querySelector('#draw');
const splash = document.querySelector('#splash');
const back = document.querySelector('body');

const images = [
        "url('images/image1.jpg')",
        "url('images/image2.jpg')",
        "url('images/image3.jpg')",
        "url('images/image4.jpg')",
];

let currentIndex = 0;

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    back.style.backgroundImage = images[currentIndex];
},5000);

/*
setTimeout(() => {
    back.style.backgroundImage = "url('images/image2.jpg')";
},3000);
setTimeout(() => {
    back.style.backgroundImage = "url('images/image3.jpg')";
},6000);
setTimeout(() => {
    back.style.backgroundImage = "url('images/image4.jpg')";
},9000);
*/


button.addEventListener('click',() =>{

resultText.classList.add("hide");
//splash.classList.add('show');



setTimeout(() =>{

const number = Math.floor(Math.random()*9)+1;
let result = '';

if(number === 1){
    result='大吉';
    //console.log('大吉');
} else if(number <= 3){
    result='中吉';
    //console.log('中吉');
} else if(number <= 6){
    result='小吉';
    //console.log('小吉');
} else if(number <= 8){
    result='吉';
    //console.log('吉');
} else {
    result='凶';
    //console.log('凶');
}

resultText.textContent = result;


resultText.classList.remove('hide');
//splash.classList.remove('show');
resultText.classList.add('red');


},1000);

//console.log(number);
//console.log(result);
//console.log(resultText.textContent);

});