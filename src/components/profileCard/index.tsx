import avatar from '../../assets/2.png';
import Js from '../../assets/js.png';
import Typescript from '../../assets/png-transparent-typescript-hd-logo-thumbnail.png';
import React from '../../assets/react.png';
import LinkedinIcon from '../../assets/linkedin.png';
import GitHubIcon from '../../assets/githubProfile.png';
import './profileCard.css'

function ProfileCard(){
    return(
        <>
            <div className="profile-content">
                    <div className="profile-card">
                        <img className="profile-image" alt='' src={avatar} />
                        <span className="name-text">Davi Santana</span>
                        <span className="profile-text">
                            Viver é melhor que sonhar.
                            Pronto para contribuir para o mercado de desenvolvimento ao seu lado!
                        </span>
                        <div className='social-container'>
                            <a href='https://www.linkedin.com/in/davi-santana-3869251ab/' 
                            target='_blank' rel='noreferrer'>
                                <div className='button-container button-container-hover'>
                                    <span className='text-button'>Linkedin</span>
                                    <img className='icon-button' alt='' src={LinkedinIcon} />
                                </div>
                            </a>
                            <a href='https://github.com/davisantanan' target='_blank' rel='noreferrer'>
                                <div className='button-container button-container-hover'>
                                    <span className='text-button'>Github</span>
                                    <img className='icon-button' alt='' src={GitHubIcon} />
                                </div>
                            </a>
                        </div>
                        <div className="divider"></div>
                        <div className="icons-container">
                            <img className="icon-item" alt='' src={Js} />
                            <img className="icon-item" alt='' src={Typescript} />
                            <img className="icon-item" alt='' src={React} />
                        </div>
                    </div>
            </div>
            <div className='sinopse-container'>
                <p className="profile-sinopse">
                    21 anos, com muita sede de aprendizado e apaixonado por tecnologia e suas evoluções.
                    Através de cursos na internet iniciei meu aprendizado com HTML e CSS e logo em seguida fiz meu primeiro grande projeto chamado de "Wakanda-Forever", isso me deixou muito animado e acabou aflorando uma paixão pela área de desenvolvimento Web. Após isso foi consequência estudar a linguagem JavaScript, no começo foi desafiador mas com o tempo e com alguns projetos feitos como um e-commerce de miniaturas de avião consegui avançar meus estudos para o React. A partir disso um novo mundo se abriu diante meus olhos, e foi muito satisfatório ver a quantidade funcionalidades que eu conseguia implementar com o mesmo. Senti meu conhecimento sendo testado em um clone do youtube que fiz, um projeto com React TypeScript, Styled-Components e que precisei estudar até mesmo o backend com NodeJs para torna-lo mais completo e desafiador, o clone possui funcionalidades como login e criação de conta consumindo a API através do axios com async e await, além de ser necessário a utilização de diversos hooks para a conclusão do projeto.
                </p>
            </div>
        </>
    )
}

export default ProfileCard;