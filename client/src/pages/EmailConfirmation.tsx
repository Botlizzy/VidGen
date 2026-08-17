import { ArrowLeft, ArrowRight, Check, Mail, RefreshCw, Sparkles } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { isSupabaseConfigured, supabase, supabaseConfigMessage } from "@/lib/supabase";

export default function EmailConfirmation() {
  useLocation();
  const email = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "").get("email") ?? "your inbox";
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const resend = async () => {
    setError("");
    setStatus("");
    if (!supabase || !isSupabaseConfigured) {
      setError(supabaseConfigMessage);
      return;
    }
    setBusy(true);
    const result = await supabase.auth.resend({ type: "signup", email });
    setBusy(false);
    if (result.error) setError(result.error.message);
    else setStatus("A fresh confirmation link is on its way.");
  };

  return <div className="auth-page"><div className="auth-orb auth-orb-red" /><div className="auth-orb auth-orb-blue" /><header className="auth-header"><Link href="/" className="marketing-brand"><span className="brand-mark"><Sparkles size={14} /></span><span>VID<span className="brand-red">·</span>GEN</span></Link><Link href="/login" className="auth-back"><ArrowLeft size={15} /> Back to login</Link></header><main className="auth-layout"><section className="auth-story"><span className="mini-label">ONE LAST STEP</span><h1>Check your<br /><em>inbox.</em></h1><p>Confirm your email and your creator workspace will be ready when you are.</p><div className="auth-story-stats"><span><b>01</b><small>confirmation link</small></span><span><b>∞</b><small>ideas waiting</small></span></div></section><section className="auth-card confirmation-card"><div className="auth-card-top"><span className="auth-status"><i /> EMAIL CONFIRMATION</span><span>VID·GEN / 002</span></div><div className="confirmation-icon"><Mail size={28} /></div><div className="auth-heading"><h2>Verify your email.</h2><p>We sent a confirmation link to <strong>{email}</strong>.</p></div><div className="confirmation-checklist"><span><Check size={14} /> Open the newest email from VID-GEN</span><span><Check size={14} /> Tap the confirmation link</span><span><Check size={14} /> Return here and log in</span></div>{status && <p className="form-success">{status}</p>}{error && <p className="form-error">{error}</p>}<button className="button button-gradient" onClick={resend} disabled={busy}>{busy ? "Sending..." : "Resend confirmation"} <RefreshCw size={16} /></button><Link href="/login" className="button button-outline">Continue to login <ArrowRight size={16} /></Link></section></main></div>;
}
