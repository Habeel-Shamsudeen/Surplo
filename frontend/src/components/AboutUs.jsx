import React from "react";
import aboutImage from '../assets/about.jpeg'

function AboutUs() {
  return (
    <section className="about-us py-16 bg-secondary-50" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="about-us-text">
            <p className="text-md text- mb-4">
              Surplo is a cutting-edge waste aggregation platform offering
              tailored solutions for businesses seeking efficient waste
              collection, responsible disposal, and environmental
              sustainability. Our mission is to revolutionize the waste
              management landscape by promoting sustainable practices,
              technological innovation, and environmental responsibility.
            </p>
            <li>
              <b>Our Vision</b>
              <p className="text-md text-gray-700">
                We envision a future where waste management and food surplus
                solutions are synonymous with environmental conservation. Our
                goal is to offer businesses reliable and sustainable waste
                collection solutions while simultaneously addressing food
                surplus issues. By redirecting surplus food to donation and
                farmers for BSF farming, we aim to contribute to a cleaner,
                greener world and foster a more sustainable future for all.
              </p>
            </li>
            <li>
              <b>Our Mission</b>
              <p className="text-md text-gray-700">
                At Surplo, our mission is twofold: to provide efficient waste
                management solutions for businesses and to address food surplus
                through responsible donation and farming practices. We are
                committed to promoting sustainable waste management practices
                that leave a positive impact on urban communities.
              </p>
            </li>
          </div>
          <div className="about-us-image">
            <img src={aboutImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
