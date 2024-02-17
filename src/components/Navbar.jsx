import React from 'react'
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const closeMenu = () => setShowMenu(false);
    const menu = [
        {
            name: "Connect with us",
            key: 1,
            id:"connect"
        },
        

    ];
    return (
        <div className='flex justify-around top-5 relative'>
            <div className='text-2xl  md:block font-semibold relative right-4 xl:right-20'>
                <p>Ecomquiksolutions</p>
            </div>
            <div>
                <ul className=" justify-center list-none ml-4 hidden md:flex space-x-5">
                    <li className="text-lg text-black hover:text-orange-400 transition-all cursor-pointer font-semibold">
                        <Link

                            to="connect"
                            spy={true}
                            smooth={true}
                            offset={20}
                            duration={1000}
                            onClick={closeMenu}
                            style={{ transition: 'all 0.3s' }}
                        >
                            Connect with us
                        </Link>

                    </li>
                    

                
                    

                </ul>
                <div className="hamburger-menu md:hidden relative top-2  font-serif  " style={{zIndex:'99'}} >
                        <a href="#" onClick={() => setShowMenu(!showMenu)}>
                            <GiHamburgerMenu />
                            {showMenu ? (
                                <div className="absolute mt-3 w-32 h-20 bg-white rounded-md border-[1px] p-3 border-black/70 translate-x-[-105px]">
                                    <div className="flex flex-col gap-2">
                                        {menu.map((item) => (
                                            <Link
                                                key={item.key}
                                                to={item.id}
                                                spy={true}
                                                smooth={true}
                                                offset={20}
                                                duration={1000}
                                                onClick={() => {
                                                    closeMenu();

                                                }}
                                                className=" text-black hover:text-orange-400 transition-all cursor-pointer"
                                                style={{ transition: 'all 0.3s' }}
                                            >
                                                {item.name}
                                         
                                            </Link>

                                        ))}
                                    </div>

                                </div>
                            ) : null}
                        </a>
                    </div>
            </div>
        </div>
    )
}

export default Navbar
