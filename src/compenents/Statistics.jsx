import React from 'react'

function Statistics() {
    return (
        <div className='bg-grayish-violet bg-opacity-20 h-[800px] lg:h-fit  w-full -mt-[100px] pb-[40px]'>
            <div className='px-[200px] md:px-[35px] pt-[240px] md:pt-[150px]'>
                <div className='text-center flex flex-col gap-2'>
                    <h1 className='font-bold text-3xl md:text-xl text-very-dark-violet'>Advanced Statistics</h1>
                    <p className='text-grayish-violet font-medium text-xl md:text-lg text-pretty'>Track how your links are performing across the web with <br />our advanced Statistics dashbaord</p>
                </div>
                <div className='pt-[80px] flex lg:flex-col     '>
                    <div className="w-[30%] lg:w-full h-[280px]  bg-white rounded-md pt-[80px] px-8 flex flex-col lg:items-center   gap-2  ">
                        <div className='-mt-[130px]  h-[90px] w-[90px] bg-very-dark-violet rounded-full flex items-center justify-center'>
                            <img src="/icon-brand-recognition.svg" alt="recognition img" />
                        </div>
                        <h1 className='font-bold text-xl text-very-dark-blue pt-10 '>Brand recognition</h1>
                        <p className='font-medium  text-grayish-violet lg:text-center '>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                    <span className='w-[5%] h-[10px] lg:w-[15px] lg:h-[100px] bg-cyan my-auto lg:mx-auto'></span>
                    <div className="w-[30%] lg:w-full h-[280px]  bg-white rounded-md pt-[80px] px-8 flex flex-col lg:items-center  gap-2 mt-[40px] lg:mt-0  ">
                        <div className='-mt-[130px]  h-[90px] w-[90px] bg-very-dark-violet rounded-full flex items-center justify-center'>
                            <img src="/icon-detailed-records.svg" alt="recognition img" />
                        </div>
                        <h1 className='font-bold text-xl text-very-dark-blue pt-10 '>Detailed Records</h1>
                        <p className='font-medium  text-grayish-violet lg:text-center '>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                    <span className='w-[5%] h-[10px] lg:w-[15px] lg:h-[100px] bg-cyan my-auto lg:mx-auto'></span>

                    <div className="w-[30%] lg:w-full h-[280px]  bg-white rounded-md pt-[80px] px-8 flex flex-col lg:items-center  gap-2 mt-[80px] lg:mt-0  ">
                        <div className='-mt-[130px]  h-[90px] w-[90px] bg-very-dark-violet rounded-full flex items-center justify-center'>
                            <img src="/icon-fully-customizable.svg" alt="recognition img" />
                        </div>
                        <h1 className='font-bold text-xl text-very-dark-blue pt-10 '>Fully Customizable</h1>
                        <p className='font-medium  text-grayish-violet lg:text-center '>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Statistics
