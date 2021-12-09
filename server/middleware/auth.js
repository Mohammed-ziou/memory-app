import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  try {
    // console.log(req.headers);
    const token = req.headers.authoriztion.split(" ")[1];
    const isCustomtoken = token.lenght < 500;

    let decodedData;

    if (token && isCustomtoken) {
      console.log("hello");
      decodedData = jwt.verify(token, process.env.JWT_SEC_KEY);
      req.userId = decodedData?._id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?._id?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
