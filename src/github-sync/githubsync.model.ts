//  moongse 
import * as mongoose from 'mongoose';
export const projectDataSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type:String, required:true},
});

//create interface class for data.
export interface IProject extends mongoose.Document{
    id:string;
    title:string;
    description:string;

    //constructor class here if needed necessary, only works for class type
    //constructor(id:string , title:string, description:string){
    //    this.id = id;
    //    this.title = tite;
    //    this.description = description;
    //}
}