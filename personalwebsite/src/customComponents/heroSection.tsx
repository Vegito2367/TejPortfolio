import React, { useState } from 'react';
import { motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion';

const tabs = [
    { key: 'work', label: "Working On" },
    { key: 'learn', label: "Learning" },
    { key: 'ask', label: "Ask Me About" },
] as const;
type TabKey = typeof tabs[number]['key'];

// Define animation variants for the "Ask Me About" list
const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Stagger the animation of children by 0.15s
        },
    },
};

const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};


// Assuming you have a state for the active tab like this:
// 

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['key']>('work');
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <motion.section
            style={{ y }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-black px-6 md:px-12 lg:px-24 py-24 cursor-none animated-gradient"
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-16">

                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-3/5 text-center md:text-left flex flex-col justify-center items-center md:items-start space-y-6"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Hey there, I&apos;m <span className="text-orange-400">Tej Gumaste</span>!
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-prose">
                        A <strong>curious builder</strong> &amp; <strong>data-driven researcher</strong> pursuing my B.S. in Computer Science with a Mathematics minor at the University of Kansas. I solve problems at the intersection of software engineering, AI, and scientific discovery.
                    </p>
                    <p>I just set up my own CI/CD!!!!!</p>


                    

<div className="mt-16 w-full max-w-4xl bg-gradient-to-br from-gray-900 to-black p-6 md:p-8 rounded-2xl shadow-lg border border-gray-800">
    {/* Tab Buttons Container */}
    <div className="flex justify-center md:justify-start border-b border-gray-700">
        {tabs.map(({ key, label }) => (
            <button
                key={key}
                onClick={() => setActiveTab(key)}
                className="relative px-5 py-3 text-lg md:text-xl font-semibold text-gray-300 transition-colors duration-300 hover:text-orange-400 focus:outline-none"
            >
                {/* The sliding "magic ink" background */}
                {activeTab === key && (
                    <motion.div
                        layoutId="active-tab-indicator"
                        className="absolute inset-0 bg-orange-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                )}
                <span className="relative z-10">{label}</span>
            </button>
        ))}
    </div>

    {/* Tab Content */}
    <div className="mt-8 relative min-h-[220px]">
        <AnimatePresence mode="wait">
            {activeTab === 'work' && (
                <motion.div
                    key="work"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 text-xl leading-relaxed"
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
                    , a decentralized AI marketplace where you own your innovation. It's an exciting venture into the world of Web3 and AI integration.
                </motion.div>
            )}

            {activeTab === 'learn' && (
                <motion.div
                    key="learn"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 text-xl leading-relaxed"
                >
                    Diving deep into the mathematics of transformers and attention mechanisms. I'm also exploring reinforcement learning from human feedback (RLHF) to better understand how modern LLMs are fine-tuned.
                </motion.div>
            )}

            {activeTab === 'ask' && (
                <motion.div
                    key="ask"
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -10 }}
                    variants={listContainerVariants}
                    className="text-gray-300 text-xl leading-relaxed"
                >
                    <motion.ul className="space-y-3">
                        {/* Wrap each list item in motion.li and apply variants */}
                        <motion.li variants={listItemVariants} className='hover:text-orange-400 transition-colors duration-150'>Computer Science (Graph Theory), Applied Mathematics &amp; Differential Equations</motion.li>
                        <motion.li variants={listItemVariants} className='hover:text-orange-400 transition-colors duration-150'>Navigating life as an international student</motion.li>
                        <motion.li variants={listItemVariants} className='hover:text-orange-400 transition-colors duration-150'>International Politics &amp; Model UN</motion.li>
                        <motion.li variants={listItemVariants} className='hover:text-orange-400 transition-colors duration-150'>Anime &amp; shows with ethical dilemmas</motion.li>
                    </motion.ul>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
</div>


                    <div className="flex justify-center md:justify-start space-x-6 mt-10">
                        <a href="https://github.com/Vegito2367" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300">
                            <img src="/github.svg" alt="GitHub" width={56} height={56} />
                        </a>
                        <a href="https://linkedin.com/in/tej-gumaste/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300">
                            <img src="/linkedin.svg" alt="LinkedIn" width={56} height={56} />
                        </a>
                    </div>


                    <div
                        onClick={() => {
                            window.open(
                                'https://drive.google.com/file/d/1zKPaXntkZuRxP6ER7b-cW4L7BmlmGdT7/view?usp=sharing',
                                '_blank'
                            );
                        }}
                        className="w-4/5 text-xl font-mono bg-orange-500 rounded-lg mt-6 p-3 text-center text-white font-bold hover:bg-orange-400 transition-all duration-300 hover:scale-105"
                    >
                            Resume
                    </div>
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
                        className="w-full max-w-sm md:max-w-lg rounded-3xl shadow-2xl border-4 border-gray-700 transition-transform duration-300 hover:scale-105 hover:rotate-2"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
}
