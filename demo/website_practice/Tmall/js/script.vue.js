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
      'https://img.alicdn.com/bao/uploaded/TB14lgnlnnI8KJjSszgwu38ApXa.png_170x120q30.jpg',
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
    bannerCon4: [{src: 'https://img.alicdn.com/tps/i4/TB1_PDsiG6qK1RjSZFmSut0PFXa.jpg', name1: '周末好货', name2: '便宜随买爆款精选'}],
    bannerCon5: [{src: 'https://img.alicdn.com/tfs/TB1AxhNXUY1gK0jSZFCXXcwqXXa-468-1236.jpg', name1: '大牌直降', name2: '女装折扣全场3折'}],
    bannerCon6: [{src: 'https://img.alicdn.com/tps/i4/TB1iAupe8Kw3KVjSZFOSuurDVXa.jpg', name1: '家装建材', name2: '品质厨卫一站购齐'}],
    bannerCon7: [{src: 'https://img.alicdn.com/tfs/TB1yT4PQSrqK1RjSZK9XXXyypXa-468-1236.jpg', name1: '天猫超市', name2: '全城消暑超级热卖'}],
    bannerCon8: [{src: 'https://img.alicdn.com/tps/i4/TB180AyXQL0gK0jSZFxSutWHVXa.jpg', name1: '我型我秀', name2: '运动户外领券立减'}],


    priceTags1: [
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
    ],
    priceTags3: [
      {name: '吉普盾夏季圆领短袖t恤男宽松大码潮流休闲纯色棉弹打底男士体恤', price: '59', src: 'https://gw.alicdn.com/bao/uploaded/i4/1039141822/O1CN0171a2JX1PKW9XRDnzh_!!0-item_pic.jpg'},
      {name: '李宁综训鞋男鞋冬季舒适都市轻运动系列都市健步鞋ACGK083运动鞋', price: '81', src: 'https://gw.alicdn.com/bao/uploaded/i4/697112770/O1CN01CjEoEI1WKhdrq3vns_!!0-item_pic.jpg'},
      {name: '自然堂喜马拉雅百合面膜滋润补水保湿深层清洁官方旗舰店官网正品', price: '60', src: 'https://gw.alicdn.com/bao/uploaded/i4/1783676097/O1CN01PzeCml1uuTLdXqrIT_!!0-item_pic.jpg'},
      {name: 'Daphne/达芙妮ONDUL/圆漾一字带凉鞋时尚背带方头粗跟露趾凉鞋', price: '49', src: 'https://gw.alicdn.com/bao/uploaded/i4/1680509366/O1CN01X5fBEa2J3g33ocZH3_!!0-item_pic.jpg'},
      {name: '回力居家棉拖鞋男冬季室内包跟厚底防滑防水保暖棉鞋情侣家居拖鞋', price: '39', src: 'https://gw.alicdn.com/bao/uploaded/i1/1640495040/O1CN011n6MdbkhzbbdHBY_!!0-item_pic.jpg'},
      {name: '北极绒吊带背心女短款黑白色纯色打底衫莫代尔女士内搭百搭可外穿', price: '29.2', src: 'https://gw.alicdn.com/bao/uploaded/i1/1728672207/O1CN01Hw3ri11SAqc05qK1c_!!2-item_pic.png'},
      {name: '妮维雅男士亮肤控油洁面液150ml*2支装水龙卷液体亮肤洁面乳', price: '39.99', src: 'https://gw.alicdn.com/bao/uploaded/i2/TB1eyoCQXXXXXcUaXXXXXXXXXXX_!!0-item_pic.jpg'},
      {name: '花花公子短袖衬衫男中老年格子衬衣夏季中年人爸爸装口袋休闲寸衫', price: '139', src: 'https://gw.alicdn.com/bao/uploaded/i1/740173885/O1CN019qh8o91eZNF1nyHJU_!!0-item_pic.jpg'},
    ],
    priceTags4: [
      {name: '金正U盘8 16 32G看戏机配点歌本唱戏机视频资源内存', price: '70', src: 'https://gw.alicdn.com/bao/uploaded/i2/2146656624/O1CN01cEK9ns1ynq3f2BrhN_!!0-item_pic.jpg'},
      {name: '先锋电风扇台式转页扇KYT30-17A家用鸿运扇学生宿舍床头台扇定时', price: '139', src: 'https://gw.alicdn.com/bao/uploaded/i4/806775181/O1CN01RsW85z1o8wYHaxT4N_!!0-item_pic.jpg'},
      {name: '昂达 8G DDR3 1600 8G 1600/4G DDR3 1600台式机内存', price: '85', src: 'https://gw.alicdn.com/bao/uploaded/i2/2127024738/O1CN01VZe8PE1ks33EWq5V9_!!0-item_pic.jpg'},
      {name: 'Newsmy纽曼移动硬盘1TB 500G笔记本移动硬盘存储轻薄高速加密320G', price: '99', src: 'https://gw.alicdn.com/bao/uploaded/i1/432366730/O1CN01CUeL7f1zaO0W4sZ3n_!!0-item_pic.jpg'},
      {name: 'Hivi/惠威S5N音箱5寸扬声器发烧中低音喇叭', price: '135', src: 'https://gw.alicdn.com/bao/uploaded/i3/2935715108/O1CN01yytUIF1nbVbXWbHOG_!!2-item_pic.png'},
      {name: '【大派送】海尔无线吸尘器ZB1208B原装电动除螨刷非卖品赠品', price: '199', src: 'https://gw.alicdn.com/bao/uploaded/i2/1667442936/O1CN011XYjJocdR0lz4A5_!!0-item_pic.jpg'},
      {name: '舞台演出音响支架落地支架三脚架加重加粗双话筒麦克风立式支架', price: '120', src: 'https://gw.alicdn.com/bao/uploaded/i2/TB1_KdELXXXXXckXpXXXXXXXXXX_!!2-item_pic.png'},
      {name: 'BOBOT 无线拖地机手柄拖把把手', price: '199', src: 'https://gw.alicdn.com/bao/uploaded/i4/3849134134/O1CN01hlOloi1gPPqvPJ78F_!!0-item_pic.jpg'},
    ],
    priceTags5: [
      {name: '卫龙辣条68g×2麻辣熟食大面筋 亲嘴烧豆腐干辣片 重庆风味零食品', price: '5.6', src: 'https://gw.alicdn.com/bao/uploaded/i4/TB1OSb_HpXXXXcZXXXXXXXXXXXX_!!0-item_pic.jpg'},
      {name: '金角老四川 牛肉干500g礼包五香麻辣味 四川重庆特产休闲零食小吃', price: '18.9', src: 'https://gw.alicdn.com/bao/uploaded/i2/681185851/O1CN01xLLa9l1t5nsZkiwzN_!!0-item_pic.jpg'},
      {name: '【天猫精灵专享】三元经典小方白全脂纯牛奶250ml*16盒整箱', price: '46.9', src: 'https://gw.alicdn.com/bao/uploaded/i1/3045163376/O1CN01nRvq3V1aoFeuWjXZa_!!0-item_pic.jpg'},
      {name: '白猫无磷洗衣粉10斤大包装5kg清新花香威煌高效速洁4袋起包邮批发', price: '28.5', src: 'https://gw.alicdn.com/bao/uploaded/i3/3054854713/O1CN011kgb7oYXMw9mdgf_!!0-item_pic.jpg'},
      {name: '得力0051回形针3#金属三角曲别针 加厚电镀不易生锈 100枚/盒三角回形针 三角曲别针', price: '1.8', src: 'https://gw.alicdn.com/bao/uploaded/i4/2919906405/TB1q6GLmBmWBuNkSndVXXcsApXa_!!0-item_pic.jpg'},
      {name: '日式创意不锈钢便携式餐具盒三件套装学生可爱筷子盒长柄勺子叉子', price: '5.1', src: 'https://gw.alicdn.com/bao/uploaded/i3/TB1QU6TNXXXXXb_aXXXXXXXXXXX_!!0-item_pic.jpg'},
      {name: '送VC90片改善睡眠汤臣倍健 褪黑素片60片加送30片', price: '89', src: 'https://gw.alicdn.com/bao/uploaded/i4/TB17LMsOFXXXXXDXFXXYwZeFXXX_085912.jpg'},
      {name: '皇麦世家纯燕麦400g【加购店内包邮产品联系客服改运费】', price: '9.9', src: 'https://gw.alicdn.com/bao/uploaded/i1/1772698439/O1CN01c0sdzL2CD6vl9sEQt_!!0-item_pic.jpg'},
    ],
    priceTags6: [
      {name: 'Bear/小熊 养生壶配件 电热水壶的玻璃壶身 YSH-A15E1配件 不含盖', price: '79', src: 'https://gw.alicdn.com/bao/uploaded/i4/TB1D0bRSpXXXXbEXpXXXXXXXXXX_!!0-item_pic.jpg'},
      {name: 'Royalstar/荣事达 RBC-15M电炖锅家用白瓷迷你电炖盅煲汤锅煮粥锅', price: '55', src: 'https://gw.alicdn.com/bao/uploaded/i1/2619709162/O1CN01WzMhjR2HYFGD5u196_!!0-item_pic.jpg'},
      {name: '医疗护理用品加固老人坐便椅折叠加厚孕妇移动马桶坐便器厕所', price: '45.63', src: 'https://gw.alicdn.com/bao/uploaded/i4/3328708534/O1CN01kIdzJj2CucZANdMQc_!!0-item_pic.jpg'},
      {name: '原装苏泊尔电压力锅内胆不粘球釜5L适用50FC/FSW20QT', price: '59', src: 'https://gw.alicdn.com/bao/uploaded/i4/671727473/TB1qmYNbzlxYKJjSZFuXXaYlVXa_!!0-item_pic.jpg'},
      {name: '新功升级款t13自动上水烧水壶不锈钢电热水壶烧水炉套壶37X20', price: '238', src: 'https://gw.alicdn.com/bao/uploaded/i2/679210591/O1CN01ddsXNR1GEiYGbViND_!!0-item_pic.jpg'},
      {name: '鸣盏煮茶器养生壶办公室小型家用花茶壶多功能蒸汽黑茶器加厚玻璃', price: '289', src: 'https://gw.alicdn.com/bao/uploaded/i3/2200791825135/O1CN01sPFddZ1nnsKXeu3oo_!!0-item_pic.jpg'},
      {name: '原装TCL电视遥控器智能语音电视机49P3 C2 C6 P6  C5 X2 860U', price: '89', src: 'https://gw.alicdn.com/bao/uploaded/i4/2331713720/O1CN01uy93ff1dLnqzaRQCa_!!0-item_pic.jpg'},
      {name: '人体工学脚踏凳办公脚踏板学生增高垫foorest垫脚凳办公室搁脚凳', price: '98', src: 'https://gw.alicdn.com/bao/uploaded/i2/1699869370/O1CN019jWtuq2J5Vfe8kOtD_!!0-item_pic.jpg'},
    ],
    priceTags7: [
      {name: '李宁 男式 生活系列街头休闲鞋ALMG031-2', price: '65', src: 'https://gw.alicdn.com/bao/uploaded/i2/TB1uTSWRFXXXXbiXFXXXXXXXXXX_!!0-item_pic.jpg'},
      {name: 'Adidas阿迪达斯男包女包新款旅行包斜挎包单肩包背包BQ6975', price: '149', src: 'https://gw.alicdn.com/bao/uploaded/i2/2786684144/O1CN019et4VO1gTzq7Qe4vj_!!0-item_pic.jpg'},
      {name: '哥仑步速干衣男 新品特价男女夏透气短袖户外女装运动跑步速干T恤', price: '79', src: 'https://gw.alicdn.com/bao/uploaded/i3/362954818/O1CN01snD6s81lSgkIjho4U_!!0-item_pic.jpg'},
      {name: '博冠（BOSMA）双筒望远镜通用手机摄影支架稳固贴合简单快速安装', price: '38', src: 'https://gw.alicdn.com/bao/uploaded/i2/TB1.WdvMpXXXXalXXXXXXXXXXXX_!!0-item_pic.jpg'},
      {name: '探路者徒步裤户外18春夏新款男弹力速干透气登山短裤KAMG81385', price: '129', src: 'https://gw.alicdn.com/bao/uploaded/i2/746793438/O1CN01glUAbI1bGeDN6hbwL_!!0-item_pic.jpg'},
      {name: '361度男鞋越野跑鞋2019春季新款户外运动鞋男士361徒步登山鞋男', price: '125', src: 'https://gw.alicdn.com/bao/uploaded/i3/3497630113/O1CN01XqtHx61ChnIEIZJDe_!!0-item_pic.jpg'},
      {name: '安踏提跨包2019夏季新款休闲时尚手提包男女同款学生包包99919121', price: '89', src: 'https://gw.alicdn.com/bao/uploaded/i4/1961992559/O1CN01PTUtLQ1Um44oSapc2_!!1961992559.jpg'},
      {name: 'Reebok/锐步银泰专柜CL Printemps Ete tote男女包DU7738', price: '209.3', src: 'https://gw.alicdn.com/bao/uploaded/i2/2094336397/O1CN01MlP9s91x7s94QTYla_!!0-item_pic.jpg'},
    ],
    priceTags8: [
      {name: '【夏日狂欢季】【买赠手机保护套】Huawei/华为P30 Pro曲面屏超感光徕卡四摄变焦双景录像980智能手机p30pro', price: '5488.0', src:'https://img.alicdn.com/bao/uploaded/i2/2838892713/O1CN01ClH2TN1Vub4LptgqU_!!2838892713.jpg_400x400q60.jpg'},
      {name: 'Midea/美的 KFR-35GW/WDCN8A3@ 大1.5匹变频冷暖壁挂式空调挂机', price: '2499.0', src:'https://img.alicdn.com/bao/uploaded/i4/201749140/O1CN01W4tGo22HOAYPFNBWw_!!2-item_pic.png_400x400q60.jpg'},
      {name: '科沃斯扫地机器人DJ35智能家用全自动吸尘器洗地擦地拖地扫一体机', price: '1899.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB13G2fXeL2gK0jSZFmXXc7iXXa.png_400x400q60.jpg'},
      {name: '【三只松鼠_每日坚果750g/30天装】混合果仁小包装零食大礼包送礼', price: '138.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB14cp2V3HqK1RjSZFkXXX.WFXa.png_400x400q60.jpg'},
      {name: '【预售】雅诗兰黛樱花微精华 补水提亮 细腻剔透 收缩毛孔去闭口', price: '860.0', src:'https://img.alicdn.com/bao/uploaded/i4/2064892827/O1CN01EwvH3i1WkoC9UgDdy_!!2-item_pic.png_400x400q60.jpg'},
      {name: '【预售】雅诗兰黛小棕瓶抗蓝光眼霜15ml 淡化细纹黑眼圈 补水保湿', price: '510.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1emikVcbpK1RjSZFyXXX_qFXa.png_400x400q60.jpg'},
      {name: '亿健精灵ELF跑步机家用款电动走步超静音折叠小型室内健身房专用', price: '1699.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1J5MJU3HqK1RjSZJnXXbNLpXa.png_400x400q60.jpg'},
      {name: 'Xiaomi/小米 小米电视4A 65英寸4k超清智能网络平板电视机6070', price: '2999.0', src:'https://img.alicdn.com/bao/uploaded/i1/1714128138/O1CN01bmhB5029zFiA0DR3D_!!0-item_pic.jpg_400x400q60.jpg'},
      {name: '兰蔻粉水清滢柔肤水400ml爽肤水 补水保湿舒缓滋润', price: '420.0', src:'https://img.alicdn.com/bao/uploaded/i1/2360209412/O1CN01cu2u1u2JOkJISUAzO_!!2-item_pic.png_400x400q60.jpg'},
      {name: 'LA MER海蓝之谜鎏光焕变气垫粉底液防晒保湿补水', price: '1000.0', src:'https://img.alicdn.com/bao/uploaded/i1/2424298091/O1CN01vbrZk029dj5BF7ZZM_!!2-item_pic.png_400x400q60.jpg'},
      {name: 'Haier/海尔 EG10014B39GU1 10公斤kg蓝晶变频滚筒全自动洗衣机', price: '2699.0', src:'https://img.alicdn.com/bao/uploaded/i3/TB1ZBpnNpXXXXXzaXXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg'},
      {name: '女装 AIRism防紫外线网眼连帽运动开衫(长袖) 413363 优衣库', price: '199.0', src:'https://img.alicdn.com/bao/uploaded/i1/196993935/O1CN01XrB3uY1ewH3qYYJet_!!2-item_pic.png_400x400q60.jpg'},
      {name: '兰蔻全新3D大眼精华20ml 眼部精华眼霜滋养睫毛淡眼纹', price: '680.0', src:'https://img.alicdn.com/bao/uploaded/i3/2360209412/O1CN01uoKUjT2JOkJG4iSSr_!!2-item_pic.png_400x400q60.jpg'},
      {name: '【官方正品】纪梵希口红小羊皮半哑光唇膏女304 306 307姨妈色', price: '345.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB14hNqXa5s3KVjSZFNXXcD3FXa.png_400x400q60.jpg'},
      {name: '【设计师合作款】女装 高腰宽腿直筒牛仔裤(水洗产品) 422014', price: '299.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1GE66XKL2gK0jSZPhXXahvXXa.png_400x400q60.jpg'},
      {name: 'LA MER海蓝之谜修护精华面霜补水保湿滋润舒缓', price: '760.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1wHeHV4naK1RjSZFtXXbC2VXa.png_400x400q60.jpg'},
      {name: 'Haier/海尔 BCD-470WDPG 十字对开变频静音节能干湿分储家用冰箱', price: '4799.0', src:'https://img.alicdn.com/bao/uploaded/i4/470168984/O1CN01HrIcx02GEin63umRX_!!470168984.jpg_400x400q60.jpg'},
      {name: '【预售】欧舒丹清新马鞭草沐浴露润肤乳夏清洁滋润保湿朱一龙同款', price: '440.0', src:'https://img.alicdn.com/bao/uploaded/i3/2248304671/O1CN01rBveSu1kNMXv7euJf_!!2-item_pic.png_400x400q60.jpg'},
      {name: 'LA MER海蓝之谜保湿修护套装精华面霜+焕肤水', price: '2200.0', src:'https://img.alicdn.com/bao/uploaded/i4/2424298091/O1CN01PVFehS29dj6dbyd84_!!2-item_pic.png_400x400q60.jpg'},
      {name: '阿芙荷荷巴油/霍霍巴油去黑头jojoba精油基础油护肤脸部面部按摩', price: '98.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1mO9xUpzqK1RjSZFCXXbbxVXa.png_400x400q60.jpg'},
      {name: '阿芙马鞭草酮迷迭香马迷纯露闭口粉刺毛孔收缩堵塞疏通爽肤喷雾去', price: '99.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1NgrcXEGF3KVjSZFoXXbmpFXa.png_400x400q60.jpg'},
      {name: '方太JQD2T+HT8BE吸家用抽油油烟机灶具燃气灶煤气灶套餐烟灶套装', price: '7680.0', src:'https://img.alicdn.com/bao/uploaded/i4/667454208/O1CN01gSA7iC1gxJBl9uIhf_!!667454208.jpg_400x400q60.jpg'},
      {name: '【全国联保 两年保修】Apple/苹果 7.9 英寸iPad mini平板电脑 2019新款ipadmini5掌上电脑 支持Apple Pencil', price: '2628.0', src:'https://img.alicdn.com/bao/uploaded/i4/1669409267/O1CN016nQfZ92IKKqdU363U_!!1669409267.jpg_400x400q60.jpg'},
      {name: '维达抽纸超韧3层M码120抽24包整箱装 中规格卫生纸巾新旧交替', price: '89.0', src:'https://img.alicdn.com/bao/uploaded/i2/725677994/O1CN01dVPHEN28vIcs3mk18_!!725677994.png_400x400q60.jpg'},
      {name: '全棉时代 婴儿棉柔巾纯棉新生儿干湿两用巾 棉柔巾非湿巾小包18包', price: '299.0', src:'https://img.alicdn.com/bao/uploaded/i3/430490406/O1CN01B1zLYL1ErzJLAmxu7_!!0-item_pic.jpg_400x400q60.jpg'},
      {name: '新品九阳不用手洗破壁机静音料理全自动家用多功能养生豆浆机Y88', price: '3599.0', src:'https://img.alicdn.com/bao/uploaded/i4/415670368/O1CN01vBoiQm1EaaHgA5AOb_!!415670368.jpg_400x400q60.jpg'},
      {name: '维达卷纸蓝色经典4层140克27卷整箱装有芯卷纸卫生纸巾 新旧交替', price: '71.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1UYdCkmrqK1RjSZK9XXXyypXa.png_400x400q60.jpg'},
      {name: '【设计师合作款】女装 圆领T恤(短袖) 414443 优衣库UNIQLO', price: '79.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1QBr7XND1gK0jSZFsXXbldVXa.png_400x400q60.jpg'},
      {name: '美的电风扇客厅遥控大风落地扇家用宿舍静音定时立式台式转页电扇', price: '219.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1boQMXAL0gK0jSZFxXXXWHVXa.png_400x400q60.jpg'},
      {name: '【三只松鼠_麻辣肉食大礼包】网红零食小吃休闲小食品散装充饥', price: '59.0', src:'https://img.alicdn.com/bao/uploaded/i2/880734502/O1CN01eOwqbo1j7xd8nLTOR_!!2-item_pic.png_400x400q60.jpg'},
      {name: '【店铺爆款可提前抢购】Lenovo/联想小新14 2019锐龙版轻薄本笔记本电脑(R5-3500U/8G/14英寸)', price: '3999.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB159MRU3HqK1RjSZFkXXX.WFXa.png_400x400q60.jpg'},
      {name: '花王日本进口纸尿裤XL44片 超薄透气男女通用婴儿尿不湿', price: '170.0', src:'https://img.alicdn.com/bao/uploaded/i2/725677994/O1CN014g1p1i28vIghqCiFf_!!725677994.jpg_400x400q60.jpg'},
      {name: '全新Kindle Paperwhite4 亚马逊电子书阅读器 KPW4 纯平电子墨水屏 电纸书 开学季文具 泡面盖子', price: '998.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB14fPLeoGF3KVjSZFvXXb_nXXa.png_400x400q60.jpg'},
      {name: '【官方正品】纪梵希散粉四宫格定妆粉 细腻粉质控油持妆遮瑕', price: '535.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1.zdnXlKw3KVjSZTEXXcuRpXa.png_400x400q60.jpg'},
      {name: '施华洛世奇SPARKLING DC跃动晶彩项链锁骨链女首饰 送女友礼物', price: '1290.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1XcoCb2c3T1VjSZPfXXcWHXXa.png_400x400q60.jpg'},
      {name: '女装 便携式防紫外线连帽外套 414188 优衣库UNIQLO', price: '249.0', src:'https://img.alicdn.com/bao/uploaded/i3/196993935/O1CN01j1kOsE1ewH3b1dUao_!!2-item_pic.png_400x400q60.jpg'},
      {name: '迪卡侬防晒服男外套薄衫防紫外线皮肤衣女防晒透气户外防晒衣QUFH', price: '149.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1rjJMVCzqK1RjSZPcXXbTepXa.png_400x400q60.jpg'},
      {name: '飞科剃须刀电动男士刮胡刀全身水洗智能充电式胡须刀正品刮胡子刀', price: '89.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1bK1oe9WD3KVjSZSgXXcCxVXa.png_400x400q60.jpg'},
      {name: '美的挂烫机家用蒸汽小型手持熨斗挂立式烫衣机衣服熨烫机熨衣服机', price: '168.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1EpU_d.uF3KVjSZK9XXbVtXXa.png_400x400q60.jpg'},
      {name: '奥克斯手持挂烫机家用小型便携式电熨斗迷你烫斗蒸汽刷旅行熨烫机', price: '89.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1GSICVXzqK1RjSZFvXXcB7VXa.png_400x400q60.jpg'},
      {name: '绝世澳洲家庭原肉整切牛排套餐黑椒牛肉10片儿童新鲜菲力西冷', price: '198.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1N8YqVhnaK1RjSZFBXXcW7VXa.png_400x400q60.jpg'},
      {name: '美的电热水壶家用304不锈钢正品电热烧水壶自动断电大容量开水壶', price: '79.0', src:'https://img.alicdn.com/bao/uploaded/i3/2973966816/O1CN01Z77aGr20Dm7i01vdD_!!2973966816.jpg_400x400q60.jpg'},
      {name: 'Skechers斯凯奇女鞋杨紫同款熊猫鞋运动凉鞋魔术贴沙滩鞋88888181', price: '399.0', src:'https://img.alicdn.com/bao/uploaded/i1/2129855716/O1CN01rkyvoY1s5yRvR3Rp8_!!2-item_pic.png_400x400q60.jpg'},
      {name: '【三只松鼠_手撕面包1kg/整箱】网红早餐营养食品小零食蛋糕点心', price: '24.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1kV1rVa6qK1RjSZFmXXX0PFXa.png_400x400q60.jpg'},
      {name: '苏泊尔电饭煲家用3L迷你电饭锅小型智能全自动官方旗舰店1-2人3-4', price: '189.0', src:'https://img.alicdn.com/bao/uploaded/i2/2088151283/TB2XEewiYYI8KJjy0FaXXbAiVXa_!!2088151283.png_400x400q60.jpg'},
      {name: 'Nike 耐克官方NIKE AIR FORCE 1 07男子运动鞋休闲鞋板鞋 315122', price: '749.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB17TWWUNTpK1RjSZR0XXbEwXXa.png_400x400q60.jpg'},
      {name: '【设计师合作款】女装 麻棉打褶连衣裙(短袖) 418160 优衣库', price: '299.0', src:'https://img.alicdn.com/bao/uploaded/i2/196993935/O1CN01s5It251ewH0z9xLdw_!!2-item_pic.png_400x400q60.jpg'},
      {name: '广西百香果5热带水果新鲜西番莲鸡蛋果带箱6斤装大红果当季整箱10', price: '39.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB15HPqXRCw3KVjSZFuXXcAOpXa.png_400x400q60.jpg'},
      {name: '美的智能空气净化器家用除甲醛二手烟pm2.5雾霾卧室客厅净化机E33', price: '1998.0', src:'https://img.alicdn.com/bao/uploaded/i3/2616100841/O1CN01vTHrxE1I5DdHOUwtO_!!2-item_pic.png_400x400q60.jpg'},
      {name: '【官方正品】纪梵希心无禁忌香水女 黑白香调 创意突破', price: '615.0', src:'https://img.alicdn.com/bao/uploaded/i3/3570503317/O1CN01Ulwk2W1aNEGXh7xuj_!!2-item_pic.png_400x400q60.jpg'},
      {name: '免手洗拖把家用平板懒人拖布免洗网红一拖地拖墩布净抖音拖地神器', price: '109.0', src:'https://img.alicdn.com/bao/uploaded/i4/705777015/O1CN01tfDkLd21guu0ZYQxi_!!2-item_pic.png_400x400q60.jpg'},
      {name: '男装 快干POLO衫(短袖) 413440 优衣库UNIQLO', price: '99.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1q6WkX8iE3KVjSZFMXXbQhVXa.png_400x400q60.jpg'},
      {name: '美的空调扇冷风机冷气家用小型宿舍移动无叶水小空调风扇制冷机器', price: '649.0', src:'https://img.alicdn.com/bao/uploaded/i2/2178947350/O1CN01tYxYe324ALajDa3Xh_!!2-item_pic.png_400x400q60.jpg'},
      {name: 'Nike 耐克官方KYRIE 5 EP男子运动鞋 AO2919', price: '999.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1rF5YUH2pK1RjSZFsXXaNlXXa.png_400x400q60.jpg'},
      {name: '苏泊尔榨汁机家用全自动水果小型多功能迷你便携式学生电动榨汁杯', price: '99.0', src:'https://img.alicdn.com/bao/uploaded/i4/2527740099/O1CN016hHWSe1CbNkBkPgMt_!!0-item_pic.jpg_400x400q60.jpg'},
      {name: '飞科电吹风机家用理发店专用大功率负离子护发不伤发廊静音吹风筒', price: '69.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB17r9aeRaE3KVjSZLeXXXsSFXa.png_400x400q60.jpg'},
      {name: '小白熊恒温调奶器暖奶器旗舰店婴儿泡奶粉机恒温热水壶冲奶温奶器', price: '299.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1pQxHXouF3KVjSZK9XXbVtXXa.png_400x400q60.jpg'},
      {name: '佳能CP1300小型手机照片打印机便携式热升华迷你家用无线彩色相片冲印拍立得1200手账洗照片机神器相机打印机', price: '798.0', src:'https://img.alicdn.com/bao/uploaded/i4/1819984936/TB2IqS0mOqAXuNjy1XdXXaYcVXa_!!1819984936.jpg_400x400q60.jpg'},
      {name: '美的净水器家用直饮自来水过滤器反渗透智能净水机花生官方旗舰店', price: '1998.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1XI4qV6TpK1RjSZKPXXa3UpXa.png_400x400q60.jpg'},
      {name: '【设计师合作款】男装 圆领T恤(短袖) 414351 优衣库UNIQLO', price: '99.0', src:'https://img.alicdn.com/bao/uploaded/i3/196993935/O1CN01fqerFy1ewH1AKiSNo_!!2-item_pic.png_400x400q60.jpg'},
      {name: '【极速发货】DJI 大疆 御 Mavic Air 便携可折叠4K无人机 高清航拍', price: '5498.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1SnJWXpP7gK0jSZFjXXc5aXXa.png_400x400q60.jpg'},
      {name: 'Braun/博朗 MQ5025多功能小型料理机婴儿辅食手持家用搅拌料理棒', price: '569.0', src:'https://img.alicdn.com/bao/uploaded/i3/1911588863/O1CN01AxQlil2FLIsHVWBdF_!!1911588863.jpg_400x400q60.jpg'},
      {name: 'Danielwellington 丹尼尔惠灵顿DW手表女28mm简约时尚女表', price: '1289.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1lueUVPDpK1RjSZFrXXa78VXa.png_400x400q60.jpg'},
      {name: '美宝莲眼唇卸妆液脸部眼部唇部卸妆油三合一卸妆水女温和清洁正品', price: '118.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1TYFobBWD3KVjSZKPXXap7FXa.png_400x400q60.jpg'},
      {name: '九阳破壁豆浆机小型免过滤家用全自动多功能智能官方旗舰店正品Q8', price: '899.0', src:'https://img.alicdn.com/bao/uploaded/i3/415670368/O1CN01udRYKy1EaaFkE1kH9_!!415670368.jpg_400x400q60.jpg'},
      {name: '周大福字母转运珠足金黄金吊坠计价工费48元F【多款】', price: '489.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1LlkwoDZmx1VjSZFGXXax2XXa.png_400x400q60.jpg'},
      {name: '爱丽思收纳箱抽屉式衣柜内收纳盒家用塑料整理箱衣服爱丽丝储物箱', price: '29.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1RYlCcfc3T1VjSZPfXXcWHXXa.png_400x400q60.jpg'},
      {name: '美的燃气热水器家用天然气13升变频恒温强排式即热式H1S 比12升好', price: '1149.0', src:'https://img.alicdn.com/bao/uploaded/i2/201749140/O1CN01nUQqxw2HOAZwuojDm_!!0-item_pic.jpg_400x400q60.jpg'},
      {name: 'KUB可优比婴儿凉席冰丝新生儿宝宝透气婴儿床凉席儿童幼儿园夏季', price: '88.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1kumtXkCy2eVjSZPfXXbdgpXa.png_400x400q60.jpg'},
      {name: 'YSL圣罗兰黑管唇釉 豆沙色407唇蜜口红唇彩梅子色番茄红416 正品', price: '320.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1l4lFaaWs3KVjSZFxXXaWUXXa.png_400x400q60.jpg'},
      {name: '男装 EZY九分裤 413171 优衣库UNIQLO', price: '149.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1oFP1X3mH3KVjSZKzXXb2OXXa.png_400x400q60.jpg'},
      {name: '苏泊尔电磁炉家用电火锅智能正品学生电池炉灶特价炒菜官方旗舰店', price: '199.0', src:'https://img.alicdn.com/bao/uploaded/i1/2527740099/O1CN01lHiCfj1CbNkKz7FRQ_!!2527740099.jpg_400x400q60.jpg'},
      {name: 'KUB可优比椰棕婴儿床棕垫宝宝床垫儿童乳胶床垫冬夏两用可定做', price: '150.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1s.6CVCzqK1RjSZPcXXbTepXa.png_400x400q60.jpg'},
      {name: '美的无线吸尘器家用小型大吸力超静音强力除螨无绳吸尘器手持式P5', price: '1189.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1LgN_WbPpK1RjSZFFXXa5PpXa.png_400x400q60.jpg'},
      {name: 'casio旗舰店G-SHOCK运动男表GA-110GB黑金卡西欧官方正品', price: '1190.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1DiV3BhuTBuNkHFNRwu39qpXa.png_400x400q60.jpg'},
      {name: '苏泊尔电饼铛电饼档家用双面加热烙饼锅煎饼机称新款加深加大正品', price: '169.0', src:'https://img.alicdn.com/bao/uploaded/i3/2641868119/O1CN01iPuzL129qYBizWHHE_!!2641868119.jpg_400x400q60.jpg'},
      {name: 'babycare多功能婴儿背带 宝宝前抱式腰凳新生儿四季通用抱娃神器', price: '248.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1F9VybQxz61VjSZFtXXaDSVXa.png_400x400q60.jpg'},
      {name: '飞科理发器电推剪充电式电推子成人婴儿童剃发电动头发剃头刀家用', price: '69.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1deupeRKw3KVjSZTEXXcuRpXa.png_400x400q60.jpg'},
      {name: '【买1送1】山东烟台大樱桃新鲜水果包邮当季车厘子3斤5车里子美早', price: '99.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB12lr7e.WF3KVjSZPhXXXclXXa.png_400x400q60.jpg'},
      {name: 'Haier/海尔 EC6002-MC3热水器电家用60升速热卫生间储水小型洗澡', price: '1199.0', src:'https://img.alicdn.com/bao/uploaded/i2/883072941/O1CN01XOiV1v1Xb1Mz9MHws_!!0-item_pic.jpg_400x400q60.jpg'},
      {name: '新品朱一龙同款膳魔师保温杯花系列运动水杯玻璃杯花茶杯冷水壶', price: '365.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1uhMkahiH3KVjSZPfXXXBiVXa.png_400x400q60.jpg'},
      {name: '好太太电动晾衣架遥控升降智能自动晒衣架家用四杆金属外壳晾衣机', price: '1429.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1omJ9UFzqK1RjSZFvXXcB7VXa.png_400x400q60.jpg'},
      {name: '【买1送1】广西金煌芒果新鲜水果包邮青芒当季甜心芒大整带箱10斤', price: '39.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB10S3de8Kw3KVjSZTEXXcuRpXa.png_400x400q60.jpg'},
      {name: '苏泊尔电烤箱家用烘焙小型烤箱多功能全自动蛋糕35L升大容量正品', price: '339.0', src:'https://img.alicdn.com/bao/uploaded/i4/2088151283/O1CN01Q3hW691LLed069ZUu_!!2-item_pic.png_400x400q60.jpg'},
      {name: '[旗舰店]Canon/佳能 PowerShot G7 X Mark II', price: '4099.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1wI4vXoGF3KVjSZFmXXbqPXXa.png_400x400q60.jpg'},
      {name: '可优比婴儿睡袋夏季儿童防踢被四季通用宝宝分腿纱布睡袋春秋薄款', price: '128.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1IZxcbk5E3KVjSZFCXXbuzXXa.png_400x400q60.jpg'},
      {name: '威露士衣物家居消毒液1Lx3+3支60ml便携装合3.18L配洗衣液使用', price: '199.0', src:'https://img.alicdn.com/bao/uploaded/i3/725677994/TB2_nMIr3aTBuNjSszfXXXgfpXa_!!725677994.png_400x400q60.jpg'},
      {name: 'Nike 耐克官方NIKE FREE RN 5.0男子跑步鞋 夏季透气 AQ1289', price: '899.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB14H4AV4jaK1RjSZKzXXXVwXXa.png_400x400q60.jpg'},
      {name: '欧莱雅小金管隔离防晒霜麦色滤面部防紫外线防晒伤SPF50+男女30ml', price: '170.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1LtD9e25G3KVjSZPxXXbI3XXa.png_400x400q60.jpg'},
      {name: '苏泊尔养生壶家用玻璃电全自动加厚煮茶壶煮茶器多功能养身烧水壶', price: '249.0', src:'https://img.alicdn.com/bao/uploaded/i3/2088151283/TB2tm5qoScqBKNjSZFgXXX_kXXa_!!2088151283.jpg_400x400q60.jpg'},
      {name: 'FILA 斐乐官方 女子短袖T恤 2019夏季新款时尚运动针织短袖衫女装', price: '359.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1QJcnS3TqK1RjSZPhXXXfOFXa.png_400x400q60.jpg'},
      {name: '苏泊尔电压力锅家用智能5L高压饭煲1官方2特价3旗舰店4正品5人6-8', price: '399.0', src:'https://img.alicdn.com/bao/uploaded/i3/2088151283/TB23fxvi4TI8KJjSspiXXbM4FXa_!!2088151283.png_400x400q60.jpg'},
      {name: '女装 薄型V领针织开衫(长袖) 413634 优衣库UNIQLO', price: '149.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1F_g3VSzqK1RjSZFLXXcn2XXa.png_400x400q60.jpg'},
      {name: 'YSL圣罗兰明彩轻垫粉底液 羽毛气垫墨水气垫遮瑕星钻经典 正品', price: '840.0', src:'https://img.alicdn.com/bao/uploaded/bao/upload/TB1Jf_QVNjaK1RjSZKzXXXVwXXa.png_400x400q60.jpg'},
      {name: '【买1送1】海南妃子笑荔枝新鲜包邮当季特产水果应季5整带箱6斤10', price: '69.0', src:'https://img.alicdn.com/bao/uploaded/i3/2939922051/O1CN01xz7z6y1R1OqyL4sPu_!!2-item_pic.png_400x400q60.jpg'}
    ]
  }
})