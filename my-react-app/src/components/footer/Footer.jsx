import iconFB from '../../images/fb_icon.png';
import iconIG from '../../images/ig_icon.png';
import iconWPP from '../../images/wpp_icon.png';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <h1>Contáctanos en nuestras redes sociales</h1>
            <div className="social-wrapper">
                <a href="https://www.facebook.com/RepJSandoval/">
                    <img className="footer-icons" src={iconFB} alt="fb" />
                </a>
                <a href="https://www.instagram.com/rjsanndal/">
                    <img className="footer-icons" src={iconIG} alt="ig" />
                </a>
                <a href="#">
                    <img className="footer-icons" src={iconWPP} alt="wpp" />
                </a>
            </div>
        </footer>

    );
}

export default Footer;