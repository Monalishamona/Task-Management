const mongoose = require("mongoose");
const conn = async()=>{
    try{
       const response = await mongoose.connect(ProcessingInstruction.env.MONGO_URI);
       if(response){
        
       } console.log("connected to DB ");
    }catch(error){
        console.log(error);
    
    };

};
conn();