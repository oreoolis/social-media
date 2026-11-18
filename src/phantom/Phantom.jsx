import { useState } from 'react';
import './phantom.css';
import { artworks } from '../images/artwork-images.ts';
import { fursuitImages } from '../images/fursuit-images.ts';
import cutout from './assets/oreolis-beastars-cutout.webp';
import refPreview from './assets/refsheet-preview.webp';

const art = Object.assign({}, ...artworks);
const suit = Object.assign({}, ...fursuitImages);

const IG = 'https://www.instagram.com/oreoolis/';
const TW = 'https://twitter.com/Oreolis_';
const YT = 'https://www.youtube.com/channel/UCHIBRyhDPtMZVJKCdKU9jvw';

const OUT = <svg className="out" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M9 6h9v9" stroke="currentColor" strokeWidth="3" fill="none" /></svg>;
const DOWN = <svg className="out" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v15M6 13l6 6 6-6" stroke="currentColor" strokeWidth="3" fill="none" /></svg>;
const GO = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M5 12h13M12 5l7 7-7 7" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const PLAY = <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5 19 12 8 19Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" fill="none" /></svg>;

const MENU = [
  { label: 'INSTAGRAM', href: IG, r: '-4deg', glyph: <path d="M12 3 22 20H2Z" strokeWidth="2.8" strokeLinejoin="round" /> },
  { label: 'TWITTER', href: TW, r: '3deg', glyph: <circle cx="12" cy="12" r="8" strokeWidth="3" /> },
  { label: 'YOUTUBE', href: YT, r: '-2deg', glyph: <path d="M5 5 19 19M19 5 5 19" strokeWidth="3.2" strokeLinecap="round" /> },
  { label: 'MORE', href: '#others', r: '4deg', glyph: <rect x="5" y="5" width="14" height="14" strokeWidth="3" />, ariaLabel: 'More socials' },
];

const MAIN = [
  { name: 'INSTAGRAM', href: IG, credit: 'radishkek', src: art.radish_art, w: 900, h: 1044, r: '-3deg' },
  { name: 'TWITTER', href: TW, credit: 'yoonkiepls', src: art.yoonkie_1, w: 862, h: 1200, r: '2deg', drop: true },
  { name: 'YOUTUBE', href: YT, credit: 'shibuyadogs', src: art.art_shibuya, w: 867, h: 1100, r: '-1deg' },
];

const OTHERS = [
  { name: 'BLUESKY', href: 'https://bsky.app/profile/oreolis.bsky.social', credit: 'CrowParadeArt', src: art.profile_pic_2, w: 962, h: 1200, r: '2deg' },
  { name: 'PHOTO GALLERY', href: 'https://t.me/oreoheroaca', credit: 'masterblader191', src: art.sherbet_art, w: 638, h: 1100, r: '-3deg', drop: true },
  { name: 'FACEBOOK', href: 'https://www.facebook.com/oreoolis', credit: 'Yoonkie', src: art.yoonkie_2, w: 1200, h: 846, r: '1deg' },
];

// Collage order matters: the grid in phantom.css places these by position.
const PHOTOS = [
  { src: suit.image_1, w: 1200, h: 800, alt: 'Oreolis waving under a chandelier' },
  { src: suit.image_5, w: 1200, h: 968, alt: 'Oreolis standing on a red bridge with a katana' },
  { src: suit.image_4, w: 1200, h: 675, alt: 'Oreolis gripping a katana, shot from above' },
  { src: suit.image_6, w: 1200, h: 968, alt: 'Oreolis looking out from the red bridge' },
  { src: suit.image_7, w: 1200, h: 968, alt: 'Oreolis standing under a tree' },
  { src: suit.image_2, w: 1200, h: 515, alt: 'Oreolis in a black coat by the river' },
  { src: suit.image_3, w: 1200, h: 968, alt: 'Oreolis leaning over the red bridge railing' },
];

const ANIMES = [
  { name: 'Black Clover', href: 'https://youtu.be/fFd1VkGc-SI?si=Lq2FVbKnyAtKMljn' },
  { name: 'Beastars', href: 'https://youtu.be/dy90tA3TT1c?si=N0Bc4c4y7cjmZqaX' },
  { name: 'My Hero Academia?', href: 'https://youtu.be/JFDFFoBClLY?si=D9hmdcfBr2jYrYBP' },
];

const BAND = ['PHOTOGRAPHER', 'VIDEOGRAPHER', 'SOFTWARE ENGINEERING STUDENT'];

const WHITE = { background: '#fff', color: 'var(--ink)' };
const INK = { background: 'var(--ink)', color: '#fff' };

// One cut-out letter of the ransom-note lettering; `t` is its tilt in degrees.
function Bit({ t, shift = '', className, style, children }) {
  return (
    <span className={className} style={{ '--t': `${t}deg`, transform: `rotate(${t}deg)${shift}`, ...style }}>
      {children}
    </span>
  );
}

function Cards({ items }) {
  return (
    <div className="cards">
      {items.map((c) => (
        <a key={c.name} className={c.drop ? 'card drop' : 'card'} href={c.href} style={{ '--r': c.r }}>
          <img width={c.w} height={c.h} loading="lazy" src={c.src} alt="" />
          <span className="go" aria-hidden="true">{GO}</span>
          <span className="label">
            <span className="name">{c.name}</span>
            <span className="credit">Art by: © {c.credit}</span>
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
              <span className="scrawl" style={{ fontSize: 24 }}>(n.) a sheep, not a goat.</span>
            </div>
            <h1 className="ransom name" aria-label="OREOLIS">
              <Bit t={-6} className="anton" style={WHITE}>O</Bit>
              <Bit t={4} className="archivo" style={{ ...INK, fontSize: '.82em' }}>R</Bit>
              <Bit t={-3} shift=" translateY(-.08em)" className="anton" style={{ color: '#fff', textShadow: '.07em .07em 0 var(--ink)' }}>E</Bit>
              <Bit t={7} className="archivo" style={{ ...WHITE, fontSize: '.9em', borderRadius: '50%' }}>O</Bit>
              <Bit t={-5} className="anton" style={{ ...INK, fontSize: '1.08em' }}>L</Bit>
              <Bit t={3} shift=" translateY(.06em)" className="marker" style={{ ...WHITE, fontSize: '.78em' }}>I</Bit>
              <Bit t={-8} className="anton" style={{ ...INK, boxShadow: '.07em .07em 0 #fff', marginLeft: '.08em' }}>S</Bit>
            </h1>
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
              {MENU.map((m) => (
                <a key={m.label} className="cmd" href={m.href} aria-label={m.ariaLabel} style={{ '--r': m.r }}>
                  <span className="glyph">
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor" fill="none">{m.glyph}</svg>
                  </span>
                  <span><span className="cmd-big">{m.label}{m.href.startsWith('#') ? DOWN : OUT}</span></span>
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
          <Cards items={MAIN} />
        </section>

        <section id="others" className="sec">
          <div className="sec-head">
            <h2 className="plate heading"><span>OTHER SOCIALS.</span></h2>
            <span className="scrawl" style={{ fontSize: 26 }}>they're important too!</span>
          </div>
          <Cards items={OTHERS} />
        </section>

        <section id="fursuit" className="sec">
          <div className="sec-head">
            <h2 className="plate heading"><span>MY FURSUIT!</span></h2>
            <span className="scrawl" style={{ fontSize: 24 }}>
              made by: <a href="https://www.instagram.com/li.zizizizi55/">@li.zizizizi55</a>
            </span>
          </div>
          <div className="wall">
            {PHOTOS.map((p) => (
              <figure key={p.src} className="photo">
                <img width={p.w} height={p.h} loading="lazy" src={p.src} alt={p.alt} />
              </figure>
            ))}
          </div>
        </section>

        <section id="refsheet">
          <div className="ref-title">
            <h2 className="ransom" aria-label="My fursona reference sheet!">
              <Bit t={-4} className="anton" style={{ ...INK, boxShadow: '.07em .07em 0 #fff' }}>MY</Bit>
              <Bit t={3} className="archivo" style={WHITE}>FURSONA</Bit>
            </h2>
            <h2 className="ransom" style={{ marginLeft: 40 }} aria-hidden="true">
              <Bit t={2} className="anton" style={{ color: '#fff', textShadow: '.07em .07em 0 var(--ink)' }}>REFERENCE</Bit>
            </h2>
            <h2 className="ransom" aria-hidden="true">
              <Bit t={-6} className="archivo" style={{ ...INK, boxShadow: '.07em .07em 0 #fff' }}>SHEET</Bit>
              <Bit t={8} className="marker" style={WHITE}>!</Bit>
            </h2>
          </div>
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
          <p className="note" style={{ fontSize: 20 }}>did i mention i love…</p>
          <div className="jumps">
            {ANIMES.map((a) => (
              <a key={a.name} className="chip" href={a.href}>{PLAY}<span>{a.name}</span></a>
            ))}
          </div>
          <span className="scrawl" style={{ fontSize: 22, marginLeft: 12 }}>psst… click the animes!</span>
        </section>
      </div>

      <footer className="foot">
        <div className="foot-in">
          <div className="ransom" style={{ fontSize: 44 }} aria-label="© OREOLIS 2026 v3.0.1">
            <Bit t={-4} className="anton" style={WHITE}>©</Bit>
            <Bit t={3} className="archivo" style={{ background: 'var(--accent)', color: '#fff' }}>OREOLIS</Bit>
            <Bit t={-2} className="anton" style={{ color: '#fff' }}>2026</Bit>
            <Bit t={5} className="marker" style={{ ...WHITE, fontSize: '.6em' }}>v3.0.1</Bit>
          </div>
          <span className="scrawl" style={{ fontSize: 20 }}>if you notice any bugs on this site, let me know!</span>
        </div>
      </footer>
    </div>
  );
}
