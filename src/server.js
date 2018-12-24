const app = require("express")();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
server.listen(8888, "localhost", () => console.log("服务已经启动"));
app.post('/login', (req, res) => {
    const info = req.body;
    console.log(info);
    console.log(req.headers);
    res.send({ status: 1, message: 'login successfully' });
});
app.get('/getConfig', (req, res) => {
    res.send({state:1,config:{url:'localhost:8888'}});
});
