// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

console.log('connected')

var buttons = document.getElementsByTagName('button');
var buttonsArr = [...buttons];
const expArea = document.getElementById('expression');
const solArea = document.getElementById('solution');
solArea.innerText = '0';

var ops = [];
var prevResult = '';

buttonsArr.forEach(element => {
    if (element.value != 'clr' && element.value != 'eql') {
        element.addEventListener('click', event => {
            let value = event.target.value;
            expArea.innerText += value;
            ops.push(value);
            // solve();
        })
    }
});

function solve() {
    console.log('solving...')
    let exp = ops.join('');
    let result = eval(prevResult + exp);
    console.log('result', result)
    solArea.innerText = result;
    prevResult = result;
    ops = [];
}

function clearData() {
    console.log('clearing...')
    ops = [];
    expArea.innerText = '';
    solArea.innerText = '0';
    prevResult = null;
}



