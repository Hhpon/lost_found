let express = require('express')
let app = express()
let bodyparser = require('body-parser')
let Databases = require('./db.js')
app.use(bodyparser.json())

app.get('/test', (req, res) => {
    res.send('你访问到了高海清的失物招领')
})

app.post('/post', function (req, res) {
    console.log(req.body)
    Databases.create({
        time: req.body.time,
        touxiang: req.body.touxiang,
        nicheng: req.body.nicheng,
        leixing: req.body.leixing,
        fankaxingming: req.body.fankaxingming,
        fankaxuehao: req.body.fankaxuehao,
        lianxiren: req.body.lianxiren,
        lianxidianhua: req.body.lianxidianhua,
    }, (err, doc) => {
        if (err) {
            res.send('no')
        } else {
            res.send('ok');
        }
    });
})
app.get('/get1', function (req, res) {
    console.log(req.query)
    Databases.find({ leixing: "拾到的卡" }, function (err, doc) {
        res.send({ backs: doc })
    }).sort({ "_id": -1 }).limit(5).skip(Number(req.query.num1))
})
app.get('/get2', function (req, res) {
    Databases.find({ leixing: "丢失的卡" }, function (err, doc) {
        res.send({ backs: doc })
    }).sort({ "_id": -1 }).limit(5).skip(Number(req.query.num2))
})
app.get('/get3', function (req, res) {
    console.log(req.query)
    Databases.find({ $or: [{ fankaxingming: req.query.guanjianzi }, { fankaxuehao: req.query.guanjianzi }] }, function (err, doc) {
        res.send({ backs: doc })
    })
})

app.listen(3009, function () { console.log('Example app listening on port 4000!') })