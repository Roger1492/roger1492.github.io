// 一个函数只完成一个功能，否则项目会变得难以维护

// TODO: 通过歌名和歌手搜索 并且把结果放在生成的列表中
// TODO: 点击列表中的歌曲后把歌曲地址放在播放器中

// let searchSongEnter = document.getElementById('searchSongEnter');
// let searchSongClick = document.getElementById('searchSongClick');
// let searchSingerEnter = document.getElementById('searchSingerEnter');
// let searchSingerClick = document.getElementById('searchSingerClick');
let list = document.getElementById('list');
let recommandUrl = 'https://www.mxnzp.com/api/music/recommend/list';

// 页面加载后fetch推荐页
function getRecommandList(url){
    fetch(url)
    .then(response => response.json())
    .then(myJson => {
        for(let i = 0; i < 30; i++){
            let createColumn = document.createElement('div');
            let createDetail = `
            <span class="songId" style="display:none;">id</span>
            <span class="songNumber">${i+1}</span>
            <span class="songOperation">song</span>
            <span class="songName">name</span>
            <span class="artistName">artist</span>
            <span class="albumName">album</span>
            <span class="songDuration">5:33</span>
            `;
            createColumn.innerHTML = createDetail;
            list.appendChild(createColumn);
        }
    });
}

getRecommandList(recommandUrl);

// searchSongEnter.addEventListener('keypress', function(e){}, false);