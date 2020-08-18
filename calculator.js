// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

console.log('connected')

var buttons = document.getElementsByTagName('button');

var arr = [...buttons]

var ops = [1, 2, 3, '+', 4, 5, 6]
var result;
var num1 = '';
var num2 = '';

console.log(arr)
arr.forEach(element => {
    element.addEventListener('click', (event) => {
        // console.log('inside')
        // console.log(event.target.value)
        // if (event.target.value != '=' 
        // || event.target.value != 'clear' 
        // || event.target.value != '+' 
        // || event.target.value != '*'
        // || event.target.value != '-'
        // || event.target.value != '/'){
        //     num1 = num1 + event.target.value
        // } else {

        // }


        // if (event.target.value == '+') {
        //     result = add(a, b);//
        // }

        switch (event.target.value) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
        }

    })
});

function add(a, b) {
    return a + b;
}



