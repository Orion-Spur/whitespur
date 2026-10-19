import './globals.css';
export const metadata = {
  title: "Whitespur | The Part That Doesn't Set",
  description: "A tale of Sun and the Moon, told through the voice of the Sun. A journey through love, separation, regret, self-discovery and the belief that some stories are still unfolding.",
  openGraph: { title: "Whitespur — The Part That Doesn't Set", description: "Some things are written in light and only understood in darkness.", type: "website", images: ["/whitespur-brand.svg"] }
};
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}