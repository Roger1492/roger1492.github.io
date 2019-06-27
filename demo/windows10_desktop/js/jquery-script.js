// 开始按钮中的列表的 slideUp 和 slideDown
$(document).ready(function(){
  $('.startup-middle-ul > div').click(function(){
    $(this).next().slideToggle();
  })
})