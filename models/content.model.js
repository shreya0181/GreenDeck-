const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const contentSchema=new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:String,required:true},
},{
    timestamps:true
});

const Content=mongoose.model('Content',contentSchema);

module.exports=Content;