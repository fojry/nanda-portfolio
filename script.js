const progress = document.querySelector('.progress span');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
});

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.site-nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('is-open')));

document.querySelectorAll('.filter').forEach(filter => {
  filter.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    filter.classList.add('active');
    const selected = filter.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.classList.toggle('is-hidden', selected !== 'all' && card.dataset.category !== selected);
    });
  });
});

const modal = document.querySelector('.project-modal');
const modalTitle = document.querySelector('.modal-title');
const modalType = document.querySelector('.modal-type');
document.querySelectorAll('.project-card').forEach(card => {
  card.querySelector('.project-visual').addEventListener('click', () => {
    modalTitle.textContent = card.dataset.title;
    modalType.textContent = card.dataset.type;
    modal.showModal();
  });
});
document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });

document.getElementById('year').textContent = new Date().getFullYear();
