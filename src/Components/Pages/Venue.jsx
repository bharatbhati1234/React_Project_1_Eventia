
import AboutBackgroundImage from '../../assets/showcase-5.webp';
import { BsPinMapFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsCompassFill } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";




import Venue_3_Image from "../../assets/venue-3.webp";

const Venue = () => {


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
                    <h1 className="text-[42px] font-[700] mb-[10px] text-white">Venue</h1>
                    <p className="mb-[16px] text-[16px] text-white text-center">Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
                    <div className="">
                        <a href="" className="text-[#22d3ee] text-[16px]">Home </a>
                        <span className="text-white text-[16px]"> / Venue</span>
                    </div>
                </div>
            </section>


            <section className="p-[60px_0px] bg-[#0f172a]">
                <div className="max-w-[1320px] mx-auto">
                    <div className="flex flex-col items-center mb-[48px]">
                        <div className="w-[64px] h-[64px] m-[0_auto_24px] bg-gradient-to-br from-[#22d3ee] to-[#1aa6b8] flex items-center justify-center rounded-[50px]">
                            <BsPinMapFill className="text-[28.8px]" />
                        </div>
                        <h3 className="md:text-[40px] text-[28px] font-[700] mb-[16px] text-white">Skyline Convention Hall</h3>
                        <div className="flex items-center gap-[8px] text-white">
                            <IoLocationSharp className="text-[#22d3ee] text-[24px]" />
                            <span>890 Innovation Drive, Seattle, WA 98101</span>
                        </div>
                    </div>


                    <div className="grid md:grid-cols-[66.66%_auto] grid-cols-1 gap-[24px] px-[12px]">

                        {/* leftside  */}

                        <div className="rounded-[20px] bg-[#1f283d] shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden">
                            <div className="relative">
                                <img src={Venue_3_Image} alt="Convention Hall" className="md:w-full w-[100%] md:h-[400px] h-[100%] object-cover transform transition duration-300 hover:scale-[1.05]" />
                                <div className="p-[16px_24px] rounded-[20px] text-center absolute bottom-[24px] right-[24px] text-white bg-[#0f172a]">
                                    <div className="text-[32px] font-[500] text-[#22d3ee] leading-[1]">3,200</div>
                                    <div className="mt-[4px] text-[13.6px] font-[500] text-white leading-[1]">Maximum Capacity</div>
                                </div>
                            </div>
                            <div className="p-[32px]  text-white ">
                                <p className="text-[16.8px] leading-[1.8]">Nestled in Seattle's vibrant tech district, Skyline Convention Hall represents the pinnacle of modern event spaces. Featuring 65,000 square feet of flexible space across four interconnected pavilions, our venue seamlessly blends cutting-edge technology with architectural excellence to create unforgettable experiences.</p>
                            </div>
                        </div>


                        {/* right side  */}



                        <div className="p-[32px] rounded-[20px] flex flex-col justify-between text-white bg-[#1f283d]">
                            <div>
                            <h5 className="text-[22.4px] mb-[24px] font-[600] text-white">Venue Amenities</h5>
                            <ul className="mb-[32px]">
                                <li className="flex gap-[12px] mb-[16px] items-start">
                                    <IoIosCheckmarkCircle className="text-[#22d3ee] text-[20px] mt-[2px]" />
                                    <span className="text-[15.2px] leading-[1.5] text-[#d3e5ef]">Ultra-Fast Fiber Internet</span>
                                </li>
                                <li className="flex gap-[12px] mb-[16px] items-start">
                                    <IoIosCheckmarkCircle className="text-[#22d3ee] text-[20px] mt-[2px]" />
                                    <span className="text-[15.2px] leading-[1.5] text-[#d3e5ef]">Ultra-Fast Fiber Internet</span>
                                </li>
                                <li className="flex gap-[12px] mb-[16px] items-start">
                                    <IoIosCheckmarkCircle className="text-[#22d3ee] text-[20px] mt-[2px]" />
                                    <span className="text-[15.2px] leading-[1.5] text-[#d3e5ef]">Ultra-Fast Fiber Internet</span>
                                </li>
                                <li className="flex gap-[12px] mb-[16px] items-start">
                                    <IoIosCheckmarkCircle className="text-[#22d3ee] text-[20px] mt-[2px]" />
                                    <span className="text-[15.2px] leading-[1.5] text-[#d3e5ef]">Ultra-Fast Fiber Internet</span>
                                </li>
                                <li className="flex gap-[12px] mb-[16px] items-start">
                                    <IoIosCheckmarkCircle className="text-[#22d3ee] text-[20px] mt-[2px]" />
                                    <span className="text-[15.2px] leading-[1.5] text-[#d3e5ef]">Ultra-Fast Fiber Internet</span>
                                </li>
                                <li className="flex gap-[12px] mb-[16px] items-start">
                                    <IoIosCheckmarkCircle className="text-[#22d3ee] text-[20px] mt-[2px]" />
                                    <span className="text-[15.2px] leading-[1.5] text-[#d3e5ef]">Ultra-Fast Fiber Internet</span>
                                </li>
                            </ul>
                            </div>
                            <div className="flex flex-col align-bottom gap-[12px]">
                                <a href="#" className="p-[12px_20px] rounded-[10px] text-[15.2px] font-[500] text-[#424242] bg-[#22d3ee] hover:bg-[color-mix(in_srgb,#22d3ee,black_15%)] transform transition duration-300 hover:translate-x-[4px] flex justify-center items-center gap-[8px]">
                                    <BsCompassFill />
                                    Directions
                                </a>
                                <a href="#" className="p-[12px_20px] rounded-[10px] text-[15.2px] font-[500] text-[#22d3ee] hover:bg-[color-mix(in_srgb,#22d3ee,transparent_90%)] border border-[#22d3ee] bg-[#1f283d] hover:bg-[color-mix(in_srgb,#22d3ee,black_15%)] transform transition duration-300 hover:translate-x-[4px] flex justify-center items-center gap-[8px]">
                                    <MdOutlineFileDownload />
                                    Floor Plan
                                </a>
                            </div>
                        </div>



                    </div>



                </div>
            </section>
        </>
    )
}


export default Venue;