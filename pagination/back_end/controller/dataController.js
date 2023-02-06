const DataModel = require("../helper/model");

exports.createData = async (request, response, next) => {
  console.log(request.body);
  try {
    const data = await DataModel.create({ ...request.body });
    response.status(201).json({ message: `New data is created.`, data: data });
  } catch (error) {
    response.status(400).json({ message: "ERROR" });
  }
};

exports.getDatas = async (request, response, next) => {
  try {
    const data = await DataModel.find({}).skip(request.query.skip).limit(5);
    response.status(201).json({ message: `New data is created.`, data: data });
  } catch (error) {
    response.status(400).json({ message: "ERROR" });
  }
};

exports.deleteData = async (request, response, next) => {
  try {
    const data = await DataModel.deleteMany();
    response.status(201).json({ message: `data is deleted.`, data: data });
  } catch (error) {
    response.status(400).json({ message: "ERROR" });
  }
};
