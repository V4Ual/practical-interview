const { success, badRequest } = require("../response");
const { db } = require("../models");
const TaskBoardModel = db.TaskBoard;

class BoardController {
  constructor() {}

  addBoard = async (req) => {
    const { title, description } = req.body;

    const prepareObj = {
      title: title,
      description: description,
    };

    const taskDetails = await TaskBoardModel.create(prepareObj);

    return success("Add in List successfully", taskDetails);
  };

  todoList = async (req) => {
    const taskList = await TaskBoardModel.findAll();

    return success("Fetch todo list successfully", taskList);
  };

  updateTodo = async (req) => {
    const { id, type, title, description } = req.body;

    const prepareObj = {};
    type ? (prepareObj.status = type) : "";
    title ? (prepareObj.title = title) : "";
    description ? (prepareObj.description = description) : "";

    console.log(prepareObj, id);
    await TaskBoardModel.update(prepareObj, {
      where: {
        id: id,
      },
    });

    return success("Update status successfully");
  };

  deleteBoardItem = async (req) => {
    const { id } = req.params;

    const isExist = await TaskBoardModel.findByPk(id);
    if (!isExist) {
      return badRequest("Could not matching record fond");
    }
    const taskList = await TaskBoardModel.destroy({
      where: {
        id: id,
      },
    });

    return success("Delete item from list successfully", taskList);
  };
}

module.exports = BoardController;
