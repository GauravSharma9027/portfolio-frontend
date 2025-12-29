import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiLoader3Line } from "react-icons/ri";
import { toast } from "react-toastify"
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
        projectType: "",
        message: "",
        honeypot: "",
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const setField = (key, value) =>
        setFormData((prev) => ({ ...prev, [key]: value }));

    const validate = () => {
        const e = {};
        if (!formData.name.trim()) e.name = "Name is required.";
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
            e.email = "Valid email is required.";
        if (!formData.phone.match(/^\d{10}$/))
            e.phone = "Phone must be 10 digits.";
        if (!formData.company.trim())
            e.company = "Company / Organization is required.";
        if (
            formData.budget === "" ||
            Number.isNaN(Number(formData.budget)) ||
            Number(formData.budget) <= 0
        ) {
            e.budget = "Please enter a valid budget.";
        }
        if (formData.message.trim().length < 30)
            e.message = "Message must be at least 30 characters.";
        if (formData.honeypot) e.honeypot = "Invalid submission.";

        setErrors(e);
        return Object.keys(e).length === 0;
    };

    // ⭐ UPDATED SUBMIT FUNCTION (Google Sheet)
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        if (!validate()) return;

        const scriptURL = "https://script.google.com/macros/s/AKfycbyiJXMH7nd7wU4ajhioSLT9L1VJ33IG3ZGuNvp8OQT84u8XwM3yVGOPgpwzhFe0U3EY/exec";

        setSubmitting(true);

        try {
            await fetch(scriptURL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    budget: formData.budget,
                    projectType: formData.projectType,
                    message: formData.message,
                }),
            });

            setSubmitted(true);
            toast.success("sent successfully!")
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
        } catch (error) {
            console.error("Error!", error);
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
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-10"
            >
                <h1 className="text-4xl font-bold mb-2">Get in touch</h1>
                <div className="flex flex-col">
                    <div className="w-16 h-1 bg-orange-500 rounded"></div>
                    <div className="w-10 h-1 bg-orange-500 rounded mt-1"></div>
                    <div className="w-4 h-1 bg-orange-500 rounded mt-1"></div>
                </div>
            </motion.div>

            <p className="text-lg mt-6 md:text-xl text-gray-700 max-w-3xl mb-8">
                Share your vision — website or application — and let’s craft an industry-level solution.
            </p>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-16 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mb-8"
            >
                {[
                    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/gaurav-sharma9 " },
                    { icon: <FaTwitter />, label: "Twitter/X", href: "https://x.com/GauravShar77354" },
                    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/GauravSharma9027" },
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

            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-8 max-w-5xl space-y-6"
            >
                {/* Grid: Name, Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Full name" error={errors.name}>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            value={formData.name}
                            onChange={(e) => setField("name", e.target.value)}
                        />
                    </Field>
                    <Field label="Email address" error={errors.email}>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            value={formData.phone}
                            onChange={(e) => setField("phone", e.target.value)}
                        />
                    </Field>
                    <Field label="Company / Organization" error={errors.company}>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            value={formData.company}
                            onChange={(e) => setField("company", e.target.value)}
                        />
                    </Field>
                </div>

                {/* Budget + Optional Project Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Estimated budget (USD)" error={errors.budget}>
                        <input
                            type="number"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            value={formData.budget}
                            onChange={(e) => setField("budget", e.target.value)}
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
                                    setField(
                                        "projectType",
                                        formData.projectType === "Website" ? "" : "Website"
                                    )
                                }
                            />
                            <TogglePill
                                label="Application"
                                active={formData.projectType === "Application"}
                                onClick={() =>
                                    setField(
                                        "projectType",
                                        formData.projectType === "Application" ? "" : "Application"
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>

                {/* Message */}
                <Field label="Project brief / message" error={errors.message}>
                    <textarea
                        rows={6}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        value={formData.message}
                        onChange={(e) => setField("message", e.target.value)}
                    />
                </Field>

                <input
                    type="text"
                    value={formData.honeypot}
                    onChange={(e) => setField("honeypot", e.target.value)}
                    className="hidden"
                />

                {/* Submit */}
                <div className="flex items-center justify-between gap-4">
                    <button
                        type="submit"
                        disabled={submitting}
                        className={`bg-orange-500 min-w-36 text-white py-3 px-6 rounded-lg font-bold transition flex justify-center items-center ${submitting ? "opacity-80 cursor-not-allowed" : "hover:bg-orange-600"
                            }`}
                    >
                        {submitting ? <RiLoader3Line size={23} className="animate-spin" /> : "Send message"}
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
