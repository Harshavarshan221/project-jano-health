// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />

//         <Route
//           path="/dashboard"
//           element={
//             <>
//               <SignedIn>
//                 <Dashboard />
//               </SignedIn>
//               <SignedOut>
//                 <RedirectToSignIn />
//               </SignedOut>
//             </>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}