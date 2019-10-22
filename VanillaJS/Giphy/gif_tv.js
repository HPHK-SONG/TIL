const contents = ["cat", "happy", "ah", "kim"];
const keyword = contents[Math.floor(Math.random() * contents.length)];
// 0,1,2,3 중 랜덤한 인덱스를 선택해서 찔러줍니다.

function searchTV() {
  const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open("GET", URL);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", e => {
    const rawData = e.target.response;
    const parsedData = JSON.parse(rawData);
    pushToTvDOM(parsedData);
  });
}

const tvArea = document.querySelector("#js-tv-area");

function pushToTvDOM(parsedData) {
  tvArea.innerHTML = null;
  const dataSet = parsedData.data;
  let i = 0;

  setInterval(() => {
    const imgURL = dataSet[i].images.fixed_height.url;
    tvArea.innerHTML = `<img src="${imgURL}" class="img-center"/>`;
    i++;
    if (i >= dataSet.length) i = 0;
  }, 3000);
}

document.addEventListener("DOMContentLoaded", searchTV);
