import { useState, useContext } from 'react';
import { loginService } from '../../services/Auth.services';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';
import './login.css';

function Login() {

    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    });

    const { setToken, login } = useContext(AuthContext);

    const handleInputChange = (event) => {
        // este va estableciendo el balor de los input al state del formulario
        setFormLogin({
            ...formLogin,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        // este va ser el envio del formuladio al backend
        event.preventDefault();
        console.log(formLogin, "formLogin");
        loginService(formLogin)
            .then((response) => {
                // funciono el login
                console.log(response);
                setToken(response.data.detalle);
                login();
                Swal.fire({
                    icon: 'success',
                    title: 'Mensaje',
                    text: 'Login correcto'
                });
            })
            .catch((error) => {
                // fallo el login
                Swal.fire({
                    icon: 'error',
                    title: 'Mensaje',
                    text: 'Error en login'
                });
            })
        // como esto mando esto al backend estoy al 50%
    }

    return (
        <section className="ftco-section">
            <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">Login #03</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-12 ">
                        <div className="login-wrap p-4 p-md-5">
                            <div className="d-flex">
                                <div className="w-100">
                                    <h3 className="mb-4">Sign In</h3>
                                </div>
                                <div className="w-100">
                                    <p className="social-media d-flex justify-content-end">
                                        <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></a>
                                        <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
                                    </p>
                                </div>
                            </div>
                            <form action="#" className="login-form">
                                <div className="form-group">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-user" /></div>
                                    <input type="text" className="form-control rounded-left" placeholder="Username" required />
                                </div>
                                <div className="form-group">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-lock" /></div>
                                    <input type="password" className="form-control rounded-left" placeholder="Password" required />
                                </div>
                                <div className="form-group d-flex align-items-center">
                                    <div className="w-100">
                                        <label className="checkbox-wrap checkbox-primary mb-0">Save Password
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="w-100 d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary rounded submit">Login</button>
                                    </div>
                                </div>
                                <div className="form-group mt-4">
                                    <div className="w-100 text-center">
                                        <p className="mb-1">Don't have an account? <a href="#">Sign Up</a></p>
                                        <p><a href="#">Forgot Password</a></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;