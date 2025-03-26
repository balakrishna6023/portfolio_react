import React from 'react';
import './mywork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Mywork = () => {
  return (
    <div className='mywork' id='work'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>
      <div className="mywork-container">
         {mywork_data.map((work, index) => (
           <div key={index} className="work-item">
              <img src={work.w_img} alt={`Project ${work.w_name}`} />
              <div className="work-overlay">
                <a href={work.live_demo} target="_blank" rel="noopener noreferrer" className="work-btn">Live Demo</a>
                <a href={work.github_link} target="_blank" rel="noopener noreferrer" className="work-btn">GitHub Code</a>
              </div>
           </div>
         ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow" />
      </div>
    </div>
  );
};

export default Mywork;
