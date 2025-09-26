import React from "react";

const GreenHeroes = () => {
  return (
    <section
      id="greenHeroes"
      className="py-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] p-6 bg-gray-100"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="animate__animated animate__fadeIn mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-neutral-800">
            Green Heroes
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-600">
            Celebrating individuals and organizations making India cleaner and
            greener
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {heroes.map((hero, index) => (
            <div
              key={index}
              className="animate__animated animate__fadeInUp overflow-hidden rounded-xl bg-white shadow-lg"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-2 bg-green-700"></div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-4 pb-6">
                  <img
                    src={hero.image}
                    alt={hero.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{hero.name}</h3>
                    <p className="text-green-600">{hero.role}</p>
                  </div>
                </div>
                <p className="mb-4 text-neutral-600">{hero.description}</p>
                <div className="flex items-center gap-4 text-sm text-neutral-500">
                  {hero.stats.map((stat, i) => (
                    <span key={i} className="flex items-center gap-1">
                      <div className="w-10 h-10">{stat.icon()}</div>
                      {stat.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const heroes = [
  {
    name: "Amit Verma",
    role: "River Cleanup Activist",
    description:
      "Organized large-scale cleanups along the Yamuna river, removing over 5 tons of plastic waste and educating locals on waste.",
    image:
      "data:image/jpeg;base64,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", // Replace with actual image URL
    stats: [
      {
        label: "500+ Volunteers",
        icon: () => (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857"
            />
          </svg>
        ),
      },
      {
        label: "5 Tons of Waste Removed",
        icon: () => (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Neha Sharma",
    role: "Sustainable Farming Advocate",
    description:
      "Trained over 1,000 farmers in Delhi on organic farming techniques, reducing pesticide use and increasing crop sustainability.",
    image:
      "data:image/jpeg;base64,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", // Replace with actual image URL
    stats: [
      {
        label: "1,000+ Farmers Trained",
        icon: () => (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        label: "30% Less Pesticide Use",
        icon: () => (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857"
            />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Rajiv Nair",
    role: "Urban Green Spaces Champion",
    description:
      "Planted 10,000 trees across Delhi's public spaces, transforming barren land into thriving urban forests and parks.",
    image:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.jpg?s=612x612&w=0&k=20&c=CncNUTbw6mzGsbojks2Vt0kV85N_pQaI3zaSkBQJFTc=", // Replace with actual image URL
    stats: [
      {
        label: "10,000+ Trees Planted",
        icon: () => (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        label: "50+ Parks Revitalized",
        icon: () => (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857"
            />
          </svg>
        ),
      },
    ],
  },
];

export default GreenHeroes;
