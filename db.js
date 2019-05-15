let mongoose = require('mongoose')

let env = process.env.NODE_ENV || 'development'
let dbUrl = 'mongodb://127.0.0.1:20811/database2'
// 开发环境连接测试使用的 MongoDB 服务器
if (env === 'development') {
    dbUrl = 'mongodb://127.0.0.1/database2'
}

mongoose.connect(dbUrl, { useNewUrlParser: true })

const base2Schema = new mongoose.Schema({
    time:String,
    touxiang:String,
    nicheng:String,
    leixing: String,
    fankaxingming: String,
    fankaxuehao: String,
    lianxiren: String,
    lianxidianhua: String,
})
module.exports = mongoose.model('zhaofanka', base2Schema);