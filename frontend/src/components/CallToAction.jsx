import React from "react";

function CallToAction() {
  return (
    <section className="cta-section bg-primary py-8 text-center bg-secondary-50">
      <h2 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
      <div className="flex justify-center">
        <button className="btn btn-primary px-8 py-2 bg-primary-500 hover:bg-secondary-300" onClick={()=>{
          window.open("https://forms.gle/RKG8n2G6Xz1okRwp6")
        }}>Subscribe</button>
        <button className="btn btn-secondary ml-4 px-8 py-2 hover:bg-accent-300" onClick={() => {
  window.open("https://wa.me/8075814746");
}}>Contact Us</button>

      </div>
    </section>
  );
}

export default CallToAction;