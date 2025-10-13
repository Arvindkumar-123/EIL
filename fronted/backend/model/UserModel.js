import mongoose, { Schema } from "mongoose";

const userScheme = new Schema(
    {
        name: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        token: { type: String },
        signupIST: {
  type: String,
  default: () => new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
}

    }
)

const User = mongoose.model("User", userScheme);

export default User ;