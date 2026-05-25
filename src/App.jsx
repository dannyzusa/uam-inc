import React from "react";
import {
  ShieldCheck,
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
  Layers,
  LockKeyhole,
} from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Foreign Materiel Procurement",
    text: "Sourcing hard-to-procure foreign-origin military systems, components, and technologies for authorized U.S. Department of Defense research and evaluation requirements.",
  },
  {
    icon: Radar,
    title: "Radar & Air Defense Focus",
    text: "Specialized support for radar systems, air-defense platforms, associated components, and technical materiel relevant to testing, analysis, and exploitation programs.",
  },
  {
    icon: FileCheck2,
    title: "Compliance-Driven Support",
    text: "Procurement activity is structured around lawful government requirements, documentation, sanctions compliance, export-control rules, and end-use controls.",
  },
];

const systems = [
  {
    icon: Radar,
    title: "Radar Systems",
    subtitle: "Surveillance & acquisition systems",
    image: "/images/system-radar.jpg",
    text: "Radar vehicles, surveillance radars, target-acquisition systems, air-defense radars, assemblies, and supporting components.",
  },
  {
    icon: Target,
    title: "Armored Platforms",
    subtitle: "Tracked and wheeled systems",
    image: "/images/system-armor.jpg",
    text: "Foreign-origin armored platforms, tracked vehicles, legacy systems, upgraded variants, and related platform components.",
  },
  {
    icon: Plane,
    title: "Aircraft & Helicopter Systems",
    subtitle: "Upgraded legacy airframes",
    image: "/images/system-aircraft.jpg",
    text: "Aircraft-related equipment, helicopter systems, upgraded legacy airframes, avionics-related components, and support materiel.",
  },
  {
    icon: Cpu,
    title: "Electronic / Technical Materiel",
    subtitle: "EW, sensors, components",
    image: "/images/system-electronics.jpg",
    text: "Technical subsystems, electronic warfare-related equipment, detection systems, and specialized components for R&D use cases.",
  },
];

const categories = [
  "S-300 / legacy air-defense related systems",
  "Radar systems and components",
  "T-80 / T-90 family platform support",
  "BMP-3 and armored vehicle components",
  "Su-27 / upgraded aircraft-related equipment",
  "Mi-24 / Mi-35 Hind-family systems",
  "Electronic warfare and sensor equipment",
  "Custom foreign materiel sourcing requests",
];

const process = [
  "Requirement Review",
  "Source Identification",
  "Availability Verification",
  "Supplier Coordination",
  "Documentation Review",
  "Procurement Support",
];

export default function App() {
  return (
    <main className="site-shell">
      <section id="home" className="hero-section">
        <div className="hero-bg" />
        <div className="hero-grid-overlay" />

        <div className="container hero-inner">
          <header className="top-nav">
            <a className="brand-wrap" href="#home" aria-label="UAM homepage">
              <div className="brand-mark">UAM</div>
              <div>
                <p className="brand-name">United Acquisition Management</p>
                <p className="brand-subtitle">Defense Procurement</p>
              </div>
            </a>

            <nav className="nav-links" aria-label="Main navigation">
              <a href="#capabilities">Capabilities</a>
              <a href="#systems">Systems</a>
              <a href="#contracting">Contracting</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>

          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="eyebrow">
                Specialized Procurement for U.S. Department of Defense R&amp;D
              </p>

              <h1>
                Foreign materiel procurement for DOD research and evaluation.
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
                <a className="secondary-button" href="#systems">
                  View Systems of Interest
                </a>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="hero-panel"
            >
              <div className="hero-visual">
                <img
                  src="/images/hero-radar.jpg"
                  alt="Foreign-origin radar system for research and evaluation"
                />
                <div className="hero-visual-label">
                  Foreign Systems / R&amp;D Support
                </div>
              </div>

              <div className="profile-card">
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
                  text="Foreign-origin defense systems procurement for authorized U.S. government R&D."
                />
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section id="capabilities" className="container section">
        <div className="section-head">
          <p className="section-label">Capabilities</p>
          <h2>Discreet procurement support for difficult foreign materiel.</h2>
          <p>
            UAM supports government and prime-contractor requirements where
            access, supplier coordination, documentation, discretion, and lawful
            sourcing matter more than volume.
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

      <section id="systems" className="systems-section">
        <div className="container">
          <div className="section-head systems-head">
            <p className="section-label">Systems of Interest</p>
            <h2>Foreign-origin systems and technologies we support.</h2>
            <p>
              This section is intentionally category-based. Specific systems,
              availability, documentation, and procurement pathways are handled
              directly with authorized parties.
            </p>
          </div>

          <div className="systems-gallery">
            {systems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="system-card" key={item.title}>
                  <div className="system-image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="system-body">
                    <div className="system-topline">
                      <div className="system-icon">
                        <Icon size={19} />
                      </div>
                      <span>{item.subtitle}</span>
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="category-panel">
            <div>
              <p className="section-label">Procurement Categories</p>
              <h2>Aligned to real-world defense sourcing requirements.</h2>
              <p>
                UAM supports qualified sourcing requests across foreign-origin
                platforms, radar-related equipment, legacy systems, aircraft
                support equipment, and technical materiel.
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

          <div className="facts-card">
            <p className="facts-title">Company Information</p>
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
            The company’s value lies in identifying difficult supply paths,
            validating availability, coordinating supplier communication, and
            supporting the documentation standards expected in defense-facing
            procurement.
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

      <section className="mission-band">
        <div className="container mission-inner">
          <div className="mission-item">
            <Layers size={22} />
            <div>
              <h3>Hard-to-procure systems</h3>
              <p>
                Access to foreign-origin systems, components, and technologies
                with limited or restricted availability.
              </p>
            </div>
          </div>

          <div className="mission-item">
            <LockKeyhole size={22} />
            <div>
              <h3>Discreet and professional</h3>
              <p>
                Procurement support conducted with discretion, security, and
                professional communication.
              </p>
            </div>
          </div>

          <div className="mission-item">
            <ShieldCheck size={22} />
            <div>
              <h3>Authorized use only</h3>
              <p>
                All inquiries and activity must relate to authorized government
                or contractor research and evaluation requirements.
              </p>
            </div>
          </div>
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
