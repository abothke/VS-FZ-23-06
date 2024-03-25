import { User } from "../users/user.model.js";
import bcrypt from "bcrypt";

// hier definieren wir custom middleware, die sich um die authentifizierung kuemmern soll
const checkAuth = async (req, res, next) => {
  console.log("Checking Auth...");
  // check if authorization is present, abort otherwise
  if (!req.headers.authorization) {
    res.status(401).send("Please Authenticate");
    return;
  }
  const [authType, token] = req.headers.authorization.split(" ");
  // check if correct authentication strategy is used
  if (authType !== "Bearer") {
    res.status(401).send("Please send a Token");
    return;
  }

  try {
    const result = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).send("Invalid Token");
  }

  //   // convert from base64
  //   const authString = atob(authBase64);
  //   const [username, password] = authString.split(":");

  //   // get user from db
  //   const user = await User.findOne({ name: username }).lean();
  //   if (user === null) {
  //     res.status(401).send("User does not exist");
  //     return;
  //   }

  //   const passwordMatches = await bcrypt.compare(password, user.password);
  //   // check if basic auth password is identical to password in DB
  //   if (passwordMatches === false) {
  //     res.status(401).send("Wrong password!");
  //     return;
  //   }
  //   console.log("Auth successful!");

  //   next();
};

export default checkAuth;
