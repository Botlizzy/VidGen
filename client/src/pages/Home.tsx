import { useState } from "react";
import { ArrowUpRight, CalendarDays, Check, Clock3, Instagram, Menu, Music2, PenLine, Send, X, Youtube } from "lucide-react";
import { Link, useLocation } from "wouter";

const logo = "/manus-storage/vid-gen-mark_b4fd1632.png";
const heroVideo = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663897199193/lRhvhBRvMbsmvoJz.mp4";
const heroPoster = "/manus-storage/vid-gen-hero_75b5016b.jpg";

function Brand() {
  return <Link href="/" className="landing-brand" aria-label="VID-GEN home"><img src={logo} alt="" /><span>VID<span>·</span>GEN</span></Link>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [, navigate] = useLocation();
  const close = () => setOpen(false);
  return <header className="landing-header">
    <Brand />
    <nav className={open ? "landing-nav is-open" : "landing-nav"} aria-label="Main navigation">
      <a href="#how-it-works" onClick={close}>How it works</a>
      <a href="#channels" onClick={close}>Channels</a>
      <a href="#automation" onClick={close}>Automation</a>
      <Link href="/login" onClick={close}>Sign in</Link>
      <button className="landing-nav-button" onClick={() => navigate("/signup")}>Get started <ArrowUpRight size={15} /></button>
    </nav>
    <button className="landing-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </header>;
}

function PublishingPreview() {
  return <div className="publishing-preview" aria-label="Example content publishing schedule">
    <div className="preview-head"><div><span className="preview-kicker">This week</span><strong>Publishing queue</strong></div><span className="preview-status"><span /> On track</span></div>
    <div className="preview-progress"><span /><span /><span /><span /><span /><span /><span /></div>
    <div className="preview-date"><span>MON 12</span><span>TUE 13</span><span>WED 14</span><span>THU 15</span><span>FRI 16</span></div>
    <div className="scheduled-post featured"><div className="post-thumb post-thumb-coral">01</div><div className="post-copy"><strong>3 habits that changed my mornings</strong><span><Clock3 size={12} /> Today at 9:30 AM</span></div><span className="post-channel"><Instagram size={15} /></span></div>
    <div className="scheduled-post"><div className="post-thumb post-thumb-sage">02</div><div className="post-copy"><strong>Behind the scenes: a better workflow</strong><span><CalendarDays size={12} /> Tomorrow at 12:00 PM</span></div><span className="post-channel"><Youtube size={15} /></span></div>
    <div className="scheduled-post"><div className="post-thumb post-thumb-blue">03</div><div className="post-copy"><strong>One small idea worth saving</strong><span><CalendarDays size={12} /> Friday at 8:00 AM</span></div><span className="post-channel"><Music2 size={15} /></span></div>
    <div className="preview-footer"><span><Check size={14} /> 12 posts ready</span><span>View schedule <ArrowUpRight size={13} /></span></div>
  </div>;
}

export default function Home() {
  return <div className="landing-shell">
    <Header />
    <main>
      <section className="landing-hero">
        <div className="hero-video-layer" aria-hidden="true">
          <video className="hero-background-video" autoPlay muted loop playsInline poster={heroPoster}>
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="hero-video-shade" />
        </div>
        <div className="hero-message">
          <div className="landing-eyebrow"><span /> CONTENT, ON SCHEDULE</div>
          <h1>Your content should<br /><em>run without you.</em></h1>
          <p>VID-GEN turns one good idea into a week of content, then publishes it to the platforms where your audience already spends time.</p>
          <div className="hero-actions"><Link href="/signup" className="landing-primary">Start for free <ArrowUpRight size={17} /></Link><a href="#how-it-works" className="landing-text-link">See how it works <span>↓</span></a></div>
          <div className="hero-note"><span className="hero-note-line" /><span>No complicated setup. No content calendar to babysit.</span></div>
        </div>
        <div className="hero-product"><PublishingPreview /><div className="hero-product-label">A calm way to keep showing up.</div></div>
      </section>

      <section className="trust-strip"><span>Made for people who publish</span><div><span>Creators</span><i /> <span>Small teams</span><i /> <span>Growing brands</span></div><span>Save your best hours</span></section>

      <section id="how-it-works" className="landing-section process-section"><div className="section-heading"><span className="landing-eyebrow">HOW IT WORKS</span><h2>From a thought<br /><em>to a full week.</em></h2><p>Give VID-GEN the direction. Keep the final say. Everything else moves forward in one simple workflow.</p></div><div className="process-grid"><article><span className="process-number">01</span><div className="process-icon"><PenLine size={19} /></div><h3>Share the starting point</h3><p>Drop in an idea, a voice note, a link, or a rough brief. It does not need to be polished.</p></article><article><span className="process-number">02</span><div className="process-icon"><CalendarDays size={19} /></div><h3>Build the week</h3><p>VID-GEN shapes the idea into posts, short videos, captions, and a schedule that makes sense.</p></article><article><span className="process-number">03</span><div className="process-icon"><Send size={19} /></div><h3>Let it go live</h3><p>Review what matters, connect your channels once, and let the system publish on time.</p></article></div></section>

      <section id="channels" className="channels-section landing-section"><div className="channel-copy"><span className="landing-eyebrow">ONE WORKFLOW, EVERYWHERE</span><h2>Show up<br /><em>where it counts.</em></h2><p>Your voice stays consistent while each post gets the format, timing, and finish the platform expects.</p><Link href="/signup" className="landing-outline">Connect your channels <ArrowUpRight size={16} /></Link></div><div className="channel-board"><div className="channel-board-top"><span>Connected channels</span><span className="connection-state"><span /> All systems ready</span></div><div className="channel-row"><div className="channel-icon instagram"><Instagram size={20} /></div><div><strong>Instagram</strong><span>@yourbrand</span></div><b>Connected</b><Check size={16} /></div><div className="channel-row"><div className="channel-icon youtube"><Youtube size={20} /></div><div><strong>YouTube</strong><span>Your channel</span></div><b>Connected</b><Check size={16} /></div><div className="channel-row"><div className="channel-icon tiktok"><Music2 size={19} /></div><div><strong>TikTok</strong><span>@yourbrand</span></div><b>Connected</b><Check size={16} /></div><div className="channel-board-bottom"><span>Next scheduled post</span><strong>Today · 9:30 AM</strong></div></div></section>

      <section id="automation" className="automation-section-new landing-section"><div className="automation-card"><div className="automation-card-copy"><span className="landing-eyebrow">THE RESULT</span><h2>More consistency.<br /><em>Less screen time.</em></h2><p>When your publishing is handled, you get to spend your day on the work, conversations, and ideas that actually move the business forward.</p><Link href="/signup" className="landing-primary">Create your first run <ArrowUpRight size={17} /></Link></div><div className="result-stats"><div><strong>7</strong><span>days planned</span></div><div><strong>12</strong><span>posts ready</span></div><div><strong>3</strong><span>channels synced</span></div></div></div></section>

      <section className="landing-cta"><span className="landing-eyebrow">A BETTER CONTENT RHYTHM</span><h2>Make the idea.<br /><em>We’ll handle the rest.</em></h2><p>Start with one idea today and wake up to a week of content tomorrow.</p><Link href="/signup" className="landing-primary">Get started free <ArrowUpRight size={17} /></Link></section>
    </main>
    <footer className="landing-footer"><Brand /><span>Content, on schedule.</span><span>© 2026 VID-GEN</span></footer>
  </div>;
}
