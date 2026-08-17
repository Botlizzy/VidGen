/* Midnight Studio: asymmetrical dark canvas, signal-blue workflow cues, editorial typography, and instrument-like interactions. */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Check, ChevronRight, Menu, Play, Sparkles, Wand2, X } from "lucide-react";

const heroImage = "/manus-storage/vid-gen-hero_75b5016b.jpg";
const workflowImage = "/manus-storage/vid-gen-workflow_2604edfb.jpg";
const logo = "/manus-storage/vid-gen-mark_b4fd1632.png";

function Brand() {
  return <Link href="/" className="brand" aria-label="VID-GEN home"><img src={logo} alt="" /><span>VID<span className="brand-cut">·</span>GEN</span></Link>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [, navigate] = useLocation();
  return <header className="site-header">
    <Brand />
    <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
      <a href="#workflow" onClick={() => setOpen(false)}>How it works</a>
      <a href="#formats" onClick={() => setOpen(false)}>Formats</a>
      <a href="#automation" onClick={() => setOpen(false)}>Automation</a>
      <Link href="/login" onClick={() => setOpen(false)}>Sign in</Link>
      <button className="nav-cta" onClick={() => navigate("/signup")}>Create free account <ArrowUpRight size={15} /></button>
    </nav>
    <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </header>;
}

function PromptConsole() {
  const [prompt, setPrompt] = useState("Launch a 30-second creator tip about staying consistent");
  return <div className="prompt-console">
    <div className="console-top"><span><span className="live-dot" /> Prompt studio</span><span className="mono">READY / 01</span></div>
    <label htmlFor="prompt">What should we make?</label>
    <textarea id="prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={3} />
    <div className="console-bottom"><div className="channel-pills"><span>Short video</span><span>Caption</span><span>Thumbnail</span></div><button className="generate-btn"><Wand2 size={16} /> Generate run</button></div>
    <div className="run-preview"><div className="run-preview-head"><span className="mono">OUTPUT PLAN</span><span className="status-pill">● queued</span></div><div className="run-row"><span className="run-number">01</span><span>Hook + script</span><span className="run-time">00:08</span></div><div className="run-row"><span className="run-number">02</span><span>Vertical edit</span><span className="run-time">00:42</span></div><div className="run-row"><span className="run-number">03</span><span>Channel-ready copy</span><span className="run-time">00:12</span></div></div>
  </div>;
}

export default function Home() {
  return <div className="app-shell">
    <Header />
    <main>
      <section className="hero-section">
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" />Prompt to publish</div><h1>One prompt.<br /><em>Every channel.</em></h1><p className="hero-sub">VID-GEN turns the spark in your head into scroll-stopping content — then publishes it where your audience already lives.</p><div className="hero-actions"><Link href="/signup" className="primary-btn">Start creating free <ArrowUpRight size={17} /></Link><a href="#workflow" className="text-btn"><span className="play-icon"><Play size={12} fill="currentColor" /></span> See how it works</a></div><div className="hero-proof"><div className="avatar-stack"><span>J</span><span>M</span><span>A</span><span>+</span></div><p>Built for the <strong>next wave</strong> of creators</p></div></div>
        <div className="hero-visual"><div className="hero-image-frame"><img src={heroImage} alt="Dark creator workspace with a prompt-to-publish workflow" /><div className="image-label mono">LIVE CREATOR DESK <span>↗</span></div></div><PromptConsole /></div>
      </section>

      <section className="signal-strip"><span className="mono">DESIGNED FOR OUTPUT</span><div className="signal-track"><span>01 / THINK</span><i /><span>02 / MAKE</span><i /><span>03 / SHIP</span><i /><span>04 / REPEAT</span></div><span className="mono">VID-GEN / 2025</span></section>

      <section id="workflow" className="workflow-section section-pad"><div className="section-intro"><span className="section-number mono">01 — THE WORKFLOW</span><h2>Make less noise.<br /><span>Make more moves.</span></h2><p>Keep the idea. Lose the busywork. VID-GEN gives every thought a clear path from rough prompt to ready-to-post content.</p></div><div className="workflow-grid"><div className="workflow-image"><img src={workflowImage} alt="Content outputs branching from a prompt card" /><div className="floating-note mono">3 OUTPUTS / 1 PROMPT</div></div><div className="steps"><div className="step active"><span className="step-index">01</span><div><h3>Drop in the idea</h3><p>Give us the thought, the angle, or just the feeling. Context in, blank page out.</p></div><ChevronRight /></div><div className="step"><span className="step-index">02</span><div><h3>Shape the run</h3><p>Choose your format, tone, and destination. VID-GEN builds a complete content set.</p></div><ChevronRight /></div><div className="step"><span className="step-index">03</span><div><h3>Let it ship</h3><p>Review once, then schedule or publish across your connected platforms.</p></div><ChevronRight /></div></div></div></section>

      <section id="formats" className="formats-section section-pad"><div className="section-intro compact"><span className="section-number mono">02 — ONE INPUT, MANY OUTPUTS</span><h2>Your content,<br /><span>in its native format.</span></h2></div><div className="format-cards"><div className="format-card blue-card"><span className="card-top mono">01 / SHORT-FORM</span><div className="format-shape vertical"><Play size={24} fill="currentColor" /></div><h3>Short video</h3><p>Hooks, scripts, cuts, and captions tuned for attention.</p><span className="format-status mono"><span className="live-dot" /> READY FOR REELS</span><span className="card-arrow"><ArrowUpRight /></span></div><div className="format-card white-card"><span className="card-top mono">02 / SOCIAL</span><div className="format-shape square"><Sparkles size={23} /></div><h3>Social kits</h3><p>Every post, carousel, and thumbnail you need to stay present.</p><span className="format-status mono"><span className="live-dot" /> ASSET KIT / 06</span><span className="card-arrow"><ArrowUpRight /></span></div><div className="format-card dark-card"><span className="card-top mono">03 / CAMPAIGN</span><div className="format-shape wide"><Check size={23} /></div><h3>Campaign runs</h3><p>One idea expanded into a week of consistent publishing.</p><span className="format-status mono"><span className="live-dot" /> RUN READY</span><span className="card-arrow"><ArrowUpRight /></span></div></div></section>

      <section id="automation" className="automation-section section-pad"><div className="automation-copy"><span className="section-number mono">03 — THE QUIET ADVANTAGE</span><h2>Publish once.<br /><span>Show up everywhere.</span></h2><p>Connect your channels, set your rhythm, and let VID-GEN handle the handoff. Your content gets out while you get back to the work only you can do.</p><Link href="/signup" className="outline-btn">Build your first run <ArrowUpRight size={16} /></Link></div><div className="automation-board"><div className="board-top mono"><span>AUTOMATION BOARD</span><span>SYNCED <span className="live-dot" /></span></div><div className="board-card"><div className="board-card-icon">V</div><div><strong>Creator tip / 30 sec</strong><span className="mono">READY TO PUBLISH</span></div><span className="board-check"><Check size={14} /></span></div><div className="board-line"><span className="line-dot" /><span /><span className="line-dot" /><span /><span className="line-dot" /></div><div className="platform-row"><div><b>▶</b><span>YouTube</span><small>Published</small></div><div><b>◎</b><span>Instagram</span><small>Scheduled</small></div><div><b>t</b><span>TikTok</span><small>Queued</small></div></div><div className="board-footer mono">NEXT RUN / THU 09:30 AM <span>↗</span></div></div></section>

      <section className="final-cta"><div><span className="mono">THE STUDIO IS OPEN</span><h2>Turn the idea<br /><em>into a run.</em></h2></div><Link href="/signup" className="primary-btn">Create your free account <ArrowUpRight size={17} /></Link></section>
    </main>
    <footer><Brand /><span className="footer-copy">Prompt in. Presence out.</span><span className="mono">© 2025 VID-GEN</span></footer>
  </div>;
}
