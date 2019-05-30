// 一个函数只完成一个功能，否则项目会变得难以维护

// TODO: 分页的样式有点问题
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
let intro = document.getElementById('intro');
let recommandUrl = 'https://www.mxnzp.com/api/music/recommend/list';
let song_id_url = 'https://www.mxnzp.com/api/music/song/detail?songId=';
let song_name_url = 'https://www.mxnzp.com/api/music/song/search?keyWord=';
let song_singer_url = 'https://www.mxnzp.com/api/music/singer/search?keyWord=';
let song_singerId_url = 'https://www.mxnzp.com/api/music/singer/song/list?singerId=';
let singer_detail_url = 'https://www.mxnzp.com/api/music/singer/detail?singerId=';

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

// 歌手详情
function getSingerIntro(url){
    fetch(url)
    .then(response => response.json())
    .then(res => {
        let detail = `
                <div class="height">${res.data.stature}cm</div>
                <div class="constellation">${res.data.constellation}</div>
                <div class="company">${res.data.company}</div>
                <div class="country">${res.data.country}</div>
                <div class="birth">${res.data.birth}</div>
                <div class="intro">${res.data.intro}</div>
                `;
        intro.innerHTML = detail;
    })
}

// 通过搜索歌手创建列表
function createSongListByArtist(myData){
    let singerId = myData.data[0].singerId;

    getSingerIntro(singer_detail_url+singerId);

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
                <span class="songDuration">${translateToLyricTime(res6.data.list[i].file_duration)}</span>
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

// http转换为https
function toHttps(url){
    return url.replace('http', 'https');
}

// 把时间转换为标准格式 [05:54]
function translateToLyricTime(time){
    let m = parseInt(time / 60);
    let s = time % 60;
    return (`${m}:${s}`);
}

// 获取歌词
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
        getLyric(toHttps(myJson.data.lrcLink));
    })
}, false);


// 搜索歌曲
searchSongEnter.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        pagination.innerHTML = '';
        let val = e.target.value;
        fetchSongData(song_name_url+val);
    }
}, false);
searchSongClick.addEventListener('click', function(e){
    pagination.innerHTML = '';
    let val = searchSongEnter.value;
    fetchSongData(song_name_url+val);
}, false);


// 搜索歌手
searchSingerEnter.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        pagination.innerHTML = '';
        let val = e.target.value;
        fetchSingerData(song_singer_url+val);
    }
}, false);
searchSingerClick.addEventListener('click', function(e){
    pagination.innerHTML = '';
    let val = searchSingerEnter.value;
    fetchSingerData(song_singer_url+val);
}, false);


// 通过分页切换播放列表 - 只有通过歌手搜索的列表才可以使用这个
// TODO: 使用歌曲搜索的列表暂时不能用。
pagination.addEventListener('click', function(e){
    if(e.target.tagName.toUpperCase() === 'SPAN'){
        fetch(song_singer_url+searchSingerEnter.value)
        .then(response => response.json())
        .then(res => {
            let singerId = res.data[0].singerId;
            fetch(song_singerId_url+singerId+'&page='+e.target.innerHTML)
            .then(res1 => res1.json())
            .then(res2 => {
                let len = res2.data.list.length;
                list.innerHTML = '';
                for(let i = 0; i < len; i++){
                    let createColumn = document.createElement('div');
                        createColumn.setAttribute('class', 'column');
                    let lineDetail = `
                        <span class="songId" style="display:none;">${res2.data.list[i].song_id}</span>
                        <span class="songNumber">${i+1}</span>
                        <span class="songOperation"><i class="fa fa-play"></i></span>
                        <span class="songName">${res2.data.list[i].title}</span>
                        <span class="artistName">${res2.data.list[i].author}</span>
                        <span class="albumName">album</span>
                        <span class="songDuration">${translateToLyricTime(res2.data.list[i].file_duration)}</span>
                    `;
                    createColumn.innerHTML = lineDetail;
                    list.appendChild(createColumn);
                }
            })
        })
    }
},false);

// 获取歌手详情
