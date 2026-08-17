/* VID-GEN shell: deep-black creator workspace with vivid red, blue, green, and yellow states. */
import { Link, useLocation } from "wouter";
import { Bell, CalendarDays, ChartNoAxesCombined, Home, Library, Menu, PenLine, Settings, Sparkles, X } from "lucide-react";
import { useState } from "react";

const nav = [
  ["Home", "/dashboard", Home],
  ["Generate", "/dashboard#generate", PenLine],
  ["Schedule", "/schedule", CalendarDays],
  ["Analytics", "/dashboard#analytics", ChartNoAxesCombined],
  ["Library", "/dashboard#library", Library],
  ["Settings", "/dashboard#settings", Settings],
] as const;

export function PlatformShell({ children, title = "Creator workspace" }: { children: React.ReactNode; title?: string }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  return <div className="platform-app">
    {open && <button aria-label="Close navigation" className="nav-backdrop" onClick={() => setOpen(false)} />}
    <aside className={`platform-sidebar ${open ? "is-open" : ""}`}>
      <div className="sidebar-brand"><span className="brand-symbol"><Sparkles size={16} /></span><span>VID<span className="brand-red">·</span>GEN</span><button className="icon-btn sidebar-close" onClick={() => setOpen(false)} aria-label="Close navigation"><X size={18} /></button></div>
      <div className="sidebar-kicker">CREATOR OS <span className="pulse-dot" /></div>
      <nav className="side-nav">{nav.map(([label, href, Icon]) => <Link key={label} href={href} onClick={() => setOpen(false)} className={location.startsWith(href.split("#")[0]) && (label === "Home" ? location === "/dashboard" : true) ? "active" : ""}><Icon size={18} /><span>{label}</span>{label === "Generate" && <span className="nav-hot">NEW</span>}</Link>)}</nav>
      <div className="sidebar-upgrade"><span className="mini-label">CREATOR PLAN</span><strong>Make more room for your ideas.</strong><Link href="/signup">Upgrade <Sparkles size={14} /></Link></div>
      <div className="sidebar-user"><span className="avatar">AM</span><span><strong>Alex Morgan</strong><small>@alexmakes</small></span><Settings size={15} /></div>
    </aside>
    <main className="platform-main">
      <header className="platform-topbar"><button className="icon-btn mobile-menu" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu size={20} /></button><div><span className="top-kicker">VID·GEN / {title}</span><h1>{title}</h1></div><div className="top-actions"><button className="upgrade-badge"><Sparkles size={14} /> Upgrade</button><button className="icon-btn notification-btn" aria-label="Notifications"><Bell size={18} /><span /></button><span className="avatar top-avatar">AM</span></div></header>
      <div className="platform-content">{children}</div>
      <nav className="mobile-bottom-nav">{nav.slice(0, 5).map(([label, href, Icon]) => <Link key={label} href={href} className={location.startsWith(href.split("#")[0]) ? "active" : ""}><Icon size={18} /><span>{label}</span></Link>)}</nav>
    </main>
  </div>;
}

export function StatusBadge({ children, tone = "green" }: { children: React.ReactNode; tone?: "green" | "yellow" | "red" | "blue" }) { return <span className={`status-badge ${tone}`}><i />{children}</span>; }
