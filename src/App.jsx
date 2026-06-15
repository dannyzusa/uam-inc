import React from "react";
import {
  ShieldCheck,
  FileCheck2,
  Mail,
  Phone,
  Radar,
  CheckCircle2,
  BriefcaseBusiness,
  MapPin,
  Send,
  X,
  PackageCheck,
  Crosshair,
  Plane,
  Cpu,
  UserCheck,
  Award,
  Network,
  Container,
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

/* ------------------------------------------------------------------
   Why UAM — the small-contractor case, stated without apology
------------------------------------------------------------------ */

const differentiators = [
  {
    icon: UserCheck,
    title: "One Principal. Zero Layers.",
    text: "Your requirement is handled by the owner — not routed through account managers, committees, or subcontractor chains. Decisions in hours. Accountability in one name.",
  },
  {
    icon: Award,
    title: "Proven Prime",
    text: "Prime purchase-order awards from the Department of the Air Force, performed and closed. Small business, prime-contract discipline — not a broker, not a middle layer.",
  },
  {
    icon: Network,
    title: "Source Access Money Can't Rush",
    text: "Supplier relationships across Ukraine and Eastern Europe built since 2010 — long before this materiel was fashionable. When availability is the whole problem, access is the whole answer.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Without Compromise",
    text: "Every acquisition is structured around U.S. law, sanctions, export controls, and end-use requirements from the first contact — because one shortcut ends a program.",
  },
];

/* ------------------------------------------------------------------
   Acquisition lines — focused, current, ordered by demand
------------------------------------------------------------------ */

const categories = [
  {
    id: "interceptors",
    name: "Counter-UAS Interceptors",
    icon: Crosshair,
    tag: "Among the most sought-after categories in defense acquisition today",
    blurb:
      "Combat-proven Ukrainian interceptor UAS, credited in open reporting with neutralizing large numbers of one-way attack drones at a fraction of missile cost — directly relevant reference hardware for U.S. counter-UAS development, test, and evaluation.",
  },
  {
    id: "strike",
    name: "Long-Range Strike UAS",
    icon: Plane,
    tag: "Deep-strike one-way attack platforms",
    blurb:
      "Deep-strike systems delivering exceptional cost-per-effect at ranges beyond 1,000 km. Airframes, guidance architecture, and warhead integration relevant to exploitation, threat replication, and survivability analysis.",
  },
  {
    id: "isr",
    name: "Tactical ISR & Loitering",
    icon: Radar,
    tag: "Battle-tested reconnaissance and loitering munitions",
    blurb:
      "ISR and loitering-munition platforms matured through years of electronic warfare at the line of contact — datalinks, optics, and counter-jamming approaches with an operational track record few systems can match.",
  },
  {
    id: "radar",
    name: "Radar & Air Defense",
    icon: Cpu,
    tag: "Foundational international-origin sensors and SAM systems",
    blurb:
      "The radar and surface-to-air systems UAM has sourced since its founding — early-warning radar families, mobile SAM platforms, and the ZIP-kit depth to keep them operating through multi-year test programs.",
  },
  {
    id: "platforms",
    name: "Platforms & Components",
    icon: Container,
    tag: "Aircraft, armor, engines, and system blocks",
    blurb:
      "Fixed- and rotary-wing aircraft, armored vehicles, engines, radar sets, and the unglamorous component depth — spares, blocks, and ZIP kits — that determines whether an evaluation program runs for four years or stalls in four months.",
  },
];

const systems = [
  /* ---- Counter-UAS Interceptors ---- */
  {
    title: "Sting",
    subtitle: "Wild Hornets Interceptor UAS",
    category: "interceptors",
    image: "/images/system-int-sting.jpg",
    desc: "Among the most combat-proven interceptors fielded to date — credited with thousands of Shahed-class intercepts; 315+ km/h, thermal sensor with AI-assisted terminal guidance, man-portable.",
  },
  {
    title: "Octopus-100",
    subtitle: "Ukrspecsystems Night Interceptor",
    category: "interceptors",
    image: "/images/system-int-octopus.jpg",
    desc: "Night-capable, jam-resistant interceptor with autonomous target lock; selected for mass production including licensed manufacture in the United Kingdom.",
  },
  {
    title: "P1-SUN",
    subtitle: "SkyFall Low-Cost Interceptor",
    category: "interceptors",
    image: "/images/system-int-p1sun.jpg",
    desc: "Low-cost Shahed-class interceptor on a 3D-printed modular airframe; computer vision and thermal imaging, with a large number of reported intercepts.",
  },
  {
    title: "STRILA",
    subtitle: "WIY Drones High-Speed Interceptor",
    category: "interceptors",
    image: "/images/system-int-strila.jpg",
    desc: "350+ km/h interceptor with GPS-independent navigation and channel-switching EW-resistant communications; produced at ~100 units per day.",
  },

  /* ---- Long-Range Strike ---- */
  {
    title: "AN-196 Liutyi",
    subtitle: "Long-Range Strike UAS",
    category: "strike",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Antonov_An-196_Liutyi_in_Kouvola.jpg/1280px-Antonov_An-196_Liutyi_in_Kouvola.jpg",
    fallback: "/images/system-drone-liutyi.jpg",
    desc: "Ukraine's signature deep-strike OWA-UAV — 1,000–2,000 km reach with a 50–75 kg warhead, INS / satellite guidance with AI-assisted terminal phase.",
  },
  {
    title: "Fire Point FP-1 / FP-2",
    subtitle: "Mass-Produced Strike UAS",
    category: "strike",
    image: "/images/system-drone-fp1.jpg",
    desc: "Shahed-scale production economics with up to 1,600 km range; FP-2 development extends warhead mass beyond 150 kg via wing-integrated fuel design.",
  },
  {
    title: "Bars",
    subtitle: "Turbojet Missile-Drone",
    category: "strike",
    image: "/images/system-drone-bars.jpg",
    desc: "Compact turbojet-powered strike drone engaging targets at 700–800 km; mass-produced system blurring the drone / cruise-missile boundary.",
  },
  {
    title: "Morok",
    subtitle: "Long-Range Strike UAS",
    category: "strike",
    image: "/images/system-drone-morok.jpg",
    desc: "Long-range strike platform carrying ~30 kg to 800 km; fielded since 2023 and iterated continuously against active air defense.",
  },

  /* ---- Tactical ISR & Loitering ---- */
  {
    title: "Shark / Shark-M",
    subtitle: "Ukrspecsystems ISR UAS",
    category: "isr",
    image: "/images/system-drone-shark.jpg",
    desc: "Catapult-launched ISR and fire-correction UAS; AES-256 EW-resistant datalink to 80 km, 30× optics — Shark-M adds dual cameras, laser rangefinder, and field-swappable payloads.",
  },
  {
    title: "PD-2",
    subtitle: "Ukrspecsystems VTOL / Fixed-Wing UAS",
    category: "isr",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/UKRSPECSYSTEMS_PD-2_photo_1.jpg/1280px-UKRSPECSYSTEMS_PD-2_photo_1.jpg",
    fallback: "/images/system-drone-pd2.jpg",
    desc: "Multi-role UAS with modular VTOL conversion; up to 10 h endurance, ~200 km datalink, ISR and light-strike payload options.",
  },
  {
    title: "Leleka-100",
    subtitle: "DeViRo Tactical Reconnaissance UAV",
    category: "isr",
    image: "/images/system-drone-leleka.jpg",
    desc: "One of the most widely fielded Ukrainian reconnaissance UAVs; the proven base airframe for the RAM loitering-munition family.",
  },
  {
    title: "RAM II / RAM-2X",
    subtitle: "Loitering Munition",
    category: "isr",
    image: "/images/system-drone-ramii.jpg",
    desc: "Loitering munition with 3 kg thermobaric, shaped-charge, or HE-frag payloads; RAM-2X X-wing variant extends reach beyond 100 km under EW conditions.",
  },
  {
    title: "Punisher",
    subtitle: "UA Dynamics Strike UAS",
    category: "isr",
    image: "/images/system-drone-punisher.jpg",
    desc: "Reusable low-signature strike UAS employed by Ukrainian special operations forces for precision drops behind the line of contact.",
  },
  {
    title: "A1-CM Furia",
    subtitle: "Athlon Avia Reconnaissance UAV",
    category: "isr",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Humvee_and_Furia_UAV%2C_Kyiv_2021%2C_12.jpg/1280px-Humvee_and_Furia_UAV%2C_Kyiv_2021%2C_12.jpg",
    fallback: "/images/system-drone-furia.jpg",
    desc: "Tactical ISR and artillery fire-correction UAV in continuous service since 2014; the A1-CMX variant adds laser designation for precision-guided artillery.",
  },

  /* ---- Radar & Air Defense ---- */
  {
    title: "Podlet Radar",
    subtitle: "Mobile Low-Altitude Radar",
    category: "radar",
    image: "/images/system-radar-podlet.jpg",
    desc: "Low-altitude surveillance radar for detection of aircraft, helicopters, and cruise missiles at terrain-masked approach profiles.",
  },
  {
    title: "Nebo-M Radar",
    subtitle: "Mobile Multiband Radar System",
    category: "radar",
    image: "/images/system-radar-nebo.jpg",
    desc: "Multiband (VHF/L/X) radar complex with counter-low-observable detection roles; high-value subject for signature and waveform exploitation.",
  },
  {
    title: "P-18 Radar Family",
    subtitle: "Legacy / Modernized Radar Systems",
    category: "radar",
    image: "/images/system-radar-p18.jpg",
    desc: "VHF early-warning radar family (P-11 / P-18 / P-19 lineage) with modernized digital variants and complete 4-year ZIP-kit support.",
  },
  {
    title: "Buk Family",
    subtitle: "Air Defense Platforms",
    category: "radar",
    image: "/images/system-airdefense-buk.jpg",
    desc: "9K37-series medium-range SAM systems, including 9A310/9A39 vehicles, fire-control radars, and associated missile rounds.",
  },
  {
    title: "Tor / Short-Range AD",
    subtitle: "Mobile Air Defense Systems",
    category: "radar",
    image: "/images/system-airdefense-tor.jpg",
    desc: "9A330/9A331 Tor point-defense systems with 9M331 missiles or 9M334 missile modules for evaluation and threat replication.",
  },
  {
    title: "ZSU-23-4M Shilka",
    subtitle: "Self-Propelled AA Gun System",
    category: "radar",
    image: "/images/system-airdefense-shilka.jpg",
    desc: "Modernized self-propelled anti-aircraft system with quad 23 mm guns and radar fire control; related 2K22M Tunguska support available.",
  },
  {
    title: "9A33BM3 Osa",
    subtitle: "SA-8 Modernized SAM System",
    category: "radar",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ukrainian_9k33_Osa_SAMS_during_the_Independence_Day_parade_in_Kiev_2014_IMG_7671_02.JPG/1280px-Ukrainian_9k33_Osa_SAMS_during_the_Independence_Day_parade_in_Kiev_2014_IMG_7671_02.JPG",
    fallback: "/images/system-ad-osa.jpg",
    desc: "Modernized and digitized 9A33BM3 fighting vehicles — a UAM founding capability — delivered with complete 4-year ZIP-kits; 1S91M2 SURN support in the same line.",
  },
  {
    title: "S-125 Pechora-2",
    subtitle: "SA-3 Modernized Fire Unit",
    category: "radar",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Pechora-2M_-_missile_launcher_2.jpg/1280px-Pechora-2M_-_missile_launcher_2.jpg",
    fallback: "/images/system-ad-pechora.jpg",
    desc: "Complete SA-3 fire-unit systems including the Pechora-2 modernization — improved range, multi-target engagement, trailed launcher, and electro-optical tracking.",
  },
  {
    title: "Igla MANPADS Family",
    subtitle: "SA-16 / SA-18 Man-Portable SAM",
    category: "radar",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/9K38_IGLA_%284968730444%29.jpg/1280px-9K38_IGLA_%284968730444%29.jpg",
    fallback: "/images/system-ad-igla.jpg",
    desc: "9K310 Igla-1 (SA-16) and 9K38 Igla (SA-18) man-portable systems with two-color IR seekers, plus Strela-series MANPADS — core threat-replication hardware.",
  },

  /* ---- Platforms & Components ---- */
  {
    title: "T-90 Series",
    subtitle: "Main Battle Tank Platforms",
    category: "platforms",
    image: "/images/system-armor-t90.jpg",
    desc: "Modern MBT platforms and subsystems; T-72M1/M1A and T-80BV/U-series modernized vehicles also supported.",
  },
  {
    title: "T-80 Family",
    subtitle: "Main Battle Tank Platforms",
    category: "platforms",
    image: "/images/system-armor-t80.jpg",
    desc: "T-80BV and T-80U-series modernized main battle tanks — gas-turbine MBT platforms, subsystems, and spares.",
  },
  {
    title: "BTR Series",
    subtitle: "Wheeled Armored Personnel Carriers",
    category: "platforms",
    image: "/images/system-armor-btr80.jpg",
    desc: "BTR-80, BTR-3E1, and latest-technology BTR-4 armored personnel carriers; Dozor-class light armor also supported.",
  },
  {
    title: "BMP-3",
    subtitle: "Infantry Fighting Vehicle",
    category: "platforms",
    image: "/images/system-bmp3.jpg",
    desc: "Amphibious IFV with 100 mm / 30 mm combined armament; BTR-80, BTR-3E1, and BTR-4 wheeled APCs also supported.",
  },
  {
    title: "Su-27 Family",
    subtitle: "Upgraded Variants",
    category: "platforms",
    image: "/images/system-aircraft-su27.jpg",
    desc: "Airframes, engines, and N001 pulse-Doppler radar sets with track-while-scan and look-down/shoot-down capability.",
  },
  {
    title: "MiG-29 Family",
    subtitle: "Aircraft Platforms & Systems",
    category: "platforms",
    image: "/images/system-aircraft-mig29.jpg",
    desc: "Aircraft, engines, radar, and critical components for test, evaluation, and aggressor-support requirements.",
  },
  {
    title: "Mi-24 / Mi-35",
    subtitle: "Hind-Series Helicopters",
    category: "platforms",
    image: "/images/system-hind-mi24.jpg",
    desc: "Hind-series attack helicopters, engines, dynamic components, and spares packages.",
  },
  {
    title: "Aviation Engines & Components",
    subtitle: "Su-27 / MiG-29 / Mi-24 Lines",
    category: "platforms",
    image: "/images/system-aircraft-mi24-component.jpg",
    desc: "Engines, radar sets, weapons subsystems, and critical components for Russian-origin fixed- and rotary-wing aircraft — the spares depth that keeps test fleets flying.",
  },
  {
    title: "Radar Electronics",
    subtitle: "Control, Sensor & Signal Systems",
    category: "platforms",
    image: "/images/system-electronics.jpg",
    desc: "Fire-control, sensor, signal-processing, and command-control-communication blocks for former Soviet-Bloc systems.",
  },
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
          <em>Foreign Materiel Acquisition</em>
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
        Submit RFQ
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
        poster={HERO_POSTER}
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        {/* Self-hosted trimmed loop; browser falls through to the NASA
            stream automatically if the local file is absent. */}
        <source src="/videos/uam-hero-loop.mp4" type="video/mp4" />
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
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
            Foreign Materiel Acquisition · U.S. Department of Defense
          </p>

          <h1>The systems your program needs aren't in any catalog.</h1>

          <p>
            United Acquisition Management acquires hard-to-procure
            international-origin defense materiel — combat-proven Ukrainian unmanned
            systems, radar, and air defense — for authorized U.S. DOD research,
            development, test, and evaluation programs. One principal. Prime
            past performance with the U.S. Air Force. No layers between your
            requirement and the source.
          </p>

          <div className="hero-actions">
            <button className="accent-button" type="button" onClick={openInquiry}>
              Submit RFQ
            </button>

            <button
              className="outline-button"
              type="button"
              onClick={() => navigate("/systems")}
            >
              Acquisition Lines
            </button>
          </div>
        </div>

        <div className="hero-credentials" aria-label="Credentials">
          <span>SDVOSB</span>
          <span className="hud-sep">|</span>
          <span>CAGE 61HR4</span>
          <span className="hud-sep">|</span>
          <span>USAF Prime Past Performance</span>
          <span className="hud-sep">|</span>
          <span>Est. 2010</span>
        </div>
      </section>

      <section className="home-section" id="why">
        <div className="section-head">
          <span className="section-index">01</span>
          <h2>Why a Small Contractor Wins Here</h2>
        </div>

        <div className="diff-grid">
          {differentiators.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="strip-card diff-card">
                <Icon size={32} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="home-section" id="lines">
        <div className="section-head">
          <span className="section-index">02</span>
          <h2>Acquisition Lines</h2>
          <button
            className="section-link"
            type="button"
            onClick={() => navigate("/systems")}
          >
            Open Systems Desk →
          </button>
        </div>

        <div className="focus-tiles">
          {categories.slice(0, 4).map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                type="button"
                className="focus-tile"
                onClick={() => navigate("/systems")}
              >
                <Icon size={28} />
                <strong>{cat.name}</strong>
                <span>{cat.tag}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="home-section" id="record">
        <div className="section-head">
          <span className="section-index">03</span>
          <h2>The Record</h2>
        </div>

        <div className="contract-strip">
          <div>
            <strong>USAF Prime</strong>
            <span>
              Prime purchase-order awards — Department of the Air Force,
              Directorate of Contracting. Performed. Delivered. Closed.
            </span>
          </div>
          <div>
            <strong>SDVOSB</strong>
            <span>
              Service-Disabled Veteran-Owned Small Business — set-aside
              eligible, CAGE 61HR4, DUNS 962497710.
            </span>
          </div>
          <div>
            <strong>Since 2010</strong>
            <span>
              Sixteen years sourcing denied-access foreign materiel — through
              supplier networks that cannot be built quickly.
            </span>
          </div>
          <div>
            <strong>Audit-Ready</strong>
            <span>
              DFARS-compliant logistics, U.S.-flag carriage, sealed-box
              inspection discipline, documentation that survives review.
            </span>
          </div>
        </div>
      </section>

      <section className="home-section home-cta">
        <h2>If it can be lawfully acquired, UAM will find the path.</h2>
        <div className="hero-actions">
          <button className="accent-button" type="button" onClick={openInquiry}>
            Submit RFQ
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

        <h1>We do one thing: acquire what programs can't reach.</h1>

        <p>
          UAM is not a distributor and not a broker chain. It is a single-point
          acquisition capability for international-origin defense materiel where
          access, verification, documentation, and lawful transfer are the
          entire problem — and where a prime contractor's accountability has to
          sit with one name.
        </p>
      </div>

      <div className="capability-grid">
        <FeatureCard icon={ShieldCheck} title="Denied-Access Acquisition">
          Locating and acquiring international-origin systems, components, and
          technologies with limited or restricted availability — for authorized
          U.S. DOD research, development, test, evaluation, and exploitation
          programs.
        </FeatureCard>

        <FeatureCard icon={Crosshair} title="Ukrainian Unmanned Pipeline">
          Direct access to an unmanned-systems ecosystem validated by years of
          continuous combat employment — interceptors, long-range strike, and
          tactical ISR — through supplier relationships that predate the
          current demand.
        </FeatureCard>

        <FeatureCard icon={FileCheck2} title="Compliance & Documentation">
          Every acquisition is structured around U.S. law, sanctions
          restrictions, export-control rules, end-use controls, and government
          authorization — with the documentation trail built in from first
          contact, not reconstructed afterward.
        </FeatureCard>

        <FeatureCard icon={BriefcaseBusiness} title="Logistics That Survive Audit">
          DFARS 252.247-7023 U.S.-flag carriage, sealed-box inspection through
          hazardous-materiel channels, and U.S. air-transport preference for
          ordnance — delivery discipline learned on real government contracts.
        </FeatureCard>
      </div>
    </section>
  );
}

function SystemsPage() {
  const [activeCat, setActiveCat] = React.useState("interceptors");

  const current = categories.find((c) => c.id === activeCat);
  const visibleSystems = systems.filter((s) => s.category === activeCat);

  return (
    <section className="page-frame systems-page">
      <div className="page-heading compact">
        <p className="kicker">Systems Desk</p>

        <h1>Focused acquisition lines. Not a warehouse.</h1>

        <p>
          UAM concentrates on the international-origin systems U.S. programs are
          actually chasing — one line at a time. Select a line below. Specific
          configurations, availability, and pricing are discussed only with
          authorized parties.
        </p>
      </div>

      <div className="cat-selector" aria-label="Acquisition lines">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              type="button"
              className={`cat-tile ${activeCat === cat.id ? "active" : ""}`}
              onClick={() => setActiveCat(cat.id)}
            >
              <Icon size={22} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {current && (
        <div className="cat-intro">
          <p className="cat-tag">{current.tag}</p>
          <p className="cat-blurb">{current.blurb}</p>
        </div>
      )}

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

        {activeCat === "platforms" && <ComponentsCard />}
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

        <h1>Small enough to move. Disciplined enough to prime.</h1>

        <p>
          UAM holds prime past performance with the Department of the Air Force
          and supports authorized requirements for research, development, test,
          evaluation, exploitation, and training. All sourcing is subject to
          applicable U.S. law, sanctions restrictions, export-control rules,
          end-use controls, and government authorization requirements — without
          exception, and without being asked twice.
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
            <li>Prime Past Performance: Department of the Air Force</li>
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

        <h1>One inquiry. One principal. A direct answer.</h1>

        <p>
          Send a concise RFQ, system description, or capability discussion
          request. It is read by the owner, not a sales queue. Inquiries should
          relate to authorized government, contractor, research, test, or
          evaluation requirements.
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
          Submit RFQ
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
