import mongoose from "mongoose";
import validator from "validator";


const applicationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[ true, "please provide your name"],
        minLength:[3, "Name must be contain three letter"],
        maxLength:[30, "maximum length is 30 character"],

    },
    email:{
        type:String,
        validator:[validator.isEmail, "please provide a valid email"],
        required:[true, "please provide a email"],

    },
    coverLetter:{
        type:String,
        required:[true, "please provide your cover letter"],
    },
    phone:{
        type:Number,
        required: [ true, "please provide your phone number"],

    },
    address:{
        type:String,
        required: [true, "please provide address"],
    },
    resume:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    applicantID:{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        role:{
            type:String,
            enum: ["Job Seeker"],
            required:true
        }

    },
    employerID:{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        role:{
            type:String,
            enum: ["Employer"],
            required:true
        }

    }

})
export const Application = mongoose.model("Application", applicationSchema);