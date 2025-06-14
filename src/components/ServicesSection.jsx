// src/components/ServicesSection.jsx
import React from 'react';
import '../styles/ServicesSection.css';

function ServicesSection() {
  return (
    <section id="servicesContainer" className="section services">
      <div className="container w-container">
        <div className="services-title-wrapper">
          <div className="hero-title">
            <div className="subtitle">Ready go-to-market plan for businesses</div>
            <div className="limit-350">
              <h2 className="h2">From Concept to Market in</h2>
              <div className="_20-days"><div className="_20-days-text">20 days</div></div>
            </div>
          </div>
        </div>
        <div className="services-wrapper">
          <div className="service-item first">
            <h3 className="service-title first">Briefing & Express research</h3>
            <div className="text-day-wrapper first"><div className="text-day">1 day</div></div>
            <div className="plan-description">
              <div className="service-list-text first">
                online interview <br />internal analysis<br />desk research
              </div>
            </div>
          </div>
          <div className="service-item second">
            <h3 className="service-title second">Go-to-market strategy</h3>
            <div className="plan-description">
              <div className="service-list-text second">
                target audience research<br />unique selling proposition<br />mission<br />product emotional message<br />tone of voice
              </div>
            </div>
            <div className="text-day-wrapper second"><div className="text-day">4 days</div></div>
          </div>
          <div className="service-item third">
            <h3 className="service-title third">Branding</h3>
            <div className="plan-description">
              <div className="service-list-text third">
                3 design concepts<br />logotype<br />color palette & fonts<br />branding assets<br />brandbook
              </div>
            </div>
            <div className="text-day-wrapper third"><div className="text-day">5 days</div></div>
          </div>
          <div className="service-item last">
            <h3 className="service-title last">Web design & development</h3>
            <div className="plan-description">
              <div className="service-list-text last">
                Landing page (up to 5 blocks)<br />prototype & copyright<br />design<br />Webflow development
              </div>
            </div>
            <div className="text-day-wrapper last"><div className="text-day">10+ days</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
