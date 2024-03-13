const mongoose=require('mongoose')
async function connectToDb(){
    await mongoose.connect('mongodb://127.0.0.1/furniture');
}
module.exports={connectToDb}