import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: { type: String, required : true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        token: { type: String, required:false }
    }
)

const User = mongoose.model("Uesr", userSchema);

export { User };