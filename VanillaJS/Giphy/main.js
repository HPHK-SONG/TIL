var API_KEY = "34hv8XzSGYWvjUkLhlya9bV5PoQ8elv9";

const button = document.querySelector("#js-button");
const inputArea = document.querySelector("#js-input");
const resultArea = document.querySelector("#result-area");

function searchAndPush(keyword) {
  const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open("GET", URL);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", e => {
    const rawData = e.target.response;
    const parsedData = JSON.parse(rawData);
    pushToDOM(parsedData);
  });
}
function pushToDOM(parsedData) {
  resultArea.innerHTML = null;
  const dataSet = parsedData.data;

  dataSet.forEach(imageData => {
    const imageURL = imageData.images.fixed_height.url;
    const alt = imageData.title;
    resultArea.innerHTML += `<img src="${imageURL}" alt="${alt}"/>`;
  });
}

button.addEventListener("click", () => {
  searchAndPush(inputArea.value);
});

inputArea.addEventListener("keypress", e => {
  if (e.which === 13) searchAndPush(inputArea.value);
});
