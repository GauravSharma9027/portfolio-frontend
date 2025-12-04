import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            className='h-screen overflow-auto'
            initial={{ x: "100vw", opacity: 0 }}   // शुरू में right से बाहर
            animate={{ x: 0, opacity: 1 }}        // animate होकर correct position पर आए
            exit={{ x: "-100vw", opacity: 0 }}    // exit करते समय left में slide हो
            transition={{ type: "spring", stiffness: 80, damping: 20 }} // smooth motion
        >
            <section className="h-full relative bg-gray-50 py-16 px-6 sm:px-12 lg:px-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between">

                {/* Left Text Content */}
                <div className="mt-4 lg:mt-0 lg:w-1/2 space-y-4">
                    <h1 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Hello, my name is <br /><span className="text-red-500 font-script text-2xl sm:text-3xl ">Alimi Mousaad</span>
                    </h1>
                    <h2 className="text-3xl md:text-2xl font-bold text-gray-900">
                        I'm a <span className="text-red-500">Graphic Designer</span>
                    </h2>
                    <p className="text-gray-600 text-base sm:text-xl md:text-[16px]">
                        I'm a web Designer with extensive experience for over 10 years.
                        My expertise is to create and website design, graphic design, and many more...
                    </p>
                    <button className="mt-4 bg-red-500 text-white py-2 px-6 rounded-[50rem] hover:bg-red-600 transition">
                        More About Me
                    </button>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 mt-8 lg:mt-0 relative flex justify-center ">
                    <img
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=80"
                        alt="Profile"
                        className="w-64 sm:w-[26rem] md:w-96 lg:w-70 max-h-70 sm:max-h-[28rem]  md:max-h-[30rem] lg:max-h-[24rem] rounded-sm object-cover mx-8 my-10"
                    />
                    {/* Corner Decorations */}
                    <div className="absolute top-0 left-0 lg:left-8 w-8 sm:w-12 h-8 sm:h-12 lg:w-16 lg:h-16 border-t-8 border-l-8 border-red-500"></div>
                    <div className="absolute bottom-0 right-0 lg:right-8 w-8 sm:w-12 h-8 sm:h-12 lg:w-16 lg:h-16 border-b-8 border-r-8 border-red-500"></div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
