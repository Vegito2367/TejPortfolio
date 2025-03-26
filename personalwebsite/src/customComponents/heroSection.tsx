import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.7,
                ease: "easeInOut"
            }}
            className="flex flex-col md:flex-row justify-center items-center 
        min-h-screen bg-gradient-to-br from-gray-900 to-black 
        px-6 md:px-12 lg:px-24 py-12"
        >
            <div className="container mx-auto flex flex-col md:flex-row 
        items-center justify-between space-y-8 md:space-y-0 
        md:space-x-12 lg:space-x-16">

                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.3,
                        ease: "easeOut"
                    }}
                    className="w-full md:w-3/5 text-center
            flex flex-col justify-center items-center space-y-4"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl 
            font-bold text-white leading-tight">
                        Hello Everyone!
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed">
                        I am <span className="text-orange-400 font-semibold">Tej Gumaste</span>,
                        a junior studying computer science, passionate about writing
                        impactful code.
                    </p>

                    <div className="flex justify-center md:justify-start space-x-4 mt-6">
                        <a
                            href="https://github.com/Vegito2367"
                            target="_blank"
                            className="hover:scale-110 transition-all duration-300"
                        >
                            <img src="/github.svg" alt="LinkedIn" width="48" height="48" />
                        </a>
                        <a
                            href="https://linkedin.com/in/tej-gumaste/"
                            target="_blank"
                            className="hover:scale-110 transition-all duration-300"
                        >
                            <img src="/linkedin.svg" alt="LinkedIn" width="48" height="48" />
                        </a>
                    </div>
                    <div className='w-3/5 text-2xl font-mono bg-orange-500 rounded-lg mt-4 p-2 text-center text-white fond-bold hover:bg-orange-400 transition-all duration-300 hover:scale-105'>
                        <a target='_blank' href='https://drive.google.com/file/d/1Feayugu4WImvMF37ydyzgUN5sTIExFnQ/view?usp=sharing'>
                            Resume
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: "easeOut"
                    }}
                    className="w-full md:w-2/5 flex justify-center items-center"
                >
                    <img
                        src="ProfilePic.jpeg"
                        alt="Profile Picture"
                        className="w-full max-w-xs md:max-w-md 
              rounded-3xl shadow-2xl border-4 border-gray-700 
              transition-transform duration-300 
              hover:scale-105 hover:rotate-2"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HeroSection;