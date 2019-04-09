let trayDate = document.getElementsByClassName('tray-date')[0];
let trayTime = document.getElementsByClassName('tray-time')[0];
let voiceRange = document.getElementsByClassName('voice-range')[0];
let voiceVolumn = document.getElementsByClassName('voice-volumn')[0];
let showDesktop = document.getElementsByClassName('show-desktop')[0];
let contextMenu = document.getElementById('context-menu');
let reload = document.getElementsByClassName('reload')[0];

// 获取日期和时间
function addZero(n){
  return n <= 9 ? '0'+n : '' + n;
}

function getWeek(n){
  let weekday = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  return weekday[n-1];
}

setInterval(() => {
  let d = new Date();
  let seconds = addZero(d.getSeconds());
  let minutes = addZero(d.getMinutes());
  let hours = addZero(d.getHours());
  let week = getWeek(d.getDay());
  let day = d.getDay();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  trayTime.innerHTML = hours+':'+minutes+':'+seconds;
  trayDate.innerHTML = year+'/'+month+'/'+day+' '+week;
}, 1000);



// 调整音量
voiceRange.addEventListener('mousemove', function(e){
  voiceVolumn.innerHTML = this.value;
}, false);



// 禁止右键和自定义右键
document.oncontextmenu = function(event){
  let e = event || window.event;
  let cx = e.clientX;
  let cy = e.clientY;
  contextMenu.style.left = cx + 'px';
  contextMenu.style.top = cy + 'px';
  contextMenu.style.display = 'block';
  return false;    // 禁止默认右键
}
// TODO: 按Esc键关闭自定义右键
window.addEventListener('keypress', function(e){
  if(e.keyCode == 27){
    contextMenu.style.display = 'none';
  }
}, false);
document.addEventListener('click', function(e){
  contextMenu.style.display = 'none';
}, false);


// 自定义右键功能 - reload
reload.addEventListener('click', function(e){
  location.reload();
}, false);



// TODO: 显示桌面

// TODO: 打开控制台

// TODO: 添加打印功能