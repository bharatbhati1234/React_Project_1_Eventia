
import AboutBackgroundImage from '../../assets/showcase-5.webp';
import Speaker_3 from '../../assets/speaker-3.webp';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { PiBroadcastFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";



const Speakers = () => {


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
                    <h1 className="text-[42px] font-[700] mb-[10px] text-white">Speakers</h1>
                    <p className="mb-[16px] text-[16px] text-white text-center">Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
                    <div className="">
                        <a href="" className="text-[#22d3ee] text-[16px]">Home </a>
                        <span className="text-white text-[16px]"> / Speakers</span>
                    </div>
                </div>
            </section>



            <section className="p-[60px_0px]  bg-[#0f172a]">

                <div className="px-[12px] max-w-[1320px] mx-auto grid md:grid-cols-3 grid-cols-1 gap-[24px]">

                    <div className="group rounded-[16px] text-white bg-[#1f283d] shadow-[0_4px_12px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.04)]">
                        <div className="relative rounded-t-[16px] overflow-hidden">
                            <img src={Speaker_3} className="transition duration-300 transform group-hover:scale-[1.05] w-full h-[240px] rounded-t-[16px] object-cover"></img>
                            <div className="p-[6px_14px] rounded-[20px] tracking-[0.5px] uppercase font-[600] text-[12px] w-fit absolute top-[16px] left-[16px] text-[#0f172a] bg-[linear-gradient(135deg,#22d3ee,color-mix(in_srgb,#22d3ee_80%,#6366f1))]">Keynote</div>
                            <div className="flex gap-[8px] absolute bottom-[16px] right-[16px] opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                                <a href="" className="w-[36px] h-[36px] rounded-[50%] flex justify-center items-center bg-[#0f172a] text-white hover:bg-[#22d3ee] hover:text-[#0f172a] transition duration-300 transform hover:translate-y-[-4px]"><FaXTwitter className="" /></a>
                                <a href="" className="w-[36px] h-[36px] rounded-[50%] flex justify-center items-center bg-[#0f172a] text-white hover:bg-[#22d3ee] hover:text-[#0f172a] duration-300 transform hover:translate-y-[-4px]"><FaLinkedin className="" /></a>

                            </div>
                        </div>

                        <div className="p-[24px] text-white flex flex-col">
                            <h4 className="text-[20px] font-[700] mb-[8px] ">Alexandra Mitchell</h4>
                            <span className="text-[14px] font-[600] text-[#22d3ee] mb-[8px]">VP of Product Strategy</span>
                            <span className="text-[13px] mb-[16px] text-gray-400">CloudScale Technologies</span>
                            <div className="flex items-start gap-[10px] bg-[#20364b] p-[14px_16px] rounded-[10px] mb-[16px]">
                                <PiBroadcastFill className="text-[#22d3ee] mt-[2px] font-[16px] mt-[2px]" />
                                <span className="text-[14px] font-[500] text-white leading-[1.4]">Building Scalable SaaS Architectures</span>
                            </div>
                            <p className="text-[14px] leading-[1.6] text-gray-400 mb-[16px] grow">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                            <div className="flex flex-cols items-center gap-[6px] transition duration-300 text-gray-400 group-hover:text-[#22d3ee]">
                                <a href="#" className="">View Full Profile </a>
                                <FaArrowRightLong className="transition duration-300 transform group-hover:translate-x-[4px]" />
                            </div>
                        </div>
                    </div>

                     <div className="group rounded-[16px] text-white bg-[#1f283d] shadow-[0_4px_12px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.04)]">
                        <div className="relative rounded-t-[16px] overflow-hidden">
                            <img src={Speaker_3} className="transition duration-300 transform group-hover:scale-[1.05] w-full h-[240px] rounded-t-[16px] object-cover"></img>
                            <div className="p-[6px_14px] rounded-[20px] tracking-[0.5px] uppercase font-[600] text-[12px] w-fit absolute top-[16px] left-[16px] text-[#0f172a] bg-[linear-gradient(135deg,#22d3ee,color-mix(in_srgb,#22d3ee_80%,#6366f1))]">Keynote</div>
                            <div className="flex gap-[8px] absolute bottom-[16px] right-[16px] opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                                <a href="" className="w-[36px] h-[36px] rounded-[50%] flex justify-center items-center bg-[#0f172a] text-white hover:bg-[#22d3ee] hover:text-[#0f172a] transition duration-300 transform hover:translate-y-[-4px]"><FaXTwitter className="" /></a>
                                <a href="" className="w-[36px] h-[36px] rounded-[50%] flex justify-center items-center bg-[#0f172a] text-white hover:bg-[#22d3ee] hover:text-[#0f172a] duration-300 transform hover:translate-y-[-4px]"><FaLinkedin className="" /></a>

                            </div>
                        </div>

                        <div className="p-[24px] text-white flex flex-col">
                            <h4 className="text-[20px] font-[700] mb-[8px] ">Alexandra Mitchell</h4>
                            <span className="text-[14px] font-[600] text-[#22d3ee] mb-[8px]">VP of Product Strategy</span>
                            <span className="text-[13px] mb-[16px] text-gray-400">CloudScale Technologies</span>
                            <div className="flex items-start gap-[10px] bg-[#20364b] p-[14px_16px] rounded-[10px] mb-[16px]">
                                <PiBroadcastFill className="text-[#22d3ee] mt-[2px] font-[16px] mt-[2px]" />
                                <span className="text-[14px] font-[500] text-white leading-[1.4]">Building Scalable SaaS Architectures</span>
                            </div>
                            <p className="text-[14px] leading-[1.6] text-gray-400 mb-[16px] grow">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                            <div className="flex flex-cols items-center gap-[6px] transition duration-300 text-gray-400 group-hover:text-[#22d3ee]">
                                <a href="#" className="">View Full Profile </a>
                                <FaArrowRightLong className="transition duration-300 transform group-hover:translate-x-[4px]" />
                            </div>
                        </div>
                    </div>


                     <div className="group rounded-[16px] text-white bg-[#1f283d] shadow-[0_4px_12px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.04)]">
                        <div className="relative rounded-t-[16px] overflow-hidden">
                            <img src={Speaker_3} className="transition duration-300 transform group-hover:scale-[1.05] w-full h-[240px] rounded-t-[16px] object-cover"></img>
                            <div className="p-[6px_14px] rounded-[20px] tracking-[0.5px] uppercase font-[600] text-[12px] w-fit absolute top-[16px] left-[16px] text-[#0f172a] bg-[linear-gradient(135deg,#22d3ee,color-mix(in_srgb,#22d3ee_80%,#6366f1))]">Keynote</div>
                            <div className="flex gap-[8px] absolute bottom-[16px] right-[16px] opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                                <a href="" className="w-[36px] h-[36px] rounded-[50%] flex justify-center items-center bg-[#0f172a] text-white hover:bg-[#22d3ee] hover:text-[#0f172a] transition duration-300 transform hover:translate-y-[-4px]"><FaXTwitter className="" /></a>
                                <a href="" className="w-[36px] h-[36px] rounded-[50%] flex justify-center items-center bg-[#0f172a] text-white hover:bg-[#22d3ee] hover:text-[#0f172a] duration-300 transform hover:translate-y-[-4px]"><FaLinkedin className="" /></a>

                            </div>
                        </div>

                        <div className="p-[24px] text-white flex flex-col">
                            <h4 className="text-[20px] font-[700] mb-[8px] ">Alexandra Mitchell</h4>
                            <span className="text-[14px] font-[600] text-[#22d3ee] mb-[8px]">VP of Product Strategy</span>
                            <span className="text-[13px] mb-[16px] text-gray-400">CloudScale Technologies</span>
                            <div className="flex items-start gap-[10px] bg-[#20364b] p-[14px_16px] rounded-[10px] mb-[16px]">
                                <PiBroadcastFill className="text-[#22d3ee] mt-[2px] font-[16px] mt-[2px]" />
                                <span className="text-[14px] font-[500] text-white leading-[1.4]">Building Scalable SaaS Architectures</span>
                            </div>
                            <p className="text-[14px] leading-[1.6] text-gray-400 mb-[16px] grow">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                            <div className="flex flex-cols items-center gap-[6px] transition duration-300 text-gray-400 group-hover:text-[#22d3ee]">
                                <a href="#" className="">View Full Profile </a>
                                <FaArrowRightLong className="transition duration-300 transform group-hover:translate-x-[4px]" />
                            </div>
                        </div>
                    </div>


                     <div className="group rounded-[16px] text-white bg-[#1f283d] shadow-[0_4px_12px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.04)]">
                        <div className="relative rounded-t-[16px] overflow-hidden">
                            <img src={Speaker_3} className="transition duration-300 transform group-hover:scale-[1.05] w-full h-[240px] rounded-t-[16px] object-cover"></img>
                            <div className="p-[6px_14px] rounded-[20px] tracking-[0.5px] uppercase font-[600] text-[12px] w-fit absolute top-[16px] left-[16px] text-[#0f172a] bg-[linear-gradient(135deg,#22d3ee,color-mix(in_srgb,#22d3ee_80%,#6366f1))]">Keynote</div>
                            <div className="flex gap-[8px] absolute bottom-[16px] right-[16px] opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                                <a href="" className="w-[36px] h-[36px] rounded-[50%] flex justify-center items-center bg-[#0f172a] text-white hover:bg-[#22d3ee] hover:text-[#0f172a] transition duration-300 transform hover:translate-y-[-4px]"><FaXTwitter className="" /></a>
                                <a href="" className="w-[36px] h-[36px] rounded-[50%] flex justify-center items-center bg-[#0f172a] text-white hover:bg-[#22d3ee] hover:text-[#0f172a] duration-300 transform hover:translate-y-[-4px]"><FaLinkedin className="" /></a>

                            </div>
                        </div>

                        <div className="p-[24px] text-white flex flex-col">
                            <h4 className="text-[20px] font-[700] mb-[8px] ">Alexandra Mitchell</h4>
                            <span className="text-[14px] font-[600] text-[#22d3ee] mb-[8px]">VP of Product Strategy</span>
                            <span className="text-[13px] mb-[16px] text-gray-400">CloudScale Technologies</span>
                            <div className="flex items-start gap-[10px] bg-[#20364b] p-[14px_16px] rounded-[10px] mb-[16px]">
                                <PiBroadcastFill className="text-[#22d3ee] mt-[2px] font-[16px] mt-[2px]" />
                                <span className="text-[14px] font-[500] text-white leading-[1.4]">Building Scalable SaaS Architectures</span>
                            </div>
                            <p className="text-[14px] leading-[1.6] text-gray-400 mb-[16px] grow">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                            <div className="flex flex-cols items-center gap-[6px] transition duration-300 text-gray-400 group-hover:text-[#22d3ee]">
                                <a href="#" className="">View Full Profile </a>
                                <FaArrowRightLong className="transition duration-300 transform group-hover:translate-x-[4px]" />
                            </div>
                        </div>
                    </div>


                     <div className="group rounded-[16px] text-white bg-[#1f283d] shadow-[0_4px_12px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.04)]">
                        <div className="relative rounded-t-[16px] overflow-hidden">
                            <img src={Speaker_3} className="transition duration-300 transform group-hover:scale-[1.05] w-full h-[240px] rounded-t-[16px] object-cover"></img>
                            <div className="p-[6px_14px] rounded-[20px] tracking-[0.5px] uppercase font-[600] text-[12px] w-fit absolute top-[16px] left-[16px] text-[#0f172a] bg-[linear-gradient(135deg,#22d3ee,color-mix(in_srgb,#22d3ee_80%,#6366f1))]">Keynote</div>
                            <div className="flex gap-[8px] absolute bottom-[16px] right-[16px] opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                                <a href="" className="w-[36px] h-[36px] rounded-[50%] flex justify-center items-center bg-[#0f172a] text-white hover:bg-[#22d3ee] hover:text-[#0f172a] transition duration-300 transform hover:translate-y-[-4px]"><FaXTwitter className="" /></a>
                                <a href="" className="w-[36px] h-[36px] rounded-[50%] flex justify-center items-center bg-[#0f172a] text-white hover:bg-[#22d3ee] hover:text-[#0f172a] duration-300 transform hover:translate-y-[-4px]"><FaLinkedin className="" /></a>

                            </div>
                        </div>

                        <div className="p-[24px] text-white flex flex-col">
                            <h4 className="text-[20px] font-[700] mb-[8px] ">Alexandra Mitchell</h4>
                            <span className="text-[14px] font-[600] text-[#22d3ee] mb-[8px]">VP of Product Strategy</span>
                            <span className="text-[13px] mb-[16px] text-gray-400">CloudScale Technologies</span>
                            <div className="flex items-start gap-[10px] bg-[#20364b] p-[14px_16px] rounded-[10px] mb-[16px]">
                                <PiBroadcastFill className="text-[#22d3ee] mt-[2px] font-[16px] mt-[2px]" />
                                <span className="text-[14px] font-[500] text-white leading-[1.4]">Building Scalable SaaS Architectures</span>
                            </div>
                            <p className="text-[14px] leading-[1.6] text-gray-400 mb-[16px] grow">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                            <div className="flex flex-cols items-center gap-[6px] transition duration-300 text-gray-400 group-hover:text-[#22d3ee]">
                                <a href="#" className="">View Full Profile </a>
                                <FaArrowRightLong className="transition duration-300 transform group-hover:translate-x-[4px]" />
                            </div>
                        </div>
                    </div>


                     <div className="group rounded-[16px] text-white bg-[#1f283d] shadow-[0_4px_12px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.04)]">
                        <div className="relative rounded-t-[16px] overflow-hidden">
                            <img src={Speaker_3} className="transition duration-300 transform group-hover:scale-[1.05] w-full h-[240px] rounded-t-[16px] object-cover"></img>
                            <div className="p-[6px_14px] rounded-[20px] tracking-[0.5px] uppercase font-[600] text-[12px] w-fit absolute top-[16px] left-[16px] text-[#0f172a] bg-[linear-gradient(135deg,#22d3ee,color-mix(in_srgb,#22d3ee_80%,#6366f1))]">Keynote</div>
                            <div className="flex gap-[8px] absolute bottom-[16px] right-[16px] opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                                <a href="" className="w-[36px] h-[36px] rounded-[50%] flex justify-center items-center bg-[#0f172a] text-white hover:bg-[#22d3ee] hover:text-[#0f172a] transition duration-300 transform hover:translate-y-[-4px]"><FaXTwitter className="" /></a>
                                <a href="" className="w-[36px] h-[36px] rounded-[50%] flex justify-center items-center bg-[#0f172a] text-white hover:bg-[#22d3ee] hover:text-[#0f172a] duration-300 transform hover:translate-y-[-4px]"><FaLinkedin className="" /></a>

                            </div>
                        </div>

                        <div className="p-[24px] text-white flex flex-col">
                            <h4 className="text-[20px] font-[700] mb-[8px] ">Alexandra Mitchell</h4>
                            <span className="text-[14px] font-[600] text-[#22d3ee] mb-[8px]">VP of Product Strategy</span>
                            <span className="text-[13px] mb-[16px] text-gray-400">CloudScale Technologies</span>
                            <div className="flex items-start gap-[10px] bg-[#20364b] p-[14px_16px] rounded-[10px] mb-[16px]">
                                <PiBroadcastFill className="text-[#22d3ee] mt-[2px] font-[16px] mt-[2px]" />
                                <span className="text-[14px] font-[500] text-white leading-[1.4]">Building Scalable SaaS Architectures</span>
                            </div>
                            <p className="text-[14px] leading-[1.6] text-gray-400 mb-[16px] grow">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                            <div className="flex flex-cols items-center gap-[6px] transition duration-300 text-gray-400 group-hover:text-[#22d3ee]">
                                <a href="#" className="">View Full Profile </a>
                                <FaArrowRightLong className="transition duration-300 transform group-hover:translate-x-[4px]" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}


export default Speakers;