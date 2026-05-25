import React from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Home,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Radar,
  Send,
  ShieldCheck,
  Target,
  X,
} from "lucide-react";

const navItems = [
  { label: "Capabilities", path: "/capabilities" },
  { label: "Systems", path: "/systems" },
  { label: "Contracting", path: "/contracting" },
  { label: "Contact", path: "/contact" },
];

const capabilities = [
  {
    icon: Target,
    title: "Hard-to-Procure Systems",
    text: "Access to foreign-origin systems, components, and technologies with limited or restricted availability.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Driven",
    text: "Procurement activity is conducted in accordance with U.S. law, sanctions, export controls, and end-use rules.",
  },
  {
    icon: LockKeyhole,
    title: "Discreet & Professional",
    text: "We operate with the discretion, security, and professional communication required in defense procurement.",
  },
];

const detailedCapabilities = [
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
    title: "Documentation & Compliance",
    text: "Procurement support structured around lawful government requirements, documentation, sanctions compliance, export-control rules, and end-use controls.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Supplier Coordination",
    text: "Support for locating sources, validating availability, coordinating communication, and preparing procurement-relevant information for authorized parties.",
  },
];

const systems = [
  { title: "S-300 / 1S91M3 Radar", subtitle: "Surveillance & Acquisition Radar", category: "Radar Systems", image: "/images/system-radar.jpg" },
  { title: "T-80 / T-90 Series", subtitle: "Main Battle Tanks", category: "Armored Platforms", image: "/images/system-armor.jpg" },
  { title: "BMP-3", subtitle: "Infantry Fighting Vehicle", category: "Armored Platforms", image: "/images/system-bmp3.jpg" },
  { title: "Su-27 Family", subtitle: "Upgraded Variants", category: "Aircraft / Helicopters", image: "/images/system-aircraft.jpg" },
  { title: "Mi-24 / Mi-35", subtitle: "Hind-Series Helicopters", category: "Aircraft / Helicopters", image: "/images/system-hind.jpg" },
  { title: "Air Defense Systems", subtitle: "SAM Systems & Components", category: "Air Defense", image: "/images/system-airdefense.jpg" },
  { title: "Electronic Warfare Systems", subtitle: "EW Equipment & Components", category: "Electronics", image: "/images/system-ew.jpg" },
  { title: "Components & Spares", subtitle: "Critical Parts & Subsystems", category: "Components & Spares", image: "/images/system-components.jpg" },
];

const categories = ["All Categories", "Radar Systems", "Air Defense", "Armored Platforms", "Aircraft / Helicopters", "Electronics", "Components & Spares"];

const siteStructure = [
  { icon: Home, title: "Home", text: "Overview and company positioning", path: "/" },
  { icon: ShieldCheck, title: "Capabilities", text: "Procurement capabilities and approach", path: "/capabilities" },
  { icon: Target, title: "Systems of Interest", text: "Foreign-origin systems and technologies", path: "/systems" },
  { icon: ClipboardCheck, title: "Compliance / Contracting", text: "Government contracting and compliance", path: "/contracting" },
  { icon: Mail, title: "Contact", text: "Submit inquiries and connect with UAM", path: "/contact" },
];

const process = ["Requirement Review", "Source Identification", "Availability Verification", "Supplier Coordination", "Documentation Review", "Procurement Support"];

function getInitialPath() {
  if (typeof window === "undefined") return "/";
  return window.location.pathname || "/";
}

export default function App() {
  const [path, setPath] = React.useState(getInitialPath());
  const [isInquiryOpen, setIsInquiryOpen] = React.useState(false);

  React.useEffect(() => {
    const onPopState = () => setPath(window.location.pathname || "/");
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = isInquiryOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isInquiryOpen]);

  const navigate = (nextPath) => {
    if (nextPath !== path) {
      window.history.pushState({}, "", nextPath);
      setPath(nextPath);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const page = normalizePath(path);

  return (
    <main className="site-shell">
      <div className="site-frame">
        <Header page={page} navigate={navigate} openInquiry={() => setIsInquiryOpen(true)} />

        {page === "/" && <HomePage navigate={navigate} openInquiry={() => setIsInquiryOpen(true)} />}
        {page === "/capabilities" && <CapabilitiesPage />}
        {page === "/systems" && <SystemsPage />}
        {page === "/contracting" && <ContractingPage />}
        {page === "/contact" && <ContactPage openInquiry={() => setIsInquiryOpen(true)} />}
      </div>

      <Footer />
      {isInquiryOpen && <InquiryModal onClose={() => setIsInquiryOpen(false)} />}
    </main>
  );
}

function normalizePath(path) {
  const allowed = ["/", "/capabilities", "/systems", "/contracting", "/contact"];
  return allowed.includes(path) ? path : "/";
}

function Header({ page, navigate, openInquiry }) {
  return (
    <header className="site-header">
      <button className="brand-link" onClick={() => navigate("/")} aria-label="Go to home">
        <span className="brand-logo">UAM</span>
        <span className="brand-text">
          <strong>United Acquisition Management</strong>
          <em>Defense Procurement</em>
        </span>
      </button>

      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <button key={item.path} className={page === item.path ? "active" : ""} onClick={() => navigate(item.path)}>
            {item.label}
          </button>
        ))}
      </nav>

      <button className="nav-cta" onClick={openInquiry}>Contact UAM</button>
    </header>
  );
}

function HomePage({ navigate, openInquiry }) {
  return (
    <section className="home-page">
      <div className="home-main-grid">
        <div className="hero-copy-block">
          <p className="gold-kicker">Specialized Procurement for U.S. Department of Defense</p>
          <h1>Foreign materiel procurement for DOD research and evaluation.</h1>
          <p>
            United Acquisition Management, Inc. is a specialized procurement firm sourcing hard-to-procure
            foreign-origin military systems, components, and technologies for authorized U.S. Department of
            Defense research, development, testing, evaluation, and exploitation programs.
          </p>

          <div className="hero-actions">
            <button className="gold-button" onClick={openInquiry}>Contact Procurement</button>
            <button className="outline-button" onClick={() => navigate("/capabilities")}>Our Capabilities</button>
          </div>
        </div>

        <aside className="site-map-panel">
          <p className="gold-kicker">Site Structure</p>
          {siteStructure.map((item) => {
            const Icon = item.icon;
            return (
              <button key={item.path} className="site-map-item" onClick={() => navigate(item.path)}>
                <Icon size={23} />
                <span>
                  <strong>{item.title}</strong>
                  <em>{item.text}</em>
                </span>
                <ArrowRight size={16} />
              </button>
            );
          })}
        </aside>
      </div>

      <div className="home-capability-strip">
        {capabilities.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="strip-card">
              <Icon size={30} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function CapabilitiesPage() {
  return (
    <section className="content-page">
      <div className="page-heading">
        <p className="gold-kicker">Capabilities</p>
        <h1>Discreet procurement support for difficult foreign materiel.</h1>
        <p>
          UAM supports government and prime-contractor requirements where access, supplier coordination,
          documentation, discretion, and lawful sourcing matter more than volume.
        </p>
      </div>

      <div className="capability-grid">
        {detailedCapabilities.map((item) => (
          <FeatureCard key={item.title} icon={item.icon} title={item.title}>{item.text}</FeatureCard>
        ))}
      </div>
    </section>
  );
}

function SystemsPage() {
  const [activeCategory, setActiveCategory] = React.useState("All Categories");
  const visibleSystems = activeCategory === "All Categories" ? systems : systems.filter((item) => item.category === activeCategory);

  return (
    <section className="systems-page">
      <div className="page-heading compact">
        <p className="gold-kicker">Systems of Interest</p>
        <h1>Foreign-Origin Defense Systems</h1>
        <p>
          UAM supports authorized procurement requirements involving foreign-origin military systems,
          components, and technologies for research, testing, evaluation, training, and analysis programs.
        </p>
      </div>

      <div className="systems-tabs" aria-label="System categories">
        {categories.map((category) => (
          <button key={category} className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      <div className="systems-gallery">
        {visibleSystems.map((item) => (
          <article className="system-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="systems-note">
        Information on this page is general in nature. Specific systems and capabilities are discussed only with authorized parties.
      </p>
    </section>
  );
}

function ContractingPage() {
  return (
    <section className="content-page">
      <div className="page-heading">
        <p className="gold-kicker">Compliance / Contracting</p>
        <h1>Built around lawful sourcing and clean documentation.</h1>
        <p>
          UAM supports authorized procurement requirements for research, development, testing, evaluation,
          exploitation, and training support. All sourcing is subject to applicable U.S. law, sanctions restrictions,
          export-control rules, end-use controls, and government authorization requirements.
        </p>
      </div>

      <div className="contract-layout">
        <div className="facts-card">
          <h2>Company Information</h2>
          <ul>
            <li>United Acquisition Management, Inc.</li>
            <li>Founded in 2010</li>
            <li>Specialized defense procurement support</li>
            <li>Foreign-origin systems and components</li>
            <li>Capability statement available upon request</li>
          </ul>
        </div>

        <div className="process-grid">
          {process.map((step) => (
            <div className="process-card" key={step}>
              <CheckCircle2 size={18} />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPage({ openInquiry }) {
  return (
    <section className="content-page contact-page">
      <div className="page-heading contact-heading">
        <p className="gold-kicker">Contact</p>
        <h1>Send authorized sourcing inquiries directly to UAM.</h1>
        <p>
          For controlled or sensitive sourcing requests, contact UAM directly with a concise RFQ, system description,
          or capability discussion request. Inquiries should relate to authorized government, contractor, research,
          testing, or evaluation requirements.
        </p>
      </div>

      <div className="contact-grid-clean">
        <ContactCard icon={Mail} title="Email" text="Dan.Zugrav@uam-inc.com" href="mailto:Dan.Zugrav@uam-inc.com" />
        <ContactCard icon={Phone} title="Primary Phone" text="+1 (561) 801-9030" href="tel:+15618019030" />
        <ContactCard icon={Phone} title="Secondary Phone" text="+40 758 105 104" href="tel:+40758105104" />
        <ContactCard icon={MapPin} title="Address" text="7246 Marlow Place, University Park, Florida 34201" />
      </div>

      <div className="contact-action-panel">
        <div>
          <p className="gold-kicker">Procurement Inquiry</p>
          <h2>Ready to submit a sourcing request?</h2>
          <p>Open the inquiry form to prepare a structured email with your name, organization, phone, email, and message.</p>
        </div>
        <button className="gold-button" onClick={openInquiry}>Open Procurement Inquiry Form</button>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, text, href }) {
  const content = (
    <>
      <Icon size={24} />
      <span>
        <strong>{title}</strong>
        <em>{text}</em>
      </span>
    </>
  );
  if (href) return <a className="contact-card-clean" href={href}>{content}</a>;
  return <div className="contact-card-clean">{content}</div>;
}

function InquiryModal({ onClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent("UAM Sourcing Inquiry");
    const body = encodeURIComponent(`Name: ${form.get("name") || ""}
Organization: ${form.get("organization") || ""}
Email: ${form.get("email") || ""}
Phone: ${form.get("phone") || ""}

Message:
${form.get("message") || ""}`);
    window.location.href = `mailto:Dan.Zugrav@uam-inc.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Procurement inquiry form">
      <div className="modal-panel">
        <button className="modal-close" onClick={onClose} aria-label="Close inquiry form"><X size={22} /></button>
        <form className="inquiry-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <p className="gold-kicker">Procurement Inquiry</p>
            <h2>Submit a sourcing request</h2>
            <p>Provide basic contact information and a concise description of the requirement. The form opens a prepared email to UAM.</p>
          </div>

          <div className="form-grid">
            <label><span>Name</span><input name="name" type="text" placeholder="Your name" required /></label>
            <label><span>Organization</span><input name="organization" type="text" placeholder="Company / agency / unit" /></label>
            <label><span>Email</span><input name="email" type="email" placeholder="name@example.com" required /></label>
            <label><span>Phone</span><input name="phone" type="tel" placeholder="+1 ..." /></label>
          </div>

          <label className="message-field">
            <span>Message</span>
            <textarea name="message" placeholder="Briefly describe the system, component, or procurement requirement." rows="6" required />
          </label>

          <button className="gold-button form-submit" type="submit"><Send size={17} /> Prepare Inquiry Email</button>
        </form>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, children }) {
  return (
    <article className="feature-card">
      <Icon size={30} />
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

function Footer() {
  return <footer>© {new Date().getFullYear()} United Acquisition Management, Inc. All rights reserved. Real systems. Real capability. Authorized use only.</footer>;
}
