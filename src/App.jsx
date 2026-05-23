import React from "react";
import { ShieldCheck, Truck, FileCheck2, Mail, Phone, ArrowRight, Globe2, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Hard-to-Procure Foreign Systems",
    text: "Specialized sourcing support for difficult-to-acquire defense systems and components, with a focus on Russian-origin platforms and equipment for authorized U.S. government R&D."
  },
  {
    icon: Truck,
    title: "Radar & Electronic Systems Focus",
    text: "Priority capability in locating radar-related systems, assemblies, components, and adjacent electronic warfare or detection equipment for research and evaluation needs."
  },
  {
    icon: FileCheck2,
    title: "Compliance-First Procurement Support",
    text: "Procurement activity is structured around lawful U.S. government requirements, documentation, sanctions compliance, export controls, and end-use restrictions."
  }
];

const categories = [
  "Radar Systems & Components",
  "Russian-Origin Defense Equipment",
  "Foreign Military Systems",
  "Electronic Warfare Related Equipment",
  "Legacy Platform Components",
  "Custom R&D Sourcing Requests"
];

export default function App() {
  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="container hero-inner">
          <header className="top-nav">
            <div className="brand-wrap">
              <div className="brand-icon"><ShieldCheck size={26} /></div>
              <div>
                <p className="brand-name">UAM</p>
                <p className="brand-subtitle">Defense Sourcing</p>
              </div>
            </div>
            <nav className="nav-links">
              <a href="#capabilities">Capabilities</a>
              <a href="#contracting">Contracting</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>

          <div className="hero-grid">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="eyebrow">U.S. Government & Defense R&D Procurement Support</p>
              <h1>Hard-to-procure foreign defense systems for U.S. government R&D.</h1>
              <p className="hero-copy">
                United Acquisition Management, Inc. focuses on acquiring difficult-to-source foreign-origin military systems and components — especially radar-related equipment and Russian-origin systems — for authorized research, development, testing, and evaluation by the United States government.
              </p>
              <div className="button-row">
                <a className="primary-button" href="#contact">Contact Procurement <ArrowRight size={17} /></a>
                <a className="secondary-button" href="#contracting">View Capabilities</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="profile-card">
              <div className="profile-inner">
                <p className="card-label">Supplier Profile</p>
                <InfoRow icon={Building2} title="Company" text="United Acquisition Management, Inc." />
                <InfoRow icon={Globe2} title="Website" text="uam-inc.com" />
                <InfoRow icon={ShieldCheck} title="Primary Focus" text="Specialized supplier focused on hard-to-procure foreign-origin defense systems for U.S. government R&D." />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="container section">
        <div className="section-head">
          <p className="section-label">Capabilities</p>
          <h2>Built for serious procurement, not retail browsing.</h2>
          <p>UAM is positioned as a specialized sourcing partner for difficult foreign-origin defense equipment. The emphasis is lawful acquisition support for systems that are hard to locate, hard to document, and valuable for U.S. research, testing, exploitation, and evaluation programs.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <article className="capability-card" key={item.title}>
                <div className="capability-icon"><Icon size={26} /></div>
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
            <p className="section-label">Equipment Categories</p>
            <h2>Focused on scarce systems, not commodity catalog supply.</h2>
            <p>Many target items should not be presented as an open retail catalog. A controlled category-based structure keeps the site professional while making clear that UAM handles specialized sourcing requests for authorized government and prime-contractor channels.</p>
          </div>
          <div className="category-grid">
            {categories.map((category) => <div className="category-card" key={category}>{category}</div>)}
          </div>
        </div>
      </section>

      <section id="contracting" className="container section">
        <div className="contract-card">
          <div>
            <p className="section-label">Government Contracting</p>
            <h2>Specialized sourcing requires clean contracting and compliance signals.</h2>
            <p>This section should eventually include UEI, CAGE Code, NAICS codes, capability statement, and clear language that all sourcing is subject to applicable U.S. law, sanctions restrictions, export-control rules, end-use controls, and government authorization requirements.</p>
          </div>
          <div className="todo-card">
            <p className="todo-title">To Add Next</p>
            <ul>
              <li>UEI</li>
              <li>CAGE Code</li>
              <li>NAICS Codes</li>
              <li>Capability Statement PDF</li>
              <li>Compliance / end-use statement</li>
              <li>R&D / test & evaluation focus statement</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="container contact-section">
        <div>
          <p className="section-label">Contact</p>
          <h2>Send authorized sourcing inquiries directly to UAM.</h2>
          <p>For sensitive or controlled sourcing requests, submit a concise RFQ or capability discussion request. Public-facing copy should stay serious, restrained, and compliance-forward.</p>
        </div>
        <div className="contact-links">
          <a href="mailto:Dan.Zugrav@uam-inc.com"><Mail size={21} /> Dan.Zugrav@uam-inc.com</a>
          <a href="tel:+15618019030"><Phone size={21} /> +1 (561) 801-9030</a>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} United Acquisition Management, Inc. All rights reserved. Founded in 2010.</footer>
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
