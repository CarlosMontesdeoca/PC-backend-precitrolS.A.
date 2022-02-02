const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({
    name: { type: String },
    email: { type: String },
    address: { type: String },
    ruc: { type: String },
    typ: { type: String },
    plant: { type: String }, 
    industry: { type:String },
    city: { type: String },
    phone: { type: String },
    comment: { type: String }, 
    contacts: []
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('clientes', ClientSchema);

