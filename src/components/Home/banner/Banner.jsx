import wavy from '../../../assets/wavy.png'
import boat from '../../../assets/boat-in-cartoon-style-boat-sticker-generative-ai-png.png'
const Banner = () => {
    return (
        <div className="h-screen w-full relative">
            <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
                <div className="absolute top-0 left-0 h-[50%] w-full bg-[#FF7300]">

                </div>
                <div className="absolute top-[50%] left-0 h-[50%] w-full">
                    <img src={wavy} className='w-full' alt="wavy" />
                </div>

            </div>
            <div className="container relative mx-auto overflow-hidden z-10 flex flex-col items-center md:flex-row-reverse gap-5 h-full p-3 md:pt-5 pt-14">
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <p className='text-white font-bold md:text-6xl text-3xl w-full max-w-2xl'>Discover Padma-Boti,<br /> Your River Journey Starts Here</p>
                    <p className='text-black md:text-2xl text-xl font-semibold pt-2'>Effortless Boat Booking & <br /> Serial Management for Sundarbans Adventures</p>
                    <p className='py-3 text-gray-100 text-lg'>
                        Padma-Boti simplifies boat booking for travelers and serial management for boat owners, ensuring smooth river crossings and unforgettable Sundarbans experiences.
                    </p>
                    <div>
                        <button className='button-55'>Book Now</button>
                        
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img className='w-full' src={boat} alt="boat img" />
                </div>
            </div>
        </div>
    );
};

export default Banner;