
import { LiaLightbulb } from "react-icons/lia";
import { BsPeopleFill } from "react-icons/bs";
import { BsTrophy } from "react-icons/bs";
import { BsTerminal } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";




import AboutBackgroundImage from '../../assets/showcase-5.webp';
const About = () => {


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
                    <h1 className="text-[42px] font-[700] mb-[10px] text-white">About</h1>
                    <p className="mb-[16px] text-[16px] text-white text-center">Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
                    <div className="">
                        <a href="" className="text-[#22d3ee] text-[16px]">Home </a>
                        <span className="text-white text-[16px]"> / About</span>
                    </div>
                </div>
            </section>





            <section className="md:p-[60px_0px] px-[12px] bg-[#0f172a]">
                <div className="max-w-[1320px] mx-auto px-[12px] bg-[#1cadc3] rounded-[20px]">
                    <div className="max-w-[800px] mx-auto p-[48px_40px] mb-[56px] text-center ">
                        <span className="bg-[#1b9bb1] p-[8px_20px] mb-[24px] inline-block rounded-[50px] text-[#0f172a] bg-[color-mix(in_srgb,_#ffdc95,_transparent_80%)] text-[13.6px] font-[500]  uppercase tracking-[1px] ">Annual Summit 2025</span>
                        <h3 className="mb-[16px] md:text-[36px] text-[24px] font-[700] text-[#0f172a]">Shaping Tomorrow's Innovation</h3>
                        <p className="mb-[32px] md:text-[16.8px] text-[15.2px] leading-[1.7] text-[#0f172a]">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                        <div className="flex flex-wrap items-center justify-center gap-[48px]">
                            <div class="single-stat">
                                <h2 className="md:text-[32px] text-[24px] font-[700] text-[#0f172a]">4</h2>
                                <p className="uppercase text-[14.4px] tracking-[0.5px] font-[300]">Days</p>
                            </div>
                            <div class="single-stat">
                                <h2 className="md:text-[32px] text-[24px] font-[700] text-[#0f172a]">3,200+</h2>
                                <p className="uppercase text-[14.4px] tracking-[0.5px] font-[300]">Guests</p>
                            </div>
                            <div class="single-stat">
                                <h2 className="md:text-[32px] text-[24px] font-[700] text-[#0f172a]">95+</h2>
                                <p className="uppercase text-[14.4px] tracking-[0.5px] font-[300]">Experts</p>
                            </div>
                            <div class="single-stat">
                                <h2 className="md:text-[32px] text-[24px] font-[700] text-[#0f172a]">12</h2>
                                <p className="uppercase text-[14.4px] tracking-[0.5px] font-[300]">Tracks</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="max-w-[1320px] pb-[64px] mx-auto grid md:grid-cols-3 gap-[24px] grid-cols-1">
                    <div className="p-[32px_24px] bg-[#1f283d] rounded-[12px] flex flex-col items-center gap-[12px] transform hover:translate-y-[-8px] border hover:border-[#22d3ee] hover:shadow-[0_0_0_1px_#22d3ee,0_20px_40px_rgba(34,211,238,0.35)] transition duration-300">
                        <a href="" className="px-[20px] py-[20px] rounded-[50px] bg-[#1f394f]"><LiaLightbulb className="text-[#22d3ee] text-[32px]" /></a>
                        <h4 className="text-[20px] text-white font-[600] ">Innovative Sessions</h4>
                        <p className="text-[15.2px] leading-[1.6] text-[#c1cbcf] text-center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum dolore.</p>
                    </div>

                    <div className="p-[32px_24px] bg-[#102134] rounded-[12px] flex flex-col items-center gap-[12px] hover:translate-y-[-8px] border hover:border-[#22d3ee] hover:shadow-[0_0_0_1px_#22d3ee,0_20px_40px_rgba(34,211,238,0.35)] transition duration-300">
                        <a href="" className="px-[20px] py-[20px] rounded-[50px] bg-[#1f394f]"><BsPeopleFill className="text-[#22d3ee] text-[32px]" /></a>
                        <h4 className="text-[20px] text-white font-[600] ">Innovative Sessions</h4>
                        <p className="text-[15.2px] leading-[1.6] text-[#c1cbcf] text-center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum dolore.</p>
                    </div>

                    <div className="p-[32px_24px] bg-[#1f283d] rounded-[12px] flex flex-col items-center gap-[12px] hover:translate-y-[-8px] border hover:border-[#22d3ee] hover:shadow-[0_0_0_1px_#22d3ee,0_20px_40px_rgba(34,211,238,0.35)] transition duration-300">
                        <a href="" className="px-[20px] py-[20px] rounded-[50px] bg-[#1f394f]"><BsTrophy className="text-[#22d3ee] text-[32px]" /></a>
                        <h4 className="text-[20px] text-white font-[600] ">Innovative Sessions</h4>
                        <p className="text-[15.2px] leading-[1.6] text-[#c1cbcf] text-center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum dolore.</p>
                    </div>
                </div>



                <div className="max-w-[1320px] mx-auto bg-[#1f283d] rounded-[16px] md:p-[48px] p-[24px_16px] grid md:grid-cols-[41.66%_58.33%] gap-[24px] grid-cols-1">

                    {/* LeftSide Div */}
                    <div className="px-[12px]">
                        <div className="p-r-[24px]">
                            <h3 className="md:text-[30px] text-[24px] md:text-left text-center font-[700] mb-[16px] text-[#fafafa]">Who Should Join Us?</h3>
                            <p className="text-[#f5f5f5] md:text-left text-center leading-[1.7] mb-[24px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa.</p>
                            <blockquote className="p-[20px_24px] bg-[#1f3146] rounded-[0px_8px_8px_0px] mb-[28px] border-l-[3px] border-l-[#22d3ee] ">
                                <p className="text-[white] italic mb-[8px]">"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni."</p>
                                <p className="text-[14px] text-[#22d3ee] font-[500]">— Michael Torres, Program Lead</p>
                            </blockquote>


                            {/* Buttons */}

                            <div className="flex flex-col md:flex-row  md:gap-[16px] gap-[12px] items-center">
                                <button className="p-[16px_32px] rounded-[8px] w-fit bg-[#22d3ee] hover:bg-[#22d3ee]/85   transition-all duration-300 ease-in-out cursor-pointer hover:translate-y-[-3px] text-[16px] font-[600]"><a href="register.html">Explore Schedule</a></button>
                                <div className="flex items-center gap-[6px] group cursor-pointer">
                                    <a
                                        href="register.html"
                                        className="rounded-[8px] md:w-fit w-[100%] text-[#22d3ee] text-[16px] font-[600]  transition-colors duration-300 ease-in-out group-hover:text-[color-mix(in_srgb,#22d3ee,black_15%)]">
                                        View Speakers
                                    </a>

                                    <FaArrowRightLong
                                        className=" text-[#22d3ee] transformtransition-transform duration-300 ease-out group-hover:translate-x-[4px] group-hover:text-[color-mix(in_srgb,#22d3ee,black_15%)]"
                                    />
                                </div>

                            </div>

                        </div>

                    </div>



                    {/* RightSide Div */}
                    <div className="px-[12px] flex items-center">
                        <div className="grid md:grid-cols-3 grid-cols-2 gap-[16px]">
                            <div className="group flex flex-col items-center text-center border p-[20px_16px] rounded-[10px] bg-[#0f172a] cursor-pointer hover:border-[#22d3ee] hover:bg-[color-mix(in_srgb,#22d3ee,transparent_96%)] ">
                                <a href=""><BsTerminal className="text-[24px] text-gray-200 mb-[12px] group-hover:text-[#22d3ee]   group-hover:scale-[1.15] transition-transform duration-200" /></a>
                                <h5 className="text-[15.2px] mb-[4px] text-[white]">Engineers</h5>
                                <p className="text-[12.8px] text-gray-200">Backend and frontend specialists</p>
                            </div>

                            <div className="group flex flex-col items-center text-center border p-[20px_16px] rounded-[10px] bg-[#0f172a] cursor-pointer hover:border-[#22d3ee] hover:bg-[color-mix(in_srgb,#22d3ee,transparent_96%)] ">
                                <a href=""><BsTerminal className="text-[24px] text-gray-200 mb-[12px] group-hover:text-[#22d3ee]   group-hover:scale-[1.15] transition-transform duration-200" /></a>
                                <h5 className="text-[15.2px] mb-[4px] text-[white]">Engineers</h5>
                                <p className="text-[12.8px] text-gray-200">Backend and frontend specialists</p>
                            </div>


                            <div className="group flex flex-col items-center text-center border p-[20px_16px] rounded-[10px] bg-[#0f172a] cursor-pointer hover:border-[#22d3ee] hover:bg-[color-mix(in_srgb,#22d3ee,transparent_96%)] ">
                                <a href=""><BsTerminal className="text-[24px] text-gray-200 mb-[12px] group-hover:text-[#22d3ee]   group-hover:scale-[1.15] transition-transform duration-200" /></a>
                                <h5 className="text-[15.2px] mb-[4px] text-[white]">Engineers</h5>
                                <p className="text-[12.8px] text-gray-200">Backend and frontend specialists</p>
                            </div>


                            <div className="group flex flex-col items-center text-center border p-[20px_16px] rounded-[10px] bg-[#0f172a] cursor-pointer hover:border-[#22d3ee] hover:bg-[color-mix(in_srgb,#22d3ee,transparent_96%)] ">
                                <a href=""><BsTerminal className="text-[24px] text-gray-200 mb-[12px] group-hover:text-[#22d3ee]   group-hover:scale-[1.15] transition-transform duration-200" /></a>
                                <h5 className="text-[15.2px] mb-[4px] text-[white]">Engineers</h5>
                                <p className="text-[12.8px] text-gray-200">Backend and frontend specialists</p>
                            </div>

                            <div className="group flex flex-col items-center text-center border p-[20px_16px] rounded-[10px] bg-[#0f172a] cursor-pointer hover:border-[#22d3ee] hover:bg-[color-mix(in_srgb,#22d3ee,transparent_96%)] ">
                                <a href=""><BsTerminal className="text-[24px] text-gray-200 mb-[12px] group-hover:text-[#22d3ee]   group-hover:scale-[1.15] transition-transform duration-200" /></a>
                                <h5 className="text-[15.2px] mb-[4px] text-[white]">Engineers</h5>
                                <p className="text-[12.8px] text-gray-200">Backend and frontend specialists</p>
                            </div>

                            <div className="group flex flex-col items-center text-center border p-[20px_16px] rounded-[10px] bg-[#0f172a] cursor-pointer hover:border-[#22d3ee] hover:bg-[color-mix(in_srgb,#22d3ee,transparent_96%)] ">
                                <a href=""><BsTerminal className="text-[24px] text-gray-200 mb-[12px] group-hover:text-[#22d3ee]   group-hover:scale-[1.15] transition-transform duration-200" /></a>
                                <h5 className="text-[15.2px] mb-[4px] text-[white]">Engineers</h5>
                                <p className="text-[12.8px] text-gray-200">Backend and frontend specialists</p>
                            </div>




                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}


export default About;