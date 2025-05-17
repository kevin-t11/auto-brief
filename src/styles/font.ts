import { DM_Sans, Outfit } from 'next/font/google';

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
