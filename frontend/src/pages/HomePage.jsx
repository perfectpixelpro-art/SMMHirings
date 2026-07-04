import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section2 from "../components/Section2";
import Work from "../components/Work";
import WorkDetail from "../components/WorkDetail";
import Footer from "../components/Footer";

export default function HomePage() {
  const location = useLocation();
  const [showRejected, setShowRejected] = useState(false);
  const [retryDate, setRetryDate] = useState("");

  useEffect(() => {
    // Show the popup right after a rejection, or on return while still locked out.
    const until = localStorage.getItem("rejectedUntil");
    const lockedNow = until && new Date(until) > new Date();
    if (location.state?.rejected || lockedNow) {
      if (until) setRetryDate(new Date(until).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" }));
      setShowRejected(true);
    }
  }, [location.state]);

  return (
    <div className="h-content pb-15 font-sans" style={{ backgroundColor: "#f0f8fd" }}>
      <Navbar />
      <Hero />
      <Section2 />
      <Work />
      <WorkDetail />
      <Footer />

      {showRejected && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(13,17,23,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50, padding: 20 }}>
          <div className="font-sans" style={{ background: "#fff", borderRadius: 18, maxWidth: 400, width: "100%", padding: "32px 28px", textAlign: "center" }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#fee2e2", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", fontSize: 28 }}>😔</div>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: "#0d1117", marginBottom: 10 }}>Application not approved</h2>
            <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6, marginBottom: 22 }}>
              Unfortunately your application was rejected. You can try again in <strong>six months</strong>
              {retryDate ? <> — after <strong style={{ color: "#374151" }}>{retryDate}</strong></> : ""}.
              Login and sign-up are disabled until then.
            </p>
            <button
              onClick={() => setShowRejected(false)}
              style={{ background: "#12B3EF", color: "#fff", border: "none", borderRadius: 10, padding: "11px 32px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
