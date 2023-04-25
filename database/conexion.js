import mongoose from 'mongoose';

export async function establecerConexion(){
    try{
       await mongoose.connect(process.env.DATABASE)
       console.log("conexión establecidad con la BD");
    }catch(error){
        console.log("conexión fallida con la bd " + error);
    }
}

