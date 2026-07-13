"use client";

import { Award, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "2025",
    category: "AI",
    url: "https://drive.google.com/file/d/1efdO9rVNcn8iCnz81SaC0qh2ivY7iwx9/view?usp=drive_link",
  },
  {
    name: "Oracle Certified Foundations Associate / AI Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    category: "AI",
    url: "https://drive.google.com/file/d/1ATD-KXD0uAgYbP64ZRMs6NtbHbjqpAEy/view?usp=drive_link",
  },
  {
    name: "Hugging Face AI/ML Course Certificate",
    issuer: "Hugging Face",
    date: "2024",
    category: "AI",
    url: "https://drive.google.com/file/d/1ph8X7jVc6LNaplSRDEr5qj4vMSb7JvbN/view?usp=drive_link",
  },
  {
    name: "Cloud Code in Action",
    issuer: "Anthropic",
    date: "2025",
    category: "AI",
    url: "https://drive.google.com/file/d/1ujwfc-EcGFCgosjvFVb00rraKZi0Y5zt/view?usp=drive_link",
  },
  {
    name: "Cloud 101",
    issuer: "Cloud Academy",
    date: "2024",
    category: "AI",
    url: "https://drive.google.com/file/d/1zhdDSSgVy3exKfaB5Z8g2lEkjsXe1IHk/view?usp=drive_link",
  },
  {
    name: "Python Full Stack Certification",
    issuer: "G-Tech Jain",
    date: "2024",
    category: "Dev",
    url: "https://drive.google.com/file/d/19M22fZOQP9ko4tPJQCqRBiHTiFUp6MuO/view?usp=drive_link",
  },
  {
    name: "Web Development Using Python",
    issuer: "ABMA Education & G-TEC",
    date: "2024",
    category: "Dev",
    url: "https://drive.google.com/file/d/1WIREjZwj1F1Pcfit9yvzKxE9TGsSuSKh/view?usp=drive_link",
  },
  {
    name: "Python Basics",
    issuer: "HackerRank",
    date: "2024",
    category: "Dev",
    url: "https://drive.google.com/file/d/1cqGXTK8WXrK4K8995QgOvSxXJ53DEGR-/view?usp=drive_link",
  },
  {
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "2024",
    category: "Dev",
    url: "https://drive.google.com/file/d/1lRAGaiO1Ws11adwgSWWscRdgKEZgycOY/view?usp=drive_link",
  },
  {
    name: "Python for Data Science & Machine Learning",
    issuer: "Udemy",
    date: "2024",
    category: "Dev",
    url: "https://drive.google.com/file/d/1BNGp_KdiqyTJ5jC_RZ0Nu9aekJ2OhWUe/view?usp=drive_link",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-[#111111]" aria-labelledby="certifications-heading">
      <div className="container-width">
        <ScrollReveal>
          <span className="tag mb-4 inline-block">Certifications</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 id="certifications-heading" className="heading-lg mb-4">
            Verified credentials
            <br />
            <span className="text-accent">across AI and development.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-secondary max-w-2xl mb-12">
            10 certifications from Oracle, Anthropic, Hugging Face, Cisco,
            HackerRank, and others — covering generative AI, cloud
            infrastructure, and full-stack development.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={0.05 + i * 0.03}>
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="card-surface p-4 flex items-start gap-3 hover:border-accent/20 transition-colors duration-300 group block"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/[0.08] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-medium text-white leading-snug group-hover:text-accent transition-colors line-clamp-2">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-[#555] mt-1">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#333] group-hover:text-accent shrink-0 mt-0.5 transition-colors" />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
