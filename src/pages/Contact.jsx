// ContactPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaGithub,
    FaCheckCircle,
} from "react-icons/fa";

const TogglePill = ({ label, active, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className={`px-4 py-2 rounded-full border transition font-medium ${active
            ? "bg-orange-500 text-white border-orange-500 shadow-sm"
            : "bg-white text-gray-800 border-gray-300 hover:border-orange-400"
            }`}
        aria-pressed={active}
    >
        {label}
    </button>
);

const Field = ({ label, children, error }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="mt-1">{children}</div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        budget: "",
        projectType: "", // Optional: "Website" | "Application"
        message: "",
        honeypot: "", // spam trap
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const setField = (key, value) => setFormData((prev) => ({ ...prev, [key]: value }));

    const validate = () => {
        const e = {};
        if (!formData.name.trim()) e.name = "Name is required.";
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email is required.";
        if (!formData.phone.match(/^\d{10}$/)) e.phone = "Phone must be 10 digits.";
        if (!formData.company.trim()) e.company = "Company / Organization is required.";
        if (formData.budget === "" || Number.isNaN(Number(formData.budget)) || Number(formData.budget) <= 0) {
            e.budget = "Please enter a valid budget amount.";
        }
        if (formData.message.trim().length < 30) e.message = "Message must be at least 30 characters.";
        // projectType is optional — no error
        // honeypot must be empty
        if (formData.honeypot) e.honeypot = "Invalid submission.";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        if (!validate()) return;
        setSubmitting(true);
        try {
            // Simulate async request
            await new Promise((r) => setTimeout(r, 1200));
            setSubmitted(true);
            // Clear form
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                budget: "",
                projectType: "",
                message: "",
                honeypot: "",
            });
        } finally {
            setSubmitting(false);
            setTimeout(() => setSubmitted(false), 4000);
        }
    };

    return (
        <motion.div
            className="h-screen overflow-auto bg-white text-gray-900 py-16 px-6 sm:px-12 md:px-16 lg:px-10"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100vw", opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
            {/* Header — premium with accent lines */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className=" mb-10"
            >
                <h1 className="text-4xl font-bold mb-2">Get in touch</h1>
                <div className=" flex flex-col">
                    <div className="w-16 h-1 bg-orange-500 rounded"></div>
                    <div className="w-10 h-1 bg-orange-500 rounded mt-1"></div>
                    <div className="w-4 h-1 bg-orange-500 rounded mt-1"></div>
                </div>
            </motion.div>
            <p className="text-lg mt-6 md:text-xl text-gray-700 max-w-3xl mb-8">
                Share your vision — website or application — and let’s craft an industry‑level solution with clear scope,
                timelines, and measurable outcomes.
            </p>
            {/* Social media showcase — premium row */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-16 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto mb-4"
            >
                {[
                    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com" },
                    { icon: <FaTwitter />, label: "Twitter/X", href: "https://twitter.com" },
                    { icon: <FaInstagram />, label: "Instagram", href: "https://instagram.com" },
                    { icon: <FaGithub />, label: "GitHub", href: "https://github.com" },
                    { icon: <FaFacebook />, label: "Facebook", href: "https://facebook.com" },
                ].map((s) => (
                    <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white/30 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg px-6 py-5 flex items-center justify-center gap-3 hover:shadow-xl transition"
                    >
                        <span className="text-2xl text-gray-700 group-hover:text-orange-600 transition">
                            {s.icon}
                        </span>
                        <span className="text-sm font-semibold text-gray-800 group-hover:text-orange-700 transition">
                            {s.label}
                        </span>
                    </a>
                ))}
            </motion.div>
            {/* Form */}
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto space-y-6"
            >
                {/* Grid: Name, Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Full name" error={errors.name}>
                        <input
                            type="text"
                            placeholder="e.g., Sajid Ali"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
                            value={formData.name}
                            onChange={(e) => setField("name", e.target.value)}
                        />
                    </Field>
                    <Field label="Email address" error={errors.email}>
                        <input
                            type="email"
                            placeholder="e.g., sajid@example.com"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
                            value={formData.email}
                            onChange={(e) => setField("email", e.target.value)}
                        />
                    </Field>
                </div>

                {/* Grid: Phone, Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Phone number" error={errors.phone}>
                        <input
                            type="tel"
                            placeholder="10-digit number"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
                            value={formData.phone}
                            onChange={(e) => setField("phone", e.target.value)}
                        />
                    </Field>
                    <Field label="Company / Organization" error={errors.company}>
                        <input
                            type="text"
                            placeholder="e.g., BrandCo Pvt Ltd"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
                            value={formData.company}
                            onChange={(e) => setField("company", e.target.value)}
                        />
                    </Field>
                </div>

                {/* Grid: Budget, Optional project type (styled pills) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Estimated budget (USD)" error={errors.budget}>
                        <input
                            type="number"
                            placeholder="e.g., 2500"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
                            value={formData.budget}
                            onChange={(e) => setField("budget", e.target.value)}
                            min="1"
                            step="1"
                        />
                    </Field>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            What do you want to build? (Optional)
                        </label>
                        <div className="mt-2 flex flex-wrap gap-3">
                            <TogglePill
                                label="Website"
                                active={formData.projectType === "Website"}
                                onClick={() =>
                                    setField("projectType", formData.projectType === "Website" ? "" : "Website")
                                }
                            />
                            <TogglePill
                                label="Application"
                                active={formData.projectType === "Application"}
                                onClick={() =>
                                    setField("projectType", formData.projectType === "Application" ? "" : "Application")
                                }
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                            This helps tailor the proposal — you can skip it if unsure.
                        </p>
                    </div>
                </div>

                {/* Message */}
                <Field label="Project brief / message" error={errors.message}>
                    <textarea
                        rows={6}
                        placeholder="Describe goals, scope, target audience, timeline, and any references..."
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
                        value={formData.message}
                        onChange={(e) => setField("message", e.target.value)}
                    />
                </Field>

                {/* Honeypot (hidden) */}
                <input
                    type="text"
                    value={formData.honeypot}
                    onChange={(e) => setField("honeypot", e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    aria-hidden="true"
                />

                {/* Submit */}
                <div className="flex items-center justify-between gap-4">
                    <button
                        type="submit"
                        disabled={submitting}
                        className={`bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold transition ${submitting ? "opacity-80 cursor-not-allowed" : "hover:bg-orange-600"
                            }`}
                    >
                        {submitting ? "Sending..." : "Send message"}
                    </button>

                    {submitted && (
                        <div className="inline-flex items-center gap-2 text-green-600 font-semibold">
                            <FaCheckCircle />
                            <span>Message sent successfully!</span>
                        </div>
                    )}
                </div>
            </motion.form>


        </motion.div>
    );
};

export default ContactPage;
