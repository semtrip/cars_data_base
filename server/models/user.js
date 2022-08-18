import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        isGeneral: {
            type: Boolean,
        },
        reports: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reports'
        }]
    },
    {timestamps: true}
)
export default mongoose.model('User', UserSchema)