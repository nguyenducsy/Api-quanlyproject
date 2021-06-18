const Task = require('../models/task');
exports.getPosts = (req, res, next) => {
    Task.findAll()
        .then(posts => {
            res
                .status(200)
                .json(posts);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.getPostById = (req, res, next) => {
    const postId = req.params.postId;
    Task.findByPk(postId)
        .then(post => {
            if (!post) {
                const error = new Error('Không tìm thấy bài viết- post.');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json(post);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.createPost = (req, res, next) => {
    const name = req.body.nameTask;
    const nameuser = req.body.nameuser;
    const idproject = req.body.idproject;
    const description = req.body.description;
    const iduser = req.body.iduser;
    const deadline = req.body.deadline;
    const date = req.body.date;

    const postt = new Task({
        nameTask: name,
        nameuser: nameuser,
        idproject: idproject,
        description: description,
        deadline: deadline,
        iduser: iduser,
        date: date

    });
    postt
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Thêm thành công bài viết mới!',
                postt: result
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updatePost = (req, res, next) => {
    const id = req.params.postId;
    const name = req.body.nameTask;
    const nameuser = req.body.nameuser;
    const idproject = req.body.idproject;
    const description = req.body.description;
    const iduser = req.body.iduser;
    const deadline = req.body.deadline;
    const date = req.body.date;

    const post = new Task({
        id: id,
        nameTask: name,
        nameuser: nameuser,
        idproject: idproject,
        description: description,
        deadline: deadline,
        iduser: iduser,
        date: date

    });

    Task.findByPk(id)
        .then(post => {
            if (!post) {
                const error = new Error('Không tim thấy bài viết - post.');
                error.statusCode = 404;
                throw error;
            }
            post.id = id;
            post.nameTask = name;
            post.nameuser = nameuser;
            post.idproject = idproject;
            post.description = description;
            post.deadline = deadline;
            post.iduser = iduser;
            post.date = date;
            return post.save();
        })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deletePost = (req, res, next) => {
    const postId = req.params.postId;
    Task.findByPk(postId)
        .then(post => {
            if (!post) {
                const error = new Error('Không tim thấy bài viết - post.');
                error.statusCode = 404;
                throw error;
            }
            return post.destroy(postId);
        })
        .then(result => {
            console.log(result);
            res.status(200).json({ message: 'Đã xoá post.' });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};