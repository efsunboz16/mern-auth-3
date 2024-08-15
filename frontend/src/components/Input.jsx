import React from 'react'

const Input = ({ icon: Icon, ...props }) => {
    return (
        <div className='w-full  flex mt-2'>
            <div className='text-white mr-4'>
                <Icon />
            </div>

            <input {...props}
                className='bg-transparent border-b outline-none border-white text-white placeholder-white' />

        </div>
    )
}

export default Input
