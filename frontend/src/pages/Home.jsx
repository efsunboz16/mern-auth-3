import React from 'react'
import { useAuthStore } from '../store/authStore'

const Home = () => {

    const { user } = useAuthStore();

    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='w-1/2 bg-lime-800 h-fit p-4 flex flex-col items-center rounded-xl shadow-2xl	box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); min-h-96 gap-7'>

                <h2 className='text-white text-2xl'>Dashboard</h2>

                <div className='w-full '>
                    <h4>Profile information</h4>
                    <p>Name:{user.name}</p>
                    <p>Email:{user.email} </p>
                </div>


            </div>
        </div>
    )
}

export default Home
