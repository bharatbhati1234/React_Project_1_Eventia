
import BackgroundVideo from '../../assets/video-3.mp4';

import Speaker_3_Image from '../../assets/speaker-3.webp';
import Speaker_7_Image from '../../assets/speaker-7.webp';
import Speaker_11_Image from '../../assets/speaker-11.webp';
import Speaker_5_Image from '../../assets/speaker-5.webp';

import DiscoverBackgroundImage from '../../assets/showcase-8.webp'
import { IoPeopleOutline } from "react-icons/io5";
import { LiaLightbulb } from "react-icons/lia";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsTrophy } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

const Home = () => {

    return (
        <>
            <section className="relative w-full min-h-screen">

                <video src={BackgroundVideo}
                    autoPlay
                    loop
                    muted
                    playsInline className="absolute w-[100%] h-[100%] top-0 object-cover">


                </video>


                <div className="max-w-[1320px] mx-auto grid md:grid-cols-[58.33%_41.67%] grid-cols-1 relative z-10 text-white md:pt-[130px] pt-[100px] pb-[40px]">

                    {/* leftside  */}

                    <div className="md:pr-[40px] p-[12px] text-center md:text-left">

                        <span className="bg-[#0f1628]/50 uppercase tracking-[1.5px] mb-[24px] text-[#22d3ee] border border-[rgba(34,211,238,0.25)] text-[13.6px]  text-center font-[600] p-[8px_20px] rounded-[50px]">Annual Conference 2026</span>
                        <h1 className="text-white md:text-[51.2px] text-[35.2px] md:text-left p-[12px] text-center font-[700] mb-[24px] tracking-[-0.5px]">Innovators & Visionaries Global Forum</h1>
                        <p className="text-[18.4px] mb-[32px] text-[#d4d4d4] leading-[1.7] max-w-[540px]">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum.</p>

                        <div className="flex flex-col md:flex-row md:gap-[24px] gap-[12px] items-center mb-[40px]">
                            <div className="flex flex-col border w-fit border-[#22d3ee]/30 p-[16px_24px] rounded-[12px] bg-[#0f172a]">
                                <span className="text-[12px] uppercase tracking-[1px] text-[#d4d4d4] mb-[4px]">Date</span>
                                <span className="text-[15.2px] font-[600]">April 22-24, 2026</span>
                            </div>
                            <div className="flex flex-col border w-fit border-[#22d3ee]/30 p-[16px_24px] rounded-[12px] bg-[#0f172a]">
                                <span className="text-[12px] uppercase tracking-[1px] text-[#d4d4d4] mb-[4px]">Venue</span>
                                <span className="text-[15.2px] font-[600]">Metropolitan Center, Chicago</span>
                            </div>
                        </div>

                        {/* Buttons  */}

                        <div className="flex flex-col md:flex-row  md:gap-[16px] gap-[12px] items-center">
                            <button className="p-[16px_32px] rounded-[8px] w-fit bg-[#22d3ee] hover:bg-[#22d3ee]/85   transition-all duration-300 ease-in-out cursor-pointer text-[16px] font-[600]"><a href="register.html">Reserve Your Spot</a></button>
                            <button className="p-[16px_32px] rounded-[8px] w-fit text-white border border-[#ffffff] hover:border-[#22d3ee] hover:text-[#22d3ee] hover:translate-y-[-5px] transition-transform duration-300 ease-in-out cursor-pointer text-[16px] font-[600]"><a href="register.html">View Agenda</a></button>
                        </div>

                    </div>


                    {/* rightside */}

                    <div className="flex justify-center items-center">
                        <div className="p-[40px_32px] rounded-[20px] border border-[] bg-[#10192b] text-center md:w-[100%] w-fit">
                            <h4 className="text-[16px] font-[600] text-[#ffffff] uppercase tracking-[2px] mb-[32px] text-center">Countdown to Launch</h4>
                            <div className="grid grid-cols-4 text-center gap-[12px] mb-[32px]">

                                <div className="p-[20px_8px] rounded-[12px] bg-[#112639] hover:bg-[bg-[#22d3ee]/20 transition-transform duration-300 hover:scale-[1.05]">
                                    <h3 className="text-[35.2px] font-[700] mb-[4px] text-[#22d3ee]">79</h3>
                                    <span className="text-[11.2px] tracking-[1px] uppercase text-[#d[#d4d4d4]] font-[500]">Days</span>
                                </div>

                                <div className="p-[20px_8px] rounded-[12px] bg-[#112639] hover:bg-[bg-[#22d3ee]/20 transition-transform duration-300 hover:scale-[1.05]">
                                    <h3 className="text-[35.2px] font-[700] mb-[4px] text-[#22d3ee]">4</h3>
                                    <span className="text-[11.2px] tracking-[1px] uppercase text-[#d[#d4d4d4]] font-[500]">Days</span>
                                </div>

                                <div className="p-[20px_8px] rounded-[12px] bg-[#112639] hover:bg-[bg-[#22d3ee]/20 transition-transform duration-300 hover:scale-[1.05]">
                                    <h3 className="text-[35.2px] font-[700] mb-[4px] text-[#22d3ee]">31</h3>
                                    <span className="text-[11.2px] tracking-[1px] uppercase text-[#d[#d4d4d4]] font-[500]">Days</span>
                                </div>

                                <div className="p-[20px_8px] rounded-[12px] bg-[#112639] hover:bg-[bg-[#22d3ee]/20 transition-transform duration-300 hover:scale-[1.05]">
                                    <h3 className="text-[35.2px] font-[700] mb-[4px] text-[#22d3ee]">51</h3>
                                    <span className="text-[11.2px] tracking-[1px] uppercase text-[#d[#d4d4d4]] font-[500]">Days</span>
                                </div>
                            </div>

                            <div className="p-[20px] bg-[#1b2234] rounded-[12px] mb-[24px]">
                                <div className="flex justify-between p-[8px_0px]">
                                    <span className="text-[14.4px] text-[#d4d4d4] ">Available Seats</span>
                                    <span className="text-[14.4px] text-white font-[500]">156 remaining</span>
                                </div>
                                <div className="flex justify-between p-[8px_0px] border-t-[1px] border-[#d4d4d4]">
                                    <span className="text-[14.4px] text-[#d4d4d4] ">Early Access</span>
                                    <span className="text-[14.4px] text-[#22d3ee] font-[500] ">Ends Feb 28th</span>
                                </div>
                            </div>


                            <div className="">
                                <span className="text-[12.8px] uppercase text-[#d4d4d4] tracking-[1px]">Featured Presenters</span>
                            
                            <div className="flex justify-center mt-[16px]">
                                 <img src={Speaker_3_Image} className="w-[48px] h-[48px] rounded-[50px] object-cover transform hover:scale-[1.1] transition duration-300 cursor-pointer border-[3px] " alt="image1" ></img>
                                 <img src={Speaker_7_Image} className="w-[48px] h-[48px] ml-[-12px] rounded-[50px] object-cover transform hover:scale-[1] transition duration-300 cursor-pointer border-[3px] " alt="image1" ></img>
                                 <img src={Speaker_11_Image} className="w-[48px] h-[48px] ml-[-12px] rounded-[50px] object-cover transform hover:scale-[1.1] transition duration-300 cursor-pointer border-[3px] " alt="image1" ></img>
                                 <img src={Speaker_5_Image} className="w-[48px] h-[48px] ml-[-12px] rounded-[50px] object-cover transform hover:scale-[1.1] transition duration-300 cursor-pointer border-[3px] " alt="image1" ></img>
                                 <span className="w-[48px] h-[48px] ml-[-12px] rounded-[50px] bg-[#22d3ee] text-[13.6px] flex justify-center items-center object-cover text-center transform hover:scale-[1.1] transition duration-300 cursor-pointer border-[3px]">+18</span>

                             

                            </div>

                            </div>


                        </div>


                    </div>

                </div>
            </section>



            {/*  Discover Our Story Section ----------------------------------------------------------------------------------*/}



             <div className="p-[60px_0px] bg-[#10182b]">

              <div className="max-w-[1320px] mx-auto flex md:flex-row flex-col  gap-[64px]">

                {/* Leftside */}
                <div className="md:w-[616px] w-full md:h-[480px] h-auto px-[12px]">
                    <div className="relative">
                           <img src={DiscoverBackgroundImage} className="md:w-[616px] w-fit height-[480px] rounded-[25px] md:mt-[64px] mt-[30px]" alt="Conference Hall image"></img> 

                           <div className="p-[16px_24px] rounded-[16px] border flex flex-col items-center bg-[#22d3ee] w-fit absolute bottom-[24px] left-[24px]">
                               <span className="text-[36px] font-[800] leading-[1] mb-[4px]">12+</span>
                               <span className="text-[12px] font-[600] tracking-[0.5px] uppercase opacity-[0.9]">Years of Excellence</span>
                           </div>


                           <div className="flex justify-center items-start gap-[20px] border w-fit absolute md:bottom-[-32px] bottom-[-32px] md:right-[-24px] right-[5px] p-[20px_24px] rounded-[16px] bg-[#1f283d] shadow-[0_16px_48px_rgba(34,211,238,0.25),inset_0_0_20px_rgba(34,211,238,0.15)]">
                             <a href="" className="w-[58px] h-[58px] rounded-[12px] flex justify-center items-center  bg-[#1f3c53]"><BsTrophy className="text-[30px] text-[#22d3ee]"/></a>
                           <div className="">
                               <h4 className="text-[17px] text-white font-[700] mb-[6px]">Award Winning</h4>
                               <p className="text-[15px] leading-[1.6] text-gray-400">Best Conference Organizer 2025</p>
                           </div>
                        </div>


                       </div>
                  </div> 

                {/* Rightside */}
                  <div className="md:w-[616px] w-full  md:h-[642px] h-auto md:pl-[16px] px-[12px]">
                    

                      <span className="relative flex items-center text-[14px] mb-[16px] font-[600] text-[#22d3ee] uppercase tracking-[1px] before:content-[''] before:w-[32px] before:h-[2px] before:bg-[#22d3ee] before:mr-[8px]">Discover Our Story</span>  
                      <h2 className="md:text-[36px] text-[30px] font-[800] leading-[1.25] text-white mb-[24px]">Crafting Memorable Conference Experiences Since 2014</h2>
                      <p className="text-[17px] leading-[1.8] text-gray-400 mb-[32px]">Nulla porttitor accumsan tincidunt vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.</p>

                    <div className="flex flex-col gap-[24px] mb-[40px]">
                        <div className="flex justify-center items-start gap-[20px]">
                             <a href="" className="shrink-0 w-[58px] h-[58px] rounded-[12px] border flex justify-center items-center  bg-[#22d3ee]"><IoPeopleOutline  className="text-[30px]"/></a>
                           <div className="">
                               <h4 className="text-[17px] text-white font-[700] mb-[6px]">Expert Network</h4>
                               <p className="text-[15px] leading-[1.6] text-gray-400">Curabitur arcu erat accumsan id imperdiet et porttitor at sem proin eget tortor risus.</p>
                           </div>
                        </div>

                         <div className="flex justify-center items-start gap-[20px]">
                                 <a href="" className="shrink-0 w-[58px] h-[58px] rounded-[12px] border flex justify-center items-center  bg-[#22d3ee]"><LiaLightbulb  className="text-[30px]"/></a>
                           <div className="">
                                <h4 className="text-[17px] text-white font-[700] mb-[6px]">Innovative Sessions</h4>
                               <p className="text-[15px] leading-[1.6] text-gray-400">Praesent sapien massa convallis a pellentesque nec egestas non nisi cras ultricies ligula.</p>
                           </div>
                        </div>

                         <div className="flex justify-center items-start gap-[20px]">
                             <a href="" className=" shrink-0 w-[58px] h-[58px] rounded-[12px] border flex justify-center items-center  bg-[#22d3ee]"><AiOutlineGlobal className="text-[30px]"/></a>
                           <div className="">
                                <h4 className="text-[17px] text-white font-[700] mb-[6px]">Global Reach</h4>
                               <p className="text-[15px] leading-[1.6] text-gray-400">Donec sollicitudin molestie malesuada vivamus magna justo lacinia eget consectetur sed.</p>
                           </div>
                        </div>
                    </div>

                    {/* Buttons */}
                      
                      <div className="flex items-left md:flex-row flex-col gap-[32px]">
                          <button className="p-[16px_32px] rounded-[50px] w-fit bg-[#22d3ee] hover:shadow-[0_16px_48px_rgba(34,211,238,0.35)] shadow-[0_16px_48px_rgba(34,211,238,0.25)] hover:translate-y-[-4px] hover:bg-[#22d3ee]/85   transition-all duration-300 ease-in-out cursor-pointer text-[16px] font-[600]"><a href="register.html">Learn More About Us</a></button>

                           <div className="flex justify-center w-fit items-start  gap-[20px]">
                             <a href="" className=" shrink-0 w-[58px] h-[58px] rounded-[50px] flex justify-center items-center  md:bg-[#102a3e] bg-[none]"><BsTelephone  className="md:text-[30px] text-[20px] text-[#22d3ee]"/></a>
                           <div className="">
                                <h4 className="text-[13px] text-gray-400 mb-[6px]">Need Help?</h4>
                               <p className="text-[16px] font-[500] text-[#fafafa] leading-[1.6]">+1 (555) 847-2931</p>
                           </div>
                        </div>
                          
                      </div>
                   

                  </div>
            </div>   
           </div>
        </>
    )
}

export default Home;