import React, { useEffect } from 'react';
import ParticlesComponent from '../particles/particles';
import { useTheme } from '../theme/ThemeContext';
import './banner.css';

function Banner() {
  
  const { theme } = useTheme();

  useEffect(() => {
    const wave1 = document.getElementById('wave1');
    const wave2 = document.getElementById('wave2');
    const wave3 = document.getElementById('wave3');
    const wave4 = document.getElementById('wave4');

    const handleScroll = () => {
      const scrollPos = window.scrollY;

      wave1.style.backgroundPositionX = 400 + scrollPos * 2 + 'px';
      wave2.style.backgroundPositionX = 300 + scrollPos * -2 + 'px';
      wave3.style.backgroundPositionX = 200 + scrollPos * 1 + 'px';
      wave4.style.backgroundPositionX = 100 + scrollPos * -1 + 'px';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`banner ${theme}`} id='banner'>
      <ParticlesComponent id="particles" />
      <div className='name' >
        <h1 className='title' id='banner-h1'>C. ANSELMO</h1>
      </div>
      <div className="wave" id="wave1" ></div>
      <div className="wave" id="wave2" ></div>
      <div className="wave" id="wave3" ></div>
      <div className="wave" id="wave4" ></div>
    </section>
  );
}

export default Banner;
