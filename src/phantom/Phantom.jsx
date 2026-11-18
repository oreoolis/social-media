import { useState } from 'react';
import './phantom.css';
import { fursuitPhotos, socials } from '../content';
import cutout from './assets/oreolis-beastars-cutout.webp';
import refPreview from './assets/refsheet-preview.webp';

const OUT = <svg className="out" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M9 6h9v9" stroke="currentColor" strokeWidth="3" fill="none" /></svg>;
const DOWN = <svg className="out" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v15M6 13l6 6 6-6" stroke="currentColor" strokeWidth="3" fill="none" /></svg>;
const GO = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M5 12h13M12 5l7 7-7 7" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const PLAY = <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5 19 12 8 19Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" fill="none" /></svg>;

// Hero menu plates take these icons and tilts in turn.
const GLYPHS = [
  <path d="M12 3 22 20H2Z" strokeWidth="2.8" strokeLinejoin="round" />,
  <circle cx="12" cy="12" r="8" strokeWidth="3" />,
  <path d="M5 5 19 19M19 5 5 19" strokeWidth="3.2" strokeLinecap="round" />,
  <rect x="5" y="5" width="14" height="14" strokeWidth="3" />,
];
const MENU_TILTS = ['-4deg', '3deg', '-2deg', '4deg'];
const CARD_TILTS = ['-3deg', '2deg', '-1deg', '1deg'];

const tilted = socials.map((s, i) => ({ ...s, tilt: CARD_TILTS[i % CARD_TILTS.length] }));
const mainSocials = tilted.filter((s) => s.main);
const otherSocials = tilted.filter((s) => !s.main);
const menu = [...mainSocials, { name: 'More', href: '#others', ariaLabel: 'More socials' }];

const ANIMES = [
  { name: 'Black Clover', href: 'https://youtu.be/fFd1VkGc-SI?si=Lq2FVbKnyAtKMljn' },
  { name: 'Beastars', href: 'https://youtu.be/dy90tA3TT1c?si=N0Bc4c4y7cjmZqaX' },
  { name: 'My Hero Academia?', href: 'https://youtu.be/JFDFFoBClLY?si=D9hmdcfBr2jYrYBP' },
];

const BAND = ['PHOTOGRAPHER', 'VIDEOGRAPHER', 'SOFTWARE ENGINEERING STUDENT'];

// Ransom-note lettering. Each piece is [text, look, tilt in degrees, extra style].
// Looks (paper, ink, lift, cut, hot, round) and fonts (anton, archivo, marker) are classes in phantom.css.
function Ransom({ as: Tag = 'div', label, pieces, className }) {
  return (
    <Tag className={className ? `ransom ${className}` : 'ransom'} aria-label={label}>
      {pieces.map(([text, look, tilt, style], i) => (
        <span key={i} className={look} style={{ '--t': `${tilt}deg`, ...style }}>{text}</span>
      ))}
    </Tag>
  );
}

const NAME = [
  ['O', 'paper anton', -6],
  ['R', 'ink archivo', 4, { fontSize: '.82em' }],
  ['E', 'cut anton', -3, { '--y': '-.08em' }],
  ['O', 'paper archivo round', 7, { fontSize: '.9em' }],
  ['L', 'ink anton', -5, { fontSize: '1.08em' }],
  ['I', 'paper marker', 3, { '--y': '.06em', fontSize: '.78em' }],
  ['S', 'ink lift anton', -8, { marginLeft: '.08em' }],
];

const REF_TITLE = [
  [['MY', 'ink lift anton', -4], ['FURSONA', 'paper archivo', 3]],
  [['REFERENCE', 'cut anton', 2]],
  [['SHEET', 'ink lift archivo', -6], ['!', 'paper marker', 8]],
];

const SIGNATURE = [
  ['©', 'paper anton', -4],
  ['OREOLIS', 'hot archivo', 3],
  ['2026', 'anton', -2],
  ['v3.0.1', 'paper marker', 5, { fontSize: '.6em' }],
];

// Every second card sits lower, so a row reads as a scattered pile.
function Cards({ items }) {
  return (
    <div className="cards">
      {items.map((s, i) => (
        <a key={s.name} className={i % 2 ? 'card drop' : 'card'} href={s.href} style={{ '--r': s.tilt }}>
          <img width={s.art.width} height={s.art.height} loading="lazy" src={s.art.src} alt="" />
          <span className="go" aria-hidden="true">{GO}</span>
          <span className="label">
            <span className="name">{s.name}</span>
            <span className="credit">Art by: © {s.credit}</span>
          </span>
        </a>
      ))}
    </div>
  );
}

export default function Phantom() {
  const [paused, setPaused] = useState(false);

  return (
    <div className={paused ? 'p5 still' : 'p5'}>
      <div className="bg" aria-hidden="true">
        <div className="rays" />
        <div className="slash k" />
        <div className="slash r" />
        <svg className="star" width="70" height="70" viewBox="0 0 100 100">
          <path d="M50 5 61 38 96 38 68 59 79 93 50 72 21 93 32 59 4 38 39 38Z" fill="none" stroke="#fff" strokeWidth="6" strokeLinejoin="round" />
          <path d="M50 30 56 45 72 45 59 55 64 70 50 61 36 70 41 55 28 45 44 45Z" fill="#fff" />
        </svg>
      </div>

      <div className="content">
        <button className="motion" type="button" onClick={() => setPaused(!paused)}>
          <span>{paused ? 'Play motion' : 'Pause motion'}</span>
        </button>

        <section className="hero">
          <div className="hero-copy">
            <div className="tagline">
              <span className="stamp" lang="ja" aria-hidden="true">羊</span>
              <span className="scrawl">(n.) a sheep, not a goat.</span>
            </div>
            <Ransom as="h1" className="name" label="OREOLIS" pieces={NAME} />
            <div className="plate loc">
              <span>DORSET HORN SHEEP • <span className="nobr">SINGAPORE / PHILIPPINES</span></span>
            </div>
            <p className="note">software engineering student, photographer and videographer.</p>
            <nav className="jumps" aria-label="On this page">
              <a className="jump" href="#fursuit"><span>FURSUIT</span>{DOWN}</a>
              <a className="jump" href="#refsheet"><span>REF SHEET</span>{DOWN}</a>
            </nav>
          </div>

          <div className="stage">
            <div className="figure">
              <img
                className="subject"
                width="1100"
                height="1948"
                fetchpriority="high"
                src={cutout}
                alt="Oreolis as a Beastars Vol. 72 fan cover: a sheep in round glasses and a green jacket with a purple fur collar, lightning running down one arm"
              />
              <div className="ground" aria-hidden="true" />
              <div className="plate credit"><span>Art by: © NuncioNull</span></div>
            </div>
            <nav className="menu" aria-label="Socials">
              {menu.map((m, i) => (
                <a key={m.name} className="cmd" href={m.href} aria-label={m.ariaLabel} style={{ '--r': MENU_TILTS[i % MENU_TILTS.length] }}>
                  <span className="glyph">
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor" fill="none">{GLYPHS[i % GLYPHS.length]}</svg>
                  </span>
                  <span><span className="cmd-big">{m.name}{m.href.startsWith('#') ? DOWN : OUT}</span></span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="track">
            {Array.from({ length: 24 }, (_, i) => (
              <span key={i}>{BAND[i % 3]}<i className="sep" /></span>
            ))}
          </div>
        </div>

        <section id="socials" className="sec">
          <h2 className="plate heading"><span>MAIN SOCIALS.</span></h2>
          <Cards items={mainSocials} />
        </section>

        <section id="others" className="sec">
          <div className="sec-head">
            <h2 className="plate heading"><span>OTHER SOCIALS.</span></h2>
            <span className="scrawl">they're important too!</span>
          </div>
          <Cards items={otherSocials} />
        </section>

        <section id="fursuit" className="sec">
          <div className="sec-head">
            <h2 className="plate heading"><span>MY FURSUIT!</span></h2>
            <span className="scrawl">
              made by: <a href="https://www.instagram.com/li.zizizizi55/">@li.zizizizi55</a>
            </span>
          </div>
          <div className="wall">
            {fursuitPhotos.map((p) => (
              <figure key={p.src} className="photo">
                <img width={p.width} height={p.height} loading="lazy" src={p.src} alt={p.alt} />
              </figure>
            ))}
          </div>
        </section>

        <section id="refsheet">
          <h2 className="ref-title" aria-label="My fursona reference sheet!">
            {REF_TITLE.map((line, i) => (
              <Ransom key={i} as="span" className={i === 1 ? 'indent' : undefined} pieces={line} />
            ))}
          </h2>
          <a className="ref" href="https://drive.google.com/file/d/1Nz4n_Ar8fak6eE6x_8OzFcUYkO6_WYpO/view?usp=sharing">
            <img width="825" height="1100" loading="lazy" src={refPreview} alt="Oreolis fursona reference sheet preview" />
            <span className="ref-cta">FULL REFERENCE SHEET IMAGE</span>
            <span className="ref-sub">
              Find the full image here!
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.6" fill="none" /></svg>
            </span>
          </a>
        </section>

        <section id="animes">
          <p className="note">did i mention i love…</p>
          <div className="jumps">
            {ANIMES.map((a) => (
              <a key={a.name} className="chip" href={a.href}>{PLAY}<span>{a.name}</span></a>
            ))}
          </div>
          <span className="scrawl">psst… click the animes!</span>
        </section>
      </div>

      <footer className="foot">
        <div className="foot-in">
          <Ransom pieces={SIGNATURE} />
          <span className="scrawl">if you notice any bugs on this site, let me know!</span>
        </div>
      </footer>
    </div>
  );
}
