
import { FaSunPlantWilt } from 'react-icons/fa6';
import { SlLocationPin } from "react-icons/sl";
import AboutBackgroundImage from '../../assets/showcase-5.webp';
import Speaker_1 from '../../assets/speaker-1.webp';

const Schedule = () => {

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
                    <h1 className="text-[42px] font-[700] mb-[10px] text-white">Schedule</h1>
                    <p className="mb-[16px] text-[16px] text-white text-center">Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
                    <div className="">
                        <a href="" className="text-[#22d3ee] text-[16px]">Home </a>
                        <span className="text-white text-[16px]"> / Schedule</span>
                    </div>
                </div>
            </section>



            <section className="p-[60px_0px] bg-[#0f172a]">
                <div className="max-w-[1320px] mx-auto p-[0px_12px_60px] m-[0px_100.4px] ">
                    <div className="text-center">
                        <span className="mb-[24px]  relative inline-block  text-[14px] font-[400] uppercase tracking-[2px] text-[#22d3ee] after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:translate-x-1/2 after:w-[40px] after:bg-[#22d3ee]">Schedule</span>
                        <h2 className=" mb-[24px] md:text-[56px] text-[40px] font-[300] leading-[1.2] tracking-[-1px] text-white">Schedule</h2>
                        <p className="max-w-[850px] m-[0_auto] text-wrap text-[18px] leading-[1.8] text-wrap text-gray-400">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
                    </div>
                </div>





                <div className="flex flex-wrap gap-[16px] items-center justify-center mb-[48px]">

                    <div className="bg-[#22d3ee] flex flex-col md:p-[16px_32px] p-[12px_20px] rounded-[8px] text-center">
                        <span className="text-[12px] mb-[4px] uppercase tracking-[1px]">Day 01</span>
                        <span className="text-[16px] font-[500]">Sunday</span>
                        <span className="text-[14px] font-[400] mt-[4px] uppercase tracking-[1p] text-gray-600">March 15, 2026</span>
                    </div>

                    <div className="bg-[#1f283d] flex flex-col md:p-[16px_32px] p-[12px_20px] p-[12px_20px] rounded-[8px] text-center transition duration-300 border border-gray-600 hover:border-[#22d3ee]">
                        <span className="text-[12px] text-[#22d3ee] font-[600] mb-[4px] uppercase tracking-[1px]">Day 01</span>
                        <span className="text-[16px] text-white font-[500]">Monday</span>
                        <span className="text-[14px] font-[400] mt-[4px] uppercase tracking-[1p] text-gray-300">March 15, 2026</span>
                    </div>

                    <div className="bg-[#1f283d] flex flex-col md:p-[16px_32px]  p-[12px_20px] rounded-[8px] text-center transition duration-300 border border-gray-600 transition duration-300 hover:border-[#22d3ee]">
                        <span className="text-[12px] text-[#22d3ee] font-[600] mb-[4px] uppercase tracking-[1px]">Day 01</span>
                        <span className="text-[16px] text-white font-[500]">Tuesday</span>
                        <span className="text-[14px] font-[400] mt-[4px] uppercase tracking-[1p] text-gray-300">March 15, 2026</span>
                    </div>


                </div>






                <div className="max-w-[1320px] mx-auto text-white px-[12px] flex flex-col gap-[24px]">


                    <div className="p-[32px] border border-[1px] border-gray-600 flex flex-col md:flex-row gap-[24px] rounded-[8px] transition duration-300 hover:border-cyan-400/50 hover:shadow-[0_8px_24px_#f5f5f5]/8">
                        <div className="pr-[24px] flex md:flex-col flex-row gap-[16px] md:gap-[0px] pb-[16px] md:pb-[0px] items-center border-b-[2px]  border-b-[color-mix(in_srgb,#22d3ee,transparent_70%)]  md:border-b-0 md:border-r-[2px]  md:border-r-[color-mix(in_srgb,#22d3ee,transparent_70%)]">
                            <span className="mb-[4px] text-[18px] font-[500] text-[#22d3ee]">09:00 AM</span>
                            <span className="text-[13px] font-[500] text-gray-400 ">45 min</span>
                        </div>
                        <div className="grow">
                            <h4 className="mb-[8px] text-[20px] font-[600] text-white "><a href="schedule-details.html">Opening Keynote: Future of Innovation</a></h4>
                            <div className="mb-[12px] flex gap-[6px] items-center"><SlLocationPin className="text-[#22d3ee]"/><span className="text-gray-400 text-[14px]">Main Hall A</span></div>
                            <p className="text-gray-400 leading-[1.6]">Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                        </div>
                        <div className="flex items-center gap-[12px] flex-row">
                            <img src={Speaker_1} className="w-[56px] h-[56px] rounded-[50px]"/>
                                <div className="flex flex-col">
                                    <span className="text-[15px] font-[600] text-[#fafafa]">Marcus Reynolds</span>
                                    <span className="text-[13px] text-gray-400">CEO, TechVision</span>
                                </div>
                        </div>
                    </div>

                    <div className="p-[32px] border border-[1px] border-gray-600 flex flex-col md:flex-row gap-[24px] rounded-[8px] transition duration-300 hover:border-cyan-400/50 hover:shadow-[0_8px_24px_#f5f5f5]/8">
                        <div className="pr-[24px] flex md:flex-col flex-row gap-[16px] md:gap-[0px] pb-[16px] md:pb-[0px] items-center border-b-[2px]  border-b-[color-mix(in_srgb,#22d3ee,transparent_70%)]  md:border-b-0 md:border-r-[2px]  md:border-r-[color-mix(in_srgb,#22d3ee,transparent_70%)]">
                            <span className="mb-[4px] text-[18px] font-[500] text-[#22d3ee]">09:00 AM</span>
                            <span className="text-[13px] font-[500] text-gray-400 ">45 min</span>
                        </div>
                        <div className="grow">
                            <h4 className="mb-[8px] text-[20px] font-[600] text-white "><a href="schedule-details.html">Opening Keynote: Future of Innovation</a></h4>
                            <div className="mb-[12px] flex gap-[6px] items-center"><SlLocationPin className="text-[#22d3ee]"/><span className="text-gray-400 text-[14px]">Main Hall A</span></div>
                            <p className="text-gray-400 leading-[1.6]">Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                        </div>
                        <div className="flex items-center gap-[12px] flex-row">
                            <img src={Speaker_1} className="w-[56px] h-[56px] rounded-[50px]"/>
                                <div className="flex flex-col">
                                    <span className="text-[15px] font-[600] text-[#fafafa]">Marcus Reynolds</span>
                                    <span className="text-[13px] text-gray-400">CEO, TechVision</span>
                                </div>
                        </div>
                    </div>


                    <div className="p-[32px] border border-[1px] border-gray-600 flex flex-col md:flex-row gap-[24px] rounded-[8px] transition duration-300 hover:border-cyan-400/50 hover:shadow-[0_8px_24px_#f5f5f5]/8">
                        <div className="pr-[24px] flex md:flex-col flex-row gap-[16px] md:gap-[0px] pb-[16px] md:pb-[0px] items-center border-b-[2px]  border-b-[color-mix(in_srgb,#22d3ee,transparent_70%)]  md:border-b-0 md:border-r-[2px]  md:border-r-[color-mix(in_srgb,#22d3ee,transparent_70%)]">
                            <span className="mb-[4px] text-[18px] font-[500] text-[#22d3ee]">09:00 AM</span>
                            <span className="text-[13px] font-[500] text-gray-400 ">45 min</span>
                        </div>
                        <div className="grow">
                            <h4 className="mb-[8px] text-[20px] font-[600] text-white "><a href="schedule-details.html">Opening Keynote: Future of Innovation</a></h4>
                            <div className="mb-[12px] flex gap-[6px] items-center"><SlLocationPin className="text-[#22d3ee]"/><span className="text-gray-400 text-[14px]">Main Hall A</span></div>
                            <p className="text-gray-400 leading-[1.6]">Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                        </div>
                        <div className="flex items-center gap-[12px] flex-row">
                            <img src={Speaker_1} className="w-[56px] h-[56px] rounded-[50px]"/>
                                <div className="flex flex-col">
                                    <span className="text-[15px] font-[600] text-[#fafafa]">Marcus Reynolds</span>
                                    <span className="text-[13px] text-gray-400">CEO, TechVision</span>
                                </div>
                        </div>
                    </div>


                </div>



            </section>



        </>
    )
}


export default Schedule;