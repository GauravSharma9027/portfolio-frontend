import React from 'react';
import { motion } from 'framer-motion';
import resume from "../assets/Gaurav Sharma(Official_Resume).pdf"
import react from "../assets/react.svg";
import node from "../assets/node-js.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/javascript.svg";
import tailwind from "../assets/tailwind-css.svg";
// import Express from "../assets/Express-js.png";
import mongodb from "../assets/mongodb.svg";
import { Link } from 'react-router-dom';

const About = () => {
    const skills = [
        { name: "HTML", img: html, level: 95 },
        { name: "CSS", img: css, level: 90 },
        { name: "JavaScript", img: js, level: 85 },
        { name: "React", img: react, level: 88 },
        { name: "Node.js", img: node, level: 80 },
        { name: "MongoDB", img: mongodb, level: 75 },
        { name: "Tailwind CSS", img: tailwind, level: 92 },
        // { name: "Framer Motion", img: "/icons/framer.png", level: 70 },
    ];

    const education = [
        {
            degree: "B.Tech in Computer Science",
            institution: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow, Uttar Pradesh",
            year: "2021 - 2025"
        },
        {
            degree: "Intermediate (12th), PCM",
            institution: "Board of High School and Intermediate Education, Uttar Pradesh",
            year: "2020-2021"
        },
        {
            degree: "High School (10th)",
            institution: "Board of High School and Intermediate Education, Uttar Pradesh",
            year: "2018-2019"
        }

    ];

    const experiences = [
        {
            role: "Full-Stack Developer",
            company: "Self-Employed",
            year: "2025 - Present",
            description:
                "Developing full-stack application-based websites with dynamic frontend, secure backend APIs, dashboards, and MERN Stack solutions for clients."
        },
        {
            role: "Frontend / React JS Developer Intern",
            company: "BMDU Private Limited",
            year: "April 2025 - July 2025",
            description: "Worked as a Frontend Developer intern using React.js, building responsive UIs, integrating APIs, and optimizing components while contributing to real team projects."
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
                    I'm Gaurav Sharma and <span className="text-orange-500">Web Developer</span>
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    I’m a Web Developer and a Professional Freelancer with experience in building
                    many real-world projects for clients. I specialize in creating modern,
                    responsive, and high-performance web applications using the MERN Stack.
                    Over the years, I’ve delivered multiple successful projects including business
                    websites, dashboards, admin panels, e-commerce modules, and custom web solutions.
                    I focus on clean UI/UX, scalable architecture, and smooth user experience to
                    ensure every project adds real value to the client’s business.
                </p>

            </motion.div>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center mb-12 gap-6"
            >
                <a href={resume} download>
                    <button className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition">
                        Download CV
                    </button>
                </a>
                <Link to="/projects">
                    <button className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition">
                        See Work
                    </button>
                </Link>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-8">
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