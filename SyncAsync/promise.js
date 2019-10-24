const promise = new Promise((resolve, reject) => {
  // Async 작업...
  resolve("성공했어요!");
  reject("실패했어요ㅠㅜ");
});

// promise
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// const getAccount = new Promise(
//   (resolve, reject) => {
//     setTimeout(() => {
//       const number = Math.floor(
//         Math.random() * 100,
//       );
//       // 0 ~ 99까지의 수를 랜덤하게 뽑아냅니다.
//       if (number % 2 === 1)
//         resolve({ id: 1, balance: 1000 });
//       else
//         reject(
//           new Error(
//             "계좌에 접근할 수 없어요ㅠㅠ",
//           ),
//         );
//     }, 2000);
//   },
// );

// getAccount
//   .then(result => console.log(result))
//   .catch(err => console.error(err));

function getUser(id) {
  console.log("유저를 찾고 있습니다...");
  const users = [
    { id: 1, githubID: "bing" },
    { id: 2, githubID: "kim" },
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        user => user.id === id,
      );
      if (user) resolve(user);
      else
        reject(
          new Error("유저를 찾을 수 없네요"),
        );
    }, 2000);
  });
}

function getRepo(githubID) {
  console.log("Github 리포를 찾는 중입니다...");
  const repos = [
    { githubID: "bing", commitID: 1 },
    { githubID: "kim", commitID: 2 },
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const repo = repos.find(
        repo => repo.githubID === githubID,
      );
      if (repo) resolve(repo);
      else
        reject(
          new Error("리포를 찾을 수 없어요..."),
        );
    }, 2000);
  });
}
function getCommit(commitID) {
  console.log("커밋을 찾는 중입니다...");
  const commits = [
    { commitID: 1, contents: "첫번째 커밋" },
    { commitID: 2, contents: "두번째 커밋" },
  ];
  return new Promise((resolve, reject) => {});
}
getUser(1)
  .then(user => getRepo(user.githubID))
  .then(repo => getCommit(repo.commitID))
  .then(commit => console.log(commit))
  .catch(err => console.error(err));
