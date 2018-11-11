// 拖动图标事件
let desktopIcon = Array.from(document.querySelectorAll(".desktop-icon"));
let taskbarIcon = Array.from(document.querySelectorAll(".taskbar-icon"));
let windowsApp = Array.from(document.querySelectorAll(".windows-app"));
let dragTitlebar = Array.from(document.querySelectorAll(".drag-titlebar"));

let minimum = Array.from(document.querySelectorAll(".minimum"));
let maximum = Array.from(document.querySelectorAll(".maximum"));
let close = Array.from(document.querySelectorAll(".close"));

// 打开任务栏的应用 资源管理器，chrome，IE，Firefox，Words，Excel，Outlook
taskbarIcon[1].addEventListener("click", function (e) {
    windowsApp[0].style.display = "block";
}, false);
taskbarIcon[2].addEventListener("click", function (e) {
    windowsApp[1].style.display = "block";
}, false);

// TODO:
// 拖动以打开的应用
// dragTitlebar.addEventListener("keypress", function(e){
//     dragTitlebar.addEventListener("mousemove", function(ev){
//         console.log(ev.clientX);
//     }, false);
// }, false);

// 关闭应用
close.forEach((ele, ind, arr) => {
    ele.addEventListener("click", function (e) {
        e.target.parentElement.parentElement.parentElement.style.display = "none";
    }, false);
})

// 最大化和还原原来大小 - 点击图标实现
maximum.forEach((ele, ind, arr) => {
    ele.addEventListener("click", function (e) {

        // 先判断windows app 的 width。如果已经是最大化了，就最小化，否则最大化。
        let element = this.parentElement.parentElement.parentElement;
        let elementSize = this.parentElement.parentElement.parentElement.getBoundingClientRect();
        if (document.body.offsetHeight + 6 === elementSize.height && document.body.offsetWidth + 6 === elementSize.width) {
            element.style.transition = "all .3s";
            element.style.width = "700px";
            element.style.height = "400px";
            element.style.top = "100px";
            element.style.left = "200px";
        } else {
            element.style.transition = "all .3s";
            element.style.width = "100vw";
            element.style.height = "100vh";
            element.style.top = "0";
            element.style.left = "0";
        }
    }, false);
})

// 最大化和还原原来大小 - 双击titlebar实现
dragTitlebar.forEach((ele, ind, arr) => {
    ele.addEventListener("dblclick", function (e) {
        console.log("dblclick");

        // 先判断windows app 的 width。如果已经是最大化了，就最小化，否则最大化。
        let element = this.parentElement;
        let elementSize = this.parentElement.getBoundingClientRect();
        if (document.body.offsetHeight + 6 === elementSize.height && document.body.offsetWidth + 6 === elementSize.width) {
            element.style.transition = "all .3s linear";
            element.style.width = "700px";
            element.style.height = "400px";
            element.style.top = "100px";
            element.style.left = "200px";
        } else {
            element.style.transition = "all .3s linear";
            element.style.width = "100vw";
            element.style.height = "100vh";
            element.style.top = "0";
            element.style.left = "0";
        }
    }, false);
})

// 最小化
// minimum.forEach((ele,ind,arr) => {
//     ele.addEventListener("click", function(e){
//         let element = this.parentElement.parentElement.parentElement;
//         this.parentElement.parentElement.style.display = "none";
//         element.style.position = "relative";
//         element.style.width = "50px";
//         element.style.height = "3px";
//         element.style.borderRadius = "0";
//         element.style.border = "0";
//         element.style.background = "red";
//         element.style.bottom = "0";
//         element.style.left = "0";
//     }, false);
// })