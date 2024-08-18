import { Route, Routes } from "react-router-dom"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import Home from "./pages/Home"
import EmailVerificationPage from "./pages/EmailVerificationPage"

function App() {


  return (
    <div className="min-h-screen bg-green-200 flex justify-center items-center relative overflow-hidden">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-email" element=
          {<EmailVerificationPage />} />

      </Routes>













    </div>
  )
}

export default App
