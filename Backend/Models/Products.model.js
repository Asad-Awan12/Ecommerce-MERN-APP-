const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    catogery:String,
    description:String,
    price:{
        type:Number,
        required:true
    },
    oldPrice:Number,
    image:String,
    color:String,
    rating:{
        type:Number,
        default:0
    },
    // auther:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"User",
    //     required:true
    // }
},{timestamps:true})

const Product = mongoose.model('Product', productSchema);
module.exports = Product