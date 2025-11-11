// import React, { useState } from "react";
// import Navbarpublic from "./Navbarpublic";
// import Navbarprivate from "./Navbarprivate";

// export default function Apnavbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Simulating login toggle for demonstration
//   // Later this will come from user authentication context
//   const handleLoginToggle = () => setIsLoggedIn(!isLoggedIn);

//   return (
//     <div>
//       {isLoggedIn ? <Navbarprivate /> : <Navbarpublic />}
//       <div className="p-4 text-center">
//         <button
//           onClick={handleLoginToggle}
//           className="px-4 py-2 bg-indigo-600 text-white rounded mt-4 hover:bg-indigo-700"
//         >
//           {isLoggedIn ? "Logout" : "Login"}
//         </button>
//       </div>
//     </div>
//   );
// }



import React, { useContext } from "react";
import Navbarpublic from "./Navbarpublic";
import Navbarprivate from "./Navbarprivate";
import { AuthContext } from "./AuthContext";

export default function Apnavbar() {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);

  return <div>{isLoggedIn ? <Navbarprivate /> : <Navbarpublic />}</div>;
}
