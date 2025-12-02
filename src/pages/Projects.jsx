// ProjectPage.jsx
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import CountUp from "react-countup";

// Reusable pill
const Pill = ({ children }) => (
    <span className="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-sm font-medium">
        {children}
    </span>
);

// Category tabs
const categories = ["All", "Web", "Mobile", "UI/UX"];

const ProjectPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    // Impact stats
    const totalProjects = 25;
    const currentProjects = 4;
    const freelanceClients = 14;

    // Close modal on ESC
    const handleKeyDown = useCallback((e) => {
        if (e.key === "Escape") {
            setSelectedProject(null);
            setActiveImage(0);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    const scrollToComplete = () => {
        const section = document.getElementById("complete-projects");
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    // Portfolio projects (replace image paths with your assets)
    const projects = [
        {
            name: "E‑Commerce Platform",
            short: "Scalable store with catalog, cart, payments, and admin dashboard.",
            images: ["/images/ecommerce1.jpg", "/images/ecommerce2.jpg", "/images/ecommerce3.jpg"],
            github: "https://github.com/yourgithub/ecommerce",
            live: "https://yourecommerce.vercel.app",
            tech: ["React.js", "Node.js", "MongoDB", "TailwindCSS", "Stripe"],
            description:
                "Full‑stack e‑commerce engineered for performance and scale. Advanced product management, secure checkout, order lifecycle, analytics, and role‑based admin. Reusable UI components and robust API design.",
            features: [
                "Product filters, search, pagination",
                "Secure payments (Stripe) with webhooks",
                "Role‑based admin and analytics",
                "Responsive UI and SEO best practices",
                "Server‑side validation, protected routes"
            ],
            challenges: [
                "Optimizing queries for large catalogs",
                "Webhook reliability and failure handling",
                "Scalable state across complex flows"
            ],
            outcomes: [
                "Checkout conversion +18% post UX refinement",
                "Lighthouse 90+ with <2s load on 4G",
                "Admin manual tasks reduced by 40%"
            ],
            role: "Full‑stack developer",
            timeline: "8 weeks",
            category: "Web"
        },
        {
            name: "Portfolio Website",
            short: "Premium portfolio with projects, blog, and contact routing.",
            images: ["/images/portfolio1.jpg", "/images/portfolio2.jpg", "/images/portfolio3.jpg"],
            github: "https://github.com/yourgithub/portfolio",
            live: "https://sajidali.dev",
            tech: ["React.js", "Framer Motion", "TailwindCSS"],
            description:
                "Cinematic portfolio focused on storytelling and clarity. Book‑style sections, glassmorphism accents, and smooth motion for case studies. Built for fast pitching and client conversion.",
            features: [
                "Project deep‑dives via rich modal",
                "Micro‑interactions and animated transitions",
                "Component‑driven responsive layout",
                "Contact routing with validation"
            ],
            challenges: [
                "Balancing motion and performance",
                "Designing scalable component patterns"
            ],
            outcomes: [
                "Avg session duration +35%",
                "Direct inquiries +22% MoM"
            ],
            role: "Frontend developer & designer",
            timeline: "2 weeks (ongoing iteration)",
            category: "UI/UX"
        },
        {
            name: "Food Delivery App",
            short: "Cross‑platform app with live tracking and push notifications.",
            images: ["/images/food1.jpg", "/images/food2.jpg", "/images/food3.jpg"],
            github: "https://github.com/yourgithub/foodapp",
            live: "https://foodapp.vercel.app",
            tech: ["React Native", "Firebase", "Node.js"],
            description:
                "Mobile‑first food ordering with real‑time tracking, secure auth, and offline caching. Designed for speed and reliability under variable networks.",
            features: [
                "Live order status and map updates",
                "Firebase auth with social sign‑in",
                "Offline caching and optimistic UI",
                "Push notifications for lifecycle events"
            ],
            challenges: [
                "Network resilience in low‑bandwidth regions",
                "Battery‑friendly background updates"
            ],
            outcomes: [
                "Crash‑free sessions 99.5%",
                "Order success +16% after offline optimization"
            ],
            role: "Mobile developer",
            timeline: "6 weeks",
            category: "Mobile"
        },
        {
            name: "Architecture Consulting",
            short: "Stack selection, audits, and performance optimization.",
            images: ["/images/consult1.jpg", "/images/consult2.jpg", "/images/consult3.jpg"],
            github: "https://github.com/yourgithub/consulting-docs",
            live: "https://consulting-services.vercel.app",
            tech: ["MERN", "Cloud", "DevOps"],
            description:
                "End‑to‑end consulting for scalable systems: architecture reviews, performance tuning, and pragmatic roadmaps. Outcome‑driven engagements tailored to business goals.",
            features: [
                "Architecture audit and risk assessment",
                "Performance tuning and cost optimization",
                "Scalability roadmap and CI/CD setup"
            ],
            challenges: [
                "Legacy constraints and data migrations",
                "Balancing cost with performance targets"
            ],
            outcomes: [
                "Infra costs ‑28% post optimization",
                "P95 latency improved by 34%"
            ],
            role: "Consultant (architecture, performance)",
            timeline: "2–4 weeks (per engagement)",
            category: "Consulting"
        }
    ];

    // Current projects (freelancing visibility)
    const currentWork = [
        { name: "SaaS Analytics Dashboard", progress: 60, tech: ["React.js", "Next.js", "Chart.js"] },
        { name: "Booking Platform", progress: 45, tech: ["Node.js", "PostgreSQL", "Stripe"] },
        { name: "Brand Landing Revamp", progress: 70, tech: ["TailwindCSS", "Framer Motion"] },
        { name: "Mobile Health Tracker", progress: 35, tech: ["React Native", "Firebase"] }
    ];

    // Search + category filter
    const filteredProjects = useMemo(() => {
        const byCategory =
            activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);
        if (!query.trim()) return byCategory;
        const q = query.toLowerCase();
        return byCategory.filter(
            p =>
                p.name.toLowerCase().includes(q) ||
                p.short.toLowerCase().includes(q) ||
                p.tech.some(t => t.toLowerCase().includes(q))
        );
    }, [projects, activeCategory, query]);

    return (
        <motion.div
            className="min-h-screen bg-white text-gray-900 py-16 px-6 sm:px-12 md:px-16 lg:px-10"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100vw", opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
            {/* Header */}
            <div>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-10"
                >
                    <h1 className="text-4xl font-bold mb-2">Projects Showcase</h1>
                    <div className="w-16 h-1 bg-orange-500 rounded"></div>
                    <div className="w-10 h-1 bg-orange-500 rounded mt-1"></div>
                    <div className="w-4 h-1 bg-orange-500 rounded mt-1"></div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 space-y-4"
                >
                    <p className="text-lg md:text-xl font-extrabold">
                        Turning ideas into <span className="text-orange-500">Impactful Projects</span>
                    </p>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aspernatur mollitia officia rem doloremque! Esse veniam vel repellat ipsa molestiae consequatur vitae!
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={scrollToComplete}
                            className="mt-6 bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition"
                        >
                            View Complete Projects
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Impact stats */}

<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
  {/* Completed Projects */}
  <div className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-8 text-center 
                  transform transition duration-300 hover:scale-105 hover:shadow-xl">
    <h3 className="text-3xl font-bold text-orange-500">
      <CountUp start={1} end={totalProjects} duration={2.2} />+
    </h3>
    <p className="text-gray-700 mt-2">Completed Projects</p>
  </div>

  {/* Current Projects */}
  <div className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-8 text-center 
                  transform transition duration-300 hover:scale-105 hover:shadow-xl">
    <h3 className="text-3xl font-bold text-orange-500">
      <CountUp start={1} end={currentProjects} duration={2.2} />
    </h3>
    <p className="text-gray-700 mt-2">Current Projects</p>
  </div>

  {/* Freelance Clients */}
  <div className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-8 text-center 
                  transform transition duration-300 hover:scale-105 hover:shadow-xl">
    <h3 className="text-3xl font-bold text-orange-500">
      <CountUp start={1} end={freelanceClients} duration={2.2} />+
    </h3>
    <p className="text-gray-700 mt-2">Freelance Clients Served</p>
  </div>
</div>


            {/* Search + Filters */}
            <div className="mb-10 flex flex-col md:flex-row gap-6">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by name or tech (e.g., React, Stripe)"
                    className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <div className="flex flex-wrap gap-3">
                    {categories.map((c) => (
                        <button
                            key={c}
                            onClick={() => setActiveCategory(c)}
                            className={`px-4 py-2 rounded-lg border transition ${activeCategory === c
                                ? "bg-orange-500 text-white border-orange-500"
                                : "bg-white text-gray-800 border-gray-300 hover:border-orange-400"
                                }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>

            {/* Complete Projects */}
            <div id="complete-projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProjects.map((proj, idx) => (
                    <motion.article
                        key={proj.name}
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: idx * 0.08 }}
                        onClick={() => {
                            setSelectedProject(proj);
                            setActiveImage(0);
                        }}
                        className="group cursor-pointer bg-white/30 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform"
                    >
                        <div className="relative">
                            <img src={proj.images[0]} alt={proj.name} className="w-full h-48 object-cover" />
                            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{proj.name}</h3>
                            <p className="text-sm text-gray-700">{proj.short}</p>
                        </div>
                    </motion.article>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
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
                            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl mx-4 overflow-hidden"
                            role="dialog"
                            aria-modal="true"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-gray-200">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                    {selectedProject.name}
                                </h3>
                                <button
                                    onClick={() => {
                                        setSelectedProject(null);
                                        setActiveImage(0);
                                    }}
                                    className="text-gray-600 hover:text-orange-500 transition text-2xl"
                                    aria-label="Close modal"
                                >
                                    ✖
                                </button>
                            </div>

                            {/* Content */}
                            <div className="px-8 pb-8 overflow-y-auto max-h-[80vh] space-y-10">
                                {/* Hero image */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg"
                                >
                                    <img
                                        src={selectedProject.images[activeImage]}
                                        alt={`${selectedProject.name} main`}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>

                                {/* Thumbnails */}
                                <div className="flex gap-4 overflow-x-auto pb-2">
                                    {selectedProject.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveImage(idx)}
                                            className={`flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden shadow-md transition focus:outline-none focus:ring-2 focus:ring-orange-400 ${activeImage === idx ? "ring-2 ring-orange-500" : "opacity-75 hover:opacity-100"
                                                }`}
                                        >
                                            <img src={img} alt={`${selectedProject.name} ${idx + 1}`} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex flex-wrap gap-6">
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-gray-800 hover:text-orange-600 font-semibold"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a
                                        href={selectedProject.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-gray-800 hover:text-orange-600 font-semibold"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>

                                {/* Full description */}
                                <section className="space-y-3">
                                    <h4 className="text-xl font-semibold text-orange-500">Project overview</h4>
                                    <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
                                </section>

                                {/* Features */}
                                {selectedProject.features?.length > 0 && (
                                    <section className="space-y-3">
                                        <h4 className="text-xl font-semibold text-orange-500">Key features</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-gray-800">
                                            {selectedProject.features.map((f) => (
                                                <li key={f} className="flex items-start gap-2">
                                                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {/* Challenges */}
                                {selectedProject.challenges?.length > 0 && (
                                    <section className="space-y-3">
                                        <h4 className="text-xl font-semibold text-orange-500">Challenges</h4>
                                        <ul className="space-y-2 text-gray-800">
                                            {selectedProject.challenges.map((c) => (
                                                <li key={c} className="flex items-start gap-2">
                                                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-400" />
                                                    <span>{c}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {/* Outcomes */}
                                {selectedProject.outcomes?.length > 0 && (
                                    <section className="space-y-3">
                                        <h4 className="text-xl font-semibold text-orange-500">Outcomes</h4>
                                        <ul className="space-y-2 text-gray-800">
                                            {selectedProject.outcomes.map((o) => (
                                                <li key={o} className="flex items-start gap-2">
                                                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-500" />
                                                    <span>{o}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {/* Tech stack */}
                                <section className="space-y-3">
                                    <h4 className="text-xl font-semibold text-orange-500">Technologies used</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.tech.map((t) => (
                                            <Pill key={t}>{t}</Pill>
                                        ))}
                                    </div>
                                </section>

                                {/* Role & timeline */}
                                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-semibold text-orange-500">Role</h4>
                                        <p className="text-gray-700">{selectedProject.role}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-semibold text-orange-500">Timeline</h4>
                                        <p className="text-gray-700">{selectedProject.timeline}</p>
                                    </div>
                                </section>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row justify-end gap-4 pt-2">
                                    <button
                                        onClick={() => window.open("mailto:you@example.com?subject=Project Inquiry")}
                                        className="bg-gray-900 text-white py-2.5 px-6 rounded-lg hover:bg-black transition"
                                    >
                                        Contact Us
                                    </button>
                                    <button
                                        onClick={() => window.open("https://yourdomain.com/about", "_blank")}
                                        className="bg-orange-500 text-white py-2.5 px-6 rounded-lg hover:bg-orange-600 transition"
                                    >
                                        About Us
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Current Projects (freelancing impact) */}
            <div className="mt-20 space-y-8">
                <h2 className="text-2xl font-bold">Current Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
                    {currentWork.map((item) => (
                        <div
                            key={item.name}
                            className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-6 
                   transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            {/* Project Name */}
                            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>

                            {/* Progress Section */}
                            <div className="mt-3">
                                <div className="flex justify-between text-sm text-gray-700">
                                    <span>Progress</span>
                                    <span>{item.progress}%</span>
                                </div>
                                <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                                    <div
                                        className="h-2 bg-orange-500 rounded-full transition-all duration-700 ease-out"
                                        style={{ width: `${item.progress}%` }}
                                    />
                                </div>
                            </div>

                            {/* Tech Pills */}
                            <div className="flex flex-wrap gap-2 mt-4 animate-fadeIn">
                                {item.tech.map((t) => (
                                    <Pill
                                        key={t}
                                        className="transition transform hover:scale-110 hover:rotate-1"
                                    >
                                        {t}
                                    </Pill>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </motion.div>
    );
};

export default ProjectPage;
