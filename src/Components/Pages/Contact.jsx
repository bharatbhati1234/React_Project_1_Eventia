
import AboutBackgroundImage from '../../assets/showcase-5.webp';
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { GoClock } from "react-icons/go";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";

const Contact = () => {


    return (
        <>
            <section className="pt-[200px] pb-[70px] relative" style={{
                backgroundImage: `url(${AboutBackgroundImage})`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                //  backgroundRepeat:`no-repeat`,

            }}>
                {/* Black overlay on image */}
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="max-w-[1320px] mx-auto px-[12px] flex flex-col items-center relative z-10">
                    <h1 className="text-[42px] font-[700] mb-[10px] text-white">Contact</h1>
                    <p className="mb-[16px] text-[16px] text-white text-center">Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
                    <div className="">
                        <a href="" className="text-[#22d3ee] text-[16px]">Home </a>
                        <span className="text-white text-[16px]"> / Contact</span>
                    </div>
                </div>
            </section>


            <section className="bg-[#0f172a] px-[12px]">

                <div className="max-w-[1320px] mx-auto p-[60px_0px] grid md:grid-cols-[45%_55%] grid-cols-1 gap-[30px]">

                    {/* leftside  */}

                    <div className="px-[12px] md:px-[0px]">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d45995.49727246966!2d-74.0061377!3d40.7100586!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown.%20Conference%20Center%2C%20157%20William%20St%2C%20New%20York%2C%20NY%2010038%2C%20United%20States!3m2!1d40.710058599999996!2d-74.0061377!5e1!3m2!1sen!2sin!4v1770986888296!5m2!1sen!2sin"
                            className="w-full h-[100%]  rounded-2xl cursor-alias"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"

                        ></iframe>

                    </div>

                    {/* Rightside */}

                    <div className="text-white flex flex-col gap-[30px] ">

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-[15px] px-[12px] md:px-[0px] ">
                            <div className="p-[20px] flex items-start gap-[15px] bg-[#1f283d] rounded-[12px] shadow-[0 5px 15px rgba(0, 0, 0, 0.04)] transform transition duration-300 hover:translate-y-[-4px]" >
                                <div className="w-[50px] h-[50px] bg-[color-mix(in_srgb,#22d3ee,transparent_90%)] flex items-center justify-center rounded-[10px]">
                                    <a href="" className=""><SlLocationPin className="text-[22px] text-[#22d3ee]" /></a>
                                </div>
                                <div class="contact-text">
                                    <h4 className="text-[18px] font-[600] mb-[8px] text-[#fafafa]">Location</h4>
                                    <p className="text-[14px] leading-[1.5] text-[#fafafa]">8721 Broadway Avenue, New York, NY 10023</p>
                                </div>
                            </div>

                            <div className="p-[20px] flex items-start gap-[15px] bg-[#1f283d] rounded-[12px] shadow-[0 5px 15px rgba(0, 0, 0, 0.04)] transform transition duration-300 hover:translate-y-[-4px]" >
                                <div className="w-[50px] h-[50px] bg-[color-mix(in_srgb,#22d3ee,transparent_90%)] flex items-center justify-center rounded-[10px]">
                                    <a href="" className=""><SlLocationPin className="text-[22px] text-[#22d3ee]" /></a>
                                </div>
                                <div class="contact-text">
                                    <h4 className="text-[18px] font-[600] mb-[8px] text-[#fafafa]">Location</h4>
                                    <p className="text-[14px] leading-[1.5] text-[#fafafa]">8721 Broadway Avenue, New York, NY 10023</p>
                                </div>
                            </div>

                            <div className="p-[20px] flex items-start gap-[15px] bg-[#1f283d] rounded-[12px] shadow-[0 5px 15px rgba(0, 0, 0, 0.04)] transform transition duration-300 hover:translate-y-[-4px]" >
                                <div className="w-[50px] h-[50px] bg-[color-mix(in_srgb,#22d3ee,transparent_90%)] flex items-center justify-center rounded-[10px]">
                                    <a href="" className=""><SlLocationPin className="text-[22px] text-[#22d3ee]" /></a>
                                </div>
                                <div class="contact-text">
                                    <h4 className="text-[18px] font-[600] mb-[8px] text-[#fafafa]">Location</h4>
                                    <p className="text-[14px] leading-[1.5] text-[#fafafa]">8721 Broadway Avenue, New York, NY 10023</p>
                                </div>
                            </div>


                            <div className="p-[20px] flex items-start gap-[15px] bg-[#1f283d] rounded-[12px] shadow-[0 5px 15px rgba(0, 0, 0, 0.04)] transform transition duration-300 hover:translate-y-[-4px]" >
                                <div className="w-[50px] h-[50px] bg-[color-mix(in_srgb,#22d3ee,transparent_90%)] flex items-center justify-center rounded-[10px]">
                                    <a href="" className=""><SlLocationPin className="text-[22px] text-[#22d3ee]" /></a>
                                </div>
                                <div class="contact-text">
                                    <h4 className="text-[18px] font-[600] mb-[8px] text-[#fafafa]">Location</h4>
                                    <p className="text-[14px] leading-[1.5] text-[#fafafa]">8721 Broadway Avenue, New York, NY 10023</p>
                                </div>
                            </div>






                        </div>


                        <div className="md:p-[30px] p-[25px_20px] rounded-[16px] shadow-[0 10px 30px rgba(0, 0, 0, 0.08)]">
                            <h3 className="  relative pl-[15px] text-[24px] font-[700] mb-[15px] text-[#fafafa] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[4px] before:h-[100%] before:bg-cyan-400 before:rounded-[4px]">Get in Touch</h3>
                            <p className="text-[15px] leading-[1.6] mb-[25px] text-[#f5f5f5]">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.</p>

                            <form method="post">
                                <div className="flex flex-col md:flex-row gap-[24px]">
                                    <div className="md:w-[50%] w-[100%]">
                                        <input type="text" name="name" className="w-[100%] bg-[#545b69] p-[14px_20px] border border-[#f5f5f5]/10 rounded-[10px]" id="name" placeholder="Your Name" required="" />
                                    </div>
                                    <div className="md:w-[50%] w-[100%]">
                                        <input type="email" name="email" className="w-[100%] bg-[#545b69] p-[14px_20px] border border-[#f5f5f5]/10 rounded-[10px]" id="email" placeholder="Your Email" required="" />
                                    </div>
                                </div>
                                <div className="mt-[16px]">
                                    <input type="text" className="w-[100%] bg-[#545b69] p-[14px_20px] border border-[#f5f5f5]/10 rounded-[10px]" name="subject" id="subject" placeholder="Subject" required="" />
                                </div>
                                <div className="mt-[16px]">
                                    <textarea name="message" className="w-[100%] h-[150px] bg-[#545b69] p-[14px_20px] border border-[#f5f5f5]/10 rounded-[10px]" placeholder="Message" required=""></textarea>
                                </div>

                                <div className="mt-[10px] flex flex-col md:flex-row md:items-center items-start justify-between gap-[20px] md:gap-[0px]">
                                    <button class="p-[12px_28px] rounded-[50px] w-fit bg-[#22d3ee] text-[#0f172a] hover:shadow-[0_16px_48px_rgba(34,211,238,0.35)] shadow-[0_16px_48px_rgba(34,211,238,0.25)] hover:translate-y-[-4px] hover:bg-[#22d3ee]/85   transition-all duration-300 ease-in-out cursor-pointer text-[15px] font-[600]"><a href="register.html">Send Message</a></button>
                                    <div className="flex gap-[10px]">
                                        <a href="" className="w-[36px] h-[36px] rounded-[50%] text-white flex justify-center items-center bg-slate-700 hover:bg-[#22d3ee] hover:text-[#0f172a] transition duration-300 transform hover:translate-y-[-4px]"><FaXTwitter className="" /></a>
                                        <a href="" className="w-[36px] h-[36px] rounded-[50%] text-white flex justify-center items-center bg-slate-700 hover:bg-[#22d3ee] hover:text-[#0f172a] transition duration-300 transform hover:translate-y-[-4px]"><FaFacebook className="" /></a>
                                        <a href="" className="w-[36px] h-[36px] rounded-[50%] text-white flex justify-center items-center bg-slate-700 hover:bg-[#22d3ee] hover:text-[#0f172a] transition duration-300 transform hover:translate-y-[-4px]"><FaInstagram className="" /></a>
                                        <a href="" className="w-[36px] h-[36px] rounded-[50%] text-white flex justify-center items-center bg-slate-700 hover:bg-[#22d3ee] hover:text-[#0f172a] transition duration-300 transform hover:translate-y-[-4px]"><FaLinkedin className="" /></a>
                                        <a href="" className="w-[36px] h-[36px] rounded-[50%] text-white flex justify-center items-center bg-slate-700 hover:bg-[#22d3ee] hover:text-[#0f172a] transition duration-300 transform hover:translate-y-[-4px]"><ImYoutube className="" /></a>


                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}

export default Contact;