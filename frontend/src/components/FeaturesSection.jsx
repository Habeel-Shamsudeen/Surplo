import React from "react";

function FeaturesSection() {
  const features = [
    {
      icon: "", // Replace with your icon (e.g., from an icon library)
      title: "Tier 1",
      description: "Residence/Shops (Small scale waste generation)",
      no_of_bags:20,
      no_of_collection:2,
      price:1750
    },
    {
      icon: "", // Replace with your icon
      title: "Tier 2",
      description: "Institutions/Apartments (Medium scale Waste generation)",
      no_of_bags:20,
      no_of_collection:2,
      price:1750
    },
    {
      icon: "", // Replace with your icon
      title: "Tier 3",
      description: "A concise explanation of Feature 3.",
      no_of_bags:20,
      no_of_collection:2,
      price:1750
    },
  ];

  return (
    <section className="features-section py-16 bg-accent-50" id="features">
      <h2 className="text-3xl font-bold text-center mb-8">Our Subscription Plans</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="feature bg-white shadow-md rounded-lg p-4 hover:bg-secondary-200 flex flex-col  justify-between">
            <span className="text-3xl text-primary inline-block mb-2">{feature.icon}</span>
            <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
            <p className="text-text-600 text-center">{feature.description}</p>
            <li className="text-accent-500 text-bold">No.Of Bags/Month: {feature.no_of_bags}</li>
            <li className="text-accent-500 text-bold">No.Of Collections/trips: {feature.no_of_collection}</li>
            <button className="text-text-900 bg-text-500 hover:bg-secondary-500 font-medium rounded-lg text-md px-5 py-2 me-2 mb-2 w-full focus:outline-none focus:ring-1 focus:ring-slate-900">₹{feature.price}</button>
            <button className="btn mt-8 bg-accent-500" onClick={() => window.open("https://forms.gle/RKG8n2G6Xz1okRwp6", '_blank')}>Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;