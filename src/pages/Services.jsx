import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt, FaUserTie, FaExternalLinkAlt } from "react-icons/fa";

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    // Close modal on ESC key
    const handleKeyDown = useCallback((e) => {
        if (e.key === "Escape") setSelectedService(null);
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    const services = [
        {
            title: "Web Development",
            short: "Responsive, scalable web apps with clean architecture.",
            overview:
                "We build high-performance websites and enterprise-grade web applications with reusable components, robust state management, and secure API integrations.",
            features: ["Responsive Design", "Scalable Architecture", "API Integration", "SEO Optimization"],
            projects: [
                { name: "Personal Portfolio", link: "https://sajidali.dev" },
                { name: "E-commerce Store", link: "https://shopify-clone.vercel.app" },
                { name: "Admin Dashboard", link: "https://dashboard-app.vercel.app" }
            ],
            techStack: ["React.js", "Node.js", "MongoDB", "TailwindCSS", "Framer Motion"],
            icon: <FaCode className="text-orange-500 text-5xl" />
        },
        {
            title: "UI/UX Design",
            short: "Elegant, user-centered interfaces and motion design.",
            overview:
                "We craft interfaces that blend aesthetics with usability—glassmorphism, premium gradients, and smooth micro-interactions.",
            features: ["Wireframing", "Prototyping", "Motion Design", "Design Systems"],
            projects: [
                { name: "Landing Page Design", link: "https://landing-design.vercel.app" },
                { name: "Mobile App UI Kit", link: "https://figma.com/ui-kit" }
            ],
            techStack: ["Figma", "TailwindCSS", "Framer Motion"],
            icon: <FaPaintBrush className="text-orange-500 text-5xl" />
        },
        {
            title: "App Development",
            short: "Cross‑platform mobile apps with smooth performance.",
            overview:
                "Lightweight yet powerful apps, intuitive navigation, and responsive UI—ready for startups and enterprises.",
            features: ["Cross‑platform", "Fast Performance", "Secure APIs", "Offline Support"],
            projects: [
                { name: "Food Delivery App", link: "https://foodapp.vercel.app" },
                { name: "Fitness Tracker", link: "https://fitnessapp.vercel.app" }
            ],
            techStack: ["React Native", "Node.js", "Firebase"],
            icon: <FaMobileAlt className="text-orange-500 text-5xl" />
        },
        {
            title: "Consulting",
            short: "Architecture, performance, and scalability guidance.",
            overview:
                "We help choose the right stack, optimize performance, and future‑proof systems with pragmatic, enterprise‑grade solutions.",
            features: ["Architecture Audit", "Performance Optimization", "Scalability Planning"],
            projects: [
                { name: "Tech Stack Audit", link: "https://audit-service.vercel.app" },
                { name: "Performance Optimization", link: "https://perf-optimizer.vercel.app" }
            ],
            techStack: ["MERN Stack", "Cloud Services", "DevOps Tools"],
            icon: <FaUserTie className="text-orange-500 text-5xl" />
        }
    ];

    return (
        <motion.div
            className="min-h-screen py-16 bg-white text-gray-900 px-6 sm:px-12 md:px-16 lg:px-10"
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
                className="mb-16 space-y-4 max-w-3xl"
            >
                <p className="text-lg md:text-xl font-extrabold">
                    I provide <span className="text-orange-500 "> Premium Web Solutions </span>
                    that empower businesses with scalable technology and elegant design.
                </p>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    I provide premium, industry-level services designed to help businesses stand out with scalable technology and elegant design.
                    From web apps to mobile solutions, my focus is on delivering professional-grade results that impress clients and users alike.
                </p>
            </motion.div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {services.map((service, idx) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        onClick={() => setSelectedService(service)}
                        className="cursor-pointer bg-white/30 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform"
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-700">{service.short}</p>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden"
                        >

                            {/* Modal Content */}
                            <div className="p-6 space-y-10 overflow-y-auto max-h-[75vh]">
                                {/* Header */}
                                <div className="flex items-center justify-between border-b border-gray-200 pb-6">
                                    {/* Left side: Icon + Title */}
                                    <div className="flex items-center gap-4">
                                        <div className="text-2xl sm:text-4xl lg:text-5xl">{selectedService.icon}</div>
                                        <h3 className="text-xl md:text-3xl font-bold text-gray-900">
                                            {selectedService.title}
                                        </h3>
                                    </div>

                                    {/* Right side: Close button */}
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="text-gray-600 hover:text-orange-500 transition text-2xl"
                                    >
                                        ✖
                                    </button>
                                </div>

                                {/* Overview */}
                                {selectedService.overview && (
                                    <section className="space-y-2">
                                        <h4 className="text-xl font-semibold text-orange-500">Overview</h4>
                                        <p className="text-gray-700 text-base leading-relaxed">
                                            {selectedService.overview}
                                        </p>
                                    </section>
                                )}

                                {/* Features */}
                                {selectedService.features?.length > 0 && (
                                    <section className="space-y-3">
                                        <h4 className="text-xl font-semibold text-orange-500">Key Features</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-gray-700">
                                            {selectedService.features.map((f) => (
                                                <li key={f} className="flex items-start gap-2">
                                                    <span className="mt-1 h-2 w-2 rounded-full bg-orange-500"></span>
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {/* Projects */}
                                {selectedService.projects?.length > 0 && (
                                    <section className="space-y-4">
                                        <h4 className="text-xl font-semibold text-orange-500">Projects</h4>
                                        <ul className="space-y-3">
                                            {selectedService.projects.map((proj) => (
                                                <li
                                                    key={proj.name}
                                                    className="flex items-center justify-between bg-gray-50 rounded-lg px-5 py-3 shadow-sm"
                                                >
                                                    <span className="text-gray-800 font-medium">{proj.name}</span>
                                                    <a
                                                        href={proj.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
                                                    >
                                                        View More <FaExternalLinkAlt className="text-xs sm:text-sm" />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {/* Tech Stack */}
                                {selectedService.techStack?.length > 0 && (
                                    <section className="space-y-3">
                                        <h4 className="text-xl font-semibold text-orange-500">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedService.techStack.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-4 py-2 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-sm font-medium shadow-sm"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </section>
                                )}
                            </div>

                            {/* Footer CTA */}
                            <div className="px-8 py-4 bg-gray-50 flex flex-col sm:flex-row justify-end gap-4">
                                <button
                                    onClick={() =>
                                        window.open("mailto:you@example.com?subject=Service Inquiry")
                                    }
                                    className="bg-gray-900 text-white py-2.5 px-6 rounded-lg hover:bg-black transition"
                                >
                                    Contact Us
                                </button>
                                <button
                                    onClick={() =>
                                        window.open("https://sajidali.dev/services", "_blank")
                                    }
                                    className="bg-orange-500 text-white py-2.5 px-6 rounded-lg hover:bg-orange-600 transition"
                                >
                                    View Projects
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Services;
