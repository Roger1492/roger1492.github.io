// 显示和隐藏slider列表
let showHide = document.getElementsByClassName('show-hide')[0];
let slider = document.getElementById('slider');
let sliderli = Array.from(document.querySelectorAll('.slider-ul li'));
let title = document.getElementsByClassName('title')[0];
let calcWrap = Array.from(document.querySelectorAll('#calc-wrap > div'));
let otherInput = document.getElementById('otherInput');

showHide.addEventListener('click', function(e){
  slider.className = slider.className === 'show' ? 'hide' : 'show';
  slider.style.transition = 'all .3s';

  if(slider.className === 'show'){
    slider.style.left = '0px';
  }
  if(slider.className === 'hide'){
    slider.style.left = '-200px';
  }
},false);

sliderli.forEach((item, index, arr) => {
  item.addEventListener('click', function(e){
    title.innerHTML = this.innerHTML;
    // 隐藏全部
    calcWrap.forEach((item, index, arr) => {
      item.style.display = 'none';
    })

    // 显示点击的
    let getId = this.innerHTML.toLowerCase().split(' ').join('');
    document.getElementById(getId).style.display = 'block';


    // 如果点击的是Converter列表，就显示 #otherInput
    if(this.className === 'showOtherInput'){
      otherInput.style.display = 'block';
    } else {
      otherInput.style.display = 'none';
    }

    // 选择完列表项目后 自动把slider隐藏
    slider.className = 'hide';
    slider.style.left = '-200px';

  }, false);
})