import './footer.css';

const Footer = () => {
    return (<div className="footer-basic">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
        <footer>
            <div className="social"><a href="#"><i className="icon ion-social-instagram" /></a><a href="#"><i className="icon ion-social-snapchat" /></a><a href="#"><i className="icon ion-social-twitter" /></a><a href="#"><i className="icon ion-social-facebook" /></a></div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Services</a></li>
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p className="copyright">Company Name © 2018</p>
        </footer>
    </div>

    );
}

export default Footer;