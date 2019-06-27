let translationSwitch = Array.from(document.querySelectorAll('.pr-translation-switch span'));
let inputPanel = Array.from(document.querySelectorAll('.pr-input-panel > section'));

translationSwitch.forEach((item, index, arr) => {
  item.addEventListener('click', function(e){
    if(this.className === 'pts1'){
      inputPanel[0].style.display = 'block';
      inputPanel[1].style.display = 'none';
    }
    if(this.className === 'pts2'){
      inputPanel[0].style.display = 'none';
      inputPanel[1].style.display = 'block';
    }
  }, false);
})