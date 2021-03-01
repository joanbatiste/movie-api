//Requerimos todo lo necesario de mongoose

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const orderSchema = new Schema({
    
    
    filmId: {
        type: ObjectId,
        ref: "Film",
        require: true
    },
    userId:{
        type: ObjectId,
        ref: "User",
        require:true
    },
    order_date:{
        type: Date,
        default: new Date
    },
    return_date:{
        type: Date,
        default: new Date(+new Date()+4*24*60*60*1000)
    },

})

//Exportamos la clase Order
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;