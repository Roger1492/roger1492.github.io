// 轮播图
window.onload = function () {
  let container = document.getElementById('slide-wrap');
  let list = document.getElementsByClassName('slide-imgs')[0];
  let dots = document.querySelectorAll('.slide-dots span');
  let pre = document.getElementById('pre');
  let next = document.getElementById('next');
  let index = 1;
  let timer;

  let args = {
    width: 1230,   // 照片，即轮播图的宽度
    num: 6,        // 照片数量
    speed: 4000,   // 播放速度
  };

  function animate(offset) {
    let newLeft = parseInt(list.style.left) + offset;
    list.style.left = newLeft + 'px';

    // 2，轮播到第5张时，list的位置回到第1张。轮播到第1张时，list位置回到第5张
    if (newLeft < -(args.width * args.num)) {
      list.style.left = -args.width + 'px';
    }
    if (newLeft > -args.width) {
      list.style.left = -(args.width * args.num) + 'px';
    }
  }

  // 5，清除之前的样式
  function dotShow() {
    for (let i = 0; i < dots.length; i++) {
      if (dots[i].className === 'slide-on') {
        dots[i].className = '';
      }
    }
    dots[index - 1].className = 'slide-on';
  }

  // 6，切换到相应的图片
  dots.forEach((item, ind, arr) => {
    item.onclick = function () {
      let clickIndex = parseInt(this.getAttribute('index'));
      let offset = args.width * (index - clickIndex);
      animate(offset);
      index = clickIndex;
      dotShow();
    };
  })

  pre.onclick = function () {
    index -= 1;
    if (index < 1) {
      index = args.num;
    }
    dotShow();
    animate(args.width);
  };
  next.onclick = function () {
    index += 1;
    if (index > args.num) {
      index = 1;
    }
    dotShow();
    animate(-args.width);
  };

  // 3，自动轮播下一张图片
  function play() {
    timer = setInterval(function () {
      next.onclick();
    }, args.speed);
  }
  play();

  // 4，停止轮播
  function stop() {
    clearInterval(timer);
  }
  container.onmouseover = stop;
  container.onmouseout = play;
};





// 向下滑动一定距离后显示 #slideDownSearchBox
// 导航侧栏
document.body.onscroll = function(){
  let slideDown = document.getElementById('slideDownSearchBox');
  let navBar = document.getElementById('nav-bar');
  let wh = window.innerHeight;
  slideDown.style.transition = 'all .5s';
  navBar.style.transition = 'all .5s';
  navBar.style.transformOrigin = '0 100%';
  
  if(document.documentElement.scrollTop > wh){
    slideDown.style.top = '0px';
    navBar.style.transform = 'scale(1,1)';
  } else {
    slideDown.style.top = '-50px';
    navBar.style.transform = 'scale(0,0)';
  }
  
}

