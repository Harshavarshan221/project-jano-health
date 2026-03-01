import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate(); // ✅ inside component

  const handleLoginSuccess = () => {
    localStorage.setItem("token", "sampletoken");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <button
        onClick={handleLoginSuccess}
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        Login with Google
      </button>
    </div>
  );
}



// import { SignIn } from "@clerk/clerk-react";

// export default function Login() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       <SignIn routing="path" path="/login" />
//     </div>
//   );
// }

// import { SignIn } from "@clerk/clerk-react";

// export default function Login() {
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <SignIn />
//     </div>
//   );
// }



// import { SignIn, SignedIn } from "@clerk/clerk-react";
// import { Navigate } from "react-router-dom";

// export default function Login() {
//   return (
//     <>
//       <SignedIn>
//         <Navigate to="/dashboard" />
//       </SignedIn>

//       <div className="flex justify-center items-center min-h-screen">
//         <SignIn />
//       </div>
//     </>
//   );
// }

//  import { SignIn } from "@clerk/clerk-react";

//  export default function Login() {
//    return (
//      <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       <SignIn
//   appearance={{}}
//    redirectUrl="/dashboard"
//  />
//      </div>
//    );
//  }



// import { SignIn } from "@clerk/clerk-react";

// export default function Login() {
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <SignIn
//         routing="path"
//         path="/login"
//         appearance={{
//           layout: {
//             socialButtonsPlacement: "top",
//             socialButtonsVariant: "blockButton",
//           },
//         }}
//       />
//     </div>
//   );
// }