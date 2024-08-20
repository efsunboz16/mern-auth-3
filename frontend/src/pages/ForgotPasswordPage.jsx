import React, { useState } from 'react'
import { useAuthStore } from '../store/authStore';
import Input from '../components/Input';
import { User, Mail, Lock } from "lucide-react"
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {

    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { isLoading, forgotPassword } = useAuthStore()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await forgotPassword(email);
        setIsSubmitted(true);
    }

    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='w-1/2 bg-lime-800 h-fit p-4 flex flex-col items-center rounded-xl shadow-2xl	box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);  gap-7'>
                <h1 className='text-white font-semibold text-2xl'>Forgot Password</h1>

                {!isSubmitted ? (<form onSubmit={handleSubmit} className='flex flex-col justify-center gap-3'>
                    <Input icon={Mail}
                        placeholder="Send Email" className="bg-transparent border-b outline-none text-white"
                        required
                        value={email}
                        type='email'
                        onChange={(e) => setEmail(e.target.value)} />
                    <button className='mt-7 bg-black text-white p-5 rounded-lg hover:bg-opacity-55 shadow-2xl' type='submit'>
                        Send Reset Link
                    </button>
                </form>) : (
                    <p>If an account exist for {email}, you will receive a password reset link shortly.</p>
                )}


                <div>
                    <Link to={"/login"} >
                        Back Login
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default ForgotPasswordPage
