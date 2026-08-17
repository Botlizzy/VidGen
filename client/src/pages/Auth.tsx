import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, LockKeyhole, Mail, Sparkles, UserRound } from "lucide-react";
import { Link, useLocation } from "wouter";
import { isSupabaseConfigured, supabase, supabaseConfigMessage } from "@/lib/supabase";

export default function Auth({ mode }: { mode: "login" | "signup" }) {
  const [, navigate] = useLocation();
  const signup = mode === "signup";
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");
    const confirm = String(data.get("confirm") ?? "");
    const username = String(data.get("username") ?? "").trim();

    setError("");
    setMessage("");
    if (signup && password !== confirm) {
      setError("Passwords need to match before you continue.");
      return;
    }
    if (!supabase || !isSupabaseConfigured) {
      setError(supabaseConfigMessage);
      return;
    }

    setLoading(true);
    try {
      if (signup) {
        const result = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { username },
            emailRedirectTo: `${window.location.origin}/login`,
          },
        });
        if (result.error) throw result.error;
        navigate(`/confirm-email?email=${encodeURIComponent(email)}`);
      } else {
        const result = await supabase.auth.signInWithPassword({ email, password });
        if (result.error) throw result.error;
        navigate("/dashboard");
      }
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : "We could not complete that request.");
    } finally {
      setLoading(false);
    }
  };

  return <div className="auth-page"><div className="auth-orb auth-orb-red" /><div className="auth-orb auth-orb-blue" /><div className="auth-orb auth-orb-green" /><header className="auth-header"><Link href="/" className="marketing-brand"><span className="brand-mark"><Sparkles size={14} /></span><span>VID<span className="brand-red">·</span>GEN</span></Link><Link href="/" className="auth-back"><ArrowLeft size={15} /> Back to site</Link></header><main className="auth-layout"><section className="auth-story"><span className="mini-label">YOUR CREATOR WORKSPACE</span><h1>Make room for<br /><em>the good ideas.</em></h1><p>Turn the thought in your head into something your audience can see, hear, and share.</p><div className="auth-story-stats"><span><b>4×</b><small>platform-ready outputs</small></span><span><b>01</b><small>good prompt to start</small></span></div></section><section className="auth-card"><div className="auth-card-top"><span className="auth-status"><i /> SECURE ACCESS</span><span>VID·GEN / 001</span></div><div className="auth-heading"><h2>{signup ? "Create your account." : "Welcome back."}</h2><p>{signup ? "Your next post starts here." : "Your workspace is waiting."}</p></div>{submitted ? <div className="auth-success"><div className="success-icon"><Check size={26} /></div><h3>Verify your email.</h3><p>{message}</p><Link href="/login" className="button button-gradient">Continue to login <ArrowRight size={16} /></Link></div> : <form onSubmit={submit} className="auth-form">{signup && <label><span>Username</span><div className="input-wrap"><UserRound size={16} /><input name="username" placeholder="alexmakes" required /></div></label>}<label><span>Email address</span><div className="input-wrap"><Mail size={16} /><input name="email" type="email" placeholder="you@example.com" required /></div></label><label><span>Password</span><div className="input-wrap"><LockKeyhole size={16} /><input name="password" type={show ? "text" : "password"} placeholder="••••••••" minLength={6} required /><button type="button" onClick={() => setShow(!show)} aria-label="Toggle password visibility">{show ? <EyeOff size={16} /> : <Eye size={16} />}</button></div></label>{signup && <label><span>Confirm password</span><div className="input-wrap"><LockKeyhole size={16} /><input name="confirm" type={show ? "text" : "password"} placeholder="••••••••" minLength={6} required /></div></label>}{error && <p className="form-error">{error}</p>}{!signup && <div className="form-options"><label className="check-label"><input type="checkbox" /> Remember me</label><Link href="/forgot-password">Forgot password?</Link></div>}<button className="button button-gradient" type="submit" disabled={loading}>{loading ? "Working..." : signup ? "Create account" : "Log in"} <ArrowRight size={16} /></button><div className="auth-divider"><span /> or continue with <span /></div><div className="social-auth"><button type="button">G <span>Google</span></button><button type="button">● <span>Apple</span></button></div></form>}<p className="auth-switch">{signup ? "Already have an account?" : "New to VID-GEN?"} <Link href={signup ? "/login" : "/signup"}>{signup ? "Log in" : "Create one"}</Link></p></section></main></div>;
}
