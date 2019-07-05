let categroyListA = {
  props: ['name', 'href'],
  template: `<a :href="href">{{name}}</a>`
}

new Vue({
  el: '#categroy-wrap',
  data: {
    lists1: ['女装新品', '商场同款', '仙女连衣裙', 'T恤', '衬衫', '时髦外套', '休闲裤', '牛仔裤', '无痕文胸', '运动文胸', '潮流家居服', '百搭船袜'],
    href: 'javascript:void(0)'
  },
  components: {
    'categroy-list-a': categroyListA
  }
})