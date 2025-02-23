import React from 'react';
import { 
  Wallet, 
  Coins, 
  Vote,
  ChevronDown
} from 'lucide-react';

const GrokLogo = ({ className = "" }) => (
  <svg 
    viewBox="0 0 49 48" 
    className={className}
    aria-label="Grok Logo"
  >
    <path 
      clipRule="evenodd" 
      d="M.667 10.286C.667 4.606 5.272 0 10.953 0H38.38c5.68 0 10.286 4.605 10.286 10.286v27.428C48.667 43.394 44.062 48 38.38 48H10.953C5.272 48 .667 43.395.667 37.714V10.286zm9.34 9.24L24.768 40.61h6.562L16.568 19.526h-6.562zM10 40.611l6.564-9.374 3.282 4.689-3.28 4.685H10zM32.832 8L21.486 24.204l3.283 4.688L39.398 8h-6.566zm1.19 32.61V18.024l5.378-7.681v30.265h-5.38z" 
      fill="currentColor" 
      fillRule="evenodd"
    />
  </svg>
);

function App() {
  const benefits = [
    {
      icon: <GrokLogo className="w-6 h-6 text-white" />,
      title: "AI Access",
      description: "Unlimited Grok AI capabilities"
    },
    {
      icon: <Coins className="w-6 h-6 text-white" />,
      title: "Earn",
      description: "Get rewarded with testnet tokens"
    },
    {
      icon: <Vote className="w-6 h-6 text-white" />,
      title: "Vote",
      description: "Shape platform development"
    }
  ];

  const faqs = [
    {
      question: "What is Grok Testnet?",
      answer: "Grok Testnet is a blockchain-based platform for interacting with Grok AI, earning test tokens, and participating in governance."
    },
    {
      question: "Why should I connect my wallet?",
      answer: "Connecting is necessary for authentication, accessing features, and receiving rewards, including 100 test tokens."
    },
    {
      question: "Which wallets are supported?",
      answer: "We support Phantom, Solflare, Bitkeep, OKX, Safepal, Trust, Torus."
    },
    {
      question: "Is my data safe when connecting?",
      answer: "Yes, private keys remain on your device, and transactions are encrypted by the blockchain."
    },
    {
      question: "What are test tokens and how can I use them?",
      answer: "Test tokens are digital assets for airdrops, merchandise purchases, or accessing features."
    },
    {
      question: "Is this connected to the official Grok by xAI?",
      answer: "Yes, this is a project inspired by Grok, with affiliations to xAI."
    },
    {
      question: "What's the project roadmap?",
      answer: "Plans: launch in Q1 2025, governance in Q2, AI integration in Q3, airdrops in Q4 2025."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GrokLogo className="w-6 h-6 text-white" />
            <span className="text-lg font-bold">Grok</span>
          </div>
          <button className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 text-sm">
            <Wallet className="w-4 h-4" />
            Connect
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Shape the Future of AI
          </h1>
          <p className="text-lg mb-6 max-w-xl mx-auto text-gray-400">
            Join Grok testnet and earn 100 tokens as a welcome bonus
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Why Join?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-black p-6 rounded-xl border border-white/10 hover:border-white/30 transition-colors">
                <div className="mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <details 
                key={index} 
                className="bg-black p-4 rounded-lg border border-white/10 group"
              >
                <summary className="font-semibold cursor-pointer flex items-center justify-between">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 transform transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-gray-400 text-sm">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center text-gray-400 text-sm">
          © 2025 Grok Testnet
        </div>
      </footer>

      {/* Floating Connect Button */}
      <button className="fixed bottom-4 right-4 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors flex items-center gap-2 text-sm">
        <Wallet className="w-4 h-4" />
        Connect
      </button>
    </div>
  );
}

export default App;