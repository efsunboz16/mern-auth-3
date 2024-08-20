import React, { useState } from 'react'
import { useAuthStore } from '../store/authStore';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../components/Input';
import { User, Mail, Lock } from "lucide-react"
import toast from 'react-hot-toast';

const ResetPasswordPage = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { resetPassword, error, isLoading, message } = useAuthStore()

    const { token } = useParams()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return
        }

        try {
            await resetPassword(token, password)
            toast.success("Password reset successfully, redirecting to login page")
            setTimeout(() => {
                navigate("/login");
            }, 2000)
        } catch (error) {

            toast.error("Error resetting password")
        }
    }

    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='w-1/2 bg-lime-800 h-fit p-4 flex flex-col items-center rounded-xl shadow-2xl	box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);  gap-7'>
                <h1 className='text-white font-semibold text-2xl'>Reset Password</h1>
                <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-3'>
                    <Input className="bg-transparent border-b outline-none text-white"
                        icon={Lock}
                        type='password'
                        placeholder='New Password'
                        required
                        onChange={(e) => setPassword(e.target.value)} />
                    <Input className="bg-transparent border-b outline-none text-white"
                        icon={Lock}
                        type='password'
                        placeholder='Confirm Password'
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button className='mt-7 bg-black text-white p-5 rounded-lg hover:bg-opacity-55 shadow-2xl' type='submit'>
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ResetPasswordPage
