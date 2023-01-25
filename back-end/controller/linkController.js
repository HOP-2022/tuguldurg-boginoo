const LinkModel = require("../helper/linkModel");
const isUrl = require("is-valid-http-url");

exports.createLink = async (request, response, next) => {
  // {link, owner}
  if (isUrl(`${request.body.link}`) == true) {
    try {
      const savedLink = await LinkModel.findOne({ link: request.body.link });
      if (savedLink) {
        return response.json({ message: `This link exists`, data: savedLink });
      } else {
        const createLink = await LinkModel.create({
          link: request.body.link,
          owner: request.userId,
        });

        await LinkModel.findByIdAndUpdate(createLink.id, {
          shortLink: `localhost:3000/${createLink.id}`,
        });
        response
          .status(201)
          .json({ message: `New Link is created.`, data: createLink });
      }
    } catch (error) {
      response.status(400).json({ message: "ERROR" });
    }
  }
};

exports.getLinks = async (request, response, next) => {
  try {
    const links = await LinkModel.find({ owner: request.userId });
    response.status(200).json({
      message: true,
      data: links,
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};

exports.getLink = async (request, response, next) => {
  const { id } = request.params;
  try {
    const links = await LinkModel.findOne({ _id: id, owner: request.userId });
    response.status(200).json({
      message: true,
      data: links,
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};

exports.deleteLink = async (request, response, next) => {
  try {
    const links = await LinkModel.deleteMany({ owner: request.userId });
    response.status(200).json({
      message: true,
      data: "deleted",
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};
