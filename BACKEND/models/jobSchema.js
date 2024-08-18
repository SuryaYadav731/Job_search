import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, "Please provide job title"],
        minLength: [3, "jOb title must contain 3 letter"],
        maxLength:[50, "Job title cannot exceed 50 character"],
    },

    description:{
         type:String,
         required:[true, "please provide job description"],
         minLength:[3, "job description mut contain 3 letter"],
         maxLength: [ 50, "job description maximum 50 letter"],
    },
    category:{
        type:String,
        required:[true, "Job category is required"],

    },
    country:{
        type:String,
        required:[true, "Job country is required"],

    },
    city:{
        type:String,
        required: [true, "job city is required"],

    },
    location:{
        type:String,
        required: [ true, "please provide exact location"],
        minLength:[5, "job location must be 5 letter"],
        
    },
    fixedSalary:{
        type:Number,
        minLength:[4, "Job salary  fixed at least 4 digit"],
        maxLength:[9, "not maximum 9 digit"],
    },
    salaryFrom:{
        type:Number,
        minLength:[4, "salary  from fixed at least 4 digit"],
        maxLength:[9, "salary from not maximum 9 digit"],
    },
    salaryTo:{
        type:Number,
        minLength:[4, " salary to fixed at least 4 digit"],
        maxLength:[9, " salary to not maximum 9 digit"],
    },
    expired:{
        type:Boolean,
        default:false,
    },
    jobPostedOn:{
        type: Date,
        default:Date.now,
    },
    postedBy:{
        type:mongoose.Schema.ObjectId,
        ref: "User",
        required:true,
    },

});
export const Job = mongoose.model("Job", jobSchema);