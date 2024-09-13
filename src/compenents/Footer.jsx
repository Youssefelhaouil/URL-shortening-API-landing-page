import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

function Footer() {
    return (
        <>
            <div className='h-[400px] lg:h-fit w-full bg-black bg-opacity-85'>
                <div className='h-full px-[200px] md:px-[35px] flex justify-between lg:flex-col lg:items-center lg:gap-10 py-16'>
                    <div>
                        <h1 className='text-white font-bold text-4xl tracking-wider'>Shortly</h1>
                    </div>
                    <div className='flex gap-10 lg:flex-col lg:items-center lg:text-center'>
                        <div className='flex flex-col items-start lg:items-center gap-6'>
                            <h1 className='text-lg font-bold text-white '>Features</h1>
                            <ul className='flex flex-col gap-3'>
                                <li className='text-grayish-violet hover:text-cyan font-semibold cursor-pointer'>Link Shortening</li>
                                <li className='text-grayish-violet hover:text-cyan font-semibold cursor-pointer'>Branded Links</li>
                                <li className='text-grayish-violet hover:text-cyan font-semibold cursor-pointer'>Analytics</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start lg:items-center gap-6'>
                            <h1 className='text-lg font-bold text-white '>Resources</h1>
                            <ul className='flex flex-col gap-3'>
                                <li className='text-grayish-violet hover:text-cyan font-semibold cursor-pointer'>Blog</li>
                                <li className='text-grayish-violet hover:text-cyan font-semibold cursor-pointer'>Developers</li>
                                <li className='text-grayish-violet hover:text-cyan font-semibold cursor-pointer'>Support</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start lg:items-center gap-6'>
                            <h1 className='text-lg font-bold text-white '>Company</h1>
                            <ul className='flex flex-col gap-3'>
                                <li className='text-grayish-violet hover:text-cyan font-semibold cursor-pointer'>About</li>
                                <li className='text-grayish-violet hover:text-cyan font-semibold cursor-pointer'>Our Team</li>
                                <li className='text-grayish-violet hover:text-cyan font-semibold cursor-pointer'>Careers</li>
                                <li className='text-grayish-violet hover:text-cyan font-semibold cursor-pointer'>Contact</li>
                            </ul>
                        </div>
                        <div className="flex lg:justify-center text-white font-bold text-2xl gap-4">
                            <FaFacebookSquare className="hover:text-cyan cursor-pointer" />
                            <FaSquareXTwitter className="hover:text-cyan cursor-pointer" />
                            <FaPinterest className="hover:text-cyan cursor-pointer" />
                            <LuInstagram className="hover:text-cyan cursor-pointer" />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer
