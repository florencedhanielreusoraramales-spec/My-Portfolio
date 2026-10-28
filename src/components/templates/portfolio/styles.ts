export const PORTFOLIO_STYLES = `
[data-slot="portfolio"] {
  --bg: 222 55% 8%;
  --surface: 221 46% 13%;
  --text: 210 40% 97%;
  --muted: 218 28% 76%;
  --stroke: 221 34% 27%;
  --accent: 220 100% 84%;
  --brand: 225 74% 59%;
  --brand-soft: 220 100% 84%;
  --card-shadow: 222 62% 4%;
  font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}
[data-slot="portfolio"] .font-display {
  font-family: var(--font-instrument-serif), ui-serif, Georgia, serif;
}
[data-slot="portfolio"] .accent-gradient {
  background-image: linear-gradient(90deg, #4169e1 0%, #afc6ff 100%);
}
[data-slot="portfolio"] .accent-gradient-animated {
  background-image: linear-gradient(90deg, #4169e1 0%, #afc6ff 50%, #4169e1 100%);
  background-size: 200% 100%;
  animation: pf-gradient-shift 6s ease infinite;
}
[data-slot="portfolio"] .hero-glow {
  background: radial-gradient(ellipse at 50% 28%, rgba(65, 105, 225, .3), transparent 48%), linear-gradient(150deg, #070f20 8%, #102044 60%, #080f20 100%);
}
[data-slot="portfolio"] .hero-tint {
  background: linear-gradient(135deg, rgba(7, 15, 32, .24), rgba(10, 24, 51, .12) 52%, rgba(7, 15, 32, .36));
}
[data-slot="portfolio"] .typing-cursor {
  display: inline-block;
  margin-inline-start: 2px;
  color: #aFC6ff;
  animation: pf-cursor-blink .8s steps(2, start) infinite;
}
[data-slot="portfolio"] .hero-description {
  color: #fff;
  text-shadow: 0 1px 8px rgba(4, 10, 28, .9), 0 0 22px rgba(4, 10, 28, .42);
}
@keyframes pf-cursor-blink { to { visibility: hidden; } }
[data-slot="portfolio"] .profile-image {
  border: 4px solid rgba(235, 242, 255, .92);
  box-shadow: 0 16px 45px rgba(0, 0, 0, .42), 0 0 0 10px rgba(94, 133, 221, .12);
}
[data-slot="portfolio"] .about-panel {
  position: relative;
  overflow: hidden;
  background: linear-gradient(145deg, hsl(221 46% 15% / .98), hsl(222 55% 10% / .98));
  box-shadow: 5px 5px 0 hsl(var(--card-shadow) / .8), inset 0 0 0 1px hsl(var(--text) / .025);
  transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
}
[data-slot="portfolio"] .project-card {
  position: relative;
  background: linear-gradient(145deg, hsl(221 46% 15% / .98), hsl(222 55% 10% / .98));
  box-shadow: 7px 7px 0 hsl(var(--card-shadow) / .85), inset 0 0 0 1px hsl(var(--text) / .025);
  transition: transform .35s cubic-bezier(.23, 1, .32, 1), border-color .3s ease, box-shadow .35s ease;
}
[data-slot="portfolio"] .project-card::after,
[data-slot="portfolio"] .about-panel::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: .28;
  background-image: radial-gradient(hsl(var(--brand-soft) / .28) 1px, transparent 1px);
  background-size: 14px 14px;
  mask-image: linear-gradient(135deg, #000, transparent 58%);
}
[data-slot="portfolio"] .project-card:hover,
[data-slot="portfolio"] .about-panel:hover {
  transform: translate(-3px, -3px);
  border-color: hsl(var(--brand-soft) / .65);
  box-shadow: 10px 10px 0 hsl(var(--card-shadow) / .9), 0 0 28px hsl(var(--brand) / .1);
}
[data-slot="portfolio"] .project-card > *,
[data-slot="portfolio"] .about-panel > * {
  position: relative;
  z-index: 1;
}
[data-slot="portfolio"] .project-card > img {
  border-bottom: 3px solid hsl(var(--brand) / .8);
}
[data-slot="portfolio"] .project-card a,
[data-slot="portfolio"] .resume-button {
  transition: background-color .2s ease, color .2s ease, transform .2s ease, box-shadow .2s ease;
}
[data-slot="portfolio"] .project-card a:hover {
  color: hsl(var(--brand-soft));
}
[data-slot="portfolio"] .resume-button {
  border: 2px solid hsl(var(--text));
  box-shadow: 4px 4px 0 hsl(var(--card-shadow));
}
[data-slot="portfolio"] .resume-button:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 hsl(var(--card-shadow));
}
[data-slot="portfolio"] .skill-bar {
  background: linear-gradient(90deg, #4169e1, #afc6ff);
}
[data-slot="portfolio"] .resume-button {
  color: #fff;
  background: #4169e1;
  box-shadow: 4px 4px 0 hsl(var(--card-shadow)), 0 10px 28px rgba(65, 105, 225, .32);
}
[data-slot="portfolio"] .contact-glow {
  background: radial-gradient(ellipse at 50% 0%, rgba(65, 105, 225, .26), transparent 55%), linear-gradient(180deg, #0b1730, #070f20);
}
[data-slot="portfolio"] .stat-card {
  position: relative;
  border: 1px solid hsl(var(--stroke));
  border-radius: 1rem;
  background: linear-gradient(145deg, hsl(221 46% 15% / .7), hsl(222 55% 10% / .8));
  padding: 1.5rem;
  box-shadow: 5px 5px 0 hsl(var(--card-shadow) / .8);
  transition: transform .3s ease, border-color .3s ease;
}
[data-slot="portfolio"] .stat-card:hover {
  transform: translate(-3px, -3px);
  border-color: hsl(var(--brand-soft) / .65);
}
[data-slot="portfolio"] .animate-scroll-down {
  animation: pf-scroll-down 1.5s ease-in-out infinite;
}
[data-slot="portfolio"] .animate-role-fade-in {
  animation: pf-role-fade-in 0.4s ease-out both;
}
@keyframes pf-scroll-down {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(200%); }
}
@keyframes pf-role-fade-in {
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes pf-gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@media (prefers-reduced-motion: reduce) {
  [data-slot="portfolio"] .animate-scroll-down,
  [data-slot="portfolio"] .accent-gradient-animated {
    animation: none;
  }
}
`;
