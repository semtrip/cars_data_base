import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema(
    {   
        carName: {
            type: String,
            required: true,
        },
        carModel: {
            type: String,
            required: true,
        },
        win: {
            type: String,
            required: true,
            unique: true
        },
        gosNumber: {
            type: String,
            required: true,
        },
        bodyNumber: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            reqired: true
        },
        engineType: {
            type: String,
            reqired: true
        },
        enginePower: {
            type: Number,
            reqired: true
        },
        data: {
            type: String,
            required: true,
        }
    }
)
export default mongoose.model('Report', ReportSchema)