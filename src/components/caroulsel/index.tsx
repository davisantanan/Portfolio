import './caroulsel.css';
import { useEffect, useState } from 'react';
import CalculatorIMC from '../../assets/IMC.png';
import HOTD from '../../assets/HOTD.png';
import Market from '../../assets/Market.png';
import Wakanda from '../../assets/wakanda.png';
import Youtube from '../../assets/youtube.png';
import Personal from '../../assets/personal-mode.png'
import GitHubIcon from '../../assets/github.png';
import DeployIcon from '../../assets/deployment.png';


const sliderImage = [
    {
        title: 'Calculadora IMC',
        image: CalculatorIMC,
        icon: [GitHubIcon],
        url: 'https://github.com/davisantanan/Calculadora-IMC'
    },
    {
        title: 'Landing-Page-HOTD',
        image: HOTD,
        icon: [GitHubIcon, DeployIcon],
        url: ['https://github.com/davisantanan/Landing-Page-HOTD-JS', 'https://landingpagehotd.netlify.app/']
    },
    {
        title: 'Carrinho de Compras',
        image: Market,
        icon: [GitHubIcon, DeployIcon],
        url: ['https://github.com/davisantanan/Shopping-Cart', 'https://shopping-cart-six-vert.vercel.app/']
    },
    {
        title: 'Wakanda-Forever',
        image: Wakanda,
        icon: [GitHubIcon, DeployIcon],
        url: ['https://github.com/davisantanan/Wakanda-Forever-React', 'https://wakanda-forever-react.vercel.app/']
    },
    {
        title: 'Youtube-Clone | API | Login Feature',
        image: Youtube,
        icon: [GitHubIcon, DeployIcon],
        url: ['https://github.com/davisantanan/Clone-Youtube', 'https://clone-youtube-pearl.vercel.app/']
    },
    {
        title: 'Personal-Mode',
        image: Personal,
        icon: [GitHubIcon, DeployIcon],
        url: ['https://github.com/davisantanan/Personal-Mode', 'https://personal-mode.vercel.app/']
    }
]

function Caroulsel(){
    const len = sliderImage.length -1;
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex +1);
        }, 3000);
        return() => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[activeIndex]);

    return(
        <div className='slider-container'>
            {sliderImage.map((slide:any, index:number) => (
                <div 
                key={index}
                className={`${index === activeIndex ? 'active' : 'inactive'}`}
                >
                    <h2 className='slide-title'>{slide.title}</h2>
                    <div className='tec-container'>
                        {slide.icon.length > 1 ?
                        <>
                            <a target='_blank' rel='noreferrer' href={slide.url[0]}>
                                <div className='icon-container'>
                                    <img className='icon' src={slide.icon[0]} alt=''/>
                                </div>
                            </a>
                            <a target='_blank' rel='noreferrer' href={slide.url[1]}>
                                <div className='icon-container'>
                                    <img className='icon' src={slide.icon[1]} alt=''/>
                                </div>
                            </a>
                        </> 
                        :
                        <a target='_blank' rel='noreferrer' href={slide.url}>
                            <div className='icon-container'>
                                <img className='icon' src={slide.icon} alt=''/>
                            </div>
                        </a>
                        }
                    </div>
                    <img className='slide-image' src={slide.image}  alt=''/>
                </div>
            ))}
            <div className='all-dots'>
                {sliderImage.map((slide:any, index:number) => (
                    <span
                    key={index}
                    className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                    onClick={() => setActiveIndex(index)}
                    ></span> 
                ))}
            </div>
        </div>
    )
}

export default Caroulsel;