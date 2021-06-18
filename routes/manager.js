const express = require('express');

const project = require('../controllers/project');
const task = require('../controllers/task')
const user = require('../controllers/user');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// GET /manager/project
// router.get('/project', project.getPosts);
router.get('/project', project.getPosts);
router.get('/project/:postId', project.getPostById);
// POST /blog/post
router.post('/project', project.createPost);
//update
router.put('/project/:postId', project.updatePost);
//delete
router.delete('/project/:postId', project.deletePost);

// GET /manager/
router.get('/task', task.getPosts);
// router.get('/task', authenticate, task.getPosts);
router.get('/task/:postId', task.getPostById);
// POST /blog/post
router.post('/task', task.createPost);
//update
router.put('/task/:postId', task.updatePost);
//delete
router.delete('/task/:postId', task.deletePost);

// GET /user/
router.get('/user', user.getPosts);
// router.get('/task', authenticate, task.getPosts);
router.get('/user/:postId', user.getPostById);

module.exports = router;