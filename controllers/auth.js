const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

exports.createUser = (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const img = req.body.img
    const typeUser = req.body.typeUser;
    console.log(email);
    User.findOne({ where: { email: email } })
        .then(user => {
            if (user) {
                console.log(user.email);
                return res.status(400).json({ message: "Email da ton tai" });
            }
            return bcrypt.hash(password, 12);
        })
        .then(hashedPassword => {
            const user = new User({
                email: email,
                name: name,
                password: hashedPassword,
                img: img,
                typeUser: typeUser
            });
            return user.save();
        })
        .then(user => {
            res.status(201).json({
                message: 'Thêm thành công thành viên!',
                user: user
            });
        })
        .catch(err => res.status(400).json(err))
};


exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const imgUrl = req.body.img;

    let profile;
    User.findOne({ where: { email: email } })
        .then(user => {
            if (!user) {
                return res.status(400).json({ message: "Email khong ton tai" });
            }
            return Promise.all([bcrypt.compare(password, user.password), user]);
        })
        .then(result => {
            const isMatch = result[0];
            const user = result[1];
            profile = user //thong tin
            if (!isMatch) return res.status(400).json({ message: "Password khong khop" })
            const payload = {
                email: user.email,
                name: user.name,
                imgUrl: user.imgUrl,
                typeUser: user.typeUser
            }

            return jwt.sign(payload, "FptPolyTechnic", { expiresIn: '1h' })
        })
        .then(token => {

            res.status(200).json({ message: "Login thanh cong", accessToken: token, profiles: profile })
        })
        .catch(err => res.status(400).json(err))
};

exports.testAuth = (req, res, next) => {
    res.status(200).json({
        message: "Da login",
        user: req.user
    })
}