import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiAnchor, GiBurningForest } from "react-icons/gi";
import { IoMdBoat } from "react-icons/io";
import boat from '../../../assets/pngtree-fishing-boat-illustration-in-doodle-style-png-image_10117731.png'

const AdviceSection = () => {
    return (
        <div className="py-10 p-3 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full z-0 hidden md:block">
                <div className="absolute top-0 left-20 bg-[#FF7300] h-[1000%] w-[100%] translate-x-1/2 -translate-y-1/2 rotate-12">

                </div>
            </div>
            <div className="relative z-10 container mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <div className="w-full md:w-1/2">
                        <p className="text-xl text-[#FF7300] font-semibold">Advice and guidance</p>
                        <p className="text-2xl md:text-4xl font-bold">Expert Insights for a Safer, <br /> Smoother Journey</p>
                        <div className="mt-5 p-2 flex justify-center gap-4 flex-wrap md:justify-start">
                            <div className="p-4 w-full max-w-[300px] shadow-xl rounded-lg">
                                <div>
                                    <GiAnchor className="text-5xl text-[#ff7300]" />
                                </div>
                                <div className="mt-3">
                                    <p className="font-bold text-2xl text-[#ff7300]">Boat Maintenance</p>
                                </div>
                                <p>
                                    Learn essential maintenance tips to keep your boat in top condition.
                                </p>
                            </div>
                            <div className="p-4 w-full max-w-[300px] shadow-xl rounded-lg">
                                <div>
                                    <GiBurningForest className="text-5xl text-[#ff7300]" />
                                </div>
                                <div className="mt-3">
                                    <p className="font-bold text-2xl text-[#ff7300]">Sundarbans Explore</p>
                                </div>
                                <p>
                                    Our insider tips and advice help you make the most of your expedition
                                </p>
                            </div>
                            <div className="p-4 w-full max-w-[300px] shadow-xl rounded-lg">
                                <div>
                                    <AiFillSafetyCertificate className="text-5xl text-[#ff7300]" />
                                </div>
                                <div className="mt-3">
                                    <p className="font-bold text-2xl text-[#ff7300]">Traveler Safety</p>
                                </div>
                                <p>
                                    Your safety is our priority. Explore our expert tips on river safety
                                </p>
                            </div>
                            <div className="p-4 w-full max-w-[300px] shadow-xl rounded-lg">
                                <div>
                                    <IoMdBoat className="text-5xl text-[#ff7300]" />
                                </div>
                                <div className="mt-3">
                                    <p className="font-bold text-2xl text-[#ff7300]">Navigate River Travel</p>
                                </div>
                                <p>
                                From choosing the right boat to understanding river safety guidelines
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img className="w-full md:w-2/3 mx-auto" src={boat} alt="boat photo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdviceSection;