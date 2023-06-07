import React, { useEffect } from "react";
import "./LandingPage.scss";

const LandingPage = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      const delta = event.wheelDelta || -event.detail;

      if (delta < 0) {
        // Aşağı doğru scroll
        const nextSection = event.target.nextElementSibling;
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "instant" });
        }
      } else {
        // Yukarı doğru scroll
        const prevSection = event.target.previousElementSibling;
        if (prevSection) {
          prevSection.scrollIntoView({ behavior: "instant" });
        }
      }
    };

    window.addEventListener("mousewheel", handleScroll, { passive: false });
    window.addEventListener("DOMMouseScroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("mousewheel", handleScroll);
      window.removeEventListener("DOMMouseScroll", handleScroll);
    };
  }, []);

  return (
    <div className="page" id="home">
      <section className="section banner" id="banner">
        <div className="banner-title">
          <h2 className="title-xxl">Experience Tesla</h2>
          <h4>Schedule a Demo Drive Today</h4>
        </div>
        <button className="banner-button">Demo Drive</button>
      </section>

      <section className="section model-3" id="model-3">
        <div>
          <h2 className="title-xl">Model 3</h2>
          <h6 className="text-primary">
            <u>Starting at $32,740</u> <br /> After Federal Tax Credit
          </h6>
        </div>
        <div className="button-wrapper">
          <button className="black">Demo Drive</button>
          <button className="white">Demo Drive</button>
        </div>
      </section>

      <section className="section model-y" id="model-y">
        <div>
          <h2 className="title-xl">Model Y</h2>
          <h6 className="text-primary">
            <u>Starting at $39,990</u> <br /> After Federal Tax Credit
          </h6>
        </div>
        <div className="button-wrapper">
          <button className="black">Demo Drive</button>
          <button className="white">Demo Drive</button>
        </div>
      </section>

      <section className="section model-s" id="model-s">
        <div>
          <h2 className="title-xl">Model S</h2>
          <h6 className="text-primary">
            <u>View Inventory </u>
          </h6>
        </div>
        <div className="button-wrapper">
          <button className="black">Demo Drive</button>
          <button className="white">Demo Drive</button>
        </div>
      </section>

      <section className="section model-x" id="model-x">
        <div>
          <h2 className="title-xl">Model X</h2>
          <h6 className="text-primary">
            <u>View Inventory </u>
          </h6>
        </div>
        <div className="button-wrapper">
          <button className="black">Demo Drive</button>
          <button className="white">Demo Drive</button>
        </div>
      </section>

      <section className="section roof" id="roof">
        <div>
          <h2 className="title-xl">Solar Panels</h2>
          <h6 className="text-primary">
            <u>Schedule a Virtual Consultation</u>
          </h6>
        </div>
        <div className="button-wrapper">
          <button className="black">Demo Drive</button>
          <button className="white">Demo Drive</button>
        </div>
      </section>

      <section className="section panel" id="panel">
        <div>
          <h2 className="title-xl">Solar Roof</h2>
          <h6 className="text-primary">Produce Clean Energy From Your Roof</h6>
        </div>
        <div className="button-wrapper">
          <button className="black">Demo Drive</button>
          <button className="white">Demo Drive</button>
        </div>
      </section>

      <section className="section accessories" id="accessories">
        <div>
          <h2 className="title-xl">Accessories</h2>
        </div>
        <button className="shop">Demo Drive</button>
      </section>
    </div>
  );
};

export default LandingPage;
