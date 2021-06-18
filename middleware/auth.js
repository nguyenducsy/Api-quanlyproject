const jwt = require("jsonwebtoken");
//request get token và xác thực để được phép truy cập auto
exports.authenticate = (req, res, next) => {
    // let token = req.headers["x-access-token"];
    // if (!token) {
    //     return res.status(403).send({
    //         message: "No token provided!"
    //     });
    // }
    // jwt.verify(token, "FptPolyTechnic", (err, decoded) => {
    //     if (err) {
    //         return res.status(401).send({
    //             message: "Unauthorized!"
    //         });
    //     }
    //     req.user = decoded;
    //     next();
    // });

};