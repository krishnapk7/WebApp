import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Please enter a first name"],
            minlength: [2, "First Name must be longer than 2 characters"],
            maxlength: [50, "First Name must be shorter than 50 characters"],
        },
        lastName: {
            type: String,
            required: [true, "Please enter a last name"],
            minlength: [2, "Last Name must be longer than 2 characters"],
            maxlength: [50, "Last Name must be shorter than 50 characters"],
        },
        email: {
            type: String,
            required: [true, "Please enter an email"],
            maxlength: [50, "Email must be shorter than 50 characters"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please enter a password"],
            minlength: [5, "Password must be longer than 5 characters"]
        }
    }, { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;