function makeRed() {
    document.body.style.backgroundColor = 'red';
}



// handle blue button click by setting function name
const blueButton = document.getElementById('make-blue-button');
// console.log(blueButton);

// just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}



// handle event using anonymous function
const greenButton = document.getElementById('make-green-button');
// console.log(greenButton);

// greenButton.onclick = function makeGreen() {
// Anonymous Function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
};



// handle by using add eventListener
const goldenButton = document.getElementById('make-goldenrod');
// console.log(goldenButton);
goldenButton.addEventListener('click', makeGoldenrod);

function makeGoldenrod() {
    document.body.style.backgroundColor = 'goldenrod';
}



// addEventListener
const hotPinkButton = document.getElementById('make-hotpink');
hotPinkButton.addEventListener(
    'click', function () {
        document.body.style.backgroundColor = 'hotpink';
    }
);



// direct shortcut
document.getElementById('ligth-blue').addEventListener(
    'click', function () {
        document.body.style.backgroundColor = 'lightBlue';
    }
);