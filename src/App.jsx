import React from "react";
import {
  ShieldCheck,
  FileCheck2,
  Mail,
  Phone,
  Radar,
  Target,
  CheckCircle2,
  LockKeyhole,
  BriefcaseBusiness,
  MapPin,
  Send,
  X,
  PackageCheck,
} from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
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
    title: "Podlet Radar",
    subtitle: "Mobile Low-Altitude Radar",
    category: "Radar Systems",
    image: "/images/system-radar-podlet.jpg",
  },
  {
    title: "Nebo-M Radar",
    subtitle: "Mobile Multiband Radar System",
    category: "Radar Systems",
    image: "/images/system-radar-nebo.jpg",
  },
  {
    title: "P-18 Radar Family",
    subtitle: "Legacy / Modernized Radar Systems",
    category: "Radar Systems",
    image: "/images/system-radar-p18.jpg",
  },

  {
    title: "Buk Family",
    subtitle: "Air Defense Platforms",
    category: "Air Defense",
    image: "/images/system-airdefense-buk.jpg",
  },
  {
    title: "Tor / Short-Range AD",
    subtitle: "Mobile Air Defense Systems",
    category: "Air Defense",
    image: "/images/system-airdefense-tor.jpg",
  },

  {
    title: "T-90 Series",
    subtitle: "Main Battle Tank Platforms",
    category: "Armored Platforms",
    image: "/images/system-armor-t90.jpg",
  },
  {
    title: "BMP-3",
    subtitle: "Infantry Fighting Vehicle",
    category: "Armored Platforms",
    image: "/images/system-bmp3.jpg",
  },

  {
    title: "Su-27 Family",
    subtitle: "Upgraded Variants",
    category: "Aircraft / Helicopters",
    image: "/images/system-aircraft.jpg",
  },
  {
    title: "MiG-29 Family",
    subtitle: "Aircraft Platforms & Systems",
    category: "Aircraft / Helicopters",
    image: "/images/system-aircraft-mig29.jpg",
  },
  {
    title: "Mi-24 / Mi-35",
    subtitle: "Hind-Series Helicopters",
    category: "Aircraft / Helicopters",
    image: "/images/system-hind.jpg",
  },

  {
    title: "Radar Electronics",
    subtitle: "Control, Sensor & Signal Systems",
    category: "Electronics",
    image: "/images/system-electronics.jpg",
  },

  {
    title: "Orlan-10",
    subtitle: "Foreign-Origin ISR UAS",
    category: "Drones / UAS",
    image: "/images/system-drone-orlan10.jpg",
  },
];

const tabs = [
  "All Categories",
  "Radar Systems",
  "Air Defense",
  "Armored Platforms",
  "Aircraft / Helicopters",
  "Electronics",
  "Components & Spares",
  "Drones / UAS",
];

const componentSpares = [
  "4-year ZIP-kits: 9A33BM3 fighting vehicle",
  "4-year ZIP-kits: 1S91M2 system",
  "Radar systems: P-11, P-18, P-19",
  "Aircraft engines and radar systems: Su-27, MiG-29",
  "Helicopter engines and components: Mi-24",
  "Command, control, and communication components",
  "System spares and blocks for former Soviet-Bloc systems",
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

function normalizePath(path) {
  const allowed = ["/", "/capabilities", "/systems", "/contracting", "/contact"];
  return allowed.includes(path) ? path : "/";
}

export default function App() {
  const [path, setPath] = React.useState(getInitialPath());
  const [showInquiryForm, setShowInquiryForm] = React.useState(false);

  React.useEffect(() => {
    const onPopState = () => setPath(window.location.pathname || "/");
    window.addEventListener("popstate", onPopState);

    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (nextPath) => {
    const cleanPath = normalizePath(nextPath);

    if (cleanPath !== path) {
      window.history.pushState({}, "", cleanPath);
      setPath(cleanPath);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const page = normalizePath(path);

  return (
    <main className="site-shell">
      <Header
        page={page}
        navigate={navigate}
        openInquiry={() => setShowInquiryForm(true)}
      />

      {page === "/" && (
        <HomePage
          navigate={navigate}
          openInquiry={() => setShowInquiryForm(true)}
        />
      )}

      {page === "/capabilities" && <CapabilitiesPage />}
      {page === "/systems" && <SystemsPage />}
      {page === "/contracting" && <ContractingPage />}
      {page === "/contact" && (
        <ContactPage openInquiry={() => setShowInquiryForm(true)} />
      )}

      <Footer />

      {showInquiryForm && (
        <InquiryModal close={() => setShowInquiryForm(false)} />
      )}
    </main>
  );
}

function Header({ page, navigate, openInquiry }) {
  return (
    <header className="site-header">
      <button
        className="brand-link"
        type="button"
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
            type="button"
            className={page === item.path ? "active" : ""}
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button className="nav-cta" type="button" onClick={openInquiry}>
        Contact UAM
      </button>
    </header>
  );
}

function HomePage({ navigate, openInquiry }) {
  return (
    <section className="page-frame home-frame">
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
            <button className="gold-button" type="button" onClick={openInquiry}>
              Contact Procurement
            </button>

            <button
              className="outline-button"
              type="button"
              onClick={() => navigate("/capabilities")}
            >
              Our Capabilities
            </button>
          </div>
        </div>
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
  const [activeTab, setActiveTab] = React.useState("All Categories");

  const visibleSystems =
    activeTab === "All Categories"
      ? systems
      : systems.filter((item) => item.category === activeTab);

  const showComponents =
    activeTab === "All Categories" || activeTab === "Components & Spares";

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
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
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

        {showComponents && <ComponentsCard />}
      </div>

      <p className="systems-note">
        Information on this page is general in nature. Specific systems and
        capabilities are discussed only with authorized parties.
      </p>
    </section>
  );
}

function ComponentsCard() {
  return (
    <article className="components-card">
      <div className="components-card-top">
        <PackageCheck size={30} />
        <span>Components & Spares</span>
      </div>

      <h3>ZIP kits and critical subsystem support</h3>

      <ul>
        {componentSpares.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
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
            <li>CAGE Code: 61HR4</li>
            <li>DUNS: 962497710</li>
            <li>Service Disabled Veteran-Owned Small Business</li>
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

function ContactPage({ openInquiry }) {
  return (
    <section className="page-frame content-page contact-page">
      <div className="page-heading contact-heading">
        <p className="gold-kicker">Contact</p>

        <h1>Send authorized sourcing inquiries directly to UAM.</h1>

        <p>
          For controlled or sensitive sourcing requests, contact UAM directly
          with a concise RFQ, system description, or capability discussion
          request. Inquiries should relate to authorized government, contractor,
          research, testing, or evaluation requirements.
        </p>
      </div>

      <div className="contact-clean-grid">
        <ContactCard
          icon={Mail}
          title="Email"
          text="Dan.Zugrav@uam-inc.com"
          href="mailto:Dan.Zugrav@uam-inc.com"
        />

        <ContactCard
          icon={Phone}
          title="Primary Phone"
          text="+1 (561) 801-9030"
          href="tel:+15618019030"
        />

        <ContactCard
          icon={Phone}
          title="Secondary Phone"
          text="+40 758 105 104"
          href="tel:+40758105104"
        />

        <ContactCard
          icon={MapPin}
          title="Address"
          text="7246 Marlow Place, University Park, Florida 34201"
        />
      </div>

      <div className="contact-form-cta">
        <button className="gold-button" type="button" onClick={openInquiry}>
          Open Procurement Inquiry Form
        </button>
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

  if (href) {
    return (
      <a className="contact-card-clean" href={href}>
        {content}
      </a>
    );
  }

  return <div className="contact-card-clean">{content}</div>;
}

function InquiryModal({ close }) {
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
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="inquiry-modal">
        <button
          className="modal-close"
          type="button"
          onClick={close}
          aria-label="Close form"
        >
          <X size={22} />
        </button>

        <div className="form-header">
          <p className="gold-kicker">Procurement Inquiry</p>
          <h2>Submit a sourcing request</h2>
          <p>
            Provide contact information and a concise description of the
            requirement. The form opens a prepared email to UAM.
          </p>
        </div>

        <form className="inquiry-form" onSubmit={handleSubmit}>
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
  return (
    <footer>
      © {new Date().getFullYear()} United Acquisition Management, Inc. All
      rights reserved. Real systems. Real capability. Authorized use only.
    </footer>
  );
}
