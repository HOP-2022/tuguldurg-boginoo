const jwt = require("jsonwebtoken");
const SECRET_KEY = "default_secret";

module.exports.auth = (request, response, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, SECRET_KEY);
      req.userId = user.id;
      req.name = user.name;
    } else {
      response.status(401).json({ message: "handah erhgui hereglegch bna." });
    }
  } catch (error) {
    console.log(error);
    response.status(401).json({ message: "handah erhgui hereglegch bna." });
  }
};
