// import React, { useState } from "react";
// import { login } from "../../config/firebase";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const navigate = useNavigate()

//   const handleLogin = () => {
//     login(email, password);
//     navigate('/add')
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-semibold mb-6 text-gray-700">Login</h2>
//         <input
//           className="w-full h-12 px-4 mb-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           className="w-full h-12 px-4 mb-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-200 outline-none"
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           className="w-full h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//           onClick={handleLogin}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;
