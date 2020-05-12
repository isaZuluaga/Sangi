const mongoose = require('mongoose');
// schema
const Schema = mongoose.Schema;

const sangiObjectSchema = new Schema({

    objectName: String,
    userTarget: String,
    avaluo: String,
    isAvaliable: Number,
    objImgUrl: String
});

//model

const SangiObject = mongoose.model('SangiObject',sangiObjectSchema);

module.exports = SangiObject;