const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const manager = require('./routes/manager');
const sequelize = require('./util/database');
const { authenticate } = require('./middleware/auth');
var cors = require('cors')

const app = express();
app.use(bodyParser.json()); // application/json
const port = 3000;
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
//   next();
// });
app.use(cors())

app.use('/admin', manager);
app.use('/auth', authRoutes); //login
app.use(authenticate);


sequelize
    .sync()
    .then(result => {
        // console.log(result);
        app.listen(port, () => {
            console.log(`ứng dụng đang chạy với port: ${port}`);
        })
    })
    .catch(err => {
        console.log(err);
    });