import React from 'react'

function MobileMenu() {
    return (
        <>
            <div className='px-[80px] w-full h-fit '>
                <div className='bg-very-dark-violet flex flex-col gap-10 p-10 rounded-lg'>
                    <ul className='flex flex-col items-center gap-4 font-bold text-white '>
                        <li className="hover:text-cyan cursor-pointer">Features</li>
                        <li className="hover:text-cyan cursor-pointer">Pricing</li>
                        <li className="hover:text-cyan cursor-pointer">Resources</li>
                    </ul>
                    <hr className=' mx-2 text-white'/>
                    <div className='flex flex-col items-center gap-4 font-bold'>
                        <button className="h-12 w-full bg-transparent text-white  hover:text-very-dark-blue">Login</button>
                        <button className="h-12 w-full   bg-cyan text-white hover:bg-opacity-50 rounded-full">Sign Up</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default MobileMenu
