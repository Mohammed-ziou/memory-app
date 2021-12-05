export function asyncMiddleware(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (er) {
      res.status(500).json("something went wrong");
      console.log(er);
    }
  };
}
