const { ErrorUtil } = require("../utils");
let router = require("express").Router();
const { BardModule } = require("../controller");
const boardCtrl = new BardModule();

router.get(
  "/task",
  ErrorUtil(async (req, res) => {
    const result = await boardCtrl.todoList(req);
    return res.status(result.status).send(result);
  })

  /* 
    #swagger.tags = ['Todo']
    #swagger.summary = 'GET ALL TODO LIST'
    */
);

router.post(
  "/task",
  ErrorUtil(async (req, res) => {
    const result = await boardCtrl.addBoard(req);
    return res.status(result.status).send(result);
  })
  /* 
    #swagger.tags = ['Todo']
    #swagger.summary = 'ADD NEW TODO IN LIST'

    #swagger.parameters['body'] = {
         in: 'body',
         description: 'Add in todo list',
         required: true,
         schema: {
             title: "Hello",
             description: "this is working today"
         }
     }
    */
);

router.put(
  "/task",
  ErrorUtil(async (req, res) => {
    const result = await boardCtrl.updateTodo(req);
    return res.status(result.status).send(result);
  })
  /* 
    #swagger.tags = ['Todo']
    #swagger.summary = 'EDIT TODO IN LIST'
    #swagger.parameters['body'] = {
         in: 'body',
         description: 'Add in todo list',
         required: true,
         schema: {
             id: "uuid",
             title: "Hello",
             description: "this is working today",
             type:"in-progress | todo | done"
         }
     }
    */
);

router.delete(
  "/task/:id",
  ErrorUtil(async (req, res) => {
    const result = await boardCtrl.deleteBoardItem(req);
    return res.status(result.status).send(result);
  })

  /* 
    #swagger.tags = ['Todo']
    #swagger.summary = 'DELETE TODO FROM LIST'
    */
);

module.exports = router;
