import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioNavButton from './porfolionavigator';

const tabs = [
    { key: 'work', label: "Working On" },
    { key: 'learn', label: "Learning" },
    { key: 'ask', label: "Ask Me About" },
] as const;
type TabKey = typeof tabs[number]['key'];

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState<TabKey>('work');

    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-black px-6 md:px-12 lg:px-24 py-12 cursor-none"
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12 lg:space-x-16">

                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-3/5 text-center md:text-left flex flex-col justify-center items-center md:items-start space-y-4"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Hey there, I&apos;m <span className="text-orange-400">Tej Gumaste</span>!
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-prose">
                        A <strong>curious builder</strong> &amp; <strong>data-driven researcher</strong> pursuing my B.S. in Computer Science with a Mathematics minor at the University of Kansas. I solve problems at the intersection of software engineering, AI, and scientific discovery.
                    </p>


                    <div className="mt-12 w-full max-w-4xl bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 min-h-[200px]">
                        <div className="flex justify-center md:justify-start flex-wrap gap-4">
                            {tabs.map(({ key, label }) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`px-5 py-2 text-lg font-semibold rounded-full transition-all duration-200 
                   ${activeTab === key
                                            ? 'bg-orange-500 text-black shadow-md'
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow'
                                        }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>

                        <div className="mt-6 relative min-h-[150px]">
                            <AnimatePresence mode="wait">
                                {activeTab === 'work' && (
                                    <motion.div
                                        key="work"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4 }}
                                        className="text-gray-300 text-lg leading-relaxed"
                                    >
                                        I'm currently building{' '}
                                        <a
                                            href="https://github.com/Vegito2367/DAIM"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline text-orange-400 hover:text-orange-300 font-medium"
                                        >
                                            DAIM
                                        </a>
                                        , a decentralized AI marketplace where you own your innovation.
                                    </motion.div>
                                )}

                                {activeTab === 'learn' && (
                                    <motion.div
                                        key="learn"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4 }}
                                        className="text-gray-300 text-lg leading-relaxed hover:text-orange-400 transition-colors duration-150"
                                    >
                                        Diving deep into deep learning and the math behind adjacent machine learning models to level up my AI skillset.
                                    </motion.div>
                                )}

                                {activeTab === 'ask' && (
                                    <motion.div
                                        key="ask"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4 }}
                                        className="text-gray-300 text-lg leading-relaxed"
                                    >
                                        <ul className="list-disc list-inside space-y-2">
                                            <li className='hover:text-orange-400 transition-colors duration-150'>Computer Science (Graph Theory), Applied Mathematics &amp; Differential Equations</li>
                                            <li className='hover:text-orange-400 transition-colors duration-150'>Navigating life as an international student</li>
                                            <li className='hover:text-orange-400 transition-colors duration-150'>International Politics &amp; Model UN</li>
                                            <li className='hover:text-orange-400 transition-colors duration-150'>Anime &amp; shows with ethical dilemmas</li>
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>


                    <div className="flex justify-center md:justify-start space-x-4 mt-8">
                        <a href="https://github.com/Vegito2367" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300">
                            <img src="/github.svg" alt="GitHub" width={48} height={48} />
                        </a>
                        <a href="https://linkedin.com/in/tej-gumaste/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300">
                            <img src="/linkedin.svg" alt="LinkedIn" width={48} height={48} />
                        </a>
                    </div>


                    <div
                        onClick={() => {
                            window.open(
                                'https://drive.google.com/file/d/1EWv_GDq6dGQP5O2kkcMJ44rhGb2B34YS/view?usp=sharing',
                                '_blank'
                            );
                        }}
                        className="w-3/5 text-lg font-mono bg-orange-500 rounded-lg mt-4 p-2 text-center text-white font-bold hover:bg-orange-400 transition-all duration-300 hover:scale-105"
                    >
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/1EWv_GDq6dGQP5O2kkcMJ44rhGb2B34YS/view?usp=sharing"
                        >
                            Resume
                        </a>
                    </div>
                    <PortfolioNavButton/>
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-2/5 flex justify-center items-center"
                >
                    <img
                        src="ProfilePic.jpeg"
                        alt="Profile Picture"
                        className="w-full max-w-xs md:max-w-md rounded-3xl shadow-2xl border-4 border-gray-700 transition-transform duration-300 hover:scale-105 hover:rotate-2"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};
