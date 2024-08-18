import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import { User } from "lucide-react"
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';


const EmailVerificationPage = () => {

    const [code, setCode] = useState(["", "", "", "", "", ""])
    const inputRefs = useRef([]);
    const navigate = useNavigate();

    const { error, isLoading, verifyEmail } = useAuthStore();



    const handleChange = (index, value) => {
        const newCode = [...code];

        if (value.length > 1) {
            const pastedCode = value.slice(0, 6).split("");
            for (let i = 0; i < 6; i++) {
                newCode[i] = pastedCode[i] || "";
            }
            setCode(newCode);

            const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
            const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
            inputRefs.current[focusIndex].focus();


        } else {
            newCode[index] = value;
            setCode(newCode);

            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    }

    const handleKeyDown = (index, e) => {

        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const verificationCode = code.join("");
        try {
            await verifyEmail(verificationCode);
            navigate("/");
            toast.success("Email verified successfully");
        } catch (error) {
            console.log(error)
        }
    }

    // Auto submit when all fields are filled

    useEffect(() => {
        if (code.every(digit => digit !== "")) {
            handleSubmit(new Event('submit'))
        }
    }, [code]);

    return (
        <div className='w-1/2 bg-lime-800 flex flex-col items-center  gap-4 p-7 rounded-xl shadow-2xl box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'>
            <h1 className='text-white text-3xl'>Verify Your Email</h1>
            <p className='text-nowrap font-medium'>Enter the 6-digit code sent to your email addrress.</p>

            <form onSubmit={handleSubmit} className='flex flex-col items-center '>
                <div className='flex'>
                    {code.map((digit,
                        index
                    ) => (
                        <Input
                            // icon={User}
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type='text'
                            maxLength='1'
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="w-8 h-8 bg-transparent border-solid border-black border-2 rounded-md px-2 text-white "
                        />
                    ))}
                </div>
                {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
                <button type='submit' className='w-2/3 mt-7 bg-black text-white p-2 rounded-lg hover:bg-opacity-55 shadow-2xl'>Verify Email</button>
            </form>
        </div>
    )
}

export default EmailVerificationPage
