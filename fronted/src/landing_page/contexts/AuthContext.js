
// import axios from "axios";
// import { StatusCodes } from 'http-status-codes';
// import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext({});

// const client = axios.create({
//   baseURL: 'https://eilback.onrender.com'
// });

// export const AuthProvider = ({ children }) => {
//   const [userData, setUserData] = useState(null);
//   const router = useNavigate();

//   const handleRegister = async (name, username, password) => {
//     try {
//       const request = await client.post("/register", {
//         name,
//         username,
//         password
//       });
//       if (request.status === StatusCodes.CREATED) {
//         localStorage.setItem('name',request.data.name);
//          return request.data.message;
        
        
//       }
//     } catch (err) {
//       throw err;
//     }
//   };

  

//   const handleLogin = async (username, password) => {
//   try {
//     const request = await client.post("/login", {
//       username,
//       password
//     });

//     if (request.status === StatusCodes.OK) {
//       // ✅ Store token and name
//       localStorage.setItem("token", request.data.token);
//       localStorage.setItem("name", request.data.name);

//       // ✅ Optional: store user info manually
//       setUserData({
//         name: request.data.name,
//         username: request.data.username
//       });

//       router("/"); // ✅ Redirect after login
//     }
//   } catch (err) {
//     throw err;
//   }
// };

//   const data = {
    
//     userData,
//     setUserData,
//     handleLogin,
//     handleRegister
//   };

//   return (
//     <AuthContext.Provider value={data}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


