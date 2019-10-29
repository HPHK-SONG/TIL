import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID efcde7eaedabfd76b922ee407c1b2ceeac5a603239f678ddb0a4781c71731c67"
  }
});
