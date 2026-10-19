const spotifyArtist = "https://open.spotify.com/artist/7rsykE1BR5XrH762uLdwWT";
const youtubeFilm = "https://www.youtube.com/watch?v=WcT_fy3CM0g";
export default function HomePage() {
 return <main>
  <header><a href="#home" className="brand"><img className="brandImage" src="/whitespur-brand.svg" alt="Whitespur" width="285" height="88" /></a><a href="mailto:s@spurs.in" className="toplink">Contact ↗</a></header>
  <section className="hero" id="home">
   <div className="copy">
    <p className="eyebrow">AN INDEPENDENT MUSIC PROJECT</p>
    <h1>The part<br/>that doesn’t <em>set.</em></h1>
    <p className="quote">“Some things are written in light<br/>and only understood in darkness.”</p>
    <p className="storyLead">A tale of Sun and the Moon, told through the voice of the Sun.</p><p className="storyDescription">A journey through love, separation, regret, self-discovery and the belief that some stories are still unfolding.</p>
    <p>Whitespur brings original poetry together with electric violin, textured guitars and atmospheric electronica. <em>The Part That Doesn’t Set</em> belongs to the <strong>F&amp;O Forever</strong> project.</p>
    <nav><a className="primary" target="_blank" rel="noopener noreferrer" href={spotifyArtist}>Listen on Spotify ↗</a><a target="_blank" rel="noopener noreferrer" href={youtubeFilm}>Watch the film ↗</a></nav>
   </div>
   <figure><img src="https://i.ytimg.com/vi/WcT_fy3CM0g/maxresdefault.jpg" alt="Whitespur music video cover showing the sun and moon over the violin porch"/></figure>
  </section>
  <section className="bottom"><blockquote>☼ &nbsp; Perhaps the heavens<br/>haven’t finished with us.</blockquote><div className="details"><p className="eyebrow">ARTIST &amp; RELEASE</p><dl><div><dt>Artist</dt><dd>Whitespur</dd></div><div><dt>Creator &amp; lyricist</dt><dd>Suraj Sharma (Orion Spur)</dd></div><div><dt>Release</dt><dd>The Part That Doesn't Set</dd></div><div><dt>Project</dt><dd>F&amp;O Forever</dd></div><div><dt>Contact</dt><dd><a href="mailto:s@spurs.in">s@spurs.in</a></dd></div></dl></div></section>
  <footer><span>© 2026 Whitespur · Independent music project</span><span>An independent story told through music, poetry and film.</span></footer>
 </main>;
}