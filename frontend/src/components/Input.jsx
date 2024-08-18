import React from 'react'

const Input = React.forwardRef(({ className, icon: Icon, ...props }, ref) => {




    return (
        <div className='w-full  flex mt-2'>
            <div className='text-white mr-4 '>
                {Icon && (
                    <Icon />
                )}
            </div>

            <input {...props} ref={ref} className={`${className}`}
            // className='bg-transparent border-b outline-none border-white text-white placeholder-white' 
            />

        </div>
    )
});

export default Input
