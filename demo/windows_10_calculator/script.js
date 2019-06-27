// 显示和隐藏列表
let showHide = document.getElementsByClassName('show-hide')[0];
let slider = document.getElementById('slider');
let sliderli = Array.from(document.querySelectorAll('.slider-ul li'));
let title = document.getElementsByClassName('title')[0];
let calcWrap = Array.from(document.querySelectorAll('#calc-wrap > div'));

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
    // 脚本地址
    let usingScript = document.getElementById('usingScript');
    let scriptName = this.innerHTML.toLowerCase().split(' ').join('');
    usingScript.src = `${scriptName}.js`;
    title.innerHTML = this.innerHTML;

    // 隐藏全部
    calcWrap.forEach((item, index, arr) => {
      item.style.display = 'none';
    })

    // 显示点击的
    let getId = this.innerHTML.toLowerCase().split(' ').join('');
    document.getElementById(getId).style.display = 'block';
  }, false);
})