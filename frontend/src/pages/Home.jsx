import React from 'react'
import { useAuthStore } from '../store/authStore'
import { formatDate } from '../utils/date';

const Home = () => {

    const { user } = useAuthStore();

    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='w-1/2 bg-lime-800 h-fit p-4 flex flex-col items-center rounded-xl shadow-2xl	box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); min-h-96 gap-7'>

                <h2 className='text-white text-2xl'>Dashboard</h2>

                <div className='w-full bg-lime-300 rounded-xl p-4'>
                    <h4 className='font-extrabold'>Profile information</h4>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email} </p>
                </div>

                <div className='w-full bg-lime-300 rounded-xl p-4'>
                    <h3 className='text-xl font-extrabold text-black mb-3'>Account Activity</h3>
                    <p className='text-black'>
                        <span className='font-bold'>Joined: </span>
                        {new Date(user.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                    <p className='text-black'>
                        <span className='font-bold'>Last Login: </span>

                        {formatDate(user.lastLogin)}
                    </p>
                </div>

                <button className='w-1/2 h-10 rounded-md bg-black text-white hover:bg-opacity-70' onClick={handleLogout}>
                    Logout
                </button>

            </div>
        </div>
    )
}

export default Home
