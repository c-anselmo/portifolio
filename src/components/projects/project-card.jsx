import React from "react";
import './project-card.css'
import { useTranslation } from 'react-i18next';
import { useTheme } from '../theme/ThemeContext.jsx';

const Card = () => {
    const { theme } = useTheme();

    const [t, i18n] = useTranslation('global');
    function Cardinfo({ img, title, t, code, link, index }) {
        return (
            <div className="card" style={{ backgroundImage: `url(${img})` }}>
                <div className="card__content">
                    <p className="card__title">{`${title}`} </p>
                    <p className="card__description">{t(`projects.desc-${title}`)}</p>
                    <div className="buttondiv">
                        <a href={`${code}`} target="blank" class='cssbuttons-io'>
                            <button class={`cssbuttons-io ${theme}`}>
                                <span>Code</span>
                            </button>
                        </a>
                        <a href={`${link}`} target="blank" class='cssbuttons-io'>
                            <button class={`cssbuttons-io ${theme}`}>
                                <span>Link</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
    const info =
        [
            {
                id: 1,
                img: '/imgs/MOVIE.png',
                title: 'MOVIES-API',
                code: 'https://github.com/c-anselmo/MOVIES-API',
                link: "https://movies-api-xi-seven.vercel.app/",
            },
            {
                id: 2,
                img: '/imgs/RESTAURANT.png',
                title: "RESTAURANT",
                code: "https://github.com/c-anselmo/restaurant-cardapio",
                link: "https://restaurant-cardapio.vercel.app/",
            },
            {
                id: 3,
                img: '/imgs/GELATERIA.png',
                title: "GELATERIA",
                code: "https://github.com/c-anselmo/gelateria",
                link: "https://gelateria-brown.vercel.app/",
            },{
                id: 3,
                img: '/imgs/GELATERIA.png',
                title: "GELATERIA",
                code: "https://github.com/c-anselmo/gelateria",
                link: "https://gelateria-brown.vercel.app/",
            },

        ]

    return (
        <>
            {info.map((item, index) => {
                return (
                    <Cardinfo key={item.id} img={item.img} title={item.title} code={item.code} link={item.link} t={t} />
                )
            })}
        </>

    );
};

export default Card;


