import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 50,
        },
        lastName: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 50,
        },
        email: {
            type: String,
            required: true,
            maxlength: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        }
    }, { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;