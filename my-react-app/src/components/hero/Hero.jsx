import './hero.css';

const Hero = () => {
    return (
        <div className="hero-wrapper">
            <div className="hero">
                <div className="hero-inner">
                    <h1>¿Tu computadora está lenta?</h1>
                    <h2>No dudes en mandarla con nosotros, ¡aún puedes revivir tu computadora!</h2>
                    <div className="buttons">
                        <a href="#contact" className="btna">Contáctanos</a>
                        <a href="#register" className="btna">Regístrate</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Hero;