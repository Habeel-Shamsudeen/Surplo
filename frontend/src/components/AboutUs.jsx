import React from "react";

function AboutUs() {
  return (
    <section className="about-us py-16" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="about-us-text">
            <p className="text-xl text-gray-700 mb-4">
              Sulpro is a company dedicated to [Company Mission]. We were founded in [Year] by [Founders' Names] with a vision to [Company Vision].
            </p>
            <p className="text-xl text-gray-700">
              Our team is passionate about [Company Passion] and is committed to providing [Value Proposition] to our customers. We believe in [Company Values] and strive to make a positive impact on [Impact Area].
            </p>
          </div>
          <div className="about-us-image">
            <img src="/about-us.jpg" alt="About Us Image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
