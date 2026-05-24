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
    title: "Radar, Air Defense & Platform Sourcing",
    text: "Focused procurement support for radar systems, air-defense assets, armored platforms, aircraft-related equipment, legacy components, and difficult-to-document foreign materiel.",
  },
  {
    icon: FileCheck2,
    title: "Compliance-First Acquisition Support",
    text: "All activity is structured around lawful U.S. government requirements, documentation, end-use controls, sanctions compliance, export-control rules, and authorized procurement channels.",
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

export default function App() {
  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="hero-bg" />

        <div className="container hero-inner">
          <header className="top-nav">
            <div className="brand-wrap">
              <div className="brand-icon">
                <ShieldCheck size={26} />
              </div>
              <div>
                <p className="brand-name">UAM</p>
                <p className="brand-subtitle">Defense Procurement</p>
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
                Specialized Procurement for U.S. Department of Defense R&D
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
                  Contact Procurement <ArrowRight size={17} />
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

                <InfoRow
                  icon={Globe2}
                  title="Website"
                  text="uam-inc.com"
                />

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
            UAM is not a retail catalog or commodity reseller. The company is
            positioned to support government and prime-contractor requirements
            where access, documentation, discretion, and lawful sourcing matter.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <article className="capability-card" key={item.title}>
                <div className="capability-icon">
                  <Icon size={26} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="systems" className="band-section">
        <div className="container split-grid">
          <div>
            <p className="section-label">Systems of Interest</p>
            <h2>Focused on scarce systems, not open-market equipment.</h2>
            <p>
              UAM supports specialized sourcing requests involving radar
              systems, air-defense platforms, armored vehicles, aircraft-related
              systems, electronic warfare equipment, and upgraded legacy
              platforms of foreign origin. Public-facing information is kept
              category-based to protect the sensitivity of procurement activity.
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
            <p className="todo-title">Contracting Information</p>
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
          <p className="section-label">Procurement Approach</p>
          <h2>Access, verification, and compliance before transaction volume.</h2>
          <p>
            The company’s value is in locating difficult systems, verifying
            availability, coordinating supplier communication, and supporting
            the documentation standards expected in government-facing defense
            procurement. UAM’s role is procurement support for authorized
            research and evaluation needs — not public retail sale of military
            equipment.
          </p>
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
            <Mail size={21} /> Dan.Zugrav@uam-inc.com
          </a>
          <a href="tel:+15618019030">
            <Phone size={21} /> +1 (561) 801-9030
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
      <Icon size={21} />
      <div>
        <p>{title}</p>
        <span>{text}</span>
      </div>
    </div>
  );
}
