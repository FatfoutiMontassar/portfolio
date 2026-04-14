'use strict';

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const T = {
  en: {
    // Nav
    nav_about:   'About',
    nav_skills:  'Skills',
    nav_exp:     'Experience',
    nav_certs:   'Certifications',
    nav_contact: 'Contact',
    nav_hire:    'Hire me',

    // Hero
    hero_greeting: "Hello, I'm",
    hero_tagline:  '8+ years designing and operating backend systems, cloud-native infrastructure, and scalable architectures. I lead technical analysis, make the architectural calls, and ship at scale.',
    hero_cta1:     'Get in touch',
    hero_cta2:     'View experience',
    scroll_hint:   'Scroll down',

    // Profile card
    profile_title: 'Senior Software Engineer',
    pstat_years:   'Years exp.',
    pstat_micro:   'Microservices',
    pstat_cert:    'Certified',
    profile_open:  'Open to opportunities',

    // About
    sec_about:  'About Me',
    about_p1:   'I design and operate the systems that keep modern software running reliably at scale — from RESTful APIs and event-driven microservices to the Kubernetes clusters, autoscalers, and GitOps pipelines that deploy and sustain them.',
    about_p2:   'Beyond shipping features, I\'m heavily involved in the <strong>technical and functional analysis</strong> that precedes them: translating complex product requirements into system designs, evaluating architectural trade-offs, and making the infrastructure and software decisions that teams build on for years.',
    about_p3:   'At LumApps I\'ve driven architecture across the full backend stack — OpenAPI-first Python services, TypeScript microservices, event-driven autoscaling with KEDA and Redis, and the GCP platform running it all. I write the specs, make the calls, and own the outcomes.',
    about_p4:   'I also leverage <strong>AI tools like Claude Code</strong> daily to accelerate feature delivery — from generating boilerplate and reviewing architecture decisions to automating repetitive engineering tasks. AI is now a core part of how I ship faster without sacrificing quality.',
    stat_lbl1:  'Years of production engineering',
    stat_lbl2:  'Microservices designed & shipped',
    stat_lbl3:  'Companies across 3 industries',

    stat_lbl4:  'YAML files written',

    // Skills
    sec_skills:      'Technical Skills',
    sk_data:         'Data, Cache & Messaging',
    sk_containers:   'Containers & Orchestration',
    sk_scale:        'Scalability & Autoscaling',
    sk_obs:          'Observability & SRE',
    sk_arch:         'Architecture & Tech Leadership',
    sk_ai:           'AI & Automation',
    sk_quality:      'Quality & Security',
    stag_analysis:   'Technical analysis',
    stag_specs:      'Functional specs',
    stag_design:     'System design',
    stag_micro:      'Microservices arch.',
    stag_api:        'API design',
    stag_capacity:   'Capacity planning',
    stag_lead:       'Tech leadership',
    stag_mentoring:  'Mentoring',
    stag_prompt:     'Prompt engineering',
    stag_agentic:    'Agentic workflows',
    stag_coverage:   'Code coverage',

    // Experience
    sec_exp:      'Work Experience',
    badge_current:'Current',
    j1_period:    'Sep 2022 — Present',
    j1_role:      'Lead Backend Engineer',
    j1_desc:      'Design, development and evolution of a SaaS internal communications and employee experience platform (Employee Hub), covering the full software lifecycle — architecture, technical design, backend features, performance optimisation, and third-party integrations.',
    j1_b1:        'Led <strong>technical and functional analysis</strong> across multiple product streams — translating business requirements into system designs, API contracts, and infrastructure blueprints',
    j1_b2:        'Made key <strong>architectural decisions</strong> on service boundaries, data models, event flows, and deployment topology; authored specs that guided cross-functional engineering teams',
    j1_b3:        'Designed and developed backend microservices (TypeScript, Python, Flask) and REST / API Gateway layers serving millions of daily users',
    j1_b4:        'Set up, optimised and supervised CI/CD pipelines with GitHub Actions, Jenkins, and ArgoCD',
    j1_b5:        'Automated deployments on GKE and managed GCP infrastructure (Cloud Run, Pub/Sub, Cloud SQL)',
    j1_b6:        'Implemented <strong>KEDA</strong>-based event-driven autoscaling on GKE, using Redis queue depth as scale triggers — significantly reducing idle compute cost',
    j1_b7:        'Designed Redis caching and session layers (Cluster + Pub/Sub) to handle traffic spikes with low-latency horizontal scaling',
    j1_b8:        'Owned on-call rotations; drove monitoring, alerting, and observability with Datadog',
    j1_b9:        'Mentored engineers, conducted architecture reviews, and enforced best practices across the backend guild',
    j2_period:    'Sep 2020 — Sep 2022',
    j2_role:      'Django / Python Project Lead',
    j2_desc:      'Built an automation platform for the telecom / fibre-optic industry to centralise and automate manual workflows (FME, ETL pipelines) and validate network node configurations through API-driven controls.',
    j2_b1:        'Conducted the full <strong>technical and functional analysis</strong> — mapping manual field processes to system components and defining the data model, API surface, and integration points',
    j2_b2:        'Made all <strong>architectural decisions</strong> solo: technology selection, service structure, and API design strategy',
    j2_b3:        'Designed and delivered a Django-based platform that replaced manual workflows with automated API-driven validations',
    j2_b4:        'Exposed REST APIs consumed by field teams for real-time optical node configuration checks',
    j3_period:    'Jan 2020 — Jul 2020',
    j3_role:      'Python · C# · Cloud Developer',
    j3_desc:      'Automated and maintained an insurance contract subscription system built on Blockchain Quorum, serverless functions, and Databricks clusters for price visualisation and prediction.',
    j3_b1:        'Maintained a Blockchain Quorum-based system for insurance contracts and quotes',
    j3_b2:        'Built serverless event-processing functions and automated the contract quote pipeline',
    j3_b3:        'Used Databricks clusters for price visualisation and ML-based prediction pipelines',
    j4_period:    'Jan 2018 — Dec 2019',
    j4_role:      'Python / C# Developer',
    j4_desc:      'Contributed to Expensya — a SaaS expense management platform serving 5,000+ customers across 192 countries (acquired by Medius in 2023) — building core application features and the intelligent OCR+ pipeline that automatically digitises paper receipts and expense notes.',
    j4_b1:        'Built and maintained CRUD features across the core expense management application: expense reports, approval workflows, user management, and multi-currency handling',
    j4_b2:        'Contributed to <strong>OCR+</strong>, the product\'s core intelligence — a pipeline that automatically digitises paper receipts by extracting key fields (amount, date, merchant, VAT, currency) from raw scanned images',
    j4_b3:        'Implemented <strong>classification and categorisation modules</strong> using TF-IDF vectorisation, regex pattern matching, and keyword-based scoring to auto-assign expense categories (meals, transport, accommodation) per company policy',
    j4_b4:        'Combined multiple NLP techniques — optical character recognition, information retrieval, statistical text classification, and structured data extraction — into a single robust and extensible pipeline',
    j4_b5:        'Worked across the full Python / C# / ASP.NET stack on Azure, contributing to both backend services and the data extraction layer',
    // Certifications & Education
    sec_certs:       'Certifications & Education',
    creds_sub_certs: 'Certifications',
    creds_sub_edu:   'Education',
    cert2_name:      'Docker — Container fundamentals & advanced',
    edu1_name:       'Engineering Degree — Computer Science & Telecommunications',
    edu1_from:       'École Supérieure des Communications de Tunis · 2018',
    edu2_name:       'Preparatory Cycle — Mathematics & Physics',

    // Contact & footer
    sec_contact:  'Get in Touch',
    contact_sub:  'Available for senior backend, SRE, and DevOps roles — remote-first preferred.',
    footer_text:  '© 2022 Montassar Fatfouti · No frameworks were harmed in the making of this website',
  },

  fr: {
    // Nav
    nav_about:   'À propos',
    nav_skills:  'Compétences',
    nav_exp:     'Expérience',
    nav_certs:   'Certifications',
    nav_contact: 'Contact',
    nav_hire:    'Me recruter',

    // Hero
    hero_greeting: 'Bonjour, je suis',
    hero_tagline:  '8+ ans à concevoir et opérer des systèmes backend, des infrastructures cloud-native et des architectures scalables. Je pilote les analyses techniques, prends les décisions architecturales et livre à grande échelle.',
    hero_cta1:     'Me contacter',
    hero_cta2:     'Voir mon expérience',
    scroll_hint:   'Défiler',

    // Profile card
    profile_title: 'Ingénieur Logiciel Senior',
    pstat_years:   'Ans d\'expérience',
    pstat_micro:   'Microservices',
    pstat_cert:    'Certifié',
    profile_open:  'Ouvert aux opportunités',

    // About
    sec_about:  'À propos de moi',
    about_p1:   'Je conçois et exploite les systèmes qui maintiennent les logiciels modernes en fonctionnement fiable à grande échelle — des API REST et microservices pilotés par événements aux clusters Kubernetes, autoscalers et pipelines GitOps qui les déploient et les soutiennent.',
    about_p2:   'Au-delà de la livraison de fonctionnalités, je suis fortement impliqué dans <strong>l\'analyse technique et fonctionnelle</strong> qui les précède : transformer des exigences produit complexes en designs système, évaluer les compromis architecturaux et prendre les décisions infrastructure et logiciel sur lesquelles les équipes s\'appuient pendant des années.',
    about_p3:   'Chez LumApps, j\'ai piloté l\'architecture de toute la stack backend — services Python OpenAPI-first, microservices TypeScript, autoscaling piloté par événements avec KEDA et Redis, et la plateforme GCP qui fait tourner le tout. Je rédige les specs, prends les décisions et assume les résultats.',
    about_p4:   'J\'utilise également au quotidien des <strong>outils IA comme Claude Code</strong> pour accélérer la livraison des fonctionnalités — de la génération de code à la revue des décisions architecturales en passant par l\'automatisation des tâches répétitives. L\'IA fait désormais partie intégrante de ma façon de livrer plus vite sans sacrifier la qualité.',
    stat_lbl1:  'Années d\'ingénierie en production',
    stat_lbl2:  'Microservices conçus et livrés',
    stat_lbl3:  'Entreprises dans 3 secteurs',

    stat_lbl4:  'Fichiers YAML écrits',

    // Skills
    sec_skills:      'Compétences Techniques',
    sk_data:         'Données, Cache & Messagerie',
    sk_containers:   'Conteneurs & Orchestration',
    sk_scale:        'Scalabilité & Autoscaling',
    sk_obs:          'Observabilité & SRE',
    sk_arch:         'Architecture & Leadership Technique',
    sk_ai:           'IA & Automatisation',
    sk_quality:      'Qualité & Sécurité',
    stag_analysis:   'Analyse technique',
    stag_specs:      'Spécifications fonctionnelles',
    stag_design:     'Conception système',
    stag_micro:      'Architecture microservices',
    stag_api:        'Conception d\'API',
    stag_capacity:   'Planification capacité',
    stag_lead:       'Leadership technique',
    stag_mentoring:  'Mentorat',
    stag_prompt:     'Prompt engineering',
    stag_agentic:    'Workflows agentiques',
    stag_coverage:   'Couverture de code',

    // Experience
    sec_exp:      'Expérience Professionnelle',
    badge_current:'Poste actuel',
    j1_period:    'Sep 2022 — Aujourd\'hui',
    j1_role:      'Lead Backend Engineer',
    j1_desc:      'Conception, développement et évolution d\'une plateforme SaaS de communication interne et d\'expérience employé (Employee Hub), couvrant l\'ensemble du cycle de vie logiciel — architecture, conception technique, fonctionnalités backend, optimisation des performances et intégrations tierces.',
    j1_b1:        'Mené des <strong>analyses techniques et fonctionnelles</strong> approfondies sur plusieurs flux produit — transformation des besoins métier en designs système, contrats d\'API et blueprints d\'infrastructure',
    j1_b2:        'Pris des <strong>décisions architecturales clés</strong> sur les limites de services, les modèles de données, les flux d\'événements et la topologie de déploiement ; rédaction des spécifications guidant les équipes pluridisciplinaires',
    j1_b3:        'Conception et développement de microservices backend (TypeScript, Python, Flask) et de couches REST / API Gateway servant des millions d\'utilisateurs quotidiens',
    j1_b4:        'Mise en place, optimisation et supervision des pipelines CI/CD avec GitHub Actions, Jenkins et ArgoCD',
    j1_b5:        'Déploiements automatisés sur GKE et gestion de l\'infrastructure GCP (Cloud Run, Pub/Sub, Cloud SQL)',
    j1_b6:        'Implémentation d\'un autoscaling piloté par événements avec <strong>KEDA</strong> sur GKE, utilisant la profondeur des files Redis comme déclencheur — réduction significative des coûts de calcul à l\'arrêt',
    j1_b7:        'Conception des couches de cache et session Redis (Cluster + Pub/Sub) pour absorber les pics de trafic avec un scaling horizontal à faible latence',
    j1_b8:        'Gestion des astreintes (on-call) ; pilotage du monitoring, des alertes et de l\'observabilité avec Datadog',
    j1_b9:        'Mentorat des ingénieurs, revues d\'architecture et application des bonnes pratiques à l\'échelle de la guild backend',
    j2_period:    'Sep 2020 — Sep 2022',
    j2_role:      'Chef de Projet Django / Python',
    j2_desc:      'Développement d\'une plateforme d\'automatisation pour l\'industrie télécom / fibre optique afin de centraliser et automatiser les workflows manuels (FME, pipelines ETL) et valider les configurations des nœuds réseau via des contrôles API.',
    j2_b1:        'Conduite de l\'<strong>analyse technique et fonctionnelle</strong> complète — cartographie des processus terrain en composants système, définition du modèle de données, de la surface API et des points d\'intégration',
    j2_b2:        'Prise de toutes les <strong>décisions architecturales</strong> en autonomie : choix technologiques, structure des services et stratégie de conception API',
    j2_b3:        'Conception et livraison d\'une plateforme Django remplaçant les workflows manuels par des validations automatisées pilotées par API',
    j2_b4:        'Exposition d\'API REST consommées par les équipes terrain pour des contrôles en temps réel des configurations de nœuds optiques',
    j3_period:    'Jan 2020 — Juil 2020',
    j3_role:      'Développeur Python · C# · Cloud',
    j3_desc:      'Automatisation et maintenance d\'un système de souscription de contrats d\'assurance basé sur Blockchain Quorum, des fonctions serverless et des clusters Databricks pour la visualisation et la prédiction des prix.',
    j3_b1:        'Maintenance d\'un système basé sur Blockchain Quorum pour les contrats et devis d\'assurance',
    j3_b2:        'Développement de fonctions serverless de traitement d\'événements et automatisation du pipeline de devis',
    j3_b3:        'Utilisation de clusters Databricks pour la visualisation des prix et des pipelines de prédiction basés sur le ML',
    j4_period:    'Jan 2018 — Déc 2019',
    j4_role:      'Développeur Python / C#',
    j4_desc:      'Contribution à Expensya — plateforme SaaS de gestion des notes de frais servant 5 000+ clients dans 192 pays (rachetée par Medius en 2023) — développement des fonctionnalités cœur de l\'application et du pipeline OCR+ intelligent qui digitise automatiquement les reçus et notes de frais papier.',
    j4_b1:        'Développement et maintenance des fonctionnalités CRUD du cœur de l\'application : notes de frais, workflows de validation, gestion des utilisateurs et gestion multi-devises',
    j4_b2:        'Contribution à <strong>OCR+</strong>, l\'intelligence centrale du produit — un pipeline qui digitise automatiquement les reçus papier en extrayant les champs clés (montant, date, marchand, TVA, devise) depuis des images scannées brutes',
    j4_b3:        'Implémentation de <strong>modules de classification et catégorisation</strong> utilisant la vectorisation TF-IDF, le matching par regex et le scoring par mots-clés pour assigner automatiquement des catégories de dépenses (repas, transport, hébergement) selon les politiques d\'entreprise',
    j4_b4:        'Combinaison de plusieurs techniques NLP — reconnaissance optique de caractères, recherche d\'information, classification statistique de texte et extraction de données structurées — en un pipeline robuste et extensible',
    j4_b5:        'Travail sur l\'ensemble de la stack Python / C# / ASP.NET sur Azure, avec contribution aux services backend et à la couche d\'extraction de données',
    // Certifications & Education
    sec_certs:       'Certifications & Formation',
    creds_sub_certs: 'Certifications',
    creds_sub_edu:   'Formation',
    cert2_name:      'Docker — Fondamentaux & avancé',
    edu1_name:       'Diplôme d\'ingénieur — Informatique & Télécommunications',
    edu1_from:       'École Supérieure des Communications de Tunis · 2018',
    edu2_name:       'Cycle préparatoire — Mathématiques & Physique',

    // Contact & footer
    sec_contact:  'Me Contacter',
    contact_sub:  'Disponible pour des postes senior backend, SRE et DevOps — télétravail privilégié.',
    footer_text:  '© 2022 Montassar Fatfouti · Aucun framework n\'a été blessé lors de la création de ce site',
  },
};

/* ============================================================
   TYPEWRITER ROLES (per language)
   ============================================================ */
const ROLES = {
  en: [
    'Lead Backend Engineer',
    'Site Reliability Engineer',
    'Cloud-Native Architect',
    'DevOps Engineer',
    'Platform Engineer',
    'AI-Augmented Developer',
  ],
  fr: [
    'Ingénieur Backend Lead',
    'Ingénieur en Fiabilité de Site',
    'Architecte Cloud-Native',
    'Ingénieur DevOps',
    'Ingénieur Plateforme',
    'Développeur augmenté par l\'IA',
  ],
};

/* ============================================================
   LANGUAGE DETECTION & APPLICATION
   ============================================================ */
const SUPPORTED = ['en', 'fr'];

function detectLang() {
  const saved = localStorage.getItem('portfolio-lang');
  if (saved && SUPPORTED.includes(saved)) return saved;
  // Walk the browser's ordered preference list
  const preferred = [...(navigator.languages || []), navigator.language].filter(Boolean);
  for (const l of preferred) {
    const code = l.slice(0, 2).toLowerCase();
    if (SUPPORTED.includes(code)) return code;
  }
  return 'en';
}

let currentLang = detectLang();

function applyLang(lang) {
  if (!SUPPORTED.includes(lang)) lang = 'en';
  currentLang = lang;

  // Update <html lang="">
  document.documentElement.lang = lang;
  localStorage.setItem('portfolio-lang', lang);

  const strings = T[lang];

  // Plain text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (strings[key] !== undefined) el.textContent = strings[key];
  });

  // HTML content (elements with <strong> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (strings[key] !== undefined) el.innerHTML = strings[key];
  });

  // Toggle button active state
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update typewriter language (restarts from current index)
  updateTypewriterLang(lang);
}

/* ============================================================
   TYPEWRITER
   ============================================================ */
let twRoleIdx  = 0;
let twCharIdx  = 0;
let twDeleting = false;
let twTimer    = null;

function updateTypewriterLang(lang) {
  // Reset to start on language switch so it feels intentional
  clearTimeout(twTimer);
  twRoleIdx  = 0;
  twCharIdx  = 0;
  twDeleting = false;
  const el = document.getElementById('typewriter');
  if (el) el.textContent = '';
  twTimer = setTimeout(() => tickTypewriter(lang), 400);
}

function tickTypewriter(lang) {
  const el = document.getElementById('typewriter');
  if (!el) return;

  // Guard: if lang changed mid-tick, the next call will use the new one
  if (lang !== currentLang) return;

  const roles = ROLES[lang];
  const role  = roles[twRoleIdx];

  if (!twDeleting) {
    el.textContent = role.slice(0, twCharIdx + 1);
    twCharIdx++;
    if (twCharIdx === role.length) {
      twDeleting = true;
      twTimer = setTimeout(() => tickTypewriter(lang), 2400);
      return;
    }
  } else {
    el.textContent = role.slice(0, twCharIdx - 1);
    twCharIdx--;
    if (twCharIdx === 0) {
      twDeleting = false;
      twRoleIdx  = (twRoleIdx + 1) % roles.length;
    }
  }
  twTimer = setTimeout(() => tickTypewriter(lang), twDeleting ? 35 : 72);
}

/* ============================================================
   NAV — scroll shadow + active section + mobile toggle
   ============================================================ */
(function initNav() {
  const nav      = document.getElementById('nav');
  const links    = document.querySelectorAll('.nav__link');
  const toggle   = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        const id = link.getAttribute('href').replace('#', '');
        link.classList.toggle('active', id === entry.target.id);
      });
    });
  }, { threshold: 0.3 });

  sections.forEach(s => obs.observe(s));

  toggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ============================================================
   LANGUAGE TOGGLE BUTTONS
   ============================================================ */
document.querySelectorAll('.lang-opt').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* ============================================================
   REVEAL ANIMATIONS
   ============================================================ */
(function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => entry.target.classList.add('visible'), i * 45);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  items.forEach(el => obs.observe(el));
})();

/* ============================================================
   SMOOTH ANCHOR SCROLL
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = document.getElementById('nav')?.offsetHeight ?? 0;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  });
});

/* ============================================================
   KONAMI EASTER EGG
   ============================================================ */
(function () {
  const SEQ = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let idx = 0;
  document.addEventListener('keydown', e => {
    idx = e.key === SEQ[idx] ? idx + 1 : 0;
    if (idx === SEQ.length) {
      idx = 0;
      const msg = currentLang === 'fr'
        ? '🎮 Code Konami débloqué — sudo apt-get install montassar'
        : '🎮 Konami unlocked — sudo apt-get install montassar';
      const el = document.createElement('div');
      el.className = 'easter-egg';
      el.textContent = msg;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }
  });
})();

/* ============================================================
   THEME — detect, apply, toggle
   ============================================================ */
(function initTheme() {
  function getTheme() {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }

  // Sync toggle button with whatever the <head> script already set
  // (the button click handler handles future changes)
  const btn = document.getElementById('themeBtn');
  btn?.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
  });

  // Also respond to OS-level theme changes (only if user hasn't overridden)
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
    if (!localStorage.getItem('portfolio-theme')) {
      applyTheme(e.matches ? 'light' : 'dark');
    }
  });
})();

/* ============================================================
   INIT — apply detected language on load
   ============================================================ */
applyLang(currentLang);
// Start typewriter after a short delay
twTimer = setTimeout(() => tickTypewriter(currentLang), 600);
