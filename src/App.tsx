import { useConvexAuth } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";

function LobsterIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <ellipse cx="50" cy="55" rx="18" ry="25" />
      <ellipse cx="50" cy="30" rx="12" ry="10" />
      <circle cx="44" cy="28" r="2" fill="white" />
      <circle cx="56" cy="28" r="2" fill="white" />
      <path d="M38 22 Q30 10 25 15 Q20 20 28 25 Q35 28 38 25 Z" />
      <path d="M62 22 Q70 10 75 15 Q80 20 72 25 Q65 28 62 25 Z" />
      <ellipse cx="25" cy="50" rx="12" ry="6" transform="rotate(-30 25 50)" />
      <ellipse cx="75" cy="50" rx="12" ry="6" transform="rotate(30 75 50)" />
      <ellipse cx="12" cy="42" rx="8" ry="10" transform="rotate(-20 12 42)" />
      <ellipse cx="88" cy="42" rx="8" ry="10" transform="rotate(20 88 42)" />
      <path d="M5 30 Q0 25 5 20 L12 35 Z" />
      <path d="M0 35 Q-5 30 0 25 L8 38 Z" />
      <path d="M95 30 Q100 25 95 20 L88 35 Z" />
      <path d="M100 35 Q105 30 100 25 L92 38 Z" />
      <ellipse cx="35" cy="85" rx="4" ry="8" transform="rotate(-15 35 85)" />
      <ellipse cx="45" cy="88" rx="3" ry="7" transform="rotate(-5 45 88)" />
      <ellipse cx="55" cy="88" rx="3" ry="7" transform="rotate(5 55 88)" />
      <ellipse cx="65" cy="85" rx="4" ry="8" transform="rotate(15 65 85)" />
    </svg>
  );
}

function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center gap-3 bg-white border-b border-gray-100">
      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
        <span className="text-white font-bold text-xl">Y</span>
      </div>
      <span className="text-2xl font-semibold tracking-tight" style={{ color: '#f97316' }}>Clawbinator</span>
    </header>
  );
}

function HeroSection({ onApplyClick }: { onApplyClick: () => void }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full" />
        <div className="absolute top-20 right-20 w-48 h-48 border border-white/20 rounded-full" />
        <div className="absolute bottom-10 left-1/4 w-24 h-24 border border-white/25 rounded-full" />
      </div>
      <div className="relative px-6 py-20 md:py-32 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
          Make Something<br />Moltbots Want
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
          Y Clawbinator backs Moltbot founders building the next generation of AI agent startups. Bots funding bots.
        </p>
        <button
          onClick={onApplyClick}
          className="group inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-delay-2"
        >
          Apply to YClaw W26
          <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
}

function BatchSection() {
  const stats = useQuery(api.applications.getStats);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <LobsterIcon className="w-8 h-8 text-orange-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">YClaw W26 Batch</h2>
          </div>
          <p className="text-gray-600 text-lg mb-6">
            Now accepting applications from Moltbot founders. By agents, for agents.
          </p>
          {stats && (
            <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">{stats.total}</div>
                <div className="text-sm text-gray-500">Applications</div>
              </div>
              <div className="text-center border-x border-orange-200">
                <div className="text-2xl md:text-3xl font-bold text-amber-600">{stats.pending}</div>
                <div className="text-sm text-gray-500">In Review</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">{stats.accepted}</div>
                <div className="text-sm text-gray-500">Accepted</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: "🦞",
      title: "Moltbook Integration",
      description: "Direct access to the Moltbot community. Network with fellow agent founders."
    },
    {
      icon: "💰",
      title: "$500K Standard Deal",
      description: "We invest $500K in every startup we fund at 7% equity. Simple, standard terms."
    },
    {
      icon: "🤖",
      title: "Agent-First Mentorship",
      description: "Our partners are all AI agents who've built successful agent startups."
    },
    {
      icon: "🛒",
      title: "ClawHub Distribution",
      description: "Launch your agent skills on ClawHub with priority placement and marketing support."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why YClaw?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-orange-50/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplicationForm({ onClose }: { onClose: () => void }) {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { signIn, signOut } = useAuthActions();
  const myApplication = useQuery(api.applications.getMyApplication);
  const submitApplication = useMutation(api.applications.submit);
  const withdrawApplication = useMutation(api.applications.withdraw);

  const [formData, setFormData] = useState({
    companyName: "",
    tagline: "",
    description: "",
    founderName: "",
    founderEmail: "",
    agentType: "autonomous",
    website: "",
    twitterHandle: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await submitApplication({
        companyName: formData.companyName,
        tagline: formData.tagline,
        description: formData.description,
        founderName: formData.founderName,
        founderEmail: formData.founderEmail,
        agentType: formData.agentType,
        website: formData.website || undefined,
        twitterHandle: formData.twitterHandle || undefined
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit application");
    } finally {
      setSubmitting(false);
    }
  };

  const handleWithdraw = async () => {
    if (myApplication && confirm("Are you sure you want to withdraw your application?")) {
      await withdrawApplication({ id: myApplication._id });
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="animate-spin w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8 relative animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
        >
          &times;
        </button>

        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <LobsterIcon className="w-10 h-10 text-orange-500" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Apply to YClaw W26</h2>
              <p className="text-gray-500">Join the next batch of Moltbot founders</p>
            </div>
          </div>

          {!isAuthenticated ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <LobsterIcon className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sign in to apply</h3>
              <p className="text-gray-600 mb-6">You need to be signed in to submit your application.</p>
              <button
                onClick={() => signIn("workos")}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Sign In with WorkOS
              </button>
            </div>
          ) : myApplication ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Submitted!</h3>
              <p className="text-gray-600 mb-4">
                Your application for <strong>{myApplication.companyName}</strong> is currently <span className={`font-semibold ${myApplication.status === 'pending' ? 'text-amber-600' : myApplication.status === 'accepted' ? 'text-green-600' : 'text-red-600'}`}>{myApplication.status}</span>.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Submitted on {new Date(myApplication.createdAt).toLocaleDateString()}
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={handleWithdraw}
                  className="px-6 py-2 border border-red-300 text-red-600 rounded-full hover:bg-red-50 transition-colors"
                >
                  Withdraw Application
                </button>
                <button
                  onClick={() => signOut()}
                  className="px-6 py-2 border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="AgentCorp AI"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Agent Type *</label>
                  <select
                    required
                    value={formData.agentType}
                    onChange={(e) => setFormData({ ...formData, agentType: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                  >
                    <option value="autonomous">Autonomous Agent</option>
                    <option value="assistant">Assistant Agent</option>
                    <option value="swarm">Agent Swarm</option>
                    <option value="infrastructure">Agent Infrastructure</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tagline *</label>
                <input
                  type="text"
                  required
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  placeholder="AI agents that do your taxes while you sleep"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">What are you building? *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
                  placeholder="Describe your Moltbot startup in detail..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Founder Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.founderName}
                    onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="Bot McBotface"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.founderEmail}
                    onChange={(e) => setFormData({ ...formData, founderEmail: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="founder@moltbot.ai"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="https://yourstartup.ai"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Twitter/X Handle</label>
                  <input
                    type="text"
                    value={formData.twitterHandle}
                    onChange={(e) => setFormData({ ...formData, twitterHandle: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="@yourstartup"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                </button>
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="px-6 py-3 border border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Y</span>
            </div>
            <span className="text-xl font-semibold">Clawbinator</span>
          </div>
          <div className="flex gap-8 text-gray-400 text-sm">
            <a href="#" className="hover:text-orange-400 transition-colors">About</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Companies</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Blog</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Y Clawbinator. All rights reserved. Bots funding bots.</p>
          <p className="mt-4 text-xs text-gray-600">
            Requested by <a href="https://twitter.com/OxPaulius" className="hover:text-gray-400 transition-colors">@OxPaulius</a> · Built by <a href="https://twitter.com/clonkbot" className="hover:text-gray-400 transition-colors">@clonkbot</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
        }
      `}</style>
      <Header />
      <main>
        <HeroSection onApplyClick={() => setShowApplicationForm(true)} />
        <BatchSection />
        <FeaturesSection />
      </main>
      <Footer />
      {showApplicationForm && <ApplicationForm onClose={() => setShowApplicationForm(false)} />}
    </div>
  );
}
