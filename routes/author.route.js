const router = require('express').Router()
const controller = require("../controllers/author.controller")

router.get("/",  controller.findAll)
router.post("/",  controller.create)
router.get("/:id",  controller.findById)
router.put("/:id",  controller.update)
router.delete("/:id",  controller.remove)



module.exports = router