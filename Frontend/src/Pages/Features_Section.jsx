const FeaturesSection = () => {
  const features = [
    {
      title: "AI Powered Recycling Analyser",
      description:
        "Detects recyclability, material composition, and optimal recycling methods for smarter waste disposal.",
      iconPath:
        "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      title: "Waste Tracking",
      description:
        "Real-time heatmap and monitoring system for efficient waste management.",
      iconPath:
        "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Comprehensive monitoring and visualization of waste management metrics.",
      iconPath:
        "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 01-2-2z",
    },
    {
      title: "Green Heroes",
      description:
        "Recognition platform celebrating environmental champions and initiatives.",
      iconPath:
        "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 007-7z",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] p-6 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">
            Powerful Features
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Revolutionizing urban waste management through technology and
            community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-[#2E7D32] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={feature.iconPath}
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
