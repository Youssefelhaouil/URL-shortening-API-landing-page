import React from 'react'

function LinkSection() {
    return (
        <>
            <div className='px-[200px] md:px-[35px] pt-7 relative z-[10000]'>
                <div className=" LinkSection  mt-[100px] md:mt-[40px]  h-[180px] flex items-center md:flex-col md:justify-center gap-10 md:h-[250px] w-full px-[80px] bg-very-dark-blue rounded-md " >
                    <input type="text"
                        name='link'
                        id='link'
                        placeholder='Shorten a link here'
                        className='w-[80%] md:w-full h-12 rounded-md px-10  '
                    />
                    <button className='w-[20%] md:w-full h-12 px-4 bg-cyan hover:bg-opacity-55 rounded-md cursor-pointer text-white font-bold'>
                        Shorten it!
                    </button>

                </div>
            </div>

        </>
    )
}

export default LinkSection
