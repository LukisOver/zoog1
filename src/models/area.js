const mongoose=require("mongoose");

const areaSchema=mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    descripcion:{
        type:String,
        required:true
    },
    animales:[{type:mongoose.Schema.Types.ObjectId,ref: 'animal'}]

});
module.exports=mongoose.model('area',areaSchema);