const jwt = require("jsonwebtoken");
const SECRET_KEY = "default_secret";

exports.auth = (request, response, next) => {
  try {
    let token = request.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, SECRET_KEY);
      request.userId = user.id;
      request.name = user.name;
      next();
    } else {
      response.status(401).json({ message: "handah erhgui hereglegch bna." });
    }
  } catch (error) {
    console.log(error);
    response.status(401).json({ message: "handah erhgui hereglegch bna." });
  }
};
