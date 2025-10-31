// import mongoose, { Schema } from "mongoose";

// const userScheme = new Schema(
//     {
//         name: { type: String, required: true },
//         username: { type: String, required: true, unique: true },
//         password: { type: String, required: true },
//         token: { type: String },
//         signupIST: {
//   type: String,
//   default: () => new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
// }

//     }
// )

// const User = mongoose.model("User", userScheme);

// export default User ;

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ message: "Please Provide" });
//   }

//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res
//         .status(StatusCodes.NOT_FOUND)
//         .json({ message: "User Not Found" });
//     }

//     const isPasswordCorrect = await bcrypt.compare(password, user.password);

//     if (isPasswordCorrect) {
//       const token = crypto.randomBytes(20).toString("hex");
//       user.token = token;
//       await user.save();

//       // ✅ Return name and token
//       return res.status(StatusCodes.OK).json({
//         token: token,
//         name: user.name,
//         username: user.username,
//       });
//     } else {
//       return res
//         .status(StatusCodes.UNAUTHORIZED)
//         .json({ message: "Invalid Username or Password" });
//     }
//   } catch (e) {
//     return res
//       .status(500)
//       .json({ message: `Something went wrong ${e.message}` });
//   }
// });

// app.post("/register",async (req, res) => {
//     const {name,username,password} = req.body;
     
//     try {
//         const existingUser = await User.findOne({username});
//         if (existingUser) {
//             return res.status(StatusCodes.Found).json({message:"User already exists"});
//         }

//         const hashedPassword = await bcrypt.hash(password,10);

//         const newUser = new User ({
//             name :name,
//             username:username,
//             password:hashedPassword
//         });

//         await newUser.save();
//         res.status(StatusCodes.CREATED).json({message:"User Registered"})
//     } catch (e) {
//         res.json({message:`something went wrong ${e}`})
//     }
// }
// )