import React from 'react';
import { motion } from 'framer-motion';

 const About = () => {
    const skills = [
        { name: "HTML", img: "/icons/html.png", level: 95 },
        { name: "CSS", img: "/icons/css.png", level: 90 },
        { name: "JavaScript", img: "/icons/js.png", level: 85 },
        { name: "React", img: "/icons/react.png", level: 88 },
        { name: "Node.js", img: "/icons/node.png", level: 80 },
        { name: "MongoDB", img: "/icons/mongo.png", level: 75 },
        { name: "Tailwind CSS", img: "/icons/tailwind.png", level: 92 },
        { name: "Framer Motion", img: "/icons/framer.png", level: 70 },
    ];

    const education = [
        {
            degree: "B.Tech in Computer Science",
            institution: "Jamia Millia Islamia, Delhi",
            year: "2019 - 2023"
        },
        {
            degree: "Higher Secondary (PCM)",
            institution: "Delhi Public School",
            year: "2017 - 2019"
        }
    ];

    const experiences = [
        {
            role: "Frontend Developer",
            company: "TechNova Solutions",
            year: "2023 - Present",
            description: "Building scalable React.js applications with TailwindCSS and integrating APIs for enterprise clients."
        },
        {
            role: "Intern - MERN Stack",
            company: "CodeCraft Labs",
            year: "Jan 2023 - Jun 2023",
            description: "Worked on full-stack projects using MongoDB, Express, React, and Node.js with focus on UI/UX."
        }
    ];

    return (
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
                className="mb-10"
            >
                <h1 className="text-4xl font-bold mb-2">About Me</h1>
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

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center mb-12 gap-6"
            >
                <button className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition">
                    Download CV
                </button>
                <button className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition">
                    Hire Me
                </button>
            </motion.div>

            {/* Education & Experience Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold text-orange-500 mb-4">🎓 Education</h2>
                    <div className="space-y-4">
                        {education.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="border-l-4 border-orange-500 pl-4"
                            >
                                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                                <p className="text-sm text-gray-600">{edu.institution}</p>
                                <p className="text-xs text-gray-500">{edu.year}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold text-orange-500 mb-4">💼 Experience</h2>
                    <div className="space-y-4">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="border-l-4 border-orange-500 pl-4"
                            >
                                <h3 className="text-lg font-semibold">{exp.role}</h3>
                                <p className="text-sm text-gray-600">{exp.company}</p>
                                <p className="text-xs text-gray-500">{exp.year}</p>
                                <p className="text-sm text-gray-700 mt-1">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <h2 className="text-2xl font-bold text-orange-500 mb-8">🛠 Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="relative bg-white/30 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform"
                        >
                            {/* Skill Icon */}
                            <img
                                src={skill.img}
                                alt={skill.name}
                                className="h-16 w-16 object-contain mb-4"
                            />

                            {/* Skill Name */}
                            <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>

                            {/* Progress Bar */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1 }}
                                className="w-full bg-gray-200 rounded-full h-2 mt-4"
                            >
                                <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                            </motion.div>
                            <p className="text-sm text-gray-600 mt-2">{skill.level}% proficiency</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default About;