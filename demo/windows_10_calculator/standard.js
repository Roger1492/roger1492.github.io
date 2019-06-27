let display = document.getElementsByClassName('display')[0];
let numbers = Array.from(document.querySelectorAll('.number'));
let operator = Array.from(document.querySelectorAll('.operator'));
let clearAll = document.getElementsByClassName('clearAll')[0];
let square = document.getElementsByClassName('square')[0];
let factorial = document.getElementsByClassName('factorial')[0];
let clearBackward = document.getElementsByClassName('clearBackward')[0];
let equal = document.getElementsByClassName('equal')[0];
let arrNum = [];

// 输入数字和点
numbers.forEach((item, index, arr) => {
  item.addEventListener('click', function (e) {
    if (typeof parseFloat(display.innerHTML) === 'number' || display.innerHTML === '.') {
      if (display.innerHTML.indexOf('.') !== -1) {
        if (this.innerHTML !== '.') {
          display.innerHTML += this.innerHTML;
        }
      }
      else {
        display.innerHTML += this.innerHTML;
      }
    }
  }, false);
})

// 输入符号，并且把前一个数字保存起来
operator.forEach((item, index, arr) => {
  item.addEventListener('click', function(e){
    arrNum[arrNum.length] = display.innerHTML;
    arrNum[arrNum.length] = this.innerHTML;
    display.innerHTML = '';
  }, false);
})

// 计算结果
equal.addEventListener('click', function(e){
  arrNum[arrNum.length] = display.innerHTML;
  display.innerHTML = calculator(arrNum[0],arrNum[1],arrNum[2]);
}, false);

// 清除结果
clearAll.addEventListener('click', function(e){
  display.innerHTML = '';
  arrNum.length= 0;
}, false);

// 清除最后一位数字
clearBackward.addEventListener('click', function(e){
  if(display.innerHTML !== ''){
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length-1);
  }
}, false);

// 平方
square.addEventListener('click', function(e){
  display.innerHTML = parseFloat(display.innerHTML) * parseFloat(display.innerHTML);
}, false);

// 阶乘
factorial.addEventListener('click', function(e){
  let num = parseFloat(display.innerHTML);
  display.innerHTML = fac(num);
}, false);

// 阶乘函数
function fac(n){
  if(n === 0){
    return 1;
  } else {
    return n * fac(n-1);
  }
}

// 计算函数
function calculator(firstNum, operation, secondNum){
  if(operation === '+'){ return parseFloat(firstNum) + parseFloat(secondNum); }
  if(operation === '-'){ return parseFloat(firstNum) - parseFloat(secondNum); }
  if(operation === '*'){ return parseFloat(firstNum) * parseFloat(secondNum); }
  if(operation === '/'){ return parseFloat(firstNum) / parseFloat(secondNum); }
}