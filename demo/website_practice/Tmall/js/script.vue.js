let text = ['女装新品','商场同款','仙女连衣裙','T恤','衬衫','时髦外套','休闲裤','牛仔裤','无痕文胸','运动文胸','潮流家居服','百搭船袜'];

Vue.component('cate-list', {
  props: [''],
  template: `
    <div>
      <div></div>
      <div>
        <a javascript:void(0);></a>
      </div>
    </div>
  `
})

new Vue({
  el: '#category-wrap',
  data: {
    catelist: [
      {title: 'one', name: ['111','222','333','444']}
    ]
  }
})