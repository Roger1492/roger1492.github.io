let in_theaters = document.getElementById('in_theaters');
let search_box = document.getElementById('search_box');
let search_btn = document.getElementById('search_btn');
let default_page = document.getElementById('default_page');
// API
let api_in_theaters = 'https://api.douban.com/v2/movie/in_theaters';
let search_context = 'https://api.douban.com/v2/movie/search?q=';

window.onload = function(){
  // 正在热映
  fetch(api_in_theaters)
  .then(res => res.json())
  .then(res1 => {
    for(let i = 0; i < 20; i++){
      let createDiv = document.createElement('div');
      let createImg = document.createElement('img');
      let createTitle = document.createElement('div');
      createDiv.appendChild(createImg);
      createDiv.appendChild(createTitle);
      in_theaters.appendChild(createDiv);
      createImg.src = res1.subjects[i].images.small;
      createTitle.innerHTML = res1.subjects[i].title;
    }
  });
};

// 搜索电影

function searchMovie(){
  default_page.innerHTML = null;
  let search_text = search_box.value;
  fetch(search_context+search_text)
  .then(res => res.json())
  .then(res1 => {
    let createWrap = document.createElement('div');
    let createImg = document.createElement('img');
    let createInfoWrap = document.createElement('div');
    let createTitle = document.createElement('div');
    let createDirector = document.createElement('div');
    let createRating = document.createElement('div');
    let createYear = document.createElement('div');
    let createGenres = document.createElement('div');
    let createActorWrap = document.createElement('div');

    default_page.appendChild(createWrap);
    createWrap.appendChild(createImg);
    createWrap.appendChild(createInfoWrap);
    createInfoWrap.appendChild(createTitle);
    createInfoWrap.appendChild(createDirector);
    createInfoWrap.appendChild(createRating);
    createInfoWrap.appendChild(createYear);
    createInfoWrap.appendChild(createGenres);
    createInfoWrap.appendChild(createActorWrap);
    createWrap.setAttribute('id','wrap');
    createActorWrap.setAttribute('id','actor_wrap');

    createImg.src = res1.subjects[0].images.small;
    createTitle.innerHTML = '片名：' + res1.subjects[0].title + ' / ' + res1.subjects[0].original_title;
    createDirector.innerHTML = '导演：' + res1.subjects[0].directors[0].name;
    createRating.innerHTML = '评分：' + res1.subjects[0].rating.average;
    createYear.innerHTML = '上映日期：' + res1.subjects[0].year;
    createGenres.innerHTML = '类型：' + res1.subjects[0].genres;

    for(let i = 0; i < 3; i++){
      let createActor = document.createElement('div');
      let createActorImg = document.createElement('img');
      let createActorName = document.createElement('div');
      createActorWrap.appendChild(createActor);
      createActor.appendChild(createActorImg);
      createActor.appendChild(createActorName);
      createActorImg.src = res1.subjects[0].casts[i].avatars.small;
      createActorName.innerHTML = res1.subjects[0].casts[i].name;
    }
  });
}

search_btn.addEventListener('click', searchMovie, false);
document.body.addEventListener('keypress', function(e){
  if(e.keyCode === 13){
    searchMovie();
  }
}, false);