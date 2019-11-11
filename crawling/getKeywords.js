const axios = require("axios");
const cheerio = require("cheerio");

const getHTML = async url => {
  try {
    return await axios.get(
      "https://search.shopping.naver.com/search/all.nhn?query=%EB%82%A8%EC%9E%90+%EC%98%B7&cat_id=&frm=NVSHATC"
    );
  } catch (e) {
    console.error(e);
  }
};

const getTitles = html => {
  const $ = cheerio.load(html.data);
  const $bodyList = $("div.tit").children("a.link");
  const titleList = [];
  $bodyList.each(function(i) {
    titleList[i] = $(this).text();
  });
  return titleList;
};
(async () => {
  const html = await getHTML();
  const titles = getTitles(html);
  const map = {};
  titles.forEach(title => {
    const spread = title.split(" ");
    spread.forEach(word => {
      if (!map[word]) map[word] = 1;
      else map[word] = map[word] + 1;
    });
  });
  const sorted = [];
  for (const word in map) {
    const count = map[word];
    sorted.push({ word, count });
  }
  sorted.sort((a, b) => b.count - a.count);
  console.log(sorted);
})();
