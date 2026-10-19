import './globals.css';

export const metadata = {
  title: 'Whitespur | The Part That Doesn’t Set',
  description:
    'Whitespur is an independent music project. The Part That Doesn’t Set is a tale of Sun and the Moon, told through the voice of the Sun.',
  icons: {
    icon: '/icon.png?v=3',
    shortcut: '/icon.png?v=3',
    apple: '/icon.png?v=3',
  },
  openGraph: {
    title: 'Whitespur | The Part That Doesn’t Set',
    description:
      'A tale of Sun and the Moon, told through the voice of the Sun.',
    images: ['/whitespur-cover.webp?v=3'],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
