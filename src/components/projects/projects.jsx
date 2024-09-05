import './projects.css'
import React, { useEffect } from 'react';
import { useTheme } from '../theme/ThemeContext';
import Card from './project-card';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { theme } = useTheme();

  useEffect(() => {
    const wave5 = document.getElementById('wave5');
    const wave6 = document.getElementById('wave6');
    const wave7 = document.getElementById('wave7');
    const wave8 = document.getElementById('wave8');

    const handleScroll = () => {
      const scrollPos = window.scrollY;

      wave5.style.backgroundPositionX = 400 + scrollPos * 2 + 'px';
      wave6.style.backgroundPositionX = 300 + scrollPos * -2 + 'px';
      wave7.style.backgroundPositionX = 200 + scrollPos * 1 + 'px';
      wave8.style.backgroundPositionX = 100 + scrollPos * -1 + 'px';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    const [t, i18n] = useTranslation('global');
  }, []); 
  return (

    
    <section className={`projects ${theme}`} id='projects'>
      <div className={`bg ${theme}`}></div>
      <div className="wave2" id="wave5" ></div>
      <div className="wave2" id="wave6" ></div>
      <div className="wave2" id="wave7" ></div>
      <div className="wave2" id="wave8" ></div>
      <div className='glass'>
        <Card></Card>
      </div>
      
    </section>
  )
}

export default Projects



