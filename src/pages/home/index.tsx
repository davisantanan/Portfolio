import Arrows from '../../components/arrows';
import './styles.css';

function Home () {

    function smoothScroll(id:string) {
        const element = document.querySelector(id)
        if(element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }   

    return(
        <div className="hero-container">
            <header>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li onClick={() => smoothScroll('#profile')}> 
                            Sobre
                        </li>
                        <li onClick={() => smoothScroll('#projects')}>
                            Projetos
                        </li>
                        <li onClick={() => smoothScroll('#contact')}>
                            Contato
                        </li>
                    </ul>
                </nav>
            </header>
            <h1>Procurando um desenvolvedor Front-End?</h1>
            <Arrows />
        </div>
    )
}

export default Home;