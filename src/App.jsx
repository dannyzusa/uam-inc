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

/*
  Hero footage: NASA Scientific Visualization Studio #5615 — "NISAR satellite orbit"
  (svs.gsfc.nasa.gov/5615). NASA imagery is in the public domain; courtesy credit:
  NASA's Scientific Visualization Studio / Kel Elkins (STC).
  The JS loop window below replays only 0–20.5 s so the multi-satellite fleet
  pull-back at ~21 s never appears.

  To self-host a trimmed loop later, run locally:
    ffmpeg -i nisar_orbit_1080p60.mp4 -t 20.5 -an -vf "scale=1920:-2" \
      -c:v libx264 -preset slow -crf 23 -movflags +faststart public/videos/uam-hero-loop.mp4
  then change HERO_VIDEO_SRC to "/videos/uam-hero-loop.mp4".

  Selected systems imagery via Wikimedia Commons contributors
  (Antonov An-196 Liutyi in Kouvola; UKRSPECSYSTEMS PD-2 photo 1 — free licenses,
  see the file pages on commons.wikimedia.org for author and license details).
*/

const HERO_VIDEO_SRC =
  "https://svs.gsfc.nasa.gov/vis/a000000/a005600/a005615/nisar_orbit_1080p60.mp4";
const HERO_POSTER =
  "https://svs.gsfc.nasa.gov/vis/a000000/a005600/a005615/nisar_orbit.02415_preview.jpg";
const LOOP_START = 0;
const LOOP_END = 20.5;

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
    desc: "Low-altitude surveillance radar for detection of aircraft, helicopters, and cruise missiles at terrain-masked approach profiles.",
  },
  {
    title: "Nebo-M Radar",
    subtitle: "Mobile Multiband Radar System",
    category: "Radar Systems",
    image: "/images/system-radar-nebo.jpg",
    desc: "Multiband (VHF/L/X) radar complex with counter-low-observable detection roles; high-value subject for signature and waveform exploitation.",
  },
  {
    title: "P-18 Radar Family",
    subtitle: "Legacy / Modernized Radar Systems",
    category: "Radar Systems",
    image: "/images/system-radar-p18.jpg",
    desc: "VHF early-warning radar family (P-11 / P-18 / P-19 lineage) with modernized digital variants and complete 4-year ZIP-kit support.",
  },

  {
    title: "Buk Family",
    subtitle: "Air Defense Platforms",
    category: "Air Defense",
    image: "/images/system-airdefense-buk.jpg",
    desc: "9K37-series medium-range SAM systems, including 9A310/9A39 vehicles, fire-control radars, and associated missile rounds.",
  },
  {
    title: "Tor / Short-Range AD",
    subtitle: "Mobile Air Defense Systems",
    category: "Air Defense",
    image: "/images/system-airdefense-tor.jpg",
    desc: "9A330/9A331 Tor point-defense systems with 9M331 missiles or 9M334 missile modules for evaluation and threat replication.",
  },
  {
    title: "ZSU-23-4M Shilka",
    subtitle: "Self-Propelled AA Gun System",
    category: "Air Defense",
    image: "/images/system-airdefense-shilka.jpg",
    desc: "Modernized self-propelled anti-aircraft system with quad 23 mm guns and radar fire control; related 2K22M Tunguska support available.",
  },

  {
    title: "T-90 Series",
    subtitle: "Main Battle Tank Platforms",
    category: "Armored Platforms",
    image: "/images/system-armor-t90.jpg",
    desc: "Modern MBT platforms and subsystems; T-72M1/M1A and T-80BV/U-series modernized vehicles also supported.",
  },
  {
    title: "BMP-3",
    subtitle: "Infantry Fighting Vehicle",
    category: "Armored Platforms",
    image: "/images/system-bmp3.jpg",
    desc: "Amphibious IFV with 100 mm / 30 mm combined armament; BTR-80, BTR-3E1, and BTR-4 wheeled APCs also supported.",
  },

  {
    title: "Su-27 Family",
    subtitle: "Upgraded Variants",
    category: "Aircraft / Helicopters",
    image: "/images/system-aircraft.jpg",
    desc: "Airframes, engines, and N001 pulse-Doppler radar sets with track-while-scan and look-down/shoot-down capability.",
  },
  {
    title: "MiG-29 Family",
    subtitle: "Aircraft Platforms & Systems",
    category: "Aircraft / Helicopters",
    image: "/images/system-aircraft-mig29.jpg",
    desc: "Aircraft, engines, radar, and critical components for test, evaluation, and aggressor-support requirements.",
  },
  {
    title: "Mi-24 / Mi-35",
    subtitle: "Hind-Series Helicopters",
    category: "Aircraft / Helicopters",
    image: "/images/system-hind.jpg",
    desc: "Hind-series attack helicopters, engines, dynamic components, and spares packages.",
  },

  {
    title: "Radar Electronics",
    subtitle: "Control, Sensor & Signal Systems",
    category: "Electronics",
    image: "/images/system-electronics.jpg",
    desc: "Fire-control, sensor, signal-processing, and command-control-communication blocks for former Soviet-Bloc systems.",
  },

  {
    title: "AN-196 Liutyi",
    subtitle: "Long-Range Strike UAS",
    category: "Drones / UAS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Antonov_An-196_Liutyi_in_Kouvola.jpg/1280px-Antonov_An-196_Liutyi_in_Kouvola.jpg",
    fallback: "/images/system-drone-liutyi.jpg",
    desc: "Ukrainian deep-strike one-way attack UAS; 1,000–2,000 km operational range with a 50–75 kg warhead and INS / satellite guidance.",
  },
  {
    title: "Fire Point FP-1",
    subtitle: "Long-Range Strike UAS",
    category: "Drones / UAS",
    image: "/images/system-drone-fp1.jpg",
    desc: "Mass-produced Ukrainian one-way attack UAS; up to 1,600 km range with a 60–120 kg modular warhead and ECCM-hardened guidance.",
  },
  {
    title: "Shark UAS",
    subtitle: "Ukrspecsystems ISR Platform",
    category: "Drones / UAS",
    image: "/images/system-drone-shark.jpg",
    desc: "Catapult-launched ISR and fire-correction UAS; EW-resistant AES-256 datalink to 60–80 km, 30× EO payload, parachute recovery.",
  },
  {
    title: "PD-2",
    subtitle: "Ukrspecsystems VTOL / Fixed-Wing UAS",
    category: "Drones / UAS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/UKRSPECSYSTEMS_PD-2_photo_1.jpg/1280px-UKRSPECSYSTEMS_PD-2_photo_1.jpg",
    fallback: "/images/system-drone-pd2.jpg",
    desc: "Multi-role UAS with modular VTOL conversion; up to 10 h endurance, ~200 km datalink, ISR and light-strike payload options.",
  },
  {
    title: "Leleka-100",
    subtitle: "DeViRo Tactical Reconnaissance UAV",
    category: "Drones / UAS",
    image: "/images/system-drone-leleka.jpg",
    desc: "Proven tactical reconnaissance UAV in wide Ukrainian service; basis for the RAM II loitering-munition family.",
  },
  {
    title: "RAM II / RAM-2X",
    subtitle: "Loitering Munition",
    category: "Drones / UAS",
    image: "/images/system-drone-ramii.jpg",
    desc: "Loitering munition with 3 kg thermobaric, shaped-charge, or HE-frag warheads; RAM-2X extends reach beyond 100 km under EW conditions.",
  },
  {
    title: "Punisher",
    subtitle: "UA Dynamics Strike UAS",
    category: "Drones / UAS",
    image: "/images/system-drone-punisher.jpg",
    desc: "Reusable low-signature strike UAS employed by Ukrainian special operations forces for precision drops behind the line of contact.",
  },
  {
    title: "A1-CM Furia",
    subtitle: "Athlon Avia Reconnaissance UAV",
    category: "Drones / UAS",
    image: "/images/system-drone-furia.jpg",
    desc: "Tactical ISR and artillery fire-correction UAV in Ukrainian service since 2014; flying-wing airframe with encrypted datalink.",
  },
  {
    title: "Spectator-M1",
    subtitle: "Tactical ISR UAV",
    category: "Drones / UAS",
    image: "/images/system-drone-spectator.jpg",
    desc: "Hand- and catapult-launched tactical reconnaissance UAV with parachute recovery for contested-environment ISR.",
  },
  {
    title: "Orlan-10",
    subtitle: "Foreign-Origin ISR UAS",
    category: "Drones / UAS",
    image: "/images/system-drone-orlan10.jpg",
    desc: "Russian-origin ISR and EW-relay UAS; airframes and component sets relevant to exploitation and counter-UAS development.",
  },

  {
    title: "Magura V5",
    subtitle: "Multipurpose Unmanned Surface Vessel",
    category: "Naval / USV",
    image: "/images/system-usv-magura.jpg",
    desc: "Ukrainian multipurpose USV; ~800 km range at high sprint speeds with a payload sized to defeat surface combatants.",
  },
  {
    title: "Sea Baby",
    subtitle: "Heavy-Payload Unmanned Surface Vessel",
    category: "Naval / USV",
    image: "/images/system-usv-seababy.jpg",
    desc: "Long-range heavy-payload USV class associated with strikes on port infrastructure and stationary naval targets.",
  },
];

const tabs = [
  "All Categories",
  "Radar Systems",
  "Air Defense",
  "Armored Platforms",
  "Aircraft / Helicopters",
  "Electronics",
  "Drones / UAS",
  "Naval / USV",
  "Components & Spares",
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
    <main className={`site-shell ${page === "/" ? "is-home" : "is-inner"}`}>
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
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || page !== "/";

  return (
    <header className={`site-header ${solid ? "scrolled" : ""}`}>
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

function HeroVideo() {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Replay only the single-satellite radar pass; never reach the
    // multi-satellite fleet pull-back at ~21 s.
    const resetLoop = () => {
      video.currentTime = LOOP_START;
      const playing = video.play();
      if (playing && typeof playing.catch === "function") {
        playing.catch(() => {});
      }
    };

    const onTimeUpdate = () => {
      if (video.currentTime >= LOOP_END) resetLoop();
    };

    const onEnded = () => resetLoop();

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);

    // timeupdate only fires ~4 Hz; a frame callback catches the boundary
    // precisely so the fleet shot can never flash on screen.
    let frameHandle = null;
    const onFrame = () => {
      if (video.currentTime >= LOOP_END - 0.08) resetLoop();
      if (typeof video.requestVideoFrameCallback === "function") {
        frameHandle = video.requestVideoFrameCallback(onFrame);
      }
    };
    if (typeof video.requestVideoFrameCallback === "function") {
      frameHandle = video.requestVideoFrameCallback(onFrame);
    }

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
      if (
        frameHandle !== null &&
        typeof video.cancelVideoFrameCallback === "function"
      ) {
        video.cancelVideoFrameCallback(frameHandle);
      }
    };
  }, []);

  return (
    <div className="hero-media" aria-hidden="true">
      <video
        ref={videoRef}
        className="hero-video"
        src={HERO_VIDEO_SRC}
        poster={HERO_POSTER}
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      <div className="hero-grade" />
      <div className="hero-grain" />
      <div className="hero-vignette" />
    </div>
  );
}

function HomePage({ navigate, openInquiry }) {
  return (
    <>
      <section className="cine-hero">
        <HeroVideo />

        <div className="hero-hud" aria-hidden="true">
          <span className="hud-dot" />
          <span>Radar Pass · Live</span>
          <span className="hud-sep">|</span>
          <span>ALT 747 KM</span>
          <span className="hud-sep">|</span>
          <span>VEL 26,900 KM/H</span>
          <span className="hud-sep">|</span>
          <span>SRC · L-BAND SAR</span>
        </div>

        <div className="hero-copy-block">
          <p className="kicker">
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
            <button className="accent-button" type="button" onClick={openInquiry}>
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

        <div className="hero-credentials" aria-label="Credentials">
          <span>Service-Disabled Veteran-Owned Small Business</span>
          <span className="hud-sep">|</span>
          <span>CAGE 61HR4</span>
          <span className="hud-sep">|</span>
          <span>DUNS 962497710</span>
          <span className="hud-sep">|</span>
          <span>Founded 2010</span>
        </div>
      </section>

      <section className="home-section" id="capabilities">
        <div className="section-head">
          <span className="section-index">01</span>
          <h2>Capabilities</h2>
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

      <section className="home-section" id="systems">
        <div className="section-head">
          <span className="section-index">02</span>
          <h2>Systems of Interest</h2>
          <button
            className="section-link"
            type="button"
            onClick={() => navigate("/systems")}
          >
            View Full Catalog →
          </button>
        </div>

        <div className="home-systems-rail">
          {[systems[12], systems[14], systems[1], systems[22]].map((item) => (
            <article className="system-card" key={item.title}>
              <SystemImage item={item} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section" id="contracting">
        <div className="section-head">
          <span className="section-index">03</span>
          <h2>Contracting</h2>
        </div>

        <div className="contract-strip">
          <div>
            <strong>SDVOSB</strong>
            <span>Service-Disabled Veteran-Owned Small Business</span>
          </div>
          <div>
            <strong>CAGE 61HR4</strong>
            <span>Commercial and Government Entity Code</span>
          </div>
          <div>
            <strong>DUNS 962497710</strong>
            <span>Unique Entity Identification</span>
          </div>
          <div>
            <strong>Since 2010</strong>
            <span>Supporting authorized DOD RDT&amp;E programs</span>
          </div>
        </div>
      </section>

      <section className="home-section home-cta">
        <h2>Send authorized sourcing inquiries directly to UAM.</h2>
        <div className="hero-actions">
          <button className="accent-button" type="button" onClick={openInquiry}>
            Open Procurement Inquiry
          </button>
          <button
            className="outline-button"
            type="button"
            onClick={() => navigate("/contact")}
          >
            Contact Details
          </button>
        </div>
      </section>
    </>
  );
}

function SystemImage({ item }) {
  const [src, setSrc] = React.useState(item.image);

  return (
    <img
      src={src}
      alt={item.title}
      loading="lazy"
      onError={() => {
        if (item.fallback && src !== item.fallback) setSrc(item.fallback);
      }}
    />
  );
}

function CapabilitiesPage() {
  return (
    <section className="page-frame content-page">
      <div className="page-heading">
        <p className="kicker">Capabilities</p>

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
        <p className="kicker">Systems of Interest</p>

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
            <SystemImage item={item} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              {item.desc && <p className="system-desc">{item.desc}</p>}
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
        <p className="kicker">Compliance / Contracting</p>

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
        <p className="kicker">Contact</p>

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
        <button className="accent-button" type="button" onClick={openInquiry}>
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
  React.useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

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
      `Name: ${name}\nOrganization: ${organization}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:Dan.Zugrav@uam-inc.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
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
          <p className="kicker">Procurement Inquiry</p>
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

          <button className="accent-button form-submit" type="submit">
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
      rights reserved. Sourcing · Licensing · Delivery.
    </footer>
  );
}
