let display = document.getElementsByClassName('st-display')[0];
let numbers = Array.from(document.querySelectorAll('.st-number'));
let operator = Array.from(document.querySelectorAll('.st-operator'));
let clearAll = document.getElementsByClassName('st-clearAll')[0];
let square = document.getElementsByClassName('st-square')[0];
let dot = document.getElementsByClassName('st-dot')[0];
let factorial = document.getElementsByClassName('factorial')[0];
let clearBackward = document.getElementsByClassName('st-clearBackward')[0];
let equal = document.getElementsByClassName('st-equal')[0];
let historyWrap = document.getElementsByClassName('st-history-wrap')[0];
let historyDelete = document.getElementsByClassName('st-history-delete')[0];
let arrNum = [];


// 输入数字和点
numbers.forEach((item, index, arr) => {
  item.addEventListener('click', function (e) {

    // 如果输入的第一个就是点，则在前面加0
    if (display.innerHTML === '' && this.innerHTML === '.') {
      display.innerHTML = '0.';
    }

    if (typeof parseFloat(display.innerHTML) === 'number' || display.innerHTML === '.') {
      if (display.innerHTML.indexOf('.') !== -1) {
        if (this.innerHTML !== '.') {
          display.innerHTML += this.innerHTML;
        }
      } else {
        display.innerHTML += this.innerHTML;
      }
    }
  }, false);
})


// 输入符号，并且把前一个数字保存起来
operator.forEach((item, index, arr) => {
  item.addEventListener('click', function (e) {
    arrNum[arrNum.length] = display.innerHTML;
    arrNum[arrNum.length] = this.innerHTML;
    display.innerHTML = '';
  }, false);
})

// 计算结果
equal.addEventListener('click', function (e) {
  if (display.innerHTML === '' || display.innerHTML === 'undefined' || arrNum.length === 0) {
    return;
  } else {

    arrNum[arrNum.length] = display.innerHTML;
    display.innerHTML = calculator(arrNum[0], arrNum[1], arrNum[2]);

    saveToMemory({
      fNum: arrNum[0],
      oper: arrNum[1],
      sNum: arrNum[2],
      result: display.innerHTML
    });
    arrNum.length = 0;
  }
}, false);

// 清除结果
clearAll.addEventListener('click', function (e) {
  display.innerHTML = '';
  arrNum.length = 0;
}, false);

// 清除最后一位数字
clearBackward.addEventListener('click', function (e) {
  if (display.innerHTML !== '') {
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
  }
}, false);

// 平方
square.addEventListener('click', function (e) {
  display.innerHTML = parseFloat(display.innerHTML) * parseFloat(display.innerHTML);
}, false);

// 删除历史记录
historyDelete.addEventListener('click', function(e){
  historyWrap.innerHTML = '';
}, false);

// 阶乘
factorial.addEventListener('click', function (e) {
  let num = parseFloat(display.innerHTML);
  display.innerHTML = fac(num);
}, false);

// 阶乘函数
function fac(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fac(n - 1);
  }
}

// 计算函数
function calculator(firstNum, operation, secondNum) {
  if (operation === '+') {
    return parseFloat(firstNum) + parseFloat(secondNum);
  }
  if (operation === '-') {
    return parseFloat(firstNum) - parseFloat(secondNum);
  }
  if (operation === '*') {
    return parseFloat(firstNum) * parseFloat(secondNum);
  }
  if (operation === '/') {
    return parseFloat(firstNum) / parseFloat(secondNum);
  }
}

function saveToMemory({
  fNum,
  oper,
  sNum,
  result
}) {
  let newWrap = `
  <div class="history-item st-history-item">
    <div class="history-input st-history-input">
      <span class="history-equal st-history-equal">&equals;</span>
      <span class="history-snum st-history-snum">${sNum}</span>
      <span class="histtory-oper st-history-oper">${oper}</span>
      <span class="history-fnum st-history-fnum">${fNum}</span>
    </div>
    <div class="history-result st-history-result">${result}</div>
  </div>
  `;
  historyWrap.innerHTML += newWrap;
}