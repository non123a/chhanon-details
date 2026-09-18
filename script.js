/* Add one project object here when the portfolio grows. */
const PROJECTS = [
  {
    number: '01', slug: 'conceptidentify', title: 'ConceptIdentify', context: 'Final year', category: 'AI-Assisted Educational Platform', kind: 'featured',
    overview: 'A full-stack educational platform designed to help lecturers identify concepts students struggle with and support assessment/question generation through retrieval-grounded AI workflows.',
    concept: 'It connects learning material, semantic retrieval, AI-assisted generation, and lecturer review in one workflow.',
    workflow: ['Learning materials', 'Vector embeddings', 'Retrieval / semantic search', 'Gemini-assisted generation', 'Lecturer review / human oversight'],
    technologies: ['Django', 'Next.js', 'PostgreSQL', 'Google Gemini API', 'Sentence Transformers', 'pgvector', 'Vector embeddings', 'Semantic search', 'RAG', 'REST API authentication', 'Ubuntu', 'DigitalOcean', 'Cloudflare'],
    purpose: 'Helps lecturers identify concepts students struggle with and supports assessment/question generation within a human-review workflow.', detailLabel: 'Extended case study'
  },
  {
    number: '02', slug: 'auto-cv', title: 'Auto CV Generation System', context: 'Sophomore', category: 'Document workflow', kind: 'standard',
    overview: 'A project that takes dynamic user input and turns it into a generated, rendered, downloadable CV.',
    concept: 'The work explores how dynamic user input can become a formatted CV document.',
    workflow: ['Dynamic user input', 'CV generation', 'Backend rendering', 'PDF export', 'Deployment'],
    technologies: ['Dynamic user input', 'Backend rendering', 'PDF export', 'Deployment'],
    purpose: 'Shows a document-generation workflow from input to an exportable PDF.', image: 'Screenshot 2024-08-17 at 12.53.27 in the afternoon.png', imageAlt: 'Auto CV Generation System interface showing CV templates and generation workflow', detailLabel: 'Extended project'
  },
  {
    number: '03', slug: 'legend-of-kage', title: 'Legend of Kage', context: 'Personal experimentation', category: '2D action game', kind: 'game',
    overview: 'A Godot 4 2D action game built as an interactive software experiment.',
    concept: 'The project explores how player controls and game systems work together across level progression.',
    workflow: ['Player controls', 'Enemy AI', 'Collision systems', 'Level progression'],
    technologies: ['Godot 4', 'Player controls', 'Enemy AI', 'Collision systems', 'Level progression'],
    purpose: 'Shows interactive software work across player controls, enemy AI, collision systems, and level progression.', detailLabel: 'Extended project'
  }
];

function projectLink(project) { return project.detailLabel ? `<a class="arrow-link project-extended-link" href="work/${project.slug}/">${project.detailLabel} <span aria-hidden="true">→</span></a>` : ''; }
function meta(project) { return `<div class="project-entry-meta"><p class="project-number">PROJECT ${project.number}</p><p class="project-context">${project.context}</p><p class="project-type">${project.category}</p></div>`; }
function workflow(project) { return `<div class="project-workflow" aria-label="${project.title} workflow">${project.workflow.map((step, index) => `<div class="workflow-step"><span>${String(index + 1).padStart(2, '0')}</span><strong>${step}</strong></div>${index < project.workflow.length - 1 ? '<i aria-hidden="true">↓</i>' : ''}`).join('')}</div>`; }
function technologies(project, label = 'Technology') { return `<div class="project-technologies"><span class="meta-label">${label}</span><p>${project.technologies.join(' · ')}</p></div>`; }
function renderConcept(project) {
  return `<article class="project-entry project-featured" data-project="${project.slug}" aria-labelledby="${project.slug}-title"><div class="project-entry-head">${meta(project)}<div class="project-entry-title"><p class="project-kicker">Major project</p><h2 id="${project.slug}-title">${project.title}</h2><p>${project.overview}</p>${projectLink(project)}</div><div class="project-entry-visual system-visual" role="img" aria-label="ConceptIdentify system flow"><div class="visual-label"><span>System flow</span><span>Human review</span></div>${workflow(project)}</div></div><div class="project-entry-body"><div><span class="meta-label">Concept / problem</span><p>${project.concept}</p></div><div><span class="meta-label">How it works</span><p>Learning materials become vector embeddings for retrieval and semantic search, followed by Gemini-assisted generation and lecturer review.</p></div><div><span class="meta-label">Purpose / outcome</span><p>${project.purpose}</p></div>${technologies(project)}</div></article>`;
}
function renderAutoCv(project) {
  return `<article class="project-entry project-secondary project-cv" data-project="${project.slug}" aria-labelledby="${project.slug}-title"><div class="project-entry-head">${meta(project)}<div class="project-entry-title"><h2 id="${project.slug}-title">${project.title}</h2><p>${project.overview}</p>${projectLink(project)}</div><div class="project-entry-visual project-image"><img src="${project.image}" alt="${project.imageAlt}"></div></div><div class="project-entry-body"><div><span class="meta-label">Concept</span><p>${project.concept}</p></div><div><span class="meta-label">Workflow</span>${workflow(project)}</div><div><span class="meta-label">Purpose</span><p>${project.purpose}</p></div>${technologies(project, 'Workflow / capabilities')}</div></article>`;
}
function renderLegend(project) {
  return `<article class="project-entry project-secondary project-game" data-project="${project.slug}" aria-labelledby="${project.slug}-title"><div class="project-entry-head">${meta(project)}<div class="project-entry-title"><h2 id="${project.slug}-title">${project.title}</h2><p>${project.overview}</p>${projectLink(project)}</div><div class="project-entry-visual game-visual" role="img" aria-label="Verified Legend of Kage gameplay imagery is not currently available"><span class="game-visual-label">GAME SYSTEMS</span><span class="game-visual-title">LEGEND<br>OF KAGE</span><span class="game-visual-note">Gameplay capture is not currently available in the verified assets.</span></div></div><div class="project-entry-body"><div><span class="meta-label">Concept</span><p>${project.concept}</p></div><div><span class="meta-label">Systems</span>${workflow(project)}</div><div><span class="meta-label">Purpose</span><p>${project.purpose}</p></div>${technologies(project, 'Technology / systems')}</div></article>`;
}
function renderProject(project) { return project.kind === 'featured' ? renderConcept(project) : project.kind === 'game' ? renderLegend(project) : renderAutoCv(project); }
function renderProjectCollection() {
  const collection = document.querySelector('#project-collection'); const count = document.querySelector('#project-count'); if (!collection) return;
  collection.innerHTML = `${renderProject(PROJECTS[0])}<div class="other-work-heading"><p class="eyebrow">Other work</p><p class="muted">Different problems need different interfaces.</p></div>${PROJECTS.slice(1).map(renderProject).join('')}`;
  if (count) count.textContent = `01—${String(PROJECTS.length).padStart(2, '0')}`;
}
function renderProjectNavigation() {
  const navigation = document.querySelector('[data-project-navigation]'); if (!navigation) return;
  const index = PROJECTS.findIndex((project) => project.slug === document.body.dataset.project); if (index < 0) return;
  const previous = PROJECTS[index - 1]; const next = PROJECTS[index + 1];
  navigation.innerHTML = `${previous ? `<a href="../${previous.slug}/"><span>← Previous project</span><strong>${previous.title}</strong></a>` : '<span></span>'}${next ? `<a href="../${next.slug}/"><span>Next project →</span><strong>${next.title}</strong></a>` : '<span></span>'}`;
}
function setupMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#site-menu');
  if (!toggle || !menu) return;
  const setOpen = (open, returnFocus = false) => {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    if (returnFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    setOpen(open);
    if (open) menu.querySelector('a')?.focus();
  });
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setOpen(false, true);
  });
  document.addEventListener('click', (event) => {
    if (toggle.getAttribute('aria-expanded') === 'true' && !menu.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
  });
  const desktopQuery = window.matchMedia('(min-width: 981px)');
  const syncWithViewport = (event) => { if (event.matches) setOpen(false); };
  desktopQuery.addEventListener?.('change', syncWithViewport);
}
function setupReveals() { const items = document.querySelectorAll('.reveal'); if (!items.length) return; if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 }); items.forEach((item) => observer.observe(item)); } else items.forEach((item) => item.classList.add('is-visible')); }
renderProjectCollection(); renderProjectNavigation(); setupMenu(); setupReveals();
