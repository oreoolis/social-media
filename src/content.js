// What the page links to and shows. Layout and styling live in src/phantom.
// Image width/height are the files' real pixel sizes, so the page reserves the right space before they load.
const S3 = 'https://hobbyfur-website-bucket.s3.ap-southeast-1.amazonaws.com';

// Main socials appear in the hero menu and under MAIN SOCIALS; the rest under OTHER SOCIALS.
export const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/oreoolis/',
    main: true,
    art: { src: `${S3}/artworks/KitsuneShrine_Pokemon_%26_Sona.png`, width: 2094, height: 2429 },
    credit: 'radishkek',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/Oreolis_',
    main: true,
    art: { src: `${S3}/artworks/53.jpg`, width: 1748, height: 2433 },
    credit: 'yoonkiepls',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCHIBRyhDPtMZVJKCdKU9jvw',
    main: true,
    art: { src: `${S3}/artworks/OREOLIS_comm_mergedpsd.png`, width: 1189, height: 1508 },
    credit: 'shibuyadogs',
  },
  {
    name: 'Bluesky',
    href: 'https://bsky.app/profile/oreolis.bsky.social',
    art: { src: `${S3}/artworks/IMG_2033.jpg`, width: 2119, height: 2644 },
    credit: 'CrowParadeArt',
  },
  {
    name: 'Photo Gallery',
    href: 'https://t.me/oreoheroaca',
    art: { src: `${S3}/artworks/IMG_3772.PNG`, width: 2433, height: 4194 },
    credit: 'masterblader191',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/oreoolis',
    art: { src: `${S3}/artworks/bafkreiadcymbxxwy5yyc5flc5cipr7ajpetjhjnwunbbjixjafj4qby3eu.jpg`, width: 1999, height: 1409 },
    credit: 'Yoonkie',
  },
];

// In collage order: the fursuit wall places photos by position.
export const fursuitPhotos = [
  { src: `${S3}/photos/DSC03308.jpg`, width: 6000, height: 4000, alt: 'Oreolis waving under a chandelier' },
  { src: `${S3}/photos/SDIM0063.jpg`, width: 4960, height: 4000, alt: 'Oreolis standing on a red bridge with a katana' },
  { src: `${S3}/photos/DSC09930.jpg`, width: 6000, height: 3376, alt: 'Oreolis gripping a katana, shot from above' },
  { src: `${S3}/photos/SDIM0065.jpg`, width: 4960, height: 4000, alt: 'Oreolis looking out from the red bridge' },
  { src: `${S3}/photos/SDIM0075.jpg`, width: 4960, height: 4000, alt: 'Oreolis standing under a tree' },
  { src: `${S3}/photos/SDIM0031.jpg`, width: 6000, height: 2576, alt: 'Oreolis in a black coat by the river' },
  { src: `${S3}/photos/SDIM0058.jpg`, width: 4960, height: 4000, alt: 'Oreolis leaning over the red bridge railing' },
];
