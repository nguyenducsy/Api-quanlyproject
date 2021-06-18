const lad = require('lodash');
const validator = require('validator');

const { User } = require('../models/user');
exports.checkInput = async(req, res, next) => {
    let errors = {};
    const email = lad.get(req.body, "email", "");
    const password = lad.get(req.body, "password", "");
    const password2 = lad.get(req.body, "confirmPassword", "");
    const typeUser = lad.get(req.body, "typeUser", "");
    //check data form register
    if (validator.isEmpty(email))
        errors.email = "Phải nhập Email";
    if (lad.isEmpty(errors)) return next();

    return res.status(400).json(errors)
}