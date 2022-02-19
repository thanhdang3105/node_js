const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');


router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get("/:id/edit", courseController.edit)
router.post("/handle-form-actions", courseController.removeMany)
router.post("/trash-many-actions", courseController.trashActions)
router.delete("/:id", courseController.remove)
router.delete("/:id/force", courseController.delete)
router.put("/:id", courseController.update)
router.patch("/:id/restore", courseController.restore)
router.get("/:slug", courseController.show)

module.exports = router;