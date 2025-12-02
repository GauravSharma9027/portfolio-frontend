import React from 'react'
import { motion } from 'framer-motion';
const Services = () => {
    return (
        <div>
            {/* Services Section */}
            <motion.div
                className="h-screen overflow-auto bg-white text-gray-900 py-16 px-6 sm:px-12 md:px-16 lg:px-10"
                initial={{ x: "100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100vw", opacity: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl font-bold mb-2">Services</h1>
                    <div className="w-16 h-1 bg-orange-500 rounded"></div>
                    <div className="w-10 h-1 bg-orange-500 rounded mt-1"></div>
                    <div className="w-4 h-1 bg-orange-500 rounded mt-1"></div>
                </motion.div>

                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 space-y-4"
                >
                    <p className="text-lg md:text-xl font-extrabold">
                        I'm Sajid Ali and <span className="text-orange-500">Web Developer</span>
                    </p>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aspernatur mollitia officia rem doloremque! Esse veniam vel repellat ipsa molestiae consequatur vitae!
                    </p>
                </motion.div>


    
            </motion.div>

        </div>
    )
}

export default Services
