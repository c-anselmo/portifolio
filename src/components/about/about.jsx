import React, { useState } from 'react';
import './about.css';
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useTheme } from '../theme/ThemeContext';
import { useTranslation } from 'react-i18next';
import Skill from './skill';

function About() {
  const {theme } = useTheme();
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  const handleMouseOver = () => {
    setIsEmailHovered(true);
  };

  const handleMouseOut = () => {
    setIsEmailHovered(false);
  };

  const [t, i18n] = useTranslation('global');

  return (
    <section className={`about ${theme}`} id='sobre'>
      <div className='about-div'>
        <h1 className='about-title'>{t('about.about-me')}</h1>
        <div className='sides'>
          <div className='separa'>
            <p>{t('about.about-text')}</p>
          </div>

          <div className='separa line'>
            <div className='skill-area'>
            <Skill></Skill>
            </div>
          </div>
        </div>
        <div className='contact-div'>
        <h2>{t('about.about-contact')}</h2>
          <div>
            <ul className='contact'>
              <a href="mailto:caioanselmocontato@gmail.com"><li
                id='email'
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                {isEmailHovered ? <HiOutlineMailOpen /> : <HiOutlineMail />}
              </li></a>
              <a href="https://github.com/c-anselmo" target='blank'><li><FaGithub /></li></a>
              <a href="https://www.linkedin.com/in/caio-anselmo-a586b0177/" target='blank'><li><FaLinkedinIn /></li></a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
