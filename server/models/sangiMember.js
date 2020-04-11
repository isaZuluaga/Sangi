const mongoose = require('mongoose');
// schema
const Schema = mongoose.Schema;
const sangiMemberSchema = new Schema({

    fullName: String,
    CC: String,
    cellphone: String,
    address: String,
    email:String,
    imgUrl: String

});
//model
const SangiMember = mongoose.model('SangiMember',sangiMemberSchema);

module.exports = SangiMember;