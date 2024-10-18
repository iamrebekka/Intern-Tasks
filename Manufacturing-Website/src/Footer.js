import React, { Component } from "react";

function Footer() {
  return (
    <div>
      <section className="services-section">
        <h2>
          Efficient and Integrated <br />
          Manufacturing Services
        </h2>
        <p>Simplify operations with our efficient, quality-focused services.</p>
        <div className="service-grid">
          <div className="service-box">
            <div className="icons">
              <i class="bx bx-health"></i>
              <i class="bi bi-arrow-up-right"></i>
            </div>
            <h3>Production and Assembly</h3>
            <p>
              Details on production processes, assembly, capacity, and product
              types.
            </p>
          </div>
          <div className="service-box">
            <div className="icons">
              <i class="bx bx-layer"></i>
              <i class="bi bi-arrow-up-right"></i>
            </div>
            <h3>Custom Manufacturing</h3>
            <p>
              Custom product creation with design and customization options.
            </p>
          </div>
          <div className="service-box">
            <div className="icons">
              <i class="bx bx-wrench"></i>

              <i class="bi bi-arrow-up-right"></i>
            </div>

            <h3>Quality Control</h3>
            <p>
              Procedures and systems in place to ensure high product quality.
            </p>
          </div>
          <div className="service-box">
            <div className="icons">
              <i class="bx bx-shield"></i>
              <i class="bi bi-arrow-up-right"></i>
            </div>
            <h3>Technology and Innovation</h3>
            <p>
              Details on the latest manufacturing technologies and ongoing
              innovations.
            </p>
          </div>
          <div className="service-box">
            <div className="icons">
              <i class="bx bx-cube"></i>
              <i class="bi bi-arrow-up-right"></i>
            </div>
            <h3>Packaging and Logistics</h3>
            <p>
              Packaging and logistics for shipping to customers and
              distributors.
            </p>
          </div>
          <div className="service-box">
            <div className="icons">
              <i class="bx bx-line-chart"></i>
              <i class="bi bi-arrow-up-right"></i>
            </div>
            <h3>Consulting & Market Research</h3>
            <p>
              Services to help companies understand market needs and provide
              strategic advice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
