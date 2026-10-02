const express = require('express');
const router = express.Router();
const authController = require('../../controller/projectController');
const verifyToken = require('../../verifyAuthentication');

router.use(verifyToken);
router.post('/', authController.createProject);
router.get('/', authController.getProjects);
router.get('/:id', authController.getProjectById);
router.put('/:id', authController.updateProject);
router.delete('/:id', authController.deleteProject);


module.exports = router;