const express = require('express');
const router = express.Router();
const projectTasks = require('../../controller/projectController');
const verifyToken = require('../../verifyAuthentication');

router.use(verifyToken);
router.post('/', projectTasks.createProject);
router.get('/', projectTasks.getProjects);
router.get('/:id', projectTasks.getProjectById);
router.put('/:id', projectTasks.updateProject);
router.delete('/:id', projectTasks.deleteProject);

module.exports = router;