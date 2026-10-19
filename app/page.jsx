const spotifyArtist = 'https://open.spotify.com/artist/7rsykE1BR5XrH762uLdwWT';
const youtubeFilm = 'https://www.youtube.com/watch?v=WcT_fy3CM0g';
const xProfile = 'https://x.com/suraj_sharma';

export default function HomePage() {
  return (
    <main>
      <div className="ambient ambientOne" aria-hidden="true" />
      <div className="ambient ambientTwo" aria-hidden="true" />
      <div className="pageShell">
        <header className="header">
          <a className="brand" href="#home" aria-label="Whitespur home">
            <img
              className="brandLogo"
              src="/whitespur-logo-transparent.png?v=3"
              alt="Whitespur"
              loading="eager"
            />
          </a>
          <a className="headerLink" href="mailto:s@spurs.in">Contact <span aria-hidden="true">↗</span></a>
        </header>

        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="heroCopy">
            <p className="eyebrow"><span className="eyeLine" /> An independent music project</p>
            <h1 id="hero-title">The part<br />that doesn’t <em>set.</em></h1>
            <p className="quote">“Some things are written in light<br />and only understood in darkness.”</p>
            <p className="storyLead">A tale of Sun and the Moon, told through the voice of the Sun.</p>
            <p className="intro introSecond">A journey through love, separation, regret, self-discovery and the belief that some stories are still unfolding.</p>
            <p className="intro">Whitespur brings original poetry together with electric violin, textured guitars and atmospheric electronica. <em>The Part That Doesn’t Set</em> belongs to the <strong>F&amp;O Forever</strong> project.</p>
            <div className="buttons">
              <a className="btn btnPrimary" target="_blank" rel="noopener noreferrer" href={spotifyArtist}>Listen on Spotify <span aria-hidden="true">↗</span></a>
              <a className="btn btnSecondary" target="_blank" rel="noopener noreferrer" href={youtubeFilm}>Watch the film <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div className="heroVisual">
            <div className="photoFrame">
              <img
                src="/whitespur-cover.webp?v=3"
                alt="Whitespur cover art showing a violin on an autumn porch at sunset with the Whitespur sign overhead"
                loading="eager"
              />
            </div>
          </div>
        </section>

        <section className="lower" aria-label="Project and release information">
          <div className="lowerQuote">
            <span aria-hidden="true" className="smallSun">☼</span>
            <p>Perhaps the heavens<br />haven’t finished with us.</p>
          </div>
          <div className="proof">
            <h2>Project information</h2>
            <dl>
              <div><dt>Project</dt><dd>Whitespur</dd></div>
              <div><dt>Release</dt><dd>The Part That Doesn’t Set</dd></div>
              <div><dt>Series</dt><dd>F&amp;O Forever</dd></div>
              <div><dt>Creator &amp; lyricist</dt><dd>Suraj Sharma (Orion Spur)</dd></div>
              <div><dt>X</dt><dd><a href={xProfile} target="_blank" rel="noopener noreferrer">@suraj_sharma</a></dd></div>
              <div><dt>Contact</dt><dd><a href="mailto:s@spurs.in">s@spurs.in</a></dd></div>
            </dl>
          </div>
        </section>

        <footer>
          <span>© 2026 Whitespur · Independent music project</span>
          <span>Atmospheric storytelling through music, image and lyric.</span>
        </footer>
      </div>
    </main>
  );
}
