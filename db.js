let mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/database2', { useNewUrlParser: true })
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