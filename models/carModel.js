const mongoose= require('mongoose');

const {Schema}=mongoose;

const carModel = new Schema(
  {
    name:{type:String},
    cc:{type:String},
    country:{type:String}
  }
);

module.exports=mongoose.model('Car',carModel);