const Post = require('../models/project');
exports.getPosts = (req, res, next) => {
    Post.findAll()
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
    Post.findByPk(postId)
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
    const name = req.body.name;
    const idtask = req.body.idtask;
    const iduser = req.body.iduser;
    const teamsize = req.body.teamsize;
    const date = req.body.date;

    const post = new Post({
        name: name,
        idtask: idtask,
        iduser: iduser,
        teamsize: teamsize,
        date: date

    });
    post
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Thêm thành công bài viết mới!',
                post: result
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
    const name = req.body.name;
    const idtask = req.body.idtask;
    const iduser = req.body.iduser;
    const teamsize = req.body.teamsize;
    const date = req.body.date;

    const post = new Post({
        name: name,
        idtask: idtask,
        iduser: iduser,
        teamsize: teamsize,
        date: date

    });

    Post.findByPk(id)
        .then(post => {
            if (!post) {
                const error = new Error('Không tim thấy bài viết - post.');
                error.statusCode = 404;
                throw error;
            }
            post.name = name;
            post.idtask = idtask;
            post.iduser = iduser;
            post.teamsize = teamsize;
            post.date = date
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
    Post.findByPk(postId)
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