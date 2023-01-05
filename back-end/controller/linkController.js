const LinkModel = require("../model");

exports.createLink = async (request, response, next) => {
  if (!request.body?.link || !request.body?.shortLink) {
    response.status(400).json({ message: `Links are required.` });
  }
  const createLink = await LinkModel.create({ ...request.body });
  response
    .status(201)
    .json({ message: `New Link is created.`, data: createLink });
};

exports.getLinks = async (request, response, next) => {
  try {
    const links = await LinkModel.find();
    response.status(200).json({
      message: true,
      data: links,
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};

exports.deleteLink = async (request, response, next) => {
  const { ids } = request.params;
  try {
    const links = await LinkModel.findByIdAndDelete(ids);
    response.status(200).json({
      message: "deleted",
      data: links,
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};

// exports.getLink = async (request, response, next) => {
//   const { id } = request.params;
//   try {
//     const Links = await CommentModel.find({ firstName: id });
//     response.status(200).json({
//       message: true,
//       data: comments,
//     });
//   } catch (error) {
//     return response.status(400).json({ message: error, data: null });
//   }
// };
