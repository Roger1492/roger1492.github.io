// 一个函数只完成一个功能，否则项目会变得难以维护

// TODO: 点击分页后
// TODO: 鼠标hover在列表上时，显示播放按钮，点击播放按钮后直接播放歌曲

let searchSongEnter = document.getElementById('searchSongEnter');
let searchSongClick = document.getElementById('searchSongClick');
let searchSingerEnter = document.getElementById('searchSingerEnter');
let searchSingerClick = document.getElementById('searchSingerClick');
let list = document.getElementById('list');
let pagination = document.getElementById('pagination');
let albumPic = document.querySelector('#albumPic img');
let controlWrap = document.getElementById('controlWrap');
let lyric = document.querySelector('#lyric pre code');
let recommandUrl = 'https://www.mxnzp.com/api/music/recommend/list';
let song_id_url = 'https://www.mxnzp.com/api/music/song/detail?songId=';
let song_name_url = 'https://www.mxnzp.com/api/music/song/search?keyWord=';
let song_singer_url = 'https://www.mxnzp.com/api/music/singer/search?keyWord=';
let song_singerId_url = 'https://www.mxnzp.com/api/music/singer/song/list?singerId=';

// 页面加载后fetch推荐页(首页)
function getRecommandList(url){
    fetch(url)
    .then(response => response.json())
    .then(myJson => {
        for(let i = 0; i < 30; i++){
            let createColumn = document.createElement('div');
                createColumn.setAttribute('class', 'column');
            let lineDetail = `
            <span class="songId" style="display:none;">${myJson.data[i].song_id}</span>
            <span class="songNumber">${i+1}</span>
            <span class="songOperation"><i class="fa fa-play"></i></span>
            <span class="songName">${myJson.data[i].title}</span>
            <span class="artistName">${myJson.data[i].author}</span>
            <span class="albumName">${myJson.data[i].album_title}</span>
            <span class="songDuration">5:33</span>
            `;
            createColumn.innerHTML = lineDetail;
            list.appendChild(createColumn);
        }
    });
}
getRecommandList(recommandUrl);

// 创建分页
function createPagination(page_num){
    let wrap = document.createElement('div');
    for(let i = 0; i < page_num; i++){
        let createPage = document.createElement('span');
        createPage.innerHTML = i+1;
        wrap.appendChild(createPage);
    }
    return wrap;
}

// 创建歌曲列表
function createSongListByTitle(myData){
    let len = myData.data.list.length;
    list.innerHTML = '';
    for(let i = 0; i < len; i++){
        let createColumn = document.createElement('div');
            createColumn.setAttribute('class', 'column');
        let lineDetail = `
            <span class="songId" style="display:none;">${myData.data.list[i].id}</span>
            <span class="songNumber">${i+1}</span>
            <span class="songOperation"><i class="fa fa-play"></i></span>
            <span class="songName">${myData.data.list[i].songName}</span>
            <span class="artistName">${myData.data.list[i].artistName}</span>
            <span class="albumName">${myData.data.list[i].albumName}</span>
            <span class="songDuration">5:33</span>
        `;
        createColumn.innerHTML = lineDetail;
        list.appendChild(createColumn);
    }
}

// 搜索歌曲
function fetchSongData(url){
    fetch(url)
    .then(response => response.json())
    .then(myJson => {
        let totalPage = myJson.data.totalPage;
        pagination.appendChild(createPagination(totalPage));   // 创建分页
        createSongListByTitle(myJson);   // 创建歌曲列表
    })
}

function createSongListByArtist(myData){
    let singerId = myData.data[0].singerId;
    fetch(song_singerId_url+singerId)
    .then(res5 => res5.json())
    .then(res6 => {
        let len = res6.data.list.length;
        list.innerHTML = '';
        pagination.appendChild(createPagination(res6.data.totalPage));   // 创建分页
        for(let i = 0; i < len; i++){
            let createColumn = document.createElement('div');
                createColumn.setAttribute('class', 'column');
            let lineDetail = `
                <span class="songId" style="display:none;">${res6.data.list[i].song_id}</span>
                <span class="songNumber">${i+1}</span>
                <span class="songOperation"><i class="fa fa-play"></i></span>
                <span class="songName">${res6.data.list[i].title}</span>
                <span class="artistName">${res6.data.list[i].author}</span>
                <span class="albumName">album</span>
                <span class="songDuration">${res6.data.list[i].file_duration}</span>
            `;
            createColumn.innerHTML = lineDetail;
            list.appendChild(createColumn);
        }
    })
}

// 搜索歌手
function fetchSingerData(url){
    fetch(url)
    .then(response => response.json())
    .then(res1 => {
        createSongListByArtist(res1);   // 创建歌曲列表
    })
}


// 获取播放地址
function playControl(url){
    let controls = `
        <audio id="song" controls>
            <source src="${url}" type="audio/mp3"></source>
        </audio>
    `;
    return controls;
}

function getLyric(lrc){
    fetch(lrc)
    .then(res => res.text())
    .then(res1 => {
        lyric.innerHTML = res1;
    })
}

//TODO: 获取歌曲时间

// 点击歌曲后准备播放
list.addEventListener('click', function(e){
    let songId = e.target.parentElement.firstElementChild.innerHTML;
    fetch(song_id_url+songId)
    .then(response => response.json())
    .then(myJson => {
        controlWrap.innerHTML = '';
        albumPic.src = myJson.data.songPic;
        controlWrap.innerHTML = playControl(myJson.data.songLink);
        getLyric(myJson.data.lrcLink);
    })
}, false);


// 搜索歌曲
searchSongEnter.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        let val = e.target.value;
        fetchSongData(song_name_url+val);
    }
}, false);
searchSongClick.addEventListener('click', function(e){
    let val = searchSongEnter.value;
    fetchSongData(song_name_url+val);
}, false);


// 搜索歌手
searchSingerEnter.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        let val = e.target.value;
        fetchSingerData(song_singer_url+val);
    }
}, false);
searchSingerClick.addEventListener('click', function(e){
    let val = searchSingerEnter.value;
    fetchSingerData(song_singer_url+val);
}, false);