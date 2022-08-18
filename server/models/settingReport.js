import mongoose from "mongoose";

const SettingReportSchema = new mongoose.Schema(
    {   
        data: {
            type: String,
            required: true,
            unique: true
        }
    }
)
export default mongoose.model('SettingReport', SettingReportSchema)