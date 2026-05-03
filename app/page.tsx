export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Audit Cookie Compliance{" "}
          <span className="text-[#58a6ff]">Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Scan any website for GDPR cookie violations in seconds. Get detailed compliance reports, identify risky trackers, and receive actionable fix suggestions — all without writing a single line of code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Compliance Audit — $15/mo
          </a>
          <a
            href="#features"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            See How It Works
          </a>
        </div>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for demo scan. Cancel anytime.</p>
      </section>

      {/* Features */}
      <section id="features" className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "🔍", title: "Deep Cookie Scan", desc: "Detects first and third-party cookies, local storage, and fingerprinting scripts across every page." },
            { icon: "📋", title: "Compliance Reports", desc: "Generates PDF-ready GDPR compliance reports with violation severity ratings and legal risk scores." },
            { icon: "🛠️", title: "Fix Suggestions", desc: "Provides step-by-step remediation guides tailored to your CMS, tag manager, and cookie banner setup." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-md mx-auto px-6 pb-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited website scans",
              "Full GDPR compliance reports",
              "Cookie & tracker inventory",
              "Fix recommendations",
              "Email alerts for new violations",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "What does the scanner actually check?",
              a: "It uses a headless browser to visit your site, intercepts all network requests, and identifies cookies, pixels, and tracking scripts that may require GDPR consent — including Google Analytics, Meta Pixel, HubSpot, and hundreds more."
            },
            {
              q: "Do I need technical knowledge to use this?",
              a: "No. Just enter your website URL and we handle the rest. Reports are written in plain language with clear action items for both technical and non-technical team members."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel with one click from your dashboard. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} GDPR Cookie Compliance Checker. Built for marketing teams and compliance officers.</p>
      </footer>
    </main>
  );
}
