import mongoose from "mongoose";


const Connection = async (username, password) => {

    const URL = `mongodb://${username}:${password}@ac-qe3omxv-shard-00-00.hvz1tmj.mongodb.net:27017,ac-qe3omxv-shard-00-01.hvz1tmj.mongodb.net:27017,ac-qe3omxv-shard-00-02.hvz1tmj.mongodb.net:27017/?ssl=true&replicaSet=atlas-z070l6-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
         await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true });
         console.log('Database Connected Succesfully');
    }catch(error){
        console.log(`error while connecting`, error);
    }
}

export default Connection;