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
  Target,
  CheckCircle2,
  Layers,
  LockKeyhole,
  Home,
  BriefcaseBusiness,
  ClipboardCheck,
  MapPin,
  Send,
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
    text: "All procurement activity is conducted in accordance with U.S. law, sanctions, export controls, and end-use rules.",
  },
  {
    icon: LockKeyhole,
    title: "Discreet & Professional",
    text: "We operate with the discretion, security, and professional communication required in defense procurement.",
  },
];

const systems = [
  {
    title: "S-300 / 1S91M3 Radar",
    subtitle: "Surveillance & Acquisition Radar",
    image: "/images/system-radar.jpg",
  },
  {
    title: "T-80 / T-90 Series",
    subtitle: "Main Battle Tanks",
    image: "/images/system-armor.jpg",
  },
  {
    title: "BMP-3",
    subtitle: "Infantry Fighting Vehicle",
    image: "/images/system-bmp3.jpg",
  },
  {
    title: "Su-27 Family",
    subtitle: "Upgraded Variants",
    image: "/images/system-aircraft.jpg",
  },
  {
    title: "Mi-24 / Mi-35",
    subtitle: "Hind-Series Helicopters",
    image: "/images/system-hind.jpg",
  },
  {
    title: "Air Defense Systems",
    subtitle: "SAM Systems & Components",
    image: "/images/system-airdefense.jpg",
  },
  {
    title: "Electronic Warfare Systems",
    subtitle: "EW Equipment & Components",
    image: "/images/system-ew.jpg",
  },
  {
    title: "Components & Spares",
    subtitle: "Critical Parts & Subsystems",
    image: "/images/system-components.jpg",
  },
];

const siteStructure = [
  {
    icon: Home,
    title: "Home",
    text: "Overview and company positioning",
    path: "/",
  },
  {
    icon: ShieldCheck,
    title: "Capabilities",
    text: "Procurement capabilities and approach",
    path: "/capabilities",
  },
  {
    icon: Target,
    title: "Systems of Interest",
    text: "Foreign-origin systems and technologies",
    path: "/systems",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance / Contracting",
    text: "Government contracting and compliance",
    path: "/contracting",
  },
  {
    icon: Mail,
    title: "Contact",
    text: "Submit inquiries and connect with UAM",
    path: "/contact",
  },
];

const process = [
  "Requirement Review",
  "Source Identification",
  "Availability Verification",
  "Supplier Coordination",
  "Documentation Review",
  "Procurement Support",
];

function getInitialPath() {
  if (typeof window === "undefined") return "/";
  return window.location.pathname || "/";
}

export default function App() {
  const [path, setPath] = React.useState(getInitialPath());

  React.useEffect(() => {
    const onPopState = () => setPath(window.location.pathname || "/");
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (nextPath) => {
    if (nextPath === path) return;
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const page = normalizePath(path);

  return (
    <main className="site-shell">
      <Header page={page} navigate={navigate} />

      {page === "/" && <HomePage navigate={navigate} />}
      {page === "/capabilities" && <CapabilitiesPage />}
      {page === "/systems" && <SystemsPage />}
      {page === "/contracting" && <ContractingPage />}
      {page === "/contact" && <ContactPage />}

      <Footer />
    </main>
  );
}

function normalizePath(path) {
  const allowed = ["/", "/capabilities", "/systems", "/contracting", "/contact"];
  return allowed.includes(path) ? path : "/";
}

function Header({ page, navigate }) {
  return (
    <header className="site-header">
      <button
        className="brand-link"
        onClick={() => navigate("/")}
        aria-label="Go to home"
      >
        <span className="brand-logo">UAM</span>
        <span className="brand-text">
          <strong>United Acquisition Management</strong>
          <em>Defense Procurement</em>
        </span>
      </button>

      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            key={item.path}
            className={page === item.path ? "active" : ""}
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button className="nav-cta" onClick={() => navigate("/contact")}>
        Contact UAM
      </button>
    </header>
  );
}

function HomePage({ navigate }) {
  return (
    <section className="page-frame home-frame compact-landing">
      <div className="home-main-grid">
        <div className="hero-copy-block">
          <p className="gold-kicker">
            Specialized Procurement for U.S. Department of Defense
          </p>

          <h1>Foreign materiel procurement for DOD research and evaluation.</h1>

          <p>
            United Acquisition Management, Inc. is a specialized procurement
            firm sourcing hard-to-procure foreign-origin military systems,
            components, and technologies for authorized U.S. Department of
            Defense research, development, testing, evaluation, and exploitation
            programs.
          </p>

          <div className="hero-actions">
            <button className="gold-button" onClick={() => navigate("/contact")}>
              Contact Procurement
            </button>

            <button
              className="outline-button"
              onClick={() => navigate("/capabilities")}
            >
              Our Capabilities
            </button>
          </div>
        </div>

        <aside className="site-map-panel">
          <p className="gold-kicker">Site Structure</p>

          {siteStructure.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.path}
                className="site-map-item"
                onClick={() => navigate(item.path)}
              >
                <Icon size={24} />
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
              <Icon size={34} />
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
    <section className="page-frame content-page">
      <div className="page-heading">
        <p className="gold-kicker">Capabilities</p>

        <h1>Discreet procurement support for difficult foreign materiel.</h1>

        <p>
          UAM supports government and prime-contractor requirements where
          access, supplier coordination, documentation, discretion, and lawful
          sourcing matter more than volume.
        </p>
      </div>

      <div className="capability-grid">
        <FeatureCard icon={ShieldCheck} title="Foreign Materiel Procurement">
          Sourcing hard-to-procure foreign-origin military systems, components,
          and technologies for authorized U.S. Department of Defense research
          and evaluation requirements.
        </FeatureCard>

        <FeatureCard icon={Radar} title="Radar & Air Defense Focus">
          Specialized support for radar systems, air-defense platforms,
          associated components, and technical materiel relevant to testing,
          analysis, and exploitation programs.
        </FeatureCard>

        <FeatureCard icon={FileCheck2} title="Documentation & Compliance">
          Procurement activity is structured around lawful government
          requirements, documentation, sanctions compliance, export-control
          rules, and end-use controls.
        </FeatureCard>

        <FeatureCard icon={BriefcaseBusiness} title="Supplier Coordination">
          Support for locating sources, validating availability, coordinating
          communication, and preparing procurement-relevant information for
          authorized parties.
        </FeatureCard>
      </div>
    </section>
  );
}

function SystemsPage() {
  return (
    <section className="page-frame systems-page">
      <div className="page-heading compact">
        <p className="gold-kicker">Systems of Interest</p>

        <h1>Foreign-Origin Defense Systems</h1>

        <p>
          UAM supports authorized procurement requirements involving
          foreign-origin military systems, components, and technologies for
          research, testing, evaluation, training, and analysis programs.
        </p>
      </div>

      <div className="systems-tabs" aria-label="System categories">
        <span className="active">All Categories</span>
        <span>Radar Systems</span>
        <span>Air Defense</span>
        <span>Armored Platforms</span>
        <span>Aircraft / Helicopters</span>
        <span>Electronics</span>
      </div>

      <div className="systems-gallery">
        {systems.map((item) => (
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
        Information on this page is general in nature. Specific systems and
        capabilities are discussed only with authorized parties.
      </p>
    </section>
  );
}

function ContractingPage() {
  return (
    <section className="page-frame content-page">
      <div className="page-heading">
        <p className="gold-kicker">Compliance / Contracting</p>

        <h1>Built around lawful sourcing and clean documentation.</h1>

        <p>
          UAM supports authorized procurement requirements for research,
          development, testing, evaluation, exploitation, and training support.
          All sourcing is subject to applicable U.S. law, sanctions
          restrictions, export-control rules, end-use controls, and government
          authorization requirements.
        </p>
      </div>

      <div className="contract-layout">
        <div className="facts-card">
          <h2>Company Information</h2>
          <ul>
            <li>United Acquisition Management, Inc.</li>
            <li>Founded in 2010</li>
            <li>Specialized foreign materiel procurement support</li>
            <li>Capability Statement Available Upon Request</li>
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

function ContactPage() {
  const [showInquiryForm, setShowInquiryForm] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get("name") || "";
    const organization = form.get("organization") || "";
    const email = form.get("email") || "";
    const phone = form.get("phone") || "";
    const message = form.get("message") || "";

    const subject = encodeURIComponent("UAM Sourcing Inquiry");
    const body = encodeURIComponent(
      `Name: ${name}
Organization: ${organization}
Email: ${email}
Phone: ${phone}

Message:
${message}`
    );

    window.location.href = `mailto:Dan.Zugrav@uam-inc.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="page-frame content-page contact-page">
      <div className="page-heading">
        <p className="gold-kicker">Contact</p>

        <h1>Send authorized sourcing inquiries directly to UAM.</h1>

        <p>
          For controlled or sensitive sourcing requests, contact UAM directly
          with a concise RFQ, system description, or capability discussion
          request. Inquiries should relate to authorized government, contractor,
          research, testing, or evaluation requirements.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-boxes">
          <a href="mailto:Dan.Zugrav@uam-inc.com">
            <Mail size={24} />
            <span>
              <strong>Email</strong>
              <em>Dan.Zugrav@uam-inc.com</em>
            </span>
          </a>

          <a href="tel:+15618019030">
            <Phone size={24} />
            <span>
              <strong>Primary Phone</strong>
              <em>+1 (561) 801-9030</em>
            </span>
          </a>

          <a href="tel:+40758105104">
            <Phone size={24} />
            <span>
              <strong>Secondary Phone</strong>
              <em>+40 758 105 104</em>
            </span>
          </a>

          <div>
            <MapPin size={24} />
            <span>
              <strong>Address</strong>
              <em>7246 Marlow Place, University Park, Florida 34201</em>
            </span>
          </div>

          <button
            className="gold-button inquiry-toggle"
            onClick={() => setShowInquiryForm(true)}
          >
            <Send size={17} /> Open Procurement Inquiry Form
          </button>
        </div>

        {showInquiryForm && (
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <p className="gold-kicker">Procurement Inquiry</p>
              <h2>Submit a sourcing request</h2>
              <p>
                Provide basic contact information and a concise description of
                the requirement. The form opens a prepared email to UAM.
              </p>
            </div>

            <div className="form-grid">
              <label>
                <span>Name</span>
                <input name="name" type="text" placeholder="Your name" required />
              </label>

              <label>
                <span>Organization</span>
                <input
                  name="organization"
                  type="text"
                  placeholder="Company / agency / unit"
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </label>

              <label>
                <span>Phone</span>
                <input name="phone" type="tel" placeholder="+1 ..." />
              </label>
            </div>

            <label className="message-field">
              <span>Message</span>
              <textarea
                name="message"
                placeholder="Briefly describe the system, component, or procurement requirement."
                rows="6"
                required
              />
            </label>

            <button className="gold-button form-submit" type="submit">
              <Send size={17} /> Prepare Inquiry Email
            </button>
          </form>
        )}
      </div>
    </section>
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
  return (
    <footer>
      © {new Date().getFullYear()} United Acquisition Management, Inc. All
      rights reserved. Real systems. Real capability. Authorized use only.
    </footer>
  );
}
