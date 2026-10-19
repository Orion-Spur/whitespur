import './globals.css';
export const metadata = {
  title: "Whitespur | F&O Forever",
  description: "Whitespur is an independent atmospheric music project created by Suraj Sharma (Orion Spur). Debut single: The Part That Doesn't Set.",
  openGraph: { title: "Whitespur — The Part That Doesn't Set", description: "Some things are written in light and only understood in darkness.", type: "website" }
};
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}