import React from 'react';
import '../styles/CasesSection.css';

function CasesSection() {
  return (
    <section className="section cases">
      <div className="container w-container">
        <div className="cases-wrapper">
          <div className="our-cases-title">
            <h2 className="h2">Our cases</h2>
          </div>
          <div className="cases-list">
            <div className="case-item">
              <a href="/cases/saapro" className="img-link">
                <img src="images/67ab4915c6d4ce4ac20d7043_spro.png" alt="Saapro" className="case-thumbnail" />
              </a>
              <div className="case-title">Saapro</div>
            </div>
            <div className="case-item">
              <a href="/cases/wellborn" className="img-link">
                <img src="images/66487bf850f086aac8692969_wellborn%20case.jpg" alt="Wellborn" className="case-thumbnail" />
              </a>
              <div className="case-title">Wellborn Legacy</div>
            </div>
            <div className="case-item">
              <a href="/cases/keytom" className="img-link">
                <img src="images/66487c1c60578ff234f5e593_Case%20Cover.png" alt="Keytom" className="case-thumbnail" />
              </a>
              <div className="case-title">Keytom</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CasesSection;