"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Portfolio Inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=zatch360aa@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank"
    );
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding" aria-labelledby="contact-heading">
      <div className="section-divider mb-24 sm:mb-32 lg:mb-40" />

      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <ScrollReveal>
              <span className="text-caption mb-4 block">Contact</span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 id="contact-heading" className="heading-lg mb-6">
                Let&apos;s build
                <br />
                <span className="text-gradient">something real.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-body mb-10 max-w-md">
                Have a project in mind? Need an AI-powered solution? Or just
                want to connect? I&apos;d love to hear from you.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-4 mb-10">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=zatch360aa@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-[#666] hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[rgba(99,102,241,0.08)] flex items-center justify-center group-hover:bg-[rgba(99,102,241,0.12)] transition-colors">
                    <Mail className="w-4 h-4 text-[#6366f1]" />
                  </div>
                  <span>zatch360aa@gmail.com</span>
                  <ArrowUpRight className="w-3 h-3 text-[#333] group-hover:text-[#6366f1] transition-colors" />
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Maharashtra%2C+India"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-[#666] hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[rgba(99,102,241,0.08)] flex items-center justify-center group-hover:bg-[rgba(99,102,241,0.12)] transition-colors">
                    <MapPin className="w-4 h-4 text-[#6366f1]" />
                  </div>
                  <span>Maharashtra, India</span>
                  <ArrowUpRight className="w-3 h-3 text-[#333] group-hover:text-[#6366f1] transition-colors" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/zatch2127"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost btn-sm"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mohammad-zaid-ansari-757048342/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost btn-sm"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </motion.a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Form */}
          <ScrollReveal delay={0.2} direction="right">
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8" aria-label="Contact form">
              <h3 className="text-lg font-semibold text-white mb-6">
                Send a message
              </h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[13px] text-[#666] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 bg-[#050505] border border-[rgba(255,255,255,0.06)] rounded-xl text-white text-sm placeholder-[#333] focus:border-[#6366f1] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[13px] text-[#666] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 bg-[#050505] border border-[rgba(255,255,255,0.06)] rounded-xl text-white text-sm placeholder-[#333] focus:border-[#6366f1] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[13px] text-[#666] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#050505] border border-[rgba(255,255,255,0.06)] rounded-xl text-white text-sm placeholder-[#333] focus:border-[#6366f1] focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary w-full py-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={isSubmitted ? "Message sent successfully" : "Send message via Gmail"}
                >
                  {isSubmitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
