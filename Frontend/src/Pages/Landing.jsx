import React from "react";
function Landing() {
  return (
    <div>
      <section
        id="hero"
        className="min-h-[70vh] bg-neutral-900 text-white pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-8 items-center py-16">
            <div className="animate__animated animate__fadeInLeft">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#81C784]">
                Smart City Waste Management
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                An AI-powered waste management solution that analyzes
                recyclability, tracks waste patterns, and optimizes disposal.
                Enhancing urban sustainability through smart analytics,
                community engagement, and eco-friendly innovations.
              </p>
              <div className="flex gap-4">
                <a
                  href="#features"
                  className="bg-[#2E7D32] hover:bg-[#4CAF50] text-white px-8 py-3 rounded-full transition-colors font-semibold"
                >
                  Get Started
                </a>
                <a
                  href="#learn-more"
                  className="border border-[#81C784] text-[#81C784] hover:bg-[#81C784] hover:text-white px-8 py-3 rounded-full transition-colors font-semibold"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="animate__animated animate__fadeInRight">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32]/30 to-transparent rounded-lg"></div>
                <div className="bg-neutral-800 p-8 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-neutral-700 p-4 rounded-lg text-center">
                      <span className="block text-3xl font-bold text-[#81C784]">
                        AI
                      </span>
                      <span className="text-sm">Recycling Analyser</span>
                    </div>
                    <div className="bg-neutral-700 p-4 rounded-lg text-center">
                      <span className="block text-3xl font-bold text-[#81C784]">
                        24/7
                      </span>
                      <span className="text-sm">Monitoring using Heatmaps</span>
                    </div>
                    <div className="bg-neutral-700 p-4 rounded-lg text-center">
                      <span className="block text-3xl font-bold text-[#81C784]">
                        Live
                      </span>
                      <span className="text-sm">Real Time Analytics</span>
                    </div>
                    <div className="bg-neutral-700 p-4 rounded-lg text-center">
                      <span className="block text-3xl font-bold text-[#81C784]">
                        Real
                      </span>
                      <span className="text-sm">Green Heroes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
