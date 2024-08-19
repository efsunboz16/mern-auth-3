import React, { useState } from 'react'
import Input from '../components/Input'
import { User, Mail, Lock } from "lucide-react"
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

const LoginPage = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const { login, isLoading, error } = useAuthStore();

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email, password);
    }





    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='w-1/2 bg-lime-800 h-fit p-4 flex flex-col items-center rounded-xl shadow-2xl	box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);'>
                <h1 className='text-white text-xl mb-4'>LOGIN</h1>

                <form className='flex flex-col justify-center gap-3' onSubmit={handleLogin}>
                    <Input
                        icon={Mail}
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className="bg-transparent border-b outline-none text-white"
                    />
                    <Input
                        icon={Lock}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className="bg-transparent border-b outline-none text-white"
                    />


                    {error && <p className='text-red-500 text-sm mb-3'>{error}</p>}

                    <button className='mt-7 bg-black text-white p-2 rounded-lg hover:bg-opacity-55 shadow-2xl'>
                        Login
                    </button>
                </form>

                <div className='flex gap-9 mt-5 w-full justify-center border-t-2 border-b-2 border-solid border-black p-3'>
                    <p className='font-bold'>Don't have an account</p>
                    <Link to={"/signup"} className='text-white underline underline-offset-1'>
                        Sign Up
                    </Link>
                </div>

                <div>
                    <Link to={"/forgot-password"} >Forgot password?</Link>
                </div>

            </div>
        </div>
    )
}

export default LoginPage
