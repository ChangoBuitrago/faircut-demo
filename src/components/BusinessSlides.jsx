export default function BusinessSlides() {
  return (
    <>
      {/* Slide 8: The Pivot */}
      <section className="h-screen snap-start snap-always bg-gray-50 dark:bg-black flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              From a Story to a<br/>Scalable Business
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 mt-8 max-w-2xl">
              Jonas's story isn't a one-off. It's a blueprint. Here's how we turn this into a venture-scale company.
          </p>
      </section>

      {/* Slide 9: The Vision */}
      <section className="h-screen snap-start snap-always bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-950 flex items-center justify-center px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-7xl font-black text-gray-900 dark:text-white tracking-tight">An Open Secondary Market</h2>
          <p className="text-2xl text-gray-600 dark:text-gray-400 mt-8 leading-relaxed">
            Most platforms build walled gardens. We give brands the tools to thrive in an open one.
          </p>
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-10 border border-blue-200 dark:border-blue-800">
            <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-semibold">
              Our single, powerful rule remains:
            </p>
            <p className="text-3xl text-gray-900 dark:text-white leading-relaxed font-bold mt-4">
              Creators get their fair cut, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 10: The Opportunity */}
      <section className="h-screen snap-start snap-always bg-gray-50 dark:bg-black flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto w-full text-center">
          <h2 className="text-6xl font-bold text-gray-900 dark:text-white tracking-tight">Value Left on the Table</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">Brands build the hype and create billions in resale value. Resellers and marketplaces capture all of it.</p>
          <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">The Problem</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">The global resale market for luxury goods, sneakers, and collectibles is worth over <span className="font-bold text-gray-900 dark:text-white">$95 Billion</span>.</p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-6">Brands see $0 of it.</p>
              <p className="text-base text-gray-500 dark:text-gray-500 mt-4">Meanwhile, consumers navigate a market flooded with fakes, with no true way to verify authenticity.</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">The Opportunity</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">We enable brands to tap into this massive revenue stream for the first time.</p>
              <p className="text-lg text-gray-800 dark:text-gray-200 mt-6">We solve the <span className="font-bold text-gray-900 dark:text-white">brand's revenue problem</span> and the <span className="font-bold text-gray-900 dark:text-white">consumer's authenticity problem</span> in a single, elegant solution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 11: The Solution */}
      <section className="h-screen snap-start snap-always bg-white dark:bg-gray-900 flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto w-full text-center">
          <h2 className="text-6xl font-black text-gray-900 dark:text-white tracking-tight">The Missing Revenue Layer</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            Faircut is a simple Shopify app that gives your physical products a digital life—unlocking royalties and guaranteeing authenticity.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-lg text-gray-900 dark:text-white">Set Your Terms, Forever</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Set a permanent royalty percentage and floor price, enforced by a smart contract.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-lg text-gray-900 dark:text-white">Guarantee Authenticity</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Every item gets a blockchain-verified certificate of authenticity that can't be faked.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-lg text-gray-900 dark:text-white">Seamless for Your Customers</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">No crypto knowledge needed. Customers use their email, and the experience is effortless.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 12: Our Partnership Model */}
      <section className="h-screen snap-start snap-always bg-gray-50 dark:bg-black flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto w-full text-center">
          <h2 className="text-6xl font-black text-gray-900 dark:text-white tracking-tight">Our Partnership Model</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">We're not a service provider. We're a partner. We only make money when you make money from a revenue stream we unlock together.</p>
          <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-green-500">
              <h3 className="text-lg font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">Pricing</h3>
              <p className="text-4xl font-bold text-gray-900 dark:text-white mt-2">Free to Install</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">No setup fees, no monthly charges. Zero risk.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-blue-500">
              <h3 className="text-lg font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Revenue Model</h3>
              <p className="text-4xl font-bold text-gray-900 dark:text-white mt-2">50/50 Royalty Split</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">We share the new revenue generated from resales. Perfectly aligned.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 13: The Path to Scale */}
      <section className="h-screen snap-start snap-always bg-white dark:bg-gray-900 flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight text-center">The Path to Scale</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">A conservative model for capturing a fraction of the market, one brand at a time.</p>
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-900 dark:bg-gray-950 text-white">
              <div className="p-6 font-bold text-lg border-r border-gray-700">Metric</div>
              <div className="p-6 font-bold text-lg border-r border-gray-700">Year 1</div>
              <div className="p-6 font-bold text-lg border-r border-gray-700">Year 2</div>
              <div className="p-6 font-bold text-lg">Year 3</div>
            </div>
            <div className="grid grid-cols-4 border-b border-gray-200 dark:border-gray-700">
              <div className="p-6 font-semibold text-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">Active Brands</div>
              <div className="p-6 text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">10</div>
              <div className="p-6 text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">50</div>
              <div className="p-6 text-gray-700 dark:text-gray-300">200</div>
            </div>
            <div className="grid grid-cols-4 border-b border-gray-200 dark:border-gray-700">
              <div className="p-6 font-semibold text-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">Number of Resales</div>
              <div className="p-6 text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">2,000</div>
              <div className="p-6 text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">12,000</div>
              <div className="p-6 text-gray-700 dark:text-gray-300">50,000</div>
            </div>
            <div className="grid grid-cols-4 border-b border-gray-200 dark:border-gray-700">
              <div className="p-6 font-semibold text-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">Avg. Resale Value</div>
              <div className="p-6 text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">$800</div>
              <div className="p-6 text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">$1,500</div>
              <div className="p-6 text-gray-700 dark:text-gray-300">$2,000</div>
            </div>
            <div className="grid grid-cols-4 border-b border-gray-200 dark:border-gray-700">
              <div className="p-6 font-semibold text-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">Our Take per Resale</div>
              <div className="p-6 text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">$40</div>
              <div className="p-6 text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">$75</div>
              <div className="p-6 text-gray-700 dark:text-gray-300">$120</div>
            </div>
            <div className="grid grid-cols-4 bg-green-50 dark:bg-green-900/20">
              <div className="p-6 font-bold text-gray-900 dark:text-white border-r border-green-200 dark:border-green-800 text-lg">Annual Revenue</div>
              <div className="p-6 font-bold text-green-700 dark:text-green-400 border-r border-green-200 dark:border-green-800 text-2xl">$800K</div>
              <div className="p-6 font-bold text-green-700 dark:text-green-400 border-r border-green-200 dark:border-green-800 text-2xl">$3.6M</div>
              <div className="p-6 font-bold text-green-700 dark:text-green-400 text-2xl">$18M</div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-500 italic">* Assumes 2,000 resales/year in Year 1, scaling to 12,000 in Year 2, and 50,000 in Year 3</p>
          </div>
        </div>
      </section>

      {/* Slide 14: Our Strategy */}
      <section className="h-screen snap-start snap-always bg-gray-50 dark:bg-black flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-6xl font-black text-gray-900 dark:text-white mb-12 tracking-tight text-center">Our Strategy: Beachhead & Expand</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Phase 1: Win the Shopify Tastemakers</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">Target high-demand Shopify brands in streetwear, collectibles, and art who already understand the pain of the secondary market.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-800">
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Phase 2: Become Platform-Agnostic</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">Use success stories to fund expansion to WooCommerce, custom APIs, and white-label solutions for larger brands.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">Phase 3: Target Enterprise & Luxury</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">Leverage our established network to sign enterprise clients in high-value markets like the Swiss Watch Industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 15: Our Unfair Advantage */}
      <section className="h-screen snap-start snap-always bg-white dark:bg-gray-900 flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-6xl font-black text-gray-900 dark:text-white mb-12 tracking-tight text-center">Our Unfair Advantage</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">The Old Models</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <p><b>Marketplaces (StockX, etc.):</b> Walled gardens that take huge fees and cut brands out completely.</p>
                <p><b>Tech Competitors (Arianee, etc.):</b> Complex, expensive, long enterprise integrations with unclear ROI.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Our Winning Strategy</h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">While competitors spend months on enterprise sales, we acquire customers in minutes with a simple Shopify plugin.</p>
              <div className="mt-6 flex gap-4 text-center">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 flex-1">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">5 min</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Setup</div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 flex-1">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">$0</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Upfront Cost</div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 flex-1">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">∞</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Upside</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 16: Why Now? */}
      <section className="h-screen snap-start snap-always bg-gray-50 dark:bg-black flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">"Why hasn't this been done before?"</h2>
            <p className="text-2xl text-gray-600 dark:text-gray-400">A perfect storm of timing.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <h4 className="font-bold text-lg text-gray-900 dark:text-white">1. The Tech Is Finally Ready</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Layer 2 blockchains and email-based wallets have made the technology cheap, fast, and invisible to consumers for the first time.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <h4 className="font-bold text-lg text-gray-900 dark:text-white">2. Brands Are Now Educated</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">The NFT boom taught major brands about digital ownership. Now they're looking for practical applications with clear ROI, not just hype.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <h4 className="font-bold text-lg text-gray-900 dark:text-white">3. The Old Strategies Failed</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Previous attempts tried to build walled-garden marketplaces or complex enterprise tools. Our simple, open, plugin-first approach is the right one.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg px-8 py-4 border border-blue-200 dark:border-blue-800">
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                These three forces converged in 2025. <span className="text-blue-600 dark:text-blue-400">The time is now.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

