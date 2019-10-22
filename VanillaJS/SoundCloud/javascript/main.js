/* 1. 검색 */
const inputArea = document.querySelector("#js-search-input");

const SoundCloudAPI = {
  init: () => {
    SC.initialize({
      client_id: "cd9be64eeb32d1741c17cb39e41d254d"
    });
  },
  getTracks: input => {
    SC.get("/tracks", {
      q: input,
      license: "cc-by-sa"
    }).then(function(tracks) {
      SoundCloudAPI.renderTracks(tracks);
    });
  },
  renderTracks: tracks => {
    const searchResults = document.querySelector("#js-search-results");
    searchResults.innerHTML = null;
    tracks.forEach(track => {
      //Card
      const card = document.createElement("div");
      card.classList.add("card");

      //Image
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("image");

      const imageImg = document.createElement("img");
      imageImg.classList.add("image_img");
      imageImg.src =
        track.artwork_url || "http://lorempixel.com/100/100/abstract";

      //Content
      const content = document.createElement("div");
      content.classList.add("content");

      //Header
      const header = document.createElement("div");
      header.classList.add("header");

      const link = document.createElement("a");
      link.href = track.permalink_url;
      link.target = "_blank";
      link.innerHTML = track.title;

      //Button
      const button = document.createElement("div");
      button.classList.add("ui", "bottom", "attached", "button", "js-button");
      button.addEventListener("click", e => {
        SoundCloudAPI.addPlayList(track.permalink_url);
      });

      const icon = document.createElement("i");
      icon.classList.add("add", "icon");

      const buttonText = document.createElement("span");
      buttonText.innerHTML = "Add to playlist";

      //조립!
      imageDiv.appendChild(imageImg);

      header.appendChild(link);
      content.appendChild(header);

      button.appendChild(icon);
      button.appendChild(buttonText);

      card.appendChild(imageDiv);
      card.appendChild(content);
      card.appendChild(button);

      searchResults.appendChild(card);
    });
  },
  addPlayList: track_url => {
    SC.oEmbed(track_url).then(oEmbed => {
      const playbox = document.createElement("div");
      playbox.innerHTML = oEmbed.html;
      UI.sidebar.insertBefore(playbox, UI.sidebar.firstChild);
      localStorage.setItem("playlist", UI.sidebar.innerHTML);
    });
  }
};

const UI = {
  inputArea: document.querySelector("#js-search-input"),
  sidebar: document.querySelector("#js-playlist"),
  setInputArea: () => {
    UI.inputArea.addEventListener("keyup", e => {
      if (e.which === 13) SoundCloudAPI.getTracks(UI.inputArea.value);
    });
  },
  setSearchButton: () => {
    const searchButton = document.querySelector("#js-search-icon");
    searchButton.addEventListener("click", () => {
      SoundCloudAPI.getTracks(UI.inputArea.value);
    });
  },
  setPlayList: () => {
    UI.sidebar.innerHTML = localStorage.getItem("playlist");
  },
  setResetButton: () => {
    const resetButton = document.querySelector("#js-reset");
    resetButton.addEventListener("click", () => {
      localStorage.clear();
      UI.sidebar.innerHTML = null;
    });
  }
};

SoundCloudAPI.init();
UI.setInputArea();
UI.setSearchButton();
UI.setPlayList();
UI.setResetButton();
