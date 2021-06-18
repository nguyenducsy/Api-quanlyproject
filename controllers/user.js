const User = require('../models/user');
exports.getPosts = (req, res, next) => {
    User.findAll()
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
                const error = new Error('Không tìm thấy user.');
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