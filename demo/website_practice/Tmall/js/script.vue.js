// #content-wrap 目录列表
let subA = {
  props: ['s'],
  template: `<a href="javascript:void(0);">{{s}}</a>`
}

Vue.component('cate-list', {
  props: ['title', 'sub'],
  template: `
    <div class="csl">
    <div class="csl-1">{{title}}</div>
    <div class="csl-2">
    <sub-a v-for="s in sub" :s="s"></sub-a>
    </div>
    </div>`,
  components: {
    'sub-a': subA
  }
})


// #content-wrap 目录列表图片 模版
Vue.component('cate-img', {
  props: ['src'],
  template: `<a href="javascript:void(0);"><img :src="src" alt="list imgs" /></a>`
})


// 新品展示列 模版
Vue.component('brand-wall', {
  props: ['title', 'src', 'itemclass', 'href'],
  template: `
    <div class="bw_item" :class="itemclass">
      <div class="bw_word">
        <span>{{title}}</span>
        <a :href="href">&gt;</a>
      </div>
      <div class="bw_img">
        <a :href="href">
          <img :src="src" alt="brand wall img" />
        </a>
      </div>
    </div>`
})


// 天猫超市 标题板模版
let floorSubA = {
  props: ['w'],
  template: `<a class="hot-word" href="javascript:void(0);">{{w}}</a>`
};

Vue.component('floor-line-name', {
  props: ['src', 'word'],
  template: `
    <div class="floor-line-name">
      <div class="floor-img">
        <img :src="src" />
      </div>
      <div class="hot-word-con">
        <floor-sub-a v-for="w in word" :w="w"></floor-sub-a>
      </div>
    </div>`,
    components: {
      'floor-sub-a': floorSubA
    }
})


// 天猫超市 banner 模版
Vue.component('big-banner-con', {
  props: ['src', 'href','name1','name2'],
  template: `
    <a :href="href" class="big-banner-con">
      <img :src="src" />
      <div class="bbc">
        <div class="bbc-left">
          <span>{{name1}}</span>
        </div>
        <div class="bbc-right">
          <span>{{name2}}</span>
        </div>
      </div>
    </a>`
})

Vue.component('small-banner-con', {
  props: ['src', 'href','name1','name2'],
  template: `
    <a :href="href" class="small-banner-con">
      <img :src="src" />
      <div class="bbc">
        <div class="bbc-left">
          <span>{{name1}}</span>
        </div>
        <div class="bbc-right">
          <span>{{name2}}</span>
        </div>
      </div>
    </a>`
})


// 天猫超市 价格 模版
Vue.component('price-item-wrap', {
  props: ['href', 'src', 'name', 'price'],
  template: `
    <a class="price-item-wrap" :href="href">
      <img class="price-item-img" :src="src" />
      <div class="price-item-name-tag">
        <span>{{name}}</span>
      </div>
      <div class="price-item-price-tag">
        <span>￥{{price}}</span>
      </div>
    </a>`
})


// Vue实例
let Tmall = new Vue({
  el: '#w1230',
  data: {
    href: 'javascript:void(0);',

    // 导航页 数据
    siteNav: [
      ['天猫超市', '喵鲜生', '科技新品', '女装新品', '酷玩街', '内衣新品', '试美妆', '运动新品', '时尚先生', '精明妈咪', '吃乐会', '企业采购', '会员积分', '天猫国际', '品质频道'],
      ['美妆', '电器', '女装', '男装', '女鞋', '男鞋', '内衣', '箱包', '运动', '母婴', '家装', '医药', '食品', '配饰', '汽车'],
      ['帮助中心', '品质保障', '特色服务', '7天退换货']
    ],

    // header 数据
    searchSuggestion: ['针织衫', '连衣裙', '四件套', '摄像头', '客厅灯', '口红', '手机', '运动鞋', '牛奶'],
    headNav: ['天猫会员', '电器城', '喵鲜生', '医药馆', '营业厅', '魅力惠', '飞猪旅行', '苏宁易购'],

    // 标题板 数据
    marts: [
      {src: 'https://img.alicdn.com/tfs/TB1Q67hXPihSKJjy0FeXXbJtpXa-428-50.png', word: ['进口食品', '食品饮料', '粮油副食', '美容洗护', '家居家电', '家庭清洁', '母婴用品', '生鲜水果']}
    ],
    hks: [
      {src: 'https://img.alicdn.com/tfs/TB1R.slXGagSKJjy0FgXXcRqFXa-428-50.png', word: ['口红', 'YSL', '面膜', '防晒', '迪奥']}
    ],


    // 新品展示列 数据
    b_wall: [
      {itemclass: 'bw_item1',title: '品牌闪购 BRAND SALE', src: 'https://img.alicdn.com/tfs/TB15I0OLMHqK1RjSZJnXXbNLpXa-468-644.jpg_320x5000q100.jpg_.webp'},
      {itemclass: 'bw_item2',title: '聚名品 LUXURY CHANNEL', src: 'https://img.alicdn.com/tfs/TB1PuSIXq67gK0jSZFHXXa9jVXa-966-644.jpg_490x490q100.jpg_.webp'},
      {itemclass: 'bw_item3',title: '品牌活动 BRAND ACTIVITY', src: 'https://img.alicdn.com/tps/i4/TB11ITte8WD3KVjSZFsSuwqkpXa.jpg_490x490q100.jpg_.webp'}
    ],


    // content-wrap 轮播图上面的目录列表和图片 数据
    catelist1: [
      { title: '当季流行 >', sub: ['女装新品', '商场同款', '仙女连衣裙', 'T恤', '衬衫', '时髦外套', '休闲裤', '牛仔裤', '无痕文胸', '运动文胸', '潮流家居服', '百搭船袜'] },
      { title: '精选上装 >', sub: ['毛呢外套', '羽绒服', '棉服', '丝绒卫衣', '毛针织衫', '皮毛一体', '皮草毛衣', '衬衫', '卫衣', '针织衫', 'T恤', '短外套', '小西装', '风衣'] },
      { title: '浪漫裙装 >', sub: ['连衣裙', '半身裙', 'A字裙', '荷叶边裙', '大摆裙', '包臀裙', '百褶裙', '长袖连衣裙', '棉麻连衣裙', '牛仔裙', '蕾丝连衣裙', '真丝连衣裙', '印花连衣裙'] },
      { title: '女士下装 >', sub: ['休闲裤', '阔腿裤', '牛仔裤', '打底裤', '开叉运动裤', '哈伦裤', '背带裤', '小脚裤', '西装裤', '短裤'] },
      { title: '特色女装 >', sub: ['时尚套装', '休闲套装', '日系女装', '精选妈妈装', '大码女装', '职业套装', '优雅旗袍', '精致礼服', '婚纱', '唐装', '小码女装'] },
      { title: '文胸塑身 >', sub: ['光面文胸', '运动文胸', '美背文胸', '聚拢文胸', '大杯文胸', '轻薄塑身'] },
      { title: '家居服 >', sub: ['春夏家居服', '纯棉家居服', '莫代尔家居服', '真丝家居服', '春夏睡裙', '男士家居服', '情侣家居服', '性感睡裙'] },
      { title: '内裤背心 >', sub: ['男士内裤', '女式内裤', '男士内裤多条装', '女士内裤多条装', '莫代尔内裤', '吊带背心'] },
    ],
    catelist2: [
      { title: '当季流行 >', sub: ['当季新品', '商场同款', '印花T恤', '潮流卫衣', '牛仔衬衫', '修身夹克', '保暖棉服', '棉麻面料', '温暖的针织衫', '修身西服', '秋冬风衣', '束脚裤', '九分裤', '破洞牛仔裤', '跑步鞋', '休闲鞋', '篮球鞋', '自行车', '平衡车', '帆布鞋', '运动套装', '运动卫衣', '鱼竿', '冲锋衣', '跑步机', '电动车'] },
      { title: '男士外套 >', sub: ['夹克', '单西', '棒球服', '棉衣', '毛呢大衣', '风衣', '西服套装', '羽绒服', '皮衣', '运动服', '工装外套', '针织', '开衫马甲'] },
      { title: '男士内搭 >', sub: ['短袖T恤', 'POLO衫', '短袖衬衫', '背心', '卫衣', '针织衫/毛衣', '长袖衬衫', '长袖T恤'] },
      { title: '男士裤装 >', sub: ['小脚裤', '9分裤', '短裤', '休闲裤', '牛仔裤', '针织裤', '西裤', '运动裤', '工装裤'] },
      { title: '特色男装 >', sub: ['潮牌', '中老年加大码', '职场精英', '中国风', '情侣装'] },
      { title: '运动鞋 >', sub: ['跑步鞋', '运动鞋', '板鞋', '潮鞋', '休闲鞋', '篮球鞋', '足球鞋'] },
      { title: '运动服 >', sub: ['短袖t恤', '运动裤', '运动内衣', '速干t恤', '运动Polo', '运动卫衣', '运动套装', '运动短裤', '健身服', '运动茄克'] },
      { title: '户外鞋服 >', sub: ['冲锋衣', '抓绒衣', '登山鞋', '户外休闲衣', '军迷', '钓鱼服'] }
    ],
    catelist3: [
      { title: '推荐女鞋 >', sub: ['潮流过膝靴', '气质百搭踝靴', '永远的帆布鞋', '流行松糕底', '英伦牛津鞋'] },
      { title: '潮流男鞋 >', sub: ['商场同款', '休闲鞋', '正装皮鞋', '休闲皮鞋', '板鞋', '户外休闲帆布鞋', '运动休闲乐福鞋', '豆豆鞋', '布洛克帆船鞋', '布鞋'] },
      { title: '女单鞋 >', sub: ['单鞋', '小白鞋', '商场同款', '帆布鞋', '深口单鞋', '浅口单鞋', '平底单鞋', '高跟单鞋', '坡跟单鞋', '豆豆鞋', '乐福鞋', '牛津鞋'] },
      { title: '特色鞋 >', sub: ['妈妈鞋', '大码女鞋', '小码女鞋', '女内增高', '男内增高', '软轻风爸爸鞋', '大码男鞋', '小码男鞋'] },
      { title: '潮流女包 >', sub: ['新品推荐', '商场同款', '女士钱包', '单肩包', '斜跨包', '手提包', '手拿包', '腰包', '胸包', '化妆包'] },
      { title: '精品男包 >', sub: ['男士钱包', '收纳包', '胸包', '腰包', '手拿包', '手提包', '斜跨包', '单肩包', '商场同款', '新品推荐'] },
      { title: '功能箱包 >', sub: ['旅行箱', '万向轮箱', '旅行袋', '女士双肩包', '男士双肩包', '韩版双肩包', '铆钉双肩包', '女士钱包', '男士钱包', '大容量', '印花'] }
    ],
    catelist4: [
      { title: '护肤品 >', sub: ['官方直售', '面膜护肤套装', '乳液', '面霜', '精华液', '护手霜', '爽肤水', '洁面眼霜', '身体乳', '卸妆', '身体护理', '男士护理', '精油芳疗', '丰胸', '面部喷雾', 'T区护理', '去角质', '补水祛痘', '敏感修护', '线上专柜'] },
      { title: '彩妆 >', sub: ['时尚彩妆', '香水', 'BB霜', '美容工具', '口红', '隔离', '粉底', '粉饼', '气垫bb', '指甲油', '美甲工具', '眉笔', '睫毛膏', '眼线', '唇彩', '眼影', '蜜粉', '彩妆套装'] },
      { title: '男士护肤 >', sub: ['洁面', '爽肤水', '乳液/面霜', '面膜', '面部精华', '眼部护理', '防晒', '唇部护理', 'T区护理', '控油'] },
      { title: '肤质推选 >', sub: ['混合偏油型', '中性偏干型', '敏感性', '干性油性', '混合型中性'] },
      { title: '美发护发 >', sub: ['洗发水', '进口洗发水', '护发素', '发膜', '洗护套装', '护发精油', '头发造型', '弹力素', '染发霜', '整顶假发', '假发配件', '男性假发'] },
      { title: '口腔护理 >', sub: ['牙膏', '进口牙膏', '牙刷', '进口牙刷', '漱口水', '牙线', '牙粉', '口气清新剂', '牙贴', '口腔美白', '假牙清洁'] },
      { title: '身体女性 >', sub: ['沐浴露', '香皂', '泡澡浴盐', '护足', '洗手液', '手动剃须刀', '卫生巾', '成人护垫', '私处洗液', '卫生棉条'] }
    ],
    catelist5: [
      { title: '黄金首饰 >', sub: ['耳钉', '黄金项链', '投资黄金', '婚嫁套饰', '黄金对戒', '转运珠', '足金饰品', 'K金饰品', '商场同款'] },
      { title: '钻石彩宝 >', sub: ['结婚钻戒', '钻石吊坠', '钻石耳饰', '钻石手链', '裸钻定制', '红蓝宝石', '绿宝石', '坦桑石', '其他天然宝石'] },
      { title: '珍珠玉翠 >', sub: ['珍珠项链', '送妈妈海水珍珠', '和田玉', '翡翠摆件', '翡翠手镯', '翡翠项链', '琥珀手链', '天然琥珀', '原矿琥珀'] },
      { title: '潮流饰品 >', sub: ['明星同款', '传统银饰', '木手串', '银手镯', '石榴石', '手链开口', '戒指', '胸针', '宝宝银饰', '手链', '项链', '发饰', '手镯', '耳饰', '戒指', '项坠', '施华洛世奇', 'shes银时代', '伊泰莲娜', 'PH7', 'Monchhichi', 'ALEXANDRE'] },
      { title: '腕表 >', sub: ['瑞士名表', '日韩港表', '欧美手表', '经典国表', '国货精表', '男表', '女表', '情侣表', '儿童手表', '机械表', '石英表', '光能表', '防水表', '运动表', '学生表', '军表', '陶瓷表'] },
      { title: '眼镜 >', sub: ['太阳镜', '墨镜', '眼镜框', '近视眼镜', '防辐射眼镜', '老花镜', '司机镜', '偏光镜', '驾驶镜', '3D眼镜', '雷朋', '暴龙', '宝岛眼镜', 'oakley'] },
      { title: '烟具 >', sub: ['电子烟', '烟盒', '烟斗', '烟嘴', '烟油', '蒸汽烟', '水烟', '戒烟', '女士烟', '鼻烟', '雪茄'] }
    ],
    catelist6: [
      { title: '热门手机 >', sub: ['小米', 'iPhone', '魅族', '荣耀', '乐视', 'OPPO', 'vivo', '三星', '华为'] },
      { title: '特色手机 >', sub: ['AliOS', '千元指纹', '双卡双待', '大屏自拍', '移动', '联通', '电信', '合约机'] },
      { title: '手机特惠 >', sub: ['打折', '秒杀', '新品', '特卖', '实惠', '精选'] },
      { title: '电脑整机 >', sub: ['笔记本', '平板', '电脑', '台式机', '一体机', 'DIY游戏本', 'iPad', 'Surface'] },
      { title: '智能数码 >', sub: ['智能设备', '智能手表', '智能手环', 'VR眼镜', '智能摄像', '智能健康', '智能机器人'] },
      { title: '游戏组装 >', sub: ['DIY电脑竞技', 'DIY显示器', '游戏本', '机械键盘', 'XBOX', '游戏手柄'] },
      { title: '硬件存储 >', sub: ['显示器', '机械键盘', '固态硬盘', 'CPU', '显卡', '主板', '高速U盘', '路由器'] },
      { title: '摄影摄像 >', sub: ['相机', '单反', '单电', '微单', '摄像机', '自拍神器', '拍立得', '镜头自拍杆'] },
      { title: '影音娱乐 >', sub: ['耳机', '天猫魔盒', '数码影音', '家庭影院', '蓝牙耳机', '网络播放器'] },
      { title: '办公文教 >', sub: ['文具', '电子书', '笔类／书写工具', '智能投影', '打印机', '保险箱'] },
      { title: '数码配件 >', sub: ['手机配件', '苹果配件', '笔记本配件', '平板配件', '相机配件', '手机车载配件'] }
    ],
    catelist7: [
      { title: '童装 >', sub: ['商场同款', '套装', '裤子', '外套', 'T恤', '裙子', '内衣裤', '连体衣', '亲子装'] },
      { title: '婴儿服 >', sub: ['连体衣', '内衣套装', '裤子', '婴儿礼盒', '外', '套家居服', 'T恤', '反穿衣', '肚兜'] },
      { title: '童鞋 >', sub: ['学步鞋', '运动鞋', '亲子鞋', '帆布鞋', '皮鞋', '雨靴', '靴子', '拖鞋', '棉鞋', '凉鞋'] },
      { title: '车床用品 >', sub: ['婴儿推', '学步', '安全座', '婴儿背', '腰', '婴儿', '餐', '睡', '抱'] },
      { title: '喂养 >', sub: ['奶', '奶', '水', '餐具消毒', '辅食', '调奶', '暖奶', '围'] },
      { title: '洗护 >', sub: ['洗发', '沐浴', '润肤浴', '湿', '洗衣', '洗衣', '理发', '驱虫止'] },
      { title: '玩具 >', sub: ['婴儿玩', '儿童自行', '儿童电动', '毛绒玩', '积', '电动遥', '儿童箱'] },
      { title: '天猫动漫 >', sub: ['动漫周', '影视周', '手', '高', '魔术道具', 'COSPLA', '桌', '变形金'] },
      { title: '奶粉 >', sub: ['牛奶', '羊奶', '特殊配方奶', '宝宝辅', '宝宝零', '宝宝营养DH'] },
      { title: '纸尿裤 >', sub: ['纸尿', '拉拉', '纸尿', 'LXLMSN', '新生儿组'] },
      { title: '孕产 >', sub: ['孕产用品', '孕妈洗护', '孕妈装', '月子服', '哺乳文胸', '防辐射', '吸奶器', '待产包'] }
    ],
    catelist8: [
      { title: '进口食品 >', sub: ['进口零食', '进口巧克力', '进口饼干', '进口糖果', '进口坚果', '进口果干', '进口橄榄油', '进口牛奶', '进口咖啡', '进口饮料', '进口葡萄酒', '进口洋酒', '进口啤酒'] },
      { title: '休闲零食 >', sub: ['零食', '坚果', '饼干', '蛋糕', '红枣', '巧克力', '猪肉', '脯膨化食品', '蜜饯', '鸭脖', '糖果', '豆干', '曲奇', '海苔', '肉松饼', '牛肉干', '鱿鱼丝', '糕点'] },
      { title: '酒类 >', sub: ['白酒', '红酒', '洋酒', '啤酒', '黄酒', '保健酒', '预调酒', '配制酒', '葡萄酒'] },
      { title: '茶叶 >', sub: ['西湖龙井', '安吉白茶', '绿茶', '大红袍', '铁观音', '普洱茶', '玫瑰花茶', '柠檬片', '菊花茶', '花茶', '天然粉粉', '金骏眉', '红茶'] },
      { title: '乳品冲饮 >', sub: ['牛奶', '酸奶', '成人奶粉', '儿童奶', '速溶咖啡', '滤挂咖啡', '咖啡豆', '麦片', '奶茶', '柚子', '茶果汁', '汽水', '功能饮料', '饮用水'] },
      { title: '粮油速食 >', sub: ['橄榄油', '食用油', '大米', '薏米', '玉米', '面粉', '银耳', '桂圆', '干香肠', '木耳', '香菇', '方便面', '手抓饼', '黄油', '意大利面', '蛋挞皮', '调味品', '红糖', '进口泡面', '粽子', '寿司'] },
      { title: '生鲜水果 >', sub: ['牛排', '芒果', '奇异果', '蟹', '三文鱼', '虾', '车厘子', '进口鳕鱼', '海参', '苹果', '榴莲', '牛肉', '牛油果', '土鸡', '冰淇淋', '鸡蛋'] }
    ],
    catelist9: [
      { title: '新鲜蔬菜 >', sub: ['土豆', '番薯', '山药', '莲藕', '净菜', '玉米', '秋葵', '大蒜', '生姜', '南瓜'] },
      { title: '冰淇淋 >', sub: ['冰淇淋', '哈根达斯', 'movenpick', '莫凡彼本杰瑞', 'tip-top冰淇淋'] },
      { title: '蛋类 >', sub: ['鸡蛋', '鸭蛋', '鹅蛋', '鸽子蛋', '鹌鹑蛋', '松花皮蛋', '咸鸭蛋', '喜蛋'] },
      { title: '肉类 >', sub: ['牛排', '牛腩', '牛腱子', '牛肉', '牛尾', '牛肉串', '牛杂', '羊腿', '羊排', '羊肉串', '羊蝎子', '鸡肉', '鸡翅', '鸡胸', '鸡腿', '鸭肉', '乳鸽', '鹅肉'] },
      { title: '海鲜水产 >', sub: ['鳕鱼', '三文鱼', '金枪鱼', '鲽鱼', '斑鱼', '比目鱼', '多春鱼', '马鲛鱼', '龙利鱼', '秋刀鱼', '带鱼', '海带', '墨鱼', '海参', '海蜇', '鱿鱼', '甲鱼', '大闸蟹', '帝王蟹', '雪蟹', '黄金蟹', '鱼丸', '鱼糕/鱼饼', '干贝/瑶柱', '虾仁', '活虾', '冻虾', '生蚝', '北极贝', '扇贝', '贝类'] },
      { title: '新鲜水果 >', sub: ['奇异果', '车厘子/樱桃', '芒果', '牛油果', '火龙果', '苹果', '橙子', '凤梨', '榴莲', '山竹', '木瓜', '柠檬', '百香果', '椰青番', '荔枝/释迦', '龙眼', '蓝莓', '梨', '提子', '柚子', '芭乐', '莲雾桃', '草莓', '西柚', '荔枝', '石榴', '葡萄/提子', '哈密瓜', '枇杷', '李子', '西瓜', '菠萝', '桔子', '香蕉', '杨桃', '红毛丹/毛荔枝'] },
      { title: '精选干货 >', sub: ['干贝/瑶柱', '虾皮/虾米/海米大虾', '干花胶/鱼胶', '海带', '紫菜', '鱼干', '墨鱼干'] }
    ],
    catelist10: [
      { title: '平板电视 >', sub: ['4K超高清', '国产', '外资品牌', '曲面智能电视', '超级大屏', '云电视', '客厅首选'] },
      { title: '空   调 >', sub: ['热门之选', '节能', '智能', '变频', '艺术柜机', '挂机', '1.5匹', '中央空调'] },
      { title: '冰   箱 >', sub: ['热门之选', '无霜', '三门', '对开门', '电脑温控', '智能冷柜', '酒柜'] },
      { title: '洗衣机 >', sub: ['滚筒洗', '波轮洗', '洗烘一体', '迷你烘干机', '双缸/双桶', '热门', '大容量'] },
      { title: '厨房大电 >', sub: ['烟灶套装', '嵌入式烤箱', '嵌入式蒸箱', '燃气灶', '消毒柜', '洗碗机', '集成灶'] },
      { title: '热水器 >', sub: ['电热水器', '燃气热水器', '遥控', '恒温小厨宝', '太阳能', '即热式空气能'] },
      { title: '中式厨房 >', sub: ['净水器', '电饭煲', '豆浆机', '电热水壶', '电压力锅', '电磁炉', '养生壶'] },
      { title: '西式厨房 >', sub: ['烤箱', '料理机', '微波炉', '榨汁机', '原汁机', '面包机', '咖啡机', '电炸锅'] },
      { title: '生活电器 >', sub: ['扫地机器人', '空气净化器', '吸尘器', '除湿机', '取暖器', '挂烫机', '干衣机'] },
      {
        title: '个护健康 >', sub: ['扫地机器人', '空气净化器', '吸尘器', '除湿机', '取暖器', '挂烫机', '干衣机',
          '剃须刀', '吹风机', '电动牙刷', '体重秤', '理发器', '足浴器', '按摩椅']
      },
      { title: '精品推荐 >', sub: ['脱毛器', '吊扇', '冰淇淋机', '碎冰机', '空调扇', '瘦身带', '冷饮机', '炒冰机'] }
    ],
    catelist11: [
      { title: '成套家具 >', sub: ['客厅成套家具', '餐厅成套家具', '卧室成套家具', '儿童成套家具'] },
      { title: '客厅餐厅 >', sub: ['沙发', '布艺沙发', '皮艺沙发', '实木沙发', '懒人沙发', '电视柜', '茶几', '鞋柜', '单人沙发', '餐桌', '餐椅', '酒柜', '餐边柜', '吧台', '玄关柜', '边几'] },
      { title: '卧室家具 >', sub: ['床', '衣柜', '床垫', '简易衣柜', '乳胶床垫', '弹簧床垫', '棕床垫', '实木床', '双人床'] },
      { title: '书房儿童 >', sub: ['电脑桌', '电脑椅', '书桌', '办公桌', '书架', '书柜', '连体书桌', '柜折叠床/椅花架', '儿童床高低床', '儿童床垫', '儿童沙发', '儿童椅', '儿童学习桌', '儿童衣柜'] },
      { title: '家装主材 >', sub: ['强化复合地板', '瓷砖', '墙纸', '涂料', '瓷砖背景墙', '油漆', '地板', '硅藻泥'] },
      { title: '厨房卫浴 >', sub: ['浴霸', '集成吊顶', '马桶', '淋浴', '花洒套装', '浴室柜组合', '水槽套餐', '智能马桶盖'] },
      { title: '灯饰照明 >', sub: ['吸顶灯', '吊灯', '水晶吊灯', '筒灯', '射灯', '灯带', '灯泡', '壁灯', '灯具', '套餐铜灯'] },
      { title: '五金工具 >', sub: ['接线板', '开关', '插座', 'USB插座', '指纹锁', '工具箱', '监控摄像头', '门锁', '拉手'] },
      { title: '全屋定制 >', sub: ['全屋定制', '定制橱柜', '定制衣柜门', '木门', '榻榻米', '门窗', '特权订金'] },
      { title: '装修设计 >', sub: ['装修特权', '全包', '半包', '拎包入住', '局部装修', '设计', '软装', '配饰', '监理'] }
    ],
    catelist12: [
      { title: '整   车 >', sub: ['v60一口价39.99万', '超级试驾', '订金购车', '新能源汽车', '轿车', 'SUV', 'MPV'] },
      { title: '座垫脚垫 >', sub: ['秋冬座垫', '汽车脚垫', '专用座垫', '专用座套', '女性座垫', '通用座垫'] },
      { title: '机油轮胎 >', sub: ['全合成机油', '半合成机油', '矿物质机油', '汽车轮胎', '雪地胎', '防爆胎'] },
      { title: '电子导航 >', sub: ['行车记录仪', '安全预警仪', '后视镜', '导航', '车载导航', '便携式导航', 'GPS定位'] },
      { title: '车载电器 >', sub: ['空气净化器', '吸尘器', '车载冷暖箱', '车载MP3', '逆变器', '手机充电器', '一拖三'] },
      { title: '维修保养 >', sub: ['雨刮器', '空调滤芯', '机油滤芯', '刹车片', '火花塞', '汽车电瓶', '大灯总成'] },
      { title: '美容清洗 >', sub: ['洗车机', '水枪', '车蜡', '底盘装甲', '镀晶汽油', '添加剂', '玻璃水', '补漆笔'] },
      { title: '汽车装饰 >', sub: ['香水挂件', '手机支架', '摆件', '方向盘套', '腰靠', '头枕', '尾箱垫', '车震床'] },
      { title: '安全自驾 >', sub: ['安全座椅', '车载提篮', '轮胎报警器', '充气泵', '安全锤', '应急工具', '应急电源'] },
      { title: '外饰改装 >', sub: ['汽车贴膜', '装饰灯', '改色膜', '脚踏板', '车顶架', '汽车车衣', '车顶箱', '装饰条'] },
      { title: '汽车服务 >', sub: ['天猫养车', '加油卡', '4S保养', '上门保养', '连锁保养', '镀晶服务', '打蜡服务'] }
    ],
    catelist13: [
      { title: '当季热卖 >', sub: ['印花四件套', '羽绒被', '蚕丝被', '羊毛被', '棉花被', '毛毯', '床笠', '冬季棉拖', '沙发垫', '地毯', '浴巾', '定制窗帘', '抱枕', '被子', '两用坐垫', '国际家纺床品', '国际居家布艺', '国际家居饰品'] },
      { title: '床上用品 >', sub: ['四件套', '枕头', '枕芯', '床单', '被子', '被套', '床垫', '针织棉四件套', '床帘', '枕套', '真丝枕套', '枕巾', '毯子', '毛巾毯', '乳胶枕', '颈椎枕', 'U型枕', '记忆枕', '婚庆床品', '儿童床品', '床罩'] },
      { title: '居家布艺 >', sub: ['窗帘', '遮光窗帘', '成品窗帘', '进口地毯', '客厅地毯', '卧室地毯', '沙发套', '沙发巾', '家居拖鞋', '女士棉拖', '情侣拖鞋', '毛巾', '纯棉毛巾', '浴袍', '地垫', '防滑地垫', '儿童泡沫地垫', '抱枕', '靠垫', '坐垫', '桌布', '防水桌布', '餐垫', '窗帘杆', '十字绣', '十字绣抱枕', '门帘', '飘窗垫', '钻石画', '防尘罩', '百叶帘'] },
      { title: '家居饰品 >', sub: ['墙贴', '墙纸', '自粘壁纸', '3d立体墙贴', '花瓶', '摆件', '相框', '装饰画', '电视背景墙', '仿真花', '闹钟', '玻璃贴纸', '结婚礼物', '香薰炉', '电表箱', '装饰画', '招财猫', '雕刻工艺', '果盘数字油画', '玻璃花瓶', '冰箱贴', '首饰盒', '壁饰'] },
      { title: '鲜花绿植 >', sub: ['红玫瑰', '香槟', '玫瑰', '百合', '永生花', '萌多肉', '绿植', '盆栽', '表白送花', '康乃馨', '花束混搭', '进口玫瑰', '多肉植物', '微景观', '仿真花', '绢花', '情人节送花', '生日送花', '鲜花礼盒', '多肉花盆', '室内植物', '园艺工具', '绿萝', '盆栽', '干花装饰'] }
    ],
    catelist14: [
      { title: '保健品 >', sub: ['营养补充剂', '芦荟', '玛卡', '减肥胶原蛋白', '维生素C', '鱼油', '美容养颜', '保健食品', '缓解体力疲劳', '辅助降血脂', '增加骨密度', '护肝', '减肥通便', '抗氧化', '改善睡眠', '祛黄褐斑', '减肥茶', '酵素', '左旋肉碱', '增肌粉', '安神补脑'] },
      { title: '滋补品 >', sub: ['滋补养生蜂蜜', '石斛', '阿胶', '黑枸杞', '冬虫夏草', '青钱柳', '西洋参', '人参', '藏红花', '蜂胶', '阿胶糕', '灵芝', '孢子粉', '黄芪阿胶块', '燕窝', '铁皮', '枫斗', '三七粉', '蜂王浆', '雪蛤四物汤', '山药', '牛蒡', '茶虫草', '当归', '鹿茸', '固元膏'] },
      { title: '医药 >', sub: ['感冒', '咳嗽', '腰腿疼痛', '妇科用药', '男科用药', '体检套餐', '血糖仪', '保健', '理疗针灸', '拔罐', '成人用品', '男用延时', '女用情趣', '避孕套', '润滑剂', '情趣跳蛋', '飞机杯', '缩阴球', '震动棒', '肾宝片', '阳痿', '早泄', '伟哥', '肝炎', '皮炎', '湿疹'] },
      { title: '医疗器械 >', sub: ['制氧机', '体温计', '轮椅', '胎心仪', '理疗仪', '助听器', '雾化器', '呼吸机', '拔罐器', '口罩', '血压计', '创口贴', '护具', '导尿袋', '血糖仪', '针灸用品', '护理床褥', '疮垫', '家用器械', '按摩器材', '吸痰器', '座便椅', '血氧仪', '颈椎治疗仪', '刮痧', '洗鼻器'] },
      { title: '隐形眼镜 >', sub: ['强生', '美瞳', '博士伦', '海昌', '海俪恩', '卫康', '爱尔康', '视康', '实瞳', '日抛', '两周抛', '月抛', '季抛', '半年抛', '年抛', '护理液', '硬镜护理液', '双氧水', '润眼液'] },
      { title: '医疗服务 >', sub: ['爱康', '国宾慈铭体检', '瑞慈体检', '美年大健康', '和睦家', '美中宜和', '孕期检查', '月子中心', '医疗美容', '玻尿酸', '注射瘦脸针', '美丽神器', '美白服务', '补水服务'] }
    ],
    catelist15: [
      { title: '厨房烹饪 >', sub: ['全球家居厨餐具', '锅组套装', '炒锅', '不粘锅', '平底锅', '高压锅', '奶锅', '汤锅', '炖锅', '砂锅', '蒸锅', '烧水壶', '刀具', '菜刀', '水果刀', '刀架', '菜板', '厨房置物架', '烧烤用具', '烘培模具', '烹饪用具', '密封罐', '米桶', '厨房小工具', '厨房清洗'] },
      { title: '餐饮具 >', sub: ['杯具套装', '保温杯', '水杯', '保温壶', '玻璃杯', '陶瓷杯', '茶杯', '咖啡杯', '马克杯', '红酒杯', '水具套装', '酒具', '咖啡具', '餐具', '瓷器餐具套装', '碗碟套装', '叉勺筷套装', '碗筷子茶具套装', '保温饭盒', '保鲜盒', '一次性用品'] },
      { title: '居家礼品 >', sub: ['全球家居', '雨伞', '太阳伞', '雨衣', '口罩', '挂钟', '家用梯缝纫机', '活性炭', '创意礼品', '婚庆用品', '生日礼物', '相册', '劳保用品', '驱虫'] },
      { title: '收纳清洁 >', sub: ['全球家居收纳', '全球家居清洁', '晾衣架', '收纳箱', '收纳柜', '鞋柜', '收纳袋', '收纳盒', '化妆包', '旅行收纳', '衣服防尘', '脏衣篮', '压缩袋', '收纳架', '置物架', '旋转拖把', '平板拖把', '胶棉拖把', '垃圾桶', '垃圾袋', '置物架', '浴帘', '梳子'] },
      { title: '纸品清洁 >', sub: ['软包抽纸', '卷筒纸', '手帕纸', '厨房用纸湿', '厕纸', '湿巾纸', '洗衣液', '衣物除菌液', '消毒液', '洗洁精', '油污净', '洁厕剂', '地板清洁', '管道疏通', '家私清洁', '玻璃清洁', '驱蚊驱虫', '除湿', '防潮', '驱蚊', '驱虫', '除甲醛'] },
      { title: '宠物用品 >', sub: ['全球家居宠物', '狗粮', '猫粮', '狗零食', '猫零食', '窝/笼', '宠物服饰', '鱼缸', '水族世界', '牵引带', '医疗保健', '宠物玩具', '猫砂', '生活日用'] },
    ],
    catelist16: [
      { title: '儿童读物 >', sub: ['畅销童书', '绘本', '儿童文学', '启蒙认知', '益智游戏', '幼儿科普', '童话书'] },
      { title: '畅销小说 >', sub: ['都市情感', '穿越架空', '畅销小说', '外国文学', '科幻小说', '影视同期'] },
      { title: '文学文艺 >', sub: ['畅销书', '散文', '随笔', '文学传记', '涂色字帖', '现当代文学', '诺贝尔', '色铅笔'] },
      { title: '社科生活 >', sub: ['烘焙', '旅游', '菜谱', '美容/美体', '时尚家居', '装修', '两性健康', '两性减肥'] },
      { title: '育儿百科 >', sub: ['家庭教育', '幼儿情绪管理', '能力培养', '胎教', '幼儿心理', '孕产妇保健'] },
      { title: '学习考试 >', sub: ['公务员', '托福', '职称', '英语', '建造师考试', '注册会计师', '四六级英语', '考研'] },
      { title: '教材教辅 >', sub: ['中学教辅', '新课标', '中小学作文', '本科/研究生教材', '高职教材', '外语学习'] },
      { title: '经管励志 >', sub: ['管理学', '金融与投资', '励志', '投资与理财', '金融学', '股市', '女性励志', '营销'] },
      { title: '期刊杂志 >', sub: ['订阅', '国家地理', '时尚杂志', '读者', '时尚芭莎', '昕薇瑞丽', '青年文摘'] },
      { title: '进口原版 >', sub: ['进口童书', '原版小说', '原版设计艺术', '原版童书绘本', '港台', '原版书'] },
      { title: '大牌乐器 >', sub: ['乐器', '钢琴', '智能钢琴', '数码钢琴', '电子琴', '吉他', '尤克里里', '古筝'] },
    ],
    cateImg1: [
      'https://img.alicdn.com/bao/uploaded/TB1B_DcJpXXXXXWXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/i4/T1gRqVXk4fXXb1upjX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1wNJAHFXXXXc7XpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1w472LFXXXXXwXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1fETUHpXXXXbmapXXwu0bFXXX.png_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1UJIfJXXXXXctaXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1FfxjHFXXXXbWaXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB18XAnIVXXXXclXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1gWxjFFXXXXcEaFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/http://img.taobaocdn.com/bao/uploaded/TB1HMfoHpXXXXclXXXXwu0bFXXX.png_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB18nTOLVXXXXc5XXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB1wzzFLVXXXXbXXFXXXXXXXXXX-400-200.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB1SvLzLVXXXXaKXVXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB17DDrLVXXXXbOaXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB1dSYULVXXXXXlXXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
    ],
    cateImg2: [
      'https://img.alicdn.com/bao/uploaded/TB1QgL7LFXXXXboXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB18HHTLFXXXXaJaXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1B6.BLFXXXXXZXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1krn7LFXXXXbVXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1Im6ULFXXXXapaXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB16BD9LFXXXXXhXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1KtC.LVXXXXauaXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1eFwrLFXXXXacXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i2/TB1MDj0LVXXXXaNXpXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i2/TB1rGn5LVXXXXcZXXXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i4/TB1gAvVLVXXXXbeXFXXPqXt1pXX-1000-500.png_170x120q30.jpg',
      'https://img.alicdn.com/tps/i2/TB1ORPWLVXXXXX1XFXXPqXt1pXX-1000-500.png_170x120q30.jpg',
      'https://img.alicdn.com/tps/i3/TB1vifWLVXXXXc6XpXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i1/414285109/TB273rQaazyQeBjy0FbXXbZapXa_!!414285109.png_170x120q30.jpg',
      'https://img.alicdn.com/tps/i1/TB1NBn3LVXXXXXyXpXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i4/TB1F3PILVXXXXcZapXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
    ],
    cateImg3: [
      'https://img.alicdn.com/bao/uploaded/TB1Nza1LFXXXXbDXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1tBlBMXXXXXXaXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i4/TB1hp9WPpXXXXbZXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i4/TB1ZCmFPpXXXXbpaXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i4/TB1HTKLPpXXXXXEaXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/T1gwebFcFbXXb1upjX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/T1GKWaFd4eXXb1upjX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/T1b98VFgJiXXb1upjX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i4/TB1PCq3PpXXXXcAXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i3/TB1LX3bLVXXXXcLXXXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i2/TB1BoYYLVXXXXaZXVXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i4/TB1XkMXLVXXXXXHXpXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i4/TB1jL24LVXXXXXRXFXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i1/TB16Jn1LVXXXXc8XFXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i3/TB1_QH3LVXXXXaYXFXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i1/TB1ryEcLVXXXXaFXXXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
    ],
    cateImg4: [
      'https://img.alicdn.com/tps/TB1Ns2VLVXXXXbXaXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB1sZBCMXXXXXbEXpXXXXXXXXXX-1000-500.png_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB1r1kdLVXXXXarXpXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB1RcY6LVXXXXaJXFXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB16nsdLVXXXXX2XpXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB1EubOLVXXXXa6apXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i4/TB1qr7HJpXXXXadXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB1SbMiLVXXXXbWXXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB1oer2LVXXXXavXVXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB1EzggLVXXXXc3XXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB10av_LVXXXXXKXFXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB13YL5LVXXXXaGXVXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB1mIZhLVXXXXcNXXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB1WfkhLVXXXXcpXXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB1ELY5LVXXXXXVXVXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB13RsaLVXXXXcbXpXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB10srVLVXXXXbSaXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB1IXDSLVXXXXXPapXXXXXXXXXX-1000-500.jpg_170x120q30.jpg'
    ],
    cateImg5: [
      'https://img.alicdn.com/bao/uploaded/TB1c0mwJXXXXXbcXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1o2ZgIpXXXXcNXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1Tc.dHpXXXXcZXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1nD_MHpXXXXa3XVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB14Dn0HpXXXXaSaXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1qgnQHpXXXXXvXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1dcqhHVXXXXabXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1dOLEIFXXXXXIXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1zL_xHVXXXXaVXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1H9oMIVXXXXarXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB12MLVHpXXXXb4XXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1DOoJIVXXXXb7XFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1o2UxIVXXXXcVaXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i1/TB1T_PYLVXXXXcFXVXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i2/TB1OaMbLVXXXXbfXpXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i3/TB1XJz8LVXXXXbnXFXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
    ],
    cateImg6: [
      'https://img.alicdn.com/tps/TB1CZYfMXXXXXbCXVXXXXXXXXXX-800-400.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/http://gtms04.alicdn.com/tps/i4/TB1PhrmHpXXXXX0XXXXXD.cNVXX-400-200.png_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1TPLrIFXXXXc9XVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1vBzdJFXXXXaPXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1lsMhLFXXXXb1XFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/i2/TB1xR5SIXXXXXazXpXXaTBZFVXX_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1fB29LVXXXXaGXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1hirDIVXXXXaZXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1MwaIIVXXXXa2XVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1ECQcHpXXXXX0XpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1yMKJLVXXXXaIaXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1We4DLVXXXXatXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tfs/TB1xr53RXXXXXb9aXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1gI_2IXXXXXaFXXXXwu0bFXXX.png_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1kM8EIFXXXXbMXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/TB131n8LVXXXXcVXpXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB13ejyGFXXXXXCaXXXSutbFXXX.jpg_170x120q30.jpg',
    ],
    cateImg7: [
      'https://img.alicdn.com/bao/uploaded/TB1lxPOHpXXXXcAXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1XtYuKFXXXXa.XpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i4/TB1AejkLVXXXXXwXpXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB13PqeIVXXXXaHapXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1FIXKJFXXXXbiXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1.JEMIpXXXXbWXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB178.CHpXXXXbTapXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1_EMlHpXXXXceXXXXwu0bFXXX.png_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1ZiIJIVXXXXcHXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1yKObKXXXXXbfXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1yo_NHpXXXXXTXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1ZddBIFXXXXbWXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1Dr5dJXXXXXbKXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1iV4BIFXXXXXYXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1ih3hHpXXXXXkXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1Q7MwIVXXXXXFapXXSutbFXXX.jpg_170x120q30.jpg',
    ],
    cateImg8: [
      'https://img.alicdn.com/bao/uploaded/TB1iW9PIVXXXXbvXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB14XPPHpXXXXbIXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB19_IdKVXXXXbJXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/i5/T1g2lmXadKXXb1upjX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1GxS8JpXXXXaWXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1p3QUIVXXXXXaXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1I0PuHFXXXXbxXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1406DJVXXXXbHXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/i6/T1WafYXbXlXXb1upjX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1q5H8KVXXXXaFXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1nygNIVXXXXacXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1CGKfIFXXXXX1aXXXwu0bFXXX.png_170x120q30.jpg',
      'https://img.alicdn.com/tps/i2/TB1c8HTLVXXXXXVaXXXvDEcNVXX-400-200.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1XeXcKpXXXXaYXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1XtLSHpXXXXaTXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1eWlgKFXXXXXaXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1e8m9IpXXXXcmXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1ZKTzIpXXXXcyXXXXSutbFXXX.jpg_170x120q30.jpg',
    ],
    cateImg9: [
      'https://img.alicdn.com/imgextra/i3/2939922051/TB2zWd0muOSBuNjy0FdXXbDnVXa_!!2939922051.png_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i1/2868009672/TB2icfrorGYBuNjy0FoXXciBFXa_!!2868009672.png_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i2/793475151/TB2PMxWa7yWBuNjy0FpXXassXXa_!!793475151.jpg_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i3/1734796729/TB2AaE0emMmBKNjSZTEXXasKpXa_!!1734796729.jpg_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i2/2217550171/TB2p.jjmY_I8KJjy1XaXXbsxpXa_!!2217550171.jpg_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i4/762551010/TB2J0lUepkoBKNjSZFkXXb4tFXa_!!762551010.png_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i2/2255664523/TB2in5hgiCYBuNkSnaVXXcMsVXa_!!2255664523.jpg_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i2/871743890/TB2mwChgiCYBuNkSnaVXXcMsVXa_!!871743890.png_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i3/3300051549/TB2QcmlgiCYBuNkSnaVXXcMsVXa_!!3300051549.png_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i1/894224787/TB2oS7gov1TBuNjy0FjXXajyXXa_!!894224787.jpg_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i3/2095494343/TB2Qv_jlFXXXXaHXpXXXXXXXXXX_!!2095494343.jpg_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i4/2525258127/TB2zTZWoDlYBeNjSszcXXbwhFXa-2525258127.png_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i4/1733566698/TB2WrL9or1YBuNjSszhXXcUsFXa_!!1733566698.jpg_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i1/1579528508/TB2E9rRov9TBuNjy1zbXXXpepXa_!!1579528508.png_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB14lgnlnnI8KJjSszgwu38ApXa.png_170x120q30.jpg',
    ],
    cateImg10: [
      'https://img.alicdn.com/bao/uploaded/TB18S7RKFXXXXbkXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1OBJZJpXXXXcGXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1KQYNIXXXXXXiXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1lIAVIVXXXXchXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1uFV_LpXXXXbEXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1Qj2dIFXXXXcoXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1TPLrIFXXXXc9XVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1WyaHIpXXXXadXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1rLC4IFXXXXXkaXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1mci2KFXXXXXpXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/http://img.taobaocdn.com/bao/uploaded/TB1TlAWGVXXXXX1aXXXwu0bFXXX.png_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1Z6xXIpXXXXaoXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB130ZhHpXXXXcrXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1soYNIpXXXXa7XVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1EUPwJFXXXXbwXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1heeRJFXXXXbCXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1mcacIVXXXXa7apXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1VKhiIFXXXXXQaXXXSutbFXXX.jpg_170x120q30.jpg',
    ],
    cateImg11: [
      'https://img.alicdn.com/imgextra/i4/143584903/TB2Gro9b4WYBuNjy1zkXXXGGpXa-143584903.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1IDP4HpXXXXbiXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1DvejMXXXXXc2XXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1t.MHIFXXXXXHXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/i2/387542955/TB2PLJOdFXXXXXBXXXXXXXXXXXX-387542955.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1H9xlLXXXXXaQaXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1OMUNIVXXXXXAXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB16hUZIXXXXXXjaXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1jkmjIXXXXXXNaXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB19rzWHpXXXXbmXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1Sh7mLXXXXXboXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1Z_YqLFXXXXapXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1qFMlJVXXXXbqXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1sHjoKXXXXXaCXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB17wZEIVXXXXchXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1XsAmflDH8KJjSspnwu2NAVXa.png_170x120q30.jpg',
    ],
    cateImg12: [
      'https://img.alicdn.com/bao/uploaded/i2/0/T1FKaeXz4gXXXRih2H_!!0.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1n0lsHFXXXXX1XVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1uDGlIFXXXXbUaXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/http://gtms01.alicdn.com/tps/i1/TB1b.F3FVXXXXazXFXXXD.cNVXX-400-200.png_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB11k2qLFXXXXa.XpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1Itb6JVXXXXXAXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1e5WbLXXXXXXmXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1jj3JLFXXXXXcXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/http://gtms04.alicdn.com/tps/i4/TB1xaJ5FVXXXXXnXpXXXD.cNVXX-400-200.png_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1.eogLFXXXXbOXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1US6WLpXXXXarXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1tvPzJFXXXXbRXVXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1zWUQLFXXXXaQXpXXwu0bFXXX.png_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1DKEPIVXXXXXXXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1EtVFLXXXXXaLXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tfs/TB1vY6furvpK1RjSZPiXXbmwXXa-400-200.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tfs/TB1utazv7voK1RjSZFwXXciCFXa-170-85.png_170x120q30.jpg',
    ],
    cateImg13: [
      'https://img.alicdn.com/bao/uploaded/TB1OnmRJVXXXXagXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1ueQlJpXXXXcFXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1NEo1KFXXXXXZaXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1jETyJVXXXXcOXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1Stk1IFXXXXa7XpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/http://img.taobaocdn.com/bao/uploaded/TB1kbn6GFXXXXXwapXXwu0bFXXX.png_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB10qRPHVXXXXc.XpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1nLJ4HXXXXXaAapXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1Pt_VHpXXXXbzXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1wc_yIVXXXXXTXXXXwu0bFXXX.png_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1R3pzIFXXXXXaXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1oRARKFXXXXbvXpXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1v..NJFXXXXceXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1ojhVKVXXXXXSaXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/i5/T1wPnfXhpkXXb1upjX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1ad5iLVXXXXblXXXXSutbFXXX.jpg_170x120q30.jpg',
    ],
    cateImg14: [
      'https://img.alicdn.com/imgextra/i4/2074722020/TB28.gelpXXXXaUXpXXXXXXXXXX_!!2074722020.jpg_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i3/2074722020/TB20E7zlpXXXXbyXXXXXXXXXXXX_!!2074722020.jpg_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i4/705062048/TB2XKFuoVXXXXaWXFXXXXXXXXXX-705062048.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1Wl7LIVXXXXa9XFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/i8/T1JhbiXbJdXXb1upjX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1NexJJpXXXXaqXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i4/1776443719/TB2.yEylpXXXXcpXXXXXXXXXXXX_!!1776443719.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1QWssJXXXXXboXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i2/820398833/TB2jjKqlFXXXXczXXXXXXXXXXXX-820398833.jpg_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i3/705062048/TB2_khJoVXXXXcwXpXXXXXXXXXX-705062048.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/i4/0/T1j.xYFqhXXXXRih2H_!!0.jpg_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i1/2074722020/TB2aEsAlpXXXXblXXXXXXXXXXXX_!!2074722020.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1sOn8IVXXXXXkapXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB12QfgIVXXXXaZXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1rZLPHpXXXXcOXFXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i2/2074722020/TB2axgjlpXXXXX1XpXXXXXXXXXX_!!2074722020.jpg_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i3/820398833/TB2opmrlFXXXXcxXXXXXXXXXXXX-820398833.jpg_170x120q30.jpg',
      'https://img.alicdn.com/imgextra/i4/820398833/TB27vqulFXXXXbWXXXXXXXXXXXX-820398833.jpg_170x120q30.jpg',
    ],
    cateImg15: [
      'https://img.alicdn.com/tps/i3/TB1ROPWLVXXXXcjXVXXEQfgIVXX-600-300.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i4/TB1_EohLVXXXXX0XXXXN3Sk_VXX-800-400.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i1/TB1qz_YLVXXXXcsXVXXN3Sk_VXX-800-400.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i3/TB1iSb8LVXXXXXsXFXXma0XTXXX-200-100.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i4/TB1JR.fLVXXXXbwXXXX38MsFXXX-140-70.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i2/TB1XlJvMXXXXXXEaXXXvDEcNVXX-400-200.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i1/TB1WrIeLVXXXXb6XXXX38MsFXXX-140-70.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i2/TB12GQdLVXXXXcIXXXX38MsFXXX-140-70.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i1/TB1RELVLVXXXXXJaXXX38MsFXXX-140-70.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i2/TB1hYv5LVXXXXbfXFXXNkoJQpXX-300-150.jpg_170x120q30.jpg',
      'https://img.alicdn.com/tps/i1/TB1oaMdLVXXXXcrXXXXma0XTXXX-200-100.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1b4c1LFXXXXcCXpXXwu0bFXXX.png_170x120q30.jpg',
      'https://img.alicdn.com/tps/i3/TB1.9f6LVXXXXaOXFXXma0XTXXX-200-100.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1vHxVLVXXXXXOXpXXwu0bFXXX.png_170x120q30.jpg',
      'https://img.alicdn.com/tps/i4/TB13dzTLVXXXXahaXXX38MsFXXX-140-70.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1g0h4KXXXXXcHXXXXSutbFXXX.jpg_170x120q30.jpg',
      'https://img.alicdn.com/bao/uploaded/TB1X0e_LVXXXXXgXpXXwu0bFXXX.png_170x120q30.jpg',
      'https://img.alicdn.com/tps/i3/TB1YJkgLVXXXXXCXXXX38MsFXXX-140-70.jpg_170x120q30.jpg',
    ],
  
  
    bannerCon1: [{src: 'https://img.alicdn.com/tfs/TB1oquGGv9TBuNjy0FcXXbeiFXa-468-1236.png', name1: '天猫超市', name2: '粮油调味爆款直接'}],
    bannerCon2: [{src: 'https://img.alicdn.com/tps/i4/TB1FbCaeRCw3KVjSZFuwu3AOpXa.png', name1: '进口精选', name2: '大牌好货轻松购入'}],
    bannerCon3: [{src: 'https://img.alicdn.com/tps/i4/TB1gM5veGWs3KVjSZFxwu1WUXXa.png', name1: '直营品质', name2: '放心体验畅享全球'}],


    priceTags1:[
      {name: '【天猫超市】Hisense/海信 BC-100S/A 单门冷藏节能静音小冰箱', price: '579', src: 'https://gw.alicdn.com/bao/uploaded/i2/1055977456/TB1EOqUrgaTBuNjSszfXXXgfpXa_!!0-item_pic.jpg'},
      {name: '康师傅 超福袋红烧牛肉面 109g*5袋 方便面泡面速食面', price: '7.5', src: 'https://gw.alicdn.com/bao/uploaded/i4/725677994/TB2LJkPc3HqK1RjSZFgXXa7JXXa_!!725677994-0-sm.jpg'},
      {name: '【天猫超市】Changhong/长虹 39M1 节能LED高清平板液晶电视', price: '999', src: 'https://gw.alicdn.com/bao/uploaded/i4/TB1aGzbQXXXXXXTXVXXXXXXXXXX_!!0-item_pic.jpg'},
      {name: '乌江涪陵榨菜小包装清爽辣菜芯80g下饭酱菜泡菜咸菜佐餐开口小菜', price: '3', src: 'https://gw.alicdn.com/bao/uploaded/i1/725677994/O1CN01dtjiIv28vIgs4tG1B_!!0-item_pic.jpg'},
      {name: '牛浪汉麻辣牛肉干160g美味小吃四川重庆特产休闲零食牛肉辣条', price: '35', src: 'https://gw.alicdn.com/bao/uploaded/i2/725677994/O1CN01ZmnVic28vIgq0Zfmq_!!0-item_pic.jpg'},
      {name: '三牛上海万年青饼干528g/袋休闲零食 儿时味道 美味可口', price: '14.8', src: 'https://gw.alicdn.com/bao/uploaded/i3/725677994/TB2Jss9c4TpK1RjSZFMXXbG_VXa_!!725677994-0-sm.jpg'},
    ],

    priceTags2: [
      {name: 'dha澳洲bio island 婴儿海藻油胶囊60粒 儿童补脑记忆力宝宝2瓶装', price: '198', src: 'https://gw.alicdn.com/bao/uploaded/i3/2183588465/O1CN013xFO652CP1EyM6H3A_!!0-item_pic.jpg'},
      {name: '韩国the face shop/菲诗小铺圆形海绵卸妆化妆棉化妆品工具脸部', price: '29', src: 'https://gw.alicdn.com/bao/uploaded/i2/2063458233/O1CN01RzVoZK2AglIyGEhdM_!!0-item_pic.jpg'},
      {name: '保税日本Esthe Dew伊诗露化妆水500ml*2 保湿美白胎盘素爽肤水', price: '130', src: 'https://gw.alicdn.com/bao/uploaded/i2/2495029969/O1CN01warGhE2NVqvIDjrWD_!!0-item_pic.jpg'},
      {name: '呵叻泰 米糠油1L 稻米油 稻谷油 谷维素食用油 泰国原装进口油', price: '89', src: 'https://gw.alicdn.com/bao/uploaded/i2/2985642883/O1CN015GVf0Z1XASNkqZthM_!!0-item_pic.jpg'},
      {name: 'Y-3男装19年新款奢侈品男士T恤短袖 DY7183 白色', price: '699', src: 'http://gw.alicdn.com/bao/uploaded/i1/3969433079/O1CN01a2QNbf1YcE0RwFcI9_!!0-item_pic.jpg'},
      {name: '菲诗小铺黒杆防水睫毛膏 7g', price: '16.5', src: 'https://gw.alicdn.com/bao/uploaded/i4/2175912342/O1CN01pyJpDQ1TAg75lFanM_!!0-item_pic.jpg'},
      {name: '【会员专享】LACHESCA高保湿洁面130g', price: '99', src:'http://gw.alicdn.com/bao/uploaded/i2/2877976327/O1CN01EsOiWB1wboOSVAGEI_!!0-item_pic.jpg'}
    ]
  }
})