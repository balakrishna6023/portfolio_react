import React, { useState } from 'react';
import './services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import services_data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const handleReadMoreClick = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section className="services" id='services'>
      <header className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Decorative Theme Pattern" />
      </header>
      <div className="services-container">
        {services_data.map((service, index) => (
          <article className="services-format" key={index}>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p className={expandedService === index ? 'services-desc expanded' : 'services-desc'}>
              {service.s_desc}
            </p>
            <div className="services-readmore" onClick={() => handleReadMoreClick(index)}>
              <p>{expandedService === index ? 'Show Less' : 'Read More'}</p>
              <img src={arrow_icon} alt="Arrow Icon" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
