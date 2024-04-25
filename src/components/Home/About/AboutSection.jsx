import photo1 from '../../../assets/g-1.png'
import photo2 from '../../../assets/g-4.png'
const AboutSection = () => {
    return (
        <div className="p-3 py-10">
            <div className="container mx-auto flex flex-col md:flex-row gap-5 items-center md:pb-5">
                <div className="w-full md:w-1/2">
                    <p className="text-xl text-[#FF7300] font-semibold">About</p>
                    <p className="text-2xl md:text-4xl font-bold">Discover Our Story and Mission</p>
                    <hr className="my-4" />
                    <div className="mt-14">
                        <p className="text-2xl md:text-3xl w-full max-w-sm">
                            Welcome to Padma-Boti, <br /> where river adventures come to life.
                        </p>
                        <p className="w-full max-w-2xl text-gray-400 py-4">
                            Learn about our journey and our commitment to simplifying boat management and enhancing river travel experiences.
                            <br />
                            Founded in 2002, Padma-Boti was born out of a passion for rivers and a desire to make boat management effortless. Since our inception, we've been dedicated to providing seamless solutions for travelers and boat operators alike.
                        </p>
                        <div className="mt-5">
                            <button className="button-55">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className=" w-full md:w-1/2 md:py-10">
                    <div className='flex flex-col md:flex-row justify-center items-center h-full gap-4'>
                        <img className='md:w-[340px] w-full md:translate-x-9 md:border-4 md:border-black/50 rounded-md  md:-translate-y-7 md:shadow-lg md:shadow-black md:-rotate-12' src={photo1 } alt="" />
                        <img className='md:w-[340px] w-full md:translate-y-12 md:border-4 md:border-black/50 rounded-md md:-translate-x-8 md:shadow-lg md:shadow-black md:rotate-12' src={photo2 } alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;