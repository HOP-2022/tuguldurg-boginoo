const RoleModel = require("../helper/model");
const jwt = require("jsonwebtoken");

exports.createUser = async (request, response, next) => {
  try {
    if (request.body?.email && request.body?.username) {
      const users = await RoleModel.create({ ...request.body });
      const token = jwt.sign(
        {
          email: request.body.email,
          id: users._id,
        },
        "defaultSecret",
        { expiresIn: "1d" }
      );
      response
        .status(201)
        .json({ message: `New user is created.`, data: users, token: token });
    } else {
      response
        .status(400)
        .json({ message: `Email and password are required.` });
    }
  } catch (error) {
    response.status(400).json({ message: "ERROR" });
  }
};

exports.getUsers = async (request, response, next) => {
  try {
    const users = await RoleModel.find();
    response.status(200).json({
      message: true,
      data: users,
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};

exports.getUser = async (request, response, next) => {
  const { id } = request.params;
  let dada;

  jwt.verify(id, "defaultSecret", (err, result) => {
    dada = result;
  });

  try {
    const users = await RoleModel.find({ email: dada.email });
    response.status(200).json({
      message: true,
      data: users,
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};

exports.deleteUser = async (request, response, next) => {
  // const { ida } = request.params;
  try {
    // const users = await RoleModel.deleteOne({ ida });
    const users = await RoleModel.deleteMany();
    response.status(200).json({
      message: true,
      data: "deleted",
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};
