import React from 'react'

function HeroSection() {
    return (
        <>
            <div className='pl-[200px] md:pl-[35px] pt-4 mt-[140px] flex items-center lg:flex-col-reverse  gap-10'>
                <div className='w-1/2 lg:w-full flex-col justify-center items-center gap-2'>
                    <h1 className=' font-extrabold text-7xl text-very-dark-violet  lg:text-center md:text-6xl '>More than just <br /> shorter links</h1>
                    <p className=' font-medium text-xl text-grayish-violet lg:text-center  '>Build your brand's recognition and get detailed insights on how your  links performing</p>
                    <div className='flex md:justify-center md:items-center'>                    
                        <button className='mt-8 text-white font-bold bg-cyan hover:bg-opacity-50 px-8 h-[48px] rounded-full  '>Get Started</button>
                    </div>
                </div>
                <img src="/illustration-working.svg" alt="heroSection img"
                    className='w-1/2 lg:w-full '
                />
            </div>
        </>
    )
}

export default HeroSection
