import { FormEvent, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, LockKeyhole, Mail, RefreshCw, Sparkles } from "lucide-react";
import { Link, useLocation } from "wouter";
import { isSupabaseConfigured, supabase, supabaseConfigMessage } from "@/lib/supabase";

export default function ForgotPassword() {
  const [, navigate] = useLocation();
  const resetMode = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "").get("mode") === "reset";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!supabase || !resetMode) return;
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") setMessage("Choose a new password for your account.");
    });
    return () => data.subscription.unsubscribe();
  }, [resetMode]);

  const requestReset = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    setMessage("");
    if (!supabase || !isSupabaseConfigured) {
      setError(supabaseConfigMessage);
      return;
    }
    setBusy(true);
    const result = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/forgot-password?mode=reset` });
    setBusy(false);
    if (result.error) setError(result.error.message);
    else setSent(true);
  };

  const updatePassword = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    if (password.length < 8) {
      setError("Your new password must be at least 8 characters.");
      return;
    }
    if (password !== confirmation) {
      setError("Your new passwords do not match.");
      return;
    }
    if (!supabase) {
      setError(supabaseConfigMessage);
      return;
    }
    setBusy(true);
    const result = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (result.error) setError(result.error.message);
    else navigate("/login");
  };

  return <div className="auth-page"><div className="auth-orb auth-orb-red" /><div className="auth-orb auth-orb-blue" /><header className="auth-header"><Link href="/" className="marketing-brand"><span className="brand-mark"><Sparkles size={14} /></span><span>VID<span className="brand-red">·</span>GEN</span></Link><Link href="/login" className="auth-back"><ArrowLeft size={15} /> Back to login</Link></header><main className="auth-layout"><section className="auth-story"><span className="mini-label">ACCOUNT RECOVERY</span><h1>Keep your<br /><em>momentum.</em></h1><p>We will help you get back into your creator workspace without losing your ideas.</p><div className="auth-story-stats"><span><b>01</b><small>secure reset link</small></span><span><b>24h</b><small>link validity</small></span></div></section><section className="auth-card"><div className="auth-card-top"><span className="auth-status"><i /> SECURE RECOVERY</span><span>VID·GEN / 003</span></div>{resetMode ? <><div className="auth-heading"><h2>Choose a new password.</h2><p>Make it memorable and keep your workspace protected.</p></div><form className="auth-form" onSubmit={updatePassword}><label><span>New password</span><div className="input-wrap"><LockKeyhole size={16} /><input type={show ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} minLength={8} required placeholder="••••••••" /><button type="button" onClick={() => setShow(!show)} aria-label="Toggle password visibility">{show ? <EyeOff size={16} /> : <Eye size={16} />}</button></div></label><label><span>Confirm new password</span><div className="input-wrap"><LockKeyhole size={16} /><input type={show ? "text" : "password"} value={confirmation} onChange={e => setConfirmation(e.target.value)} minLength={8} required placeholder="••••••••" /></div></label>{error && <p className="form-error">{error}</p>}<button className="button button-gradient" disabled={busy}>{busy ? "Updating..." : "Update password"} <ArrowRight size={16} /></button></form></> : sent ? <div className="auth-success"><div className="success-icon"><Check size={26} /></div><h3>Reset link sent.</h3><p>Check your inbox and open the newest link to choose a new password.</p><Link href="/login" className="button button-gradient">Back to login <ArrowRight size={16} /></Link></div> : <><div className="auth-heading"><h2>Forgot your password?</h2><p>Enter your email and we will send a secure reset link.</p></div><form className="auth-form" onSubmit={requestReset}><label><span>Email address</span><div className="input-wrap"><Mail size={16} /><input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" /></div></label>{message && <p className="form-success">{message}</p>}{error && <p className="form-error">{error}</p>}<button className="button button-gradient" disabled={busy}>{busy ? "Sending..." : "Send reset link"} <RefreshCw size={16} /></button></form></>}<p className="auth-switch">Remembered it? <Link href="/login">Return to login</Link></p></section></main></div>;
}
