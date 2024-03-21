import React from "react";

function FeaturesSection() {
  const features = [
    {
      icon: "", // Replace with your icon (e.g., from an icon library)
      title: "Feature 1",
      description: "A concise explanation of Feature 1."
    },
    {
      icon: "", // Replace with your icon
      title: "Feature 2",
      description: "A concise explanation of Feature 2."
    },
    {
      icon: "", // Replace with your icon
      title: "Feature 3",
      description: "A concise explanation of Feature 3."
    },
  ];

  return (
    <section className="features-section py-16 bg-accent-50" id="features">
      <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="feature bg-white shadow-md rounded-lg p-4 hover:bg-secondary-200">
            <span className="text-3xl text-primary inline-block mb-2">{feature.icon}</span>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;