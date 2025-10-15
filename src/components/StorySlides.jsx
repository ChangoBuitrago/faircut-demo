import { ArrowRight } from 'lucide-react';

export default function StorySlides() {
  return (
    <>
      {/* Slide 1: Meet Jonas */}
      <section className="h-screen snap-start snap-always bg-white dark:bg-gray-900 flex items-center justify-center px-6">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-md justify-self-end">
            <h2 className="text-6xl font-bold text-gray-900 dark:text-white tracking-tight">Meet Jonas,<br/>The Creator.</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed mt-8">
              Jonas runs <span className="font-medium text-gray-900 dark:text-white">NOMAD</span>, a premium outerwear brand on Shopify. He wanted a way to capture the resale value his limited-edition drops create.
            </p>
             <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed mt-4">
              He installed <span className="font-medium text-gray-900 dark:text-white">Faircut.</span>
            </p>
          </div>
          <div className="max-w-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Setup</h3>
            <div className="space-y-4 text-lg">
              <p>Time to install: <span className="font-semibold text-gray-900 dark:text-white">5 minutes</span></p>
              <p>Technical skill needed: <span className="font-semibold text-gray-900 dark:text-white">None</span></p>
              <p>His rule: <span className="font-semibold text-blue-600 dark:text-blue-400">10% royalty</span> on any resale above <span className="font-semibold text-gray-900 dark:text-white">$500</span>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: The Drop */}
      <section className="h-screen snap-start snap-always bg-gray-50 dark:bg-black flex items-center justify-center px-6 text-center">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 uppercase tracking-wider">October 2024</p>
            <h2 className="text-7xl font-bold text-gray-900 dark:text-white tracking-tight">The Drop</h2>
            <p className="text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed mt-8 max-w-3xl mx-auto">
              Jonas drops the <span className="font-medium text-gray-900 dark:text-white">NOMAD_01</span> jacket collection. It's a limited run of <span className="font-medium text-gray-900 dark:text-white">500 units</span> priced at <span className="font-medium text-gray-900 dark:text-white">$450</span>.
            </p>
            <div className="mt-16">
                <h3 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400">
                    It sells out in 3 days.
                </h3>
            </div>
          </div>
      </section>

      {/* Slide 3: The Collector */}
      <section className="h-screen snap-start snap-always bg-white dark:bg-gray-900 flex items-center justify-center px-6 text-center">
          <div>
            <h2 className="text-6xl font-bold text-gray-900 dark:text-white tracking-tight">Meet Emma,<br/>The Collector.</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-light leading-relaxed mt-8 max-w-2xl mx-auto">
                <span className="font-medium text-gray-900 dark:text-white">Emma</span> in Tokyo buys jacket <span className="font-medium text-gray-900 dark:text-white">#234 of 500</span>.
                Her checkout experience is completely normal.
            </p>
            <div className="mt-12 max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
                <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                    After purchase, she receives an email with her <span className="font-semibold text-blue-600 dark:text-blue-400">Digital Certificate of Authenticity</span>—proof of ownership secured on the blockchain, tied to her email.
                </p>
            </div>
          </div>
      </section>

      {/* Slide 4: One Year Later */}
      <section className="h-screen snap-start snap-always bg-gray-50 dark:bg-black flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-7xl font-bold text-gray-900 dark:text-white tracking-tight">One Year Later</h2>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 uppercase tracking-wider">October 2025</p>
      </section>

      {/* Slide 5: The Flip */}
      <section className="h-screen snap-start snap-always bg-white dark:bg-gray-900 flex items-center justify-center px-6 text-center">
        <div>
            <h2 className="text-7xl font-bold text-gray-900 dark:text-white tracking-tight">The Flip</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-light leading-relaxed mt-8 max-w-3xl mx-auto">
                Emma's jacket is now a sought-after collectible. She sells it to a designer in LA.
            </p>
            <div className="my-12 flex items-center justify-center gap-8">
                <span className="text-6xl font-bold text-gray-500">$450</span>
                <ArrowRight className="text-green-500 h-16 w-16" strokeWidth={3} />
                <span className="text-6xl font-bold text-green-500">$1,200</span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                The transaction happens anywhere—Instagram, Grailed, or a DM. <span className="font-bold text-gray-900 dark:text-white">Faircut simply handles the transfer of the official certificate and enforces Jonas's royalty rule.</span>
            </p>
        </div>
      </section>

      {/* Slide 6: The Payoff */}
      <section className="h-screen snap-start snap-always bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-950 flex items-center justify-center px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
        <div className="max-w-3xl relative z-10">
            <h2 className="text-7xl font-bold text-gray-900 dark:text-white tracking-tight">The Fair Cut</h2>
             <p className="text-xl text-gray-700 dark:text-gray-300 font-light leading-relaxed mt-8">
                The next morning, Jonas's Shopify dashboard shows:
            </p>
            <div className="my-12 bg-white dark:bg-gray-800 border-2 border-green-500 rounded-2xl p-8 shadow-2xl">
                <div className="text-5xl font-black text-green-600 dark:text-green-400">+ $60.00</div>
                <div className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    Royalty from resale of NOMAD_01 #234
                </div>
            </div>
            <p className="text-xl text-gray-800 dark:text-gray-200">
              From a product he sold <span className="font-semibold text-gray-900 dark:text-white">a year ago.</span>
            </p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white uppercase tracking-widest mt-8">
              Passive. Automatic. Permanent.
            </p>
        </div>
      </section>
      
      {/* Slide 7: Seamless Integration */}
      <section className="h-screen snap-start snap-always bg-white dark:bg-gray-900 flex items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <h2 className="text-6xl font-bold text-gray-900 dark:text-white tracking-tight">Magic in the Background</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 font-light leading-relaxed mt-8">
            Jonas didn't change his workflow. He still sells through Shopify, just like always. Faircut handles the rest:
          </p>
          <div className="mt-12 max-w-md mx-auto text-left text-lg space-y-4">
            <p><span className="text-green-500 font-bold mr-2">✓</span> Issuing certificates</p>
            <p><span className="text-green-500 font-bold mr-2">✓</span> Verifying ownership for resale</p>
            <p><span className="text-green-500 font-bold mr-2">✓</span> Collecting and distributing royalties</p>
          </div>
          <p className="mt-12 text-2xl font-semibold text-gray-900 dark:text-white">
            It's an invisible engine for new revenue.
          </p>
        </div>
      </section>
    </>
  );
}

