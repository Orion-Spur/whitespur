const spotifyArtist = "https://open.spotify.com/artist/7rsykE1BR5XrH762uLdwWT";
const youtubeFilm = "https://www.youtube.com/watch?v=WcT_fy3CM0g";
export default function HomePage() {
 return <main>
  <header><a href="#home" className="brand"><img className="brandCrest" src="/whitespur-crest.avif" alt="" aria-hidden="true" width="60" height="60" /><span className="brandName">WHITESPUR</span></a><nav className="headerLinks"><a href="https://x.com/suraj_sharma" target="_blank" rel="noopener noreferrer" className="toplink" aria-label="Orion Spur on X">X ↗</a><a href="mailto:s@spurs.in" className="toplink">Contact ↗</a></nav></header>
  <section className="hero" id="home">
   <div className="copy">
    <p className="eyebrow">AN INDEPENDENT MUSIC PROJECT</p>
    <h1>The part<br/>that doesn’t <em>set.</em></h1>
    <p className="quote">“Some things are written in light<br/>and only understood in darkness.”</p>
    <p className="storyLead">A tale of Sun and the Moon, told through the voice of the Sun.</p><p className="storyDescription">A journey through love, separation, regret, self-discovery and the belief that some stories are still unfolding.</p>
    <p>Whitespur brings original poetry together with electric violin, textured guitars and atmospheric electronica. <em>The Part That Doesn’t Set</em> belongs to the <strong>F&amp;O Forever</strong> project.</p>
    <nav><a className="primary" target="_blank" rel="noopener noreferrer" href={spotifyArtist}>Listen on Spotify ↗</a><a target="_blank" rel="noopener noreferrer" href={youtubeFilm}>Watch the film ↗</a></nav>
   </div>
   <figure><img src="/whitespur-cover.avif" alt="The Part That Doesn’t Set original square cover artwork: violin, Whitespur sign, sunset and F&O Forever"/></figure>
  </section>
  <section className="bottom"><blockquote>☼ &nbsp; Perhaps the heavens<br/>haven’t finished with us.</blockquote><div className="details"><p className="eyebrow">PROJECT INFORMATION</p><dl><div><dt>Project</dt><dd>Whitespur</dd></div><div><dt>Creator &amp; lyricist</dt><dd>Suraj Sharma (Orion Spur)</dd></div><div><dt>Release</dt><dd>The Part That Doesn't Set</dd></div><div><dt>Collection</dt><dd>F&amp;O Forever</dd></div><div><dt>Contact</dt><dd><a href="mailto:s@spurs.in">s@spurs.in</a></dd></div></dl></div></section>
  <footer><span>© 2026 Whitespur · Independent music project</span><span><a href="https://x.com/suraj_sharma" target="_blank" rel="noopener noreferrer">X: @suraj_sharma ↗</a> · An independent story told through music, poetry and film.</span></footer>
 </main>;
}