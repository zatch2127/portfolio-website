"use client";

import type React from "react";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import {
  CheckCircle,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const isFormValid = useMemo(() => {
    return (
      formData.name.trim().length >= 2 &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      formData.subject.trim().length >= 3 &&
      formData.message.trim().length >= 10
    );
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!isFormValid) {
      setSubmitError("Please complete all fields correctly before sending.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send message.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send message right now."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zatch360aa@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=zatch360aa@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9867581710",
      href: "tel:+919867581710",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Maharashtra, INDIA",
      href: "https://www.google.com/maps/search/?api=1&query=Maharashtra%2C+India",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mohammad-zaid-ansari-757048342",
      href: "https://www.linkedin.com/in/mohammad-zaid-ansari-757048342/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "zatch2127",
      href: "https://github.com/zatch2127/",
    },
    {
      icon: Globe,
      label: "Portfolio",
      value: "zaid360cv.netlify.app",
      href: "https://zaid360cv.netlify.app/",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-20"
      ref={ref}
    >
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-600/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-cyan-500/5 to-blue-600/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Let&apos;s Build Something Great
          </h2>
          {/* <p className="mx-auto max-w-3xl text-xl text-slate-400">
            I&apos;m always eager to collaborate on real-world projects, learn
            from new experiences, and contribute my skills. Whether it&apos;s a
            small project, a learning opportunity, or a full-scale
            collaboration, let&apos;s connect and build something amazing
            together.
          </p> */}
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="mb-6 text-2xl font-bold text-white">
                Get In Touch
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-slate-300">
                I&apos;m always eager to collaborate on real-world projects,
                learn from new experiences, and contribute my skills. Whether
                it&apos;s a small project, a learning opportunity, or a
                full-scale collaboration, let&apos;s connect and build something
                amazing together.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex min-h-[120px] flex-col justify-between rounded-xl border border-slate-700 bg-slate-800/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50"
                  data-interactive
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-3 transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-purple-600/30">
                      <item.icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
                      {item.label}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-6 text-white">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                Connect With Me
              </p>
              <div className="mt-5 grid gap-3">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-slate-300 transition-all duration-300 hover:border-blue-500/40 hover:text-white"
                    data-interactive
                    initial={{ opacity: 0, y: 18 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
                    }
                    transition={{ duration: 0.7, delay: 0.55 + index * 0.08 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-slate-800/80 p-2">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {item.label}
                        </p>
                        <p className="text-xs text-slate-400">{item.value}</p>
                      </div>
                    </div>
                    <Globe className="h-4 w-4 text-slate-500" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-[28px] border border-slate-800 bg-slate-900/55 p-6 shadow-[0_24px_80px_rgba(2,8,23,0.35)] backdrop-blur-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                    Contact Form
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Send a project message
                  </h3>
                </div>
                <motion.div
                  animate={
                    isSubmitting
                      ? { rotate: [0, -8, 8, -4, 4, 0] }
                      : { rotate: 0, scale: isSubmitted ? [1, 1.15, 1] : 1 }
                  }
                  transition={{
                    duration: isSubmitting ? 0.8 : 0.5,
                    repeat: isSubmitting ? Number.POSITIVE_INFINITY : 0,
                  }}
                  className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/15 to-purple-500/15 p-3"
                >
                  {isSubmitted ? (
                    <CheckCircle className="h-6 w-6 text-emerald-400" />
                  ) : (
                    <Send className="h-6 w-6 text-blue-300" />
                  )}
                </motion.div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-400 backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-400 backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-400 backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-400 backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted || !isFormValid}
                className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 disabled:cursor-not-allowed disabled:opacity-50"
                data-interactive
                whileHover={{
                  scale:
                    isSubmitting || isSubmitted || !isFormValid ? 1 : 1.02,
                }}
                whileTap={{
                  scale:
                    isSubmitting || isSubmitted || !isFormValid ? 1 : 0.98,
                }}
              >
                <motion.span
                  className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.28),transparent)]"
                  animate={
                    isSubmitting
                      ? { x: ["-120%", "120%"] }
                      : isSubmitted
                        ? { scale: [0.9, 1.08, 1], opacity: [0.15, 0.28, 0] }
                        : { x: "-140%" }
                  }
                  transition={
                    isSubmitting
                      ? {
                          duration: 1.1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }
                      : { duration: 0.6 }
                  }
                />
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitError ? (
                <p className="text-sm text-rose-300">{submitError}</p>
              ) : null}

              {isSubmitted ? (
                <p className="text-sm text-emerald-300">
                  Message sent successfully.
                </p>
              ) : null}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
