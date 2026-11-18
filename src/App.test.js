import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { socials } from './content';

const SOCIALS = [
  'https://www.instagram.com/oreoolis/',
  'https://twitter.com/Oreolis_',
  'https://www.youtube.com/channel/UCHIBRyhDPtMZVJKCdKU9jvw',
  'https://bsky.app/profile/oreolis.bsky.social',
  'https://t.me/oreoheroaca',
  'https://www.facebook.com/oreoolis',
];

test('links every social account', () => {
  render(<App />);
  const hrefs = screen.getAllByRole('link').map((a) => a.getAttribute('href'));
  SOCIALS.forEach((url) => expect(hrefs).toContain(url));
});

test('hero socials menu offers the main three plus more', () => {
  render(<App />);
  const menu = screen.getByRole('navigation', { name: 'Socials' });
  const links = Array.from(menu.querySelectorAll('a')).map((a) => a.getAttribute('href'));
  expect(links).toEqual([SOCIALS[0], SOCIALS[1], SOCIALS[2], '#others']);
});

test('every social card shows its artwork and credit', () => {
  render(<App />);
  socials.forEach((s) => {
    const card = screen.getByRole('link', { name: new RegExp(`^${s.name}\\s*Art by: © ${s.credit}$`, 'i') });
    expect(card.querySelector('img').getAttribute('src')).toMatch(/^https:\/\//);
  });
});

test('pause button stops and restarts the motion', () => {
  const { container } = render(<App />);
  const page = container.firstChild;
  fireEvent.click(screen.getByRole('button', { name: 'Pause motion' }));
  expect(page).toHaveClass('still');
  fireEvent.click(screen.getByRole('button', { name: 'Play motion' }));
  expect(page).not.toHaveClass('still');
});
