// async, await를 사용한 코드가 되도록 바꿔주세요!
/*
getCustomer(1, customer => {
  console.log("Customer: ", customer);
  if (customer.isGold) {
    getTopMovies(movies => {
      console.log("Top movies: ", movies);
      sendEmail(customer.email, movies, () => {
        console.log("Email sent...");
      });
    });
  }
});
*/
(async function() {
  const customer = await getCustomer(1);
  console.log("Customer: ", customer);
  if (customer.isGold) {
    const topMovies = await getTopMovies();
    console.log("Top movies: ", topMovies);
    await sendEmail(customer.email, topMovies);
    console.log("Email sent...");
  }
})();

/*
function getCustomer(id, callback) {
  setTimeout(() => {
    callback({
      id: 1,
      name: "Mosh Hamedani",
      isGold: true,
      email: "email",
    });
  }, 4000);
}
*/
function getCustomer(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email",
      });
    }, 2000);
  });
}
/*
function getTopMovies(callback) {
  setTimeout(() => {
    callback(["movie1", "movie2"]);
  }, 4000);
}
*/
function getTopMovies() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 2000);
  });
}
/*
function sendEmail(email, movies, callback) {
  setTimeout(() => {
    callback();
  }, 4000);
}
*/
function sendEmail(email, movies) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}
