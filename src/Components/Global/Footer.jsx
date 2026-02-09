

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { FaAngleRight } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { GoClock } from "react-icons/go";







const Footer = () => {

    return (
        <>
            <footer className="md:pt-[40px] pt-[30px] bg-[#1c253b]">
                <div className="max-w-[1320px] mx-auto grid md:grid-cols-[33.33%_16.67%_25%_25%] grid-cols-1">
                    <div className="px-[12px] py-[30px]">
                        <h2 className="text-[28px] mb-[20px] font-[700] text-[#22d3ee]">Eventia</h2>
                        <p className="mb-[25px] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla ante eget feugiat commodo. Nulla et justo vitae nisl euismod fermentum in vel magna.</p>
                        <div className="flex gap-[10px]">
                            <a href="" className="w-[36px] h-[36px] border rounded-[50%] flex justify-center items-center bg-[#22d3ee] hover:bg-[#addfe6] transition duration-300 transform hover:translate-y-[-4px]"><FaXTwitter className="" /></a>
                            <a href="" className="w-[36px] h-[36px] border rounded-[50%] flex justify-center items-center bg-[#22d3ee] hover:bg-[#addfe6] transition duration-300 transform hover:translate-y-[-4px]"><FaFacebook className="" /></a>
                            <a href="" className="w-[36px] h-[36px] border rounded-[50%] flex justify-center items-center bg-[#22d3ee] hover:bg-[#addfe6] transition duration-300 transform hover:translate-y-[-4px]"><FaInstagram className="" /></a>
                            <a href="" className="w-[36px] h-[36px] border rounded-[50%] flex justify-center items-center bg-[#22d3ee] hover:bg-[#addfe6] transition duration-300 transform hover:translate-y-[-4px]"><FaLinkedin className="" /></a>
                            <a href="" className="w-[36px] h-[36px] border rounded-[50%] flex justify-center items-center bg-[#22d3ee] hover:bg-[#addfe6] transition duration-300 transform hover:translate-y-[-4px]"><ImYoutube className="" /></a>


                        </div>
                    </div>
                    <div className="px-[12px] py-[30px]">
                        <h4 className=" relative text-[18px] font-[700] text-white mb-[20px] pb-[12px] before:absolute before:left-0 before:bottom-0 before:w-[50px] before:h-[2px] before:bg-[#22d3ee]">Useful Links</h4>
                        <div className="">
                            <ul className="flex flex-col gap-[20px]">
                                <li className="flex items-center gap-[5px]"><FaAngleRight className="text-[13px] text-[#22d3ee]" /><a href="" className="text-[#f5f5f5] leading-[1] hover:text-[#22d3ee] transition duration-300 transform hover:translate-x-[4px]">Home</a></li>
                                <li className="flex items-center gap-[5px]"><FaAngleRight className="text-[13px] text-[#22d3ee]" /><a href="" className="text-[#f5f5f5] leading-[1] hover:text-[#22d3ee] transition duration-300 transform hover:translate-x-[4px]">About</a></li>

                                <li className="flex items-center gap-[5px]"><FaAngleRight className="text-[13px] text-[#22d3ee]" /><a href="" className="text-[#f5f5f5] leading-[1] hover:text-[#22d3ee] transition duration-300 transform hover:translate-x-[4px]">Portfolio</a></li>

                                <li className="flex items-center gap-[5px]"><FaAngleRight className="text-[13px] text-[#22d3ee]" /><a href="" className="text-[#f5f5f5] leading-[1] hover:text-[#22d3ee] transition duration-300 transform hover:translate-x-[4px]">Services</a></li>

                                <li className="flex items-center gap-[5px]"><FaAngleRight className="text-[13px] text-[#22d3ee]" /><a href="" className="text-[#f5f5f5] leading-[1] hover:text-[#22d3ee] transition duration-300 transform hover:translate-x-[4px]">Contact</a></li>

                            </ul>

                        </div>
                    </div>
                    <div className="px-[12px] py-[30px]">
                         <h4 className=" relative text-[18px] font-[700] text-white mb-[20px] pb-[12px] before:absolute before:left-0 before:bottom-0 before:w-[50px] before:h-[2px] before:bg-[#22d3ee]">Contact Us</h4>
                    <div className="flex flex-col gap-[20px]">
                         <div className="flex items-start gap-[15px]">
                             <SlLocationPin className="text-[19px] mt-[4px] leading-[1] text-[#22d3ee] "/>
                            <p className="leading-[1.5] text-white">123 Main Street<br/>New York, NY 10001</p>
                         </div>
                          <div className="flex items-start gap-[15px]">
                             <BsTelephone className="text-[19px] mt-[4px] leading-[1] text-[#22d3ee] "/>
                            <p className="leading-[1.5] text-white">+1 (555) 987-6543</p>
                         </div>
                          <div className="flex items-start gap-[15px]">
                             <BsEnvelope  className="text-[19px] mt-[4px] leading-[1] text-[#22d3ee] "/>
                            <p className="leading-[1.5] text-white">contact@example.com</p>
                         </div>
                    </div>
                        
                    </div>
                    <div className="px-[12px] py-[30px] md:px-[0px]">
                         <h4 className=" relative text-[18px] font-[700] text-white mb-[20px] pb-[12px] before:absolute before:left-0 before:bottom-0 before:w-[50px] before:h-[2px] before:bg-[#22d3ee]">Our Newsletter</h4>
                         <p className="leading-[1.5] text-white mb-[15px]">Subscribe to our newsletter to receive updates and news.</p>
                         <form className="mb-[30px]">
                             <input type="email" name="email" placeholder="Your Email" required="" className="p-[10px_15px] w-fit h-[44px] placeholder:text-gray-600 border border-r-0 focus:border-[#22d3ee] focus:outline-none  transition-colors duration-300 placholder:text-[14px] rounded-r-none rounded-[4px] bg-[#28334b]"></input>
                             <button type="submit" className="p-[10px_15px] h-[44px] bg-[#22d3ee] border-[#22d3ee] rounded-l-none rounded-r-[4px]">Subscribe</button>
                         </form>
                         <div className="border-t border-t-white/20 pt-[20px] text-center md:text-start">
                            <div className="flex items-center gap-[10px] mb-[10px] justify-center md:justify-start">
                              <GoClock className="text-[#22d3ee] text-[22px]"/>
                             <h5 className="text-[16px] font-[600] text-white">Opening Hours</h5>
                            
                             </div>
                              <p className="text-white leading-[1.7] text-[15px]">Monday-Saturday: 9AM - 10PM <br></br>Sunday: Closed</p>

                         </div>
                    </div>

               

                </div>

                 {/* copyright section */}
               
                
                <div className="max-w-[1320px] mx-auto flex flex-col items-center p-[25px_0px] mt-[20px] border-t-[0.5px] border-t-gray-700">
                        <p className="text-[white] text-[14px] ">© <span>Copyright</span> <strong className="pr-[0.25rem] pl-[0.25rem] font-[500] text-[#22d3ee]">Eventia</strong> <span>All Rights Reserved</span></p>  
                        <a href="https://bootstrapmade.com/" className="text-white pt-[5px] text-[14px]">Designed by<span className="text-[#22d3ee] pl-[0.20rem] font-[500]">Bharat Bhati</span></a>
                   </div>
              
               </footer>

           

        
        </>
    )
}

export default Footer;