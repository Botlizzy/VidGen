import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <main className="not-found-shell">
      <div className="not-found-mark mono">VID·GEN / 404</div>
      <div className="not-found-copy">
        <span className="mono">WRONG TURN</span>
        <h1>This page took<br /><em>a different route.</em></h1>
        <p>The link may be out of date, but your next idea does not have to be.</p>
        <Link href="/" className="primary-btn"><ArrowLeft size={16} /> Return to studio <ArrowUpRight size={16} /></Link>
      </div>
    </main>
  );
}
