module.exports = asyncFn => {
  return async (req, res, next) => {
    try {
      return await asyncFn(req, res, next);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send("서버 에러입니다. 관리자에게 요청하십시오");
      return next();
    }
  };
};
