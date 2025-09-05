// config config config
const CONFIG = {
  name: "Coen Peter Ng",
  tagline: "Cybersecurity enthusiast • Photographer",
  location: "Singapore",
  email: "me@coenpeterng.com",
  socials: {
    GitHub: "https://github.com/coneyconee",
    Instagram: "https://instagram.com/coenshotit",
    TikTok: "https://tiktok.com/coneycoen",
  },
};

const DATA = {
  home: {
    heroTitle: "Hello, I'm Coen. Welcome to my portfolio.",
    heroSubtitle:
      "Student of the School of Science and Technology's Computing+ IDP programme. I play with reverse engineering, machine learning, and cameras. This site is my lab log.",
    highlights: [
      { icon: "ShieldIcon", title: "CTF & RE", text: "Co-founded SST's very own CTF. Built ground-up OSINT and reverse engineering challenges with anti-debug techniques." },
      { icon: "CpuIcon", title: "ML + CV", text: "Familiar with the development and integration of machine learning models and computer vision. Designed a Pi-optimised object detection system to detect, classify, and remove debri from disaster zones." },
      { icon: "CameraIcon", title: "Photography", text: "A passionate shooter for over a decade. Award-winning indie filmmaker." },
    ],
  },
  projects: [
    {
      title: "Autonomous Debri Collection Vehicle",
      subtitle: "Real-time object detection pipeline with local inference on Pi Zero",
      description:
        "RF-DETR object detection model trained to detect 3 debri types. Arduino vehicle capable of effectively moving debri. Connection via serial bwtween Pi & Arduino.",
      tags: ["Python", "Arduino", "RF-DETR", "OpenCV"],
      links: [
        { label: "GitHub", href: "https://github.com/coneyconee/integrated-design-challenge-2025" },
        { label: "Writeup", href: "https://docs.google.com/document/d/1QQiqtRDo3nks50trAD9pam6MqP47mZoJxFWP6MU63IY/edit?usp=sharing" },
      ],
    },
    {
      title: "Autonomous guardian in Student Chats",
      subtitle: "Sentimental analysis model to detect cyberbullying by predicting the nature of chat messages sent between students,",
      description:
        "Binary classification TensorFlow model trained on 1.6 million chat messages, packaged into a PyQt5 application.",
      tags: ["Python", "TensorFlow", "PyTorch", "PyQt5"],
      links: [
        { label: "GitHub", href: "https://github.com/coneyconee/sentimental-analysis-with-tf-keras-sequential" },
      ],
    },
    {
      title: "SSTCTF",
      subtitle: "A student intiative with the goal to introduce Singaporean students to basic cybersecurity challenges. Over 60 participants from secondary schools, JCs, and polytechnics.",
      description:
        "Co-founder, reverse engineering and OSINT challenge builder.",
      tags: ["CTF", "OSINT", "Reverse Engineering"],
      links: [
        { label: "Challenge Repository", href: "https://github.com/SST-CTF" },
      ],
    },
  ],
  photos: [
    { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac", caption: "Neon alley — shot on Canon." },
    { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", caption: "Stars over the causeway." },
    { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", caption: "City reflections." },
  ],
  achievements: [
    { year: "2025", title: "Co-founded SST CTF", detail: "Built jeopardy-style challenges; ran outreach to 200+ students.", link: null },
    { year: "2024", title: "National Objectifs Student Film — Special Mention", detail: "Media storytelling award.", link: null },
    { year: "2023", title: "Cisco Cybersecurity Essentials Certified", detail: "Fundamentals: network security, threat ops, forensics.", link: null },
  ],
};

const tabs = [
  { key: "home", label: "Home", icon: "HomeIcon" },
  { key: "projects", label: "Projects", icon: "FolderIcon" },
  { key: "photos", label: "Photos", icon: "ImageIcon" },
  { key: "achievements", label: "Achievements", icon: "TrophyIcon" },
];

// icons svg
const Icons = {
  HomeIcon: "M3 12l9-9 9 9v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z",
  FolderIcon: "M3 7h6l2 2h10v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  ImageIcon: "M3 5h18v14H3z M8 11l3 3 4-5 4 6",
  TrophyIcon: "M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0zM3 6h4v2a4 4 0 0 1-4-4zM21 6h-4v2a4 4 0 0 0 4-4z",
  SunIcon: "M12 4V2m0 20v-2M4 12H2m20 0h-2M5 5l-1-1m16 16-1-1M5 19l-1 1m16-16 1-1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
  MoonIcon: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
  CopyIcon: "M8 8h12v12H8z M4 4h10v2H6v10H4z",
  LinkIcon: "M10 13a5 5 0 0 1 7 0l2 2a5 5 0 1 1-7 7l-2-2M14 11a5 5 0 0 1-7 0L5 9a5 5 0 1 1 7-7l2 2",
  GithubIcon: "M12 2a10 10 0 0 0-3 19c.5.1.7-.2.7-.5v-2.1c-3 .7-3.6-1.4-3.6-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.4-.3-5-1.2-5-5.4 0-1.2.4-2.1 1-2.9-.1-.3-.5-1.5.1-3 0 0 .9-.3 3 1a10 10 0 0 1 5.5 0c2.1-1.3 3-1 3-1 .6 1.5.2 2.7.1 3 .7.8 1 1.7 1 2.9 0 4.3-2.6 5.1-5 5.4.4.3.8 1 .8 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2z",
  InstagramIcon: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z M16 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0z M18 6h.01",
  CameraIcon: "M4 7h4l2-2h4l2 2h4v12H4z M12 12a4 4 0 1 0 0 .01z",
  ShieldIcon: "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z",
  CpuIcon: "M4 9h16v6H4z M12 2v3M12 19v3M2 12h3M19 12h3M7 2v3M17 2v3M7 19v3M17 19v3",
  TerminalIcon: "M3 5h18v14H3z M6 9l3 3-3 3 M11 15h5",
};

function iconEl(name, size=16, className="") {
  const path = Icons[name] || "";
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("width", size);
  svg.setAttribute("height", size);
  if (className) svg.setAttribute("class", className);
  const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
  p.setAttribute("d", path);
  svg.appendChild(p);
  return svg;
}

// DOM DOM DOM
function el(tag, opts={}, children=[]) {
  const node = document.createElement(tag);
  if (opts.class) node.className = opts.class;
  if (opts.id) node.id = opts.id;
  if (opts.href) node.href = opts.href;
  if (opts.target) node.target = opts.target;
  if (opts.rel) node.rel = opts.rel;
  if (opts.html !== undefined) node.innerHTML = opts.html;
  if (opts.text !== undefined) node.textContent = opts.text;
  if (opts.type) node.type = opts.type;
  if (opts.onclick) node.onclick = opts.onclick;
  if (opts.style) Object.assign(node.style, opts.style);
  children.forEach(c => node.appendChild(c));
  return node;
}

// state DONT TOUCH
let active = "home";

// rendering header nav
function renderHeader() {
  document.getElementById("site-name").textContent = CONFIG.name;
  document.getElementById("site-tagline").textContent = CONFIG.tagline;

  const navDesk = document.getElementById("nav-desktop");
  const navMob = document.getElementById("nav-mobile");
  navDesk.innerHTML = "";
  navMob.innerHTML = "";

  tabs.forEach(t => {
    const btn = el("button", { class: "nav-btn" + (active===t.key ? " active": ""), onclick: () => switchTab(t.key) }, [
      iconEl(t.icon, 16),
      el("span", { text: t.label })
    ]);
    navDesk.appendChild(btn);

    const pill = el("button", { class: "pill" + (active===t.key ? " active": ""), onclick: () => switchTab(t.key) }, [
      iconEl(t.icon, 16),
      el("span", { text: t.label })
    ]);
    navMob.appendChild(pill);
  });

  const year = new Date().getFullYear();
  document.getElementById("footer-copy").textContent =
    `© ${year} ${CONFIG.name}. Built with Tailwind-like classes and pure React.`;
}

// SECTIONS can change
function sectionHeader(title, subtitle) {
  const wrap = el("div", { class: "section-header anim-elem", style: { animationDelay: "40ms" } });
  wrap.appendChild(el("h2", { text: title }));
  if (subtitle) wrap.appendChild(el("p", { class: "text-sm", text: subtitle }));
  return wrap;
}

function HomeSection() {
  const section = el("section", { class: "section" });

  const grid = el("div", { class: "grid" });

  // HLs
  const heroCard = el("div", { class: "card hero anim-elem", style: { animationDelay: "80ms" } });
  heroCard.appendChild(el("h3", { text: DATA.home.heroTitle }));
  heroCard.appendChild(el("p", { class: "text-sm", text: DATA.home.heroSubtitle }));

  const badgesWrap = el("div", { class: "badges", style: { marginTop: "8px" } });
  DATA.home.highlights.forEach((h, i) => {
    const b = el("div", { class: "badge anim-elem", style: { animationDelay: `${120 + i*60}ms` } });
    const head = el("div", { class: "badge-head" });
    head.appendChild(iconEl(h.icon, 20));
    head.appendChild(el("span", { text: h.title }));
    b.appendChild(head);
    b.appendChild(el("p", { class: "text-sm", text: h.text }));
    badgesWrap.appendChild(b);
  });
  heroCard.appendChild(badgesWrap);

  // CONTACTS
  const contactCard = el("div", { class: "card anim-elem", style: { animationDelay: "140ms" } });
  const contactInner = el("div", { style: { padding: "16px" } });
  contactInner.appendChild(el("h3", { text: "Contact & Links" }));

  const linksWrap = el("div", { class: "section", style: { marginTop: "8px" } });
  const emailRow = el("a", { class: "row text-sm", href: `mailto:${CONFIG.email}` }, [
    iconEl("TerminalIcon", 16),
    el("span", { text: CONFIG.email })
  ]);
  linksWrap.appendChild(emailRow);

  const socialsRow = el("div", { class: "row", style: { flexWrap: "wrap", gap: "8px", marginTop: "8px" } });
  Object.entries(CONFIG.socials || {}).forEach(([label, url]) => {
    if (!url) return;
    const iconName = (label.toLowerCase().includes("git")) ? "GithubIcon"
                    : (label.toLowerCase().includes("insta")) ? "InstagramIcon"
                    : "LinkIcon";
    const a = el("a", { class: "pill", href: url, target: "_blank", rel: "noopener" }, [
      iconEl(iconName, 16),
      el("span", { text: label })
    ]);
    socialsRow.appendChild(a);
  });
  linksWrap.appendChild(socialsRow);

  const copyRow = el("div", { class: "row text-xs anim-elem", style: { animationDelay: "220ms", marginTop: "6px" } });
  const code = el("code", { class: "pill truncate" });
  code.textContent = `${CONFIG.name} — ${CONFIG.tagline}`;
  const btn = el("button", { class: "pill", text: "Copy" });
  btn.prepend(iconEl("CopyIcon", 14));
  btn.onclick = async () => {
    try {
      await navigator.clipboard.writeText(`${CONFIG.name} — ${CONFIG.tagline}`);
      btn.lastChild.textContent = "Copied";
      setTimeout(() => (btn.lastChild.textContent = "Copy"), 1200);
    } catch {}
  };
  copyRow.appendChild(code);
  copyRow.appendChild(btn);
  linksWrap.appendChild(copyRow);

  contactInner.appendChild(linksWrap);
  contactCard.appendChild(contactInner);

  const left = el("div"); left.appendChild(heroCard);
  const right = el("div"); right.appendChild(contactCard);
  grid.appendChild(left); grid.appendChild(right);

  section.appendChild(grid);
  return section;
}

function ProjectsSection() {
  const section = el("section", { class: "section" });
  section.appendChild(sectionHeader("Projects",
    "Add or remove items in DATA.projects. Each shows a title, subtitle, description, tags, and links.")
  );
  const grid = el("div", { class: "grid grid-2" });

  DATA.projects.forEach((p, idx) => {
    const cardWrap = el("div", { class: "anim-elem", style: { animationDelay: `${60 + idx*80}ms` } });
    const card = el("div", { class: "card", style: { padding: "16px" } });

    const row = el("div", { class: "row", style: { alignItems: "flex-start", justifyContent: "space-between" } });
    const left = el("div");
    left.appendChild(el("h3", { text: p.title, style: { margin: "0 0 2px 0", fontWeight: "600" } }));
    left.appendChild(el("p", { class: "text-sm", text: p.subtitle }));

    const tags = el("div", { class: "row", style: { flexWrap: "wrap", gap: "6px", justifyContent: "flex-end" } });
    (p.tags || []).forEach(t => tags.appendChild(el("span", { class: "btn-chip", text: t })));
    row.appendChild(left); row.appendChild(tags);

    const desc = el("p", { class: "text-sm", text: p.description, style: { marginTop: "12px" } });

    const links = el("div", { class: "row", style: { gap: "12px", flexWrap: "wrap", marginTop: "12px" } });
    (p.links || []).forEach(l => {
      const a = el("a", { class: "text-sm", href: l.href, target: "_blank", rel: "noopener" }, [
        iconEl("LinkIcon", 14),
        el("span", { text: l.label })
      ]);
      links.appendChild(a);
    });

    card.appendChild(row);
    card.appendChild(desc);
    card.appendChild(links);
    cardWrap.appendChild(card);
    grid.appendChild(cardWrap);
  });

  section.appendChild(grid);
  return section;
}

function PhotosSection() {
  const section = el("section", { class: "section" });
  section.appendChild(sectionHeader("Photos",
    "Swap DATA.photos with your own URLs or import local images. Captions are optional.")
  );

  const grid = el("div", { class: "grid grid-3" });
  DATA.photos.forEach((ph, i) => {
    const fig = el("figure", { class: "photo-fig anim-elem", style: { animationDelay: `${80 + i*60}ms` } });
    const img = el("img", { });
    img.src = ph.src;
    img.alt = ph.caption || "photo";
    fig.appendChild(img);
    if (ph.caption) fig.appendChild(el("figcaption", { class: "photo-cap", text: ph.caption }));
    grid.appendChild(fig);
  });

  section.appendChild(grid);
  return section;
}

function AchievementsSection() {
  const section = el("section", { class: "section" });
  section.appendChild(sectionHeader("Achievements", "Simple timeline. Edit DATA.achievements to add more entries."));

  const list = el("ol", { class: "timeline" });
  DATA.achievements.forEach((a, i) => {
    const li = el("li", { class: "anim-elem", style: { animationDelay: `${80 + i*70}ms`, position: "relative", marginBottom: "16px" } });
    const dot = el("span", { class: "dot" });
    const card = el("div", { class: "card", style: { padding: "12px" } });
    card.appendChild(el("div", { class: "text-xs", text: a.year }));
    card.appendChild(el("div", { text: a.title, style: { fontWeight: "600" } }));
    card.appendChild(el("p", { class: "text-sm", text: a.detail }));
    if (a.link) {
      const link = el("a", { class: "text-xs", href: a.link, target: "_blank", rel: "noopener" }, [
        iconEl("LinkIcon", 12),
        el("span", { text: "Learn more" })
      ]);
      card.appendChild(link);
    }
    li.appendChild(dot);
    li.appendChild(card);
    list.appendChild(li);
  });

  section.appendChild(list);
  return section;
}

// ROUTE USER dont touch
function switchTab(key) {
  active = key;
  renderHeader();
  const page = document.getElementById("page");
  page.innerHTML = "";
  page.classList.remove("animate-page-enter");
  void page.offsetWidth; // reflow for animation
  page.classList.add("animate-page-enter");

  if (key === "home") page.appendChild(HomeSection());
  if (key === "projects") page.appendChild(ProjectsSection());
  if (key === "photos") page.appendChild(PhotosSection());
  if (key === "achievements") page.appendChild(AchievementsSection());
}

// bg animation port live pink canvas
function startCanvas() {
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");
  let raf = 0;
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  function onResize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", onResize);

  const stars = Array.from({ length: 200 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    z: Math.random() * 0.5 + 0.5,
    r: Math.random() * 1.5 + 0.5,
    s: Math.random() * 0.5 + 0.2,
  }));

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, w, h);
    const grad = ctx.createRadialGradient(w/2, h/2, Math.min(w,h)/8, w/2, h/2, Math.max(w,h)/1.2);
    grad.addColorStop(0, "rgba(236,72,153,0.05)");
    grad.addColorStop(1, "rgba(255,255,255,0.7)");
    ctx.fillStyle = grad; ctx.fillRect(0,0,w,h);

    ctx.save();
    ctx.translate(w/2, h/2);
    ctx.rotate(t * 0.0005);
    for (let i=0;i<3;i++) {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(236,72,153,${0.28 - i*0.06})`;
      ctx.lineWidth = 1;
      const R = Math.min(w,h)/4 + i*14;
      for (let a=0;a<=Math.PI*2;a+=0.02) {
        const x = Math.cos(a*2 + t*0.001) * R;
        const y = Math.sin(a*3 + t*0.0012) * R * 0.6;
        if (a===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.stroke();
    }
    ctx.restore();

    for (const s of stars) {
      s.x += Math.sin(t*0.0002 + s.y*0.002) * s.s;
      s.y += Math.cos(t*0.00025 + s.x*0.0015) * s.s;
      if (s.x < 0) s.x += w; if (s.x > w) s.x -= w;
      if (s.y < 0) s.y += h; if (s.y > h) s.y -= h;
      ctx.fillStyle = `rgba(236,72,153,${0.25 + s.z*0.35})`;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2); ctx.fill();
    }

    t += 16;
    raf = requestAnimationFrame(draw);
  }
  draw();

  // return cleanu
  return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
}

// self test (chatgpted dont touch)
function runTests() {
  console.log("[Portfolio Self-Tests]-----------------------");
  console.assert(Array.isArray(tabs) && tabs.length === 4, "tabs should have 4 entries");
  console.assert(tabs.map(t=>t.key).join(",") === "home,projects,photos,achievements", "tab keys mismatch");
  console.assert(typeof HomeSection === 'function' && typeof ProjectsSection === 'function' && typeof PhotosSection === 'function' && typeof AchievementsSection === 'function', "sections not defined");
  console.assert(DATA.projects.length >= 1, "Add at least one project");
  console.assert(DATA.photos.length >= 1, "Add at least one photo");
  console.assert(DATA.achievements.length >= 1, "Add at least one achievement");
  const root = document.querySelector('body');
  console.assert(root && getComputedStyle(root).backgroundColor !== '', "root should render with light background");
  console.log("Open devtools console to see test output.");
}

// init
function init() {
  renderHeader();
  switchTab(active);
  startCanvas();
  runTests();
}
document.addEventListener("DOMContentLoaded", init);
