import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide your name"],
        minLength: [3, "Name must containe at least 3 characters"],
        maxLength: [30, "Name cannot  exceed 30 characters"],
    },
    email:{
        type:String,
        required: [true, "please provide your email"],
        validate:[validator.isEmail, "please provide a valid email"],

    },
    phone:{
        type:Number,
        required:[true, "Please provide your phone number"],
    },
    password:{
        type:String,
        required:[true, "please provide your password"],
        minLength:[8, "password contain minimum 8 character"],
        maxLength:[30, "password contain maximum 30 character"],
        select: false
    },
    role:{
        type:String,
        required:[true, "Please provide your role"],
        enum:[ "Job Seeker", "Employer" ],
    },

    createdAt:{
        type:Date,
        default:Date.now,
    },
    
});


userSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});


userSchema.methods.comparePassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};


userSchema.methods.getJWTToken = function (){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn:process.env.JWT_EXPIRE,
    });
};

export const User = mongoose.model("User", userSchema);