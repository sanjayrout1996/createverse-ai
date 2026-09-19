const tools = [
  ["🎬", "AI Video Generator", "Create videos from text, images and stories."],
  ["✍️", "AI Script Generator", "Turn your ideas into professional scripts."],
  ["🖼️", "AI Image Generator", "Create original visuals from simple prompts."],
  ["🎙️", "AI Voice Studio", "Generate natural voiceovers for your content."],
  ["🎵", "AI Music Studio", "Create music and sound effects for your projects."],
  ["🧑‍🎨", "Character Creator", "Build reusable characters for your stories."],
  ["🎞️", "Video Editor", "Edit, trim, merge and enhance your videos."],
  ["📢", "AI Ad Creator", "Create original product advertisements."],
  ["📰", "News to Video", "Turn verified news into original video stories."],
  ["🧸", "Cartoon & Rhymes", "Create characters, rhymes and animated stories."],
  ["🖼️", "Thumbnail Maker", "Design eye-catching thumbnails."],
  ["🤖", "AI Creator Director", "Let AI plan and create your entire project."]
];

export default function Home() {
  return (
    <main className="site">
      <nav className="navbar">
        <div className="logo">CreateVerse<span> AI</span></div>

        <div className="navlinks">
          <a href="#tools">AI Tools</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>

        <button className="login">Sign In</button>
      </nav>

      <section className="hero">
        <div className="badge">✦ NEXT-GENERATION AI CREATOR STUDIO</div>

        <h1>
          Create Anything.
          <br />
          <span>Bring Your Ideas to Life.</span>
        </h1>

        <p>
          Create videos, images, scripts, voices, music, characters,
          cartoons, advertisements and more — all from one powerful AI
          Creator Studio.
        </p>

        <div className="heroButtons">
          <button className="primary">Start Creating Free →</button>
          <button className="secondary">Explore AI Tools</button>
        </div>

        <div className="heroNote">
          No credit card required • Free creator tools • AI video available
          with paid credits
        </div>
      </section>

      <section id="tools" className="section">
        <div className="sectionTitle">
          <div className="badge">POWERFUL CREATION SUITE</div>
          <h2>Everything You Need to Create</h2>
          <p>
            One platform for your complete AI content creation workflow.
          </p>
        </div>

        <div className="toolGrid">
          {tools.map(([icon, title, description]) => (
            <div className="toolCard" key={title}>
              <div className="toolIcon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
              <button>Explore →</button>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="creatorSection">
        <div>
          <div className="badge">MASTER AI DIRECTOR</div>
          <h2>One Idea. One Prompt. A Complete Creation.</h2>
          <p>
            Describe what you want to create and CreateVerse AI can organize
            the workflow from concept and script to scenes, characters,
            voice, music, captions and final video.
          </p>

          <ul>
            <li>✓ Idea → Script → Scenes</li>
            <li>✓ Characters & Visuals</li>
            <li>✓ Voice & Music</li>
            <li>✓ Captions & Social Formats</li>
            <li>✓ Complete Video Workflow</li>
          </ul>
        </div>

        <div className="promptBox">
          <div className="promptTop">✦ CreateVerse AI Director</div>
          <div className="prompt">
            “Create a 60-second Hindi animated story for children with
            original characters, narration, music and subtitles.”
          </div>

          <div className="workflow">
            <span>Idea</span>
            <b>→</b>
            <span>Script</span>
            <b>→</b>
            <span>Scenes</span>
            <b>→</b>
            <span>Voice</span>
            <b>→</b>
            <span>Video</span>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="sectionTitle">
          <div className="badge">SIMPLE PRICING</div>
          <h2>Create More With Video Credits</h2>
          <p>Core creator tools are designed to remain accessible.</p>
        </div>

        <div className="priceGrid">
          <div className="priceCard">
            <h3>Monthly</h3>
            <div className="price">$59</div>
            <p>per month</p>
            <button>Choose Plan</button>
          </div>

          <div className="priceCard featured">
            <div className="popular">POPULAR</div>
            <h3>6 Months</h3>
            <div className="price">$149</div>
            <p>6-month plan</p>
            <button>Choose Plan</button>
          </div>

          <div className="priceCard">
            <h3>Annual</h3>
            <div className="price">$299</div>
            <p>per year</p>
            <button>Choose Plan</button>
          </div>
        </div>
      </section>

      <section id="faq" className="faq">
        <div className="sectionTitle">
          <div className="badge">FAQ</div>
          <h2>Questions, Answered.</h2>
        </div>

        <div className="faqBox">
          <h3>Is CreateVerse AI free?</h3>
          <p>
            Many creator tools can be offered free within reasonable usage
            and provider limits. AI video generation uses paid credits.
          </p>
        </div>

        <div className="faqBox">
          <h3>What can I create?</h3>
          <p>
            Videos, images, scripts, voiceovers, music, characters,
            cartoons, advertisements, thumbnails and more.
          </p>
        </div>
      </section>

      <footer>
        <div className="logo">CreateVerse<span> AI</span></div>
        <p>Create Anything. For Free.</p>
        <p>© 2026 CreateVerse AI. All rights reserved.</p>
      </footer>
    </main>
  );
                     }
