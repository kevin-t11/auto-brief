import { DM_Sans, Outfit, Shadows_Into_Light } from 'next/font/google';

export const autoBriefFontClassic = Outfit({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-auto-brief-classic'
});

export const autoBriefFont = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-auto-brief'
});

export const ShadowIntoLight = Shadows_Into_Light({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-shadow-into-light'
});
