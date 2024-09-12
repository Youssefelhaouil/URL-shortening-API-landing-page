import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";
import { useState } from "react";


function Header() {
    const [menu, setMenu] = useState(false)

    return (
        <>
            <div className="px-[200px] md:px-[35px] pt-7">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-10 ">
                        <img src="/logo.svg" alt="" height={48} width={130} />
                        <ul className="flex gap-6 font-bold text-grayish-violet md:hidden  ">
                            <li className="hover:text-very-dark-blue cursor-pointer">Features</li>
                            <li className="hover:text-very-dark-blue cursor-pointer">Pricing</li>
                            <li className="hover:text-very-dark-blue cursor-pointer">Resources</li>
                        </ul>
                    </div>
                    <div className="font-medium flex gap-2 items-center md:hidden">
                        <button className="h-12 w-[100px] bg-transparent text-grayish-violet hover:text-very-dark-blue">Login</button>
                        <button className="h-12 w-[100px]   bg-cyan text-white hover:bg-opacity-50 rounded-full">Sign Up</button>
                    </div>
                    {menu ?
                        <MdClose onClick={()=>setMenu(!menu)} className="cursor-pointer hidden md:flex font-extrabold text-4xl  text-grayish-violet" />
                        :
                        <TiThMenu onClick={()=>setMenu(!menu)} className="cursor-pointer hidden md:flex font-bold text-3xl text-grayish-violet" />
                    }
                </div>
            </div>

        </>
    )
}

export default Header
