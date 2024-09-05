import React, { useEffect, useState } from 'react';
import { useTheme } from '../theme/ThemeContext.jsx';
import './header.css';
import { FaHouseUser, FaRegUser, FaCode } from "react-icons/fa";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { useTranslation } from 'react-i18next';

function Header() {
  const { theme, toggleTheme } = useTheme();
  const handleThemeChange = () => {
    toggleTheme();
  };

  const [scrollClass, setScrollClass] = useState('');
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const bannerH1 = document.getElementById('banner-h1');
      if (bannerH1) {
        const { top } = bannerH1.getBoundingClientRect();
        if (top <= 100) {
          setScrollClass('scroll-topo');
        } else {
          setScrollClass('');
        }
      }

      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
          current = id;
        }
      });
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function destacar(img) {
    const brasilImg = document.getElementById('bra');
    const euaImg = document.getElementById('eua');

    brasilImg.classList.remove('selected');
    euaImg.classList.remove('selected');

    img.classList.add('selected');
}

const [t, i18n] = useTranslation('global');
const handleChangeLanguage = (lang) => {
  i18n.changeLanguage(lang);
};


  return (
    <nav className={`header ${theme} ${scrollClass}`}>
      <a className={`link ${currentSection === 'banner' ? 'active' : ''}`} href="#banner">
        <FaHouseUser /> {t('header.link-home')}
      </a>
      <a className={`link ${currentSection === 'sobre' ? 'active' : ''}`} href="#sobre">
        <FaRegUser /> {t('header.link-about')}
      </a>
      <a className={`link ${currentSection === 'projects' ? 'active' : ''}`} href="#projects">
        <FaCode /> {t('header.link-projects')}
      </a>
      <Classic duration={750} onToggle={handleThemeChange} className='toggle' />
      <div className="idioma">
          <img
            src="/imgs/brasil2.png"
            alt="icone-bandeira-brasil"
            id="bra"
            className='bra selected'
            onClick={() => {
              handleChangeLanguage('pt');
              destacar(document.getElementById('bra'));
            }}
          />
          <img
            src="/imgs/estados-unidos2.png"
            alt="icone-bandeira-eua"
            id="eua"
            className='eua'
            onClick={() => {
              handleChangeLanguage('en');
              destacar(document.getElementById('eua'));
            }}
          />
        </div>
    </nav>
  );
}

export default Header;
