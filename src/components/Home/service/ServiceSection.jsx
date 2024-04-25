import { FaStepForward } from "react-icons/fa";
import { MdBookmarks, MdDirectionsBoatFilled } from "react-icons/md";

const ServiceSection = () => {
    return (
        <div className="py-10 md:mt-5 p-3">
            <div className="container mx-auto">
                <div className="w-full max-w-3xl mx-auto text-center">
                    <p className="text-xl text-[#FF7300] font-semibold">Our Service</p>
                    <p className="text-2xl md:text-4xl font-bold">Unlock Your River Experience</p>
                    <p className="text-lg pt-2">Explore our easy-to-use platform for booking boats, Simplify Your Boat Operations and Discover the Wonders of the Sundarbans</p>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-6 mt-8">
                    <div className="w-full max-w-sm p-4 py-7 shadow-xl service-card">
                        <div className="h-14 w-14 service-icon rounded-full flex justify-center items-center border mx-auto">
                            <MdBookmarks className="text-2xl" />
                        </div>
                        <div className=" h-[65px] mt-2 flex items-center justify-center">
                            <p className="service-title font-bold text-2xl text-center">Effortless Boat Booking</p>

                        </div>
                        <div>
                            <p className="text-center">
                                Explore our easy-to-use platform for booking boats for your river expeditions. Whether you're planning a leisurely cruise or an adventurous
                            </p>
                        </div>
                    </div>
                    <div className="w-full max-w-sm p-4 py-7 shadow-xl service-card">
                        <div className="h-14 w-14 service-icon rounded-full flex justify-center items-center border mx-auto">
                            <FaStepForward className="text-2xl" />
                        </div>
                        <div className=" h-[65px] mt-2 flex items-center justify-center">
                            <p className="service-title font-bold text-2xl text-center">Streamlined Serial Management</p>

                        </div>
                        <div>
                            <p className="text-center">
                                For boat operators, managing serials is a breeze with Padma-Boti. Our intuitive platform allows you to track and manage boat serials efficiently
                            </p>
                        </div>
                    </div>
                    <div className="w-full max-w-sm p-4 py-7 shadow-xl service-card">
                        <div className="h-14 w-14 rounded-full flex justify-center service-icon items-center mx-auto">
                            <MdDirectionsBoatFilled className="text-2xl" />
                        </div>
                        <div className="h-[65px] mt-2 flex items-center justify-center">
                            <p className="service-title font-bold text-2xl text-center">Sundarbans Tours and Expeditions</p>

                        </div>
                        <div>
                            <p className="text-center">
                                Embark on an unforgettable journey through the Sundarbans, one of the world's largest mangrove forests and a UNESCO World Heritage Site.
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ServiceSection;