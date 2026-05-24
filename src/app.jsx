import React from "react";
import {
  ShieldCheck,
  Truck,
  FileCheck2,
  Mail,
  Phone,
  ArrowRight,
  Globe2,
  Building2,
  Radar,
  Plane,
  Cpu,
  Target,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Foreign-Origin Systems Procurement",
    text: "Specialized sourcing of hard-to-procure foreign-origin military systems, components, and technologies for authorized U.S. Department of Defense research and development programs.",
  },
  {
    icon: Truck,
    title: "Platform & Equipment Acquisition",
    text: "Focused procurement support for radar systems, air-defense assets, armored platforms, aircraft-related equipment, upgraded legacy systems, and difficult-to-document foreign materiel.",
  },
  {
    icon: FileCheck2,
    title: "Compliance-Driven Execution",
    text: "All activity is structured around lawful U.S. government requirements, documentation, end-use controls, sanctions compliance, export-control rules, and authorized acquisition channels.",
  },
];

const systems = [
  {
    icon: Radar,
    title: "Radar & Air Defense Systems",
    text: "Procurement support for surveillance radars, target-acquisition systems, air-defense-related equipment, and supporting components.",
  },
  {
    icon: Target,
    title: "Armored & Ground Platforms",
    text: "Support for armored vehicles, legacy tracked platforms, subsystems, and related foreign-origin equipment for evaluation and exploitation needs.",
  },
  {
    icon: Plane,
    title: "Aircraft & Aviation Systems",
    text: "Focused sourcing support for foreign-origin aircraft-related equipment, helicopter systems, upgraded legacy airframes, and supporting hardware.",
  },
  {
    icon: Cpu,
    title: "Electronic / Technical Materiel",
    text: "Assistance with hard-to-source technical equipment, subsystems, and specialized components relevant to testing, analysis, and R&D programs.",
  },
];

const categories = [
  "Radar Systems & Components",
  "Air Defense Systems",
  "Armored Vehicles & Components",
  "Aircraft & Helicopter Systems",
  "Electronic Warfare Related Equipment",
  "Legacy Foreign-Origin Platforms",
  "Russian-Origin Defense Equipment",
  "Custom R&D Sourcing Requests",
];

const process = [
  "Requirement Review",
  "Source Identification",
  "Availability Verification",
  "Documentation & Compliance Screening",
  "Procurement Coordination",
  "Delivery Support",
];

export default function App() {
  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-grid-overlay" />

        <div className="container hero-inner">
          <header className="top-nav">
            <div className="brand-wrap">
              <div className="brand-icon">
                <ShieldCheck size={22} />
              </div>
              <div>
                <p className="brand-name">UAM</p>
                <p className="brand-subtitle">DEFENSE PROCUREMENT</p>
              </div>
            </div>

            <nav className="nav-links">
              <a href="#capabilities">Capabilities</a>
              <a href="#systems">Systems</a>
              <a href="#contracting">Contracting</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>

          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow">
                Specialized Procurement for U.S. Department of Defense R&amp;D
              </p>

              <h1>
                Foreign systems sourcing for research, testing, and evaluation.
              </h1>

              <p className="hero-copy">
                United Acquisition Management, Inc. is a specialized procurement
                firm sourcing hard-to-procure foreign-origin military systems,
                components, and technologies for authorized U.S. Department of
                Defense research, development, testing, evaluation, and
                exploitation programs.
              </p>

              <div className="button-row">
                <a className="primary-button" href="#contact">
                  Contact Procurement <ArrowRight size={16} />
                </a>
                <a className="secondary-button" href="#capabilities">
                  View Capabilities
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="profile-card"
            >
              <div className="profile-inner">
                <p className="card-label">Company Profile</p>

                <InfoRow
                  icon={Building2}
                  title="Company"
                  text="United Acquisition Management, Inc."
                />

                <InfoRow icon={Globe2} title="Website" text="uam-inc.com" />

                <InfoRow
                  icon={ShieldCheck}
                  title="Primary Focus"
                  text="Procurement of hard-to-source foreign-origin defense systems for authorized U.S. government R&D."
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="container section">
        <div className="section-head">
          <p className="section-label">Capabilities</p>
          <h2>Discreet procurement support for difficult foreign materiel.</h2>
          <p>
            UAM supports government and contractor requirements where access,
            documentation, discretion, and lawful sourcing matter more than
            volume. The company is positioned as a specialist procurement firm
            for authorized defense research and evaluation activity.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <article className="capability-card" key={item.title}>
                <div className="capability-icon">
                  <Icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="systems" className="container section">
        <div className="section-head">
          <p className="section-label">Systems of Interest</p>
          <h2>Focused on scarce systems, not open-market equipment.</h2>
          <p>
            UAM supports specialized sourcing requests involving radar systems,
            air-defense platforms, armored vehicles, aircraft-related systems,
            upgraded legacy platforms, and difficult foreign-origin materiel for
            authorized testing, analysis, and procurement requirements.
          </p>
        </div>

        <div className="systems-grid">
          {systems.map((item) => {
            const Icon = item.icon;

            return (
              <article className="system-card" key={item.title}>
                <div className="system-icon">
                  <Icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="band-section">
        <div className="container split-grid">
          <div>
            <p className="section-label">Procurement Categories</p>
            <h2>Aligned to real-world defense sourcing requirements.</h2>
            <p>
              Public-facing information is intentionally category-based. UAM’s
              role is to support qualified procurement activity with discretion,
              supplier coordination, and compliance-minded execution.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <div className="category-card" key={category}>
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contracting" className="container section">
        <div className="contract-card">
          <div>
            <p className="section-label">Government Contracting</p>
            <h2>Built around lawful sourcing and clean documentation.</h2>
            <p>
              UAM supports authorized procurement requirements for research,
              development, testing, evaluation, exploitation, and training
              support. All sourcing is subject to applicable U.S. law,
              sanctions restrictions, export-control rules, end-use controls,
              and government authorization requirements.
            </p>
          </div>

          <div className="todo-card">
            <p className="todo-title">Company Information</p>
            <ul>
              <li>United Acquisition Management, Inc.</li>
              <li>Florida Profit Corporation</li>
              <li>Founded in 2010</li>
              <li>Document Number: P10000036272</li>
              <li>FEI/EIN: 27-2435425</li>
              <li>Capability Statement Available Upon Request</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <p className="section-label">Procurement Process</p>
          <h2>Structured, disciplined, and requirement-driven.</h2>
          <p>
            UAM’s value lies in identifying difficult supply paths, validating
            availability, coordinating procurement activity, and supporting the
            documentation standards expected in defense-facing sourcing.
          </p>
        </div>

        <div className="process-grid">
          {process.map((step) => (
            <div className="process-card" key={step}>
              <CheckCircle2 size={18} />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="container contact-section">
        <div>
          <p className="section-label">Contact</p>
          <h2>Send authorized sourcing inquiries directly to UAM.</h2>
          <p>
            For controlled or sensitive sourcing requests, contact UAM directly
            with a concise RFQ, system description, or capability discussion
            request. Inquiries should relate to authorized government,
            contractor, research, testing, or evaluation requirements.
          </p>
        </div>

        <div className="contact-links">
          <a href="mailto:Dan.Zugrav@uam-inc.com">
            <Mail size={20} /> Dan.Zugrav@uam-inc.com
          </a>
          <a href="tel:+15618019030">
            <Phone size={20} /> +1 (561) 801-9030
          </a>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} United Acquisition Management, Inc. All
        rights reserved. Specialized defense procurement for authorized U.S.
        government research and evaluation requirements.
      </footer>
    </main>
  );
}

function InfoRow({ icon: Icon, title, text }) {
  return (
    <div className="info-row">
      <Icon size={18} />
      <div>
        <p>{title}</p>
        <span>{text}</span>
      </div>
    </div>
  );
}
