import mongoose, { Model, Schema,Document} from "mongoose";
require('dotenv').config();

const emailRegexPattern :RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export interface IMail extends Document{
    name:string;
    email:string;
}

const mailZeroToHeroSchema:Schema<IMail> = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter your name"],
    },
    email:{
        type:String,
        required:[true, "Please enter your email"],
        validate:{
            validator:function(value:string){
                return emailRegexPattern.test(value)
            },
            message:"please enter a valid email",
        },
        unique:true
    }
},{
    timestamps:true
})

const mailZeroToHero: Model<IMail> = mongoose.model("Mail Zero To Hero",mailZeroToHeroSchema);

export default mailZeroToHero;