import { useState } from "react";
import { NavLink } from 'react-router-dom'    // ye jo nav links hai unko active kerne k liye hai maltab jab click karege home,about,services etc kesebhi pe bhi to vh page khulega or vh text active color ka hojaiga 

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";










const Header = () => {

    //  "mobile menu" k liye banaya hai 

    const [toggle, setToggle] = useState(false);      // false ka matlab menu abhi show nhi ho ra hai  true ka matlab menu show ho ra hai 

    const [menulinks, setMenuLinks] = useState([

        {
            title: 'Home',
            link: '/',
            id: 1,
        },

        {
            title: 'About',
            link: '/about',
            id: 2,
        },

         {
            title: 'Schedule',
            link: '/schedule',
            id: 3,
        },


         {
            title: 'Speakers',
            link: '/speakers',
            id: 4,
        },


         {
            title: 'Venue',
            link: '/venue',
            id: 5,
        },


         {
            title: 'More Pages',
            link: '/about',
            id: 6,
        },


        {
            title: 'Dropdown',
            link: '/about',
            id: 7,
        },

        
        {
            title: 'Contact',
            link: '/about',
            id: 8,
        },





    ])


    return (
        <>
            <div className="w-[100%] px-[20px] py-[20px] md:px-[0px] fixed top-[20px] z-50 ">
                <div className="max-w-[1320px] mx-auto flex justify-between items-center text-white bg-[#1f283d] p-[5px_25px] rounded-[50px]">

                    {/* Logo  */}
                    <div className="">
                        <h1 className="text-[24px] pl-[5px] font-[500] cursor-pointer text-white">Eventia</h1>
                    </div>

                    {/* Navlinks */}
                    <div className=" hidden md:flex gap-[10px]">

                        {menulinks.map((item, index) => (
                            <NavLink
                                key={item.id}
                                to={item.link}
                                className={({ isActive }) =>
                                    `p-[18px_15px] text-[16px] hover:text-[#22d3ee] ${isActive ? "text-[#22d3ee] font-semibold" : "text-white"
                                    }`
                                }
                            >
                                {item.title}
                            </NavLink>
                        ))}



                        {/* <a href="" className="p-[18px_15px] text-[16px] hover:text-[#22d3ee]">About</a>
                        <a href="" className="p-[18px_15px] text-[16px] hover:text-[#22d3ee]">Schedule</a>
                        <a href="" className="p-[18px_15px] text-[16px] hover:text-[#22d3ee]">Speakers</a>
                        <a href="" className="p-[18px_15px] text-[16px] hover:text-[#22d3ee]">Venue</a>
                        <a href="" className="p-[18px_15px] text-[16px] hover:text-[#22d3ee]">More Pages</a>
                        
                        <a href="" className="p-[18px_15px] text-[16px] hover:text-[#22d3ee]">Dropdown</a>
                        <a href="" className="p-[18px_15px] text-[16px] hover:text-[#22d3ee]">Contact</a> */}






                    </div>

                    {/* Mobile Menu */}
                    {/* ya pe {``} curly bracket or backtik lagaya hai kiuki jab toggle true ho tab menu show kerna hai or false ho tab Hide kerna hai matlab eder left-[-400px] diya hai to true pe left-[0px] tab menu show hoga or false pe left-[-400px] tab menu hide hoga  */}
                    <div className={`md:hidden flex flex-col duration-300 z-10 text-white bg-[#1c2c50] ml-[38px] fixed top-[100px] left-[-400px] w-[80%] h-auto p-[10px_0px] rounded-lg text-black
                                   ${toggle ? ' left-[0px]' : ' left-[-400px]'}`}>

                          {menulinks.map((item, index) => (
                            <NavLink
                                key={item.id}
                                to={item.link}
                                className={({ isActive }) =>
                                    `p-[18px_15px] text-[16px] hover:text-[#22d3ee] ${isActive ? "text-[#22d3ee] font-semibold" : "text-white"
                                    }`
                                }
                            >
                                {item.title}
                            </NavLink>
                        ))}
                        {/* <a href="" className="p-[18px_15px] text-[16px] hover:text-[#22d3ee]">About</a>
                        <a href="" className="p-[18px_15px] text-[16px] hover:text-[#22d3ee]">Schedule</a>
                        <a href="" className="p-[18px_15px] text-[16px] hover:text-[#22d3ee]">Speakers</a>
                        <a href="" className="p-[18px_15px] text-[16px] hover:text-[#22d3ee]">Venue</a>
                        <a href="" className="p-[18px_15px] text-[16px] hover:text-[#22d3ee]">More Pages</a>

                        <a href="" className="p-[18px_15px] text-[16px] hover:text-[#22d3ee]">Dropdown</a>
                        <a href="" className="p-[18px_15px] text-[16px] hover:text-[#22d3ee]">Contact</a> */}
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-[12px] text-[16px] items-center">
                        <FaXTwitter className="hover:text-[#22d3ee] transition duration-[200] cursor-pointer" />
                        <FaFacebook className="hover:text-[#22d3ee] transition duration-[200] cursor-pointer" />
                        <FaInstagram className="hover:text-[#22d3ee] transition duration-[200] cursor-pointer" />
                        <FaLinkedin className="hover:text-[#22d3ee] transition duration-[200] cursor-pointer" />



                        {/* Mobile menu Buttons ------------------------------ */}

                        {/* Hemburger Button  */}
                        {/* Close Button  */}

                        {/* toggle? matlab agar toggle true hai matlab agar menu open hai to cross button show hoga or agar toggle false matlab menu show nhi hora hai to hemburger a button show hoga  */}

                        {toggle ? <ImCross onClick={() => setToggle(!toggle)} className="md:hidden text-2xl ml-[10px] text-white" />
                            :
                            <RxHamburgerMenu onClick={() => setToggle(!toggle)} className="md:hidden text-xl ml-[10px] text-white" />
                        }




                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;