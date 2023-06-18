import bg from '../../images/bg-signup.jpg';
import { useState } from 'react';
import { registerService } from '../../services/Auth.services';
import Swal from 'sweetalert2';
import './signup.css';

function Signup() {

    const [formSignUp, setFormSignUp] = useState({
        nombre: '',
        email: '',
        dob: '',
        password: '',
        passwordConfirmation: '',
    });

    const handleInputChange = (event) => {
        setFormSignUp({
            ...formSignUp,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        registerService(formSignUp)
            .then(response => {
                console.log(response);
                Swal.fire({
                    icon: 'success',
                    title: 'Mensaje',
                    text: 'Usuario registrado correctamente',
                    confirmButtonColor: '#01d28e',
                });
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Mensaje',
                    text: 'Error al registrar usuario',
                });
            })
    }

    return (
        <div>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section">¡REGÍSTRATE!</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="wrap d-md-flex">
                                <div className="text-wrap p-4 p-lg-5 d-flex img d-flex align-items-end" style={{ backgroundImage: `url(${bg})` }}>
                                    <div className="text w-100">
                                        <h2 className="mb-4">Welcome to signup form</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                                <div className="login-wrap p-4 p-md-5">
                                    <h3 className="mb-3">Create an account</h3>
                                    <form action="#" className="signup-form">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group d-flex align-items-center">
                                                    <label className="label" htmlFor="name">Full Name</label>
                                                    <input type="text" className="form-control" placeholder="Full Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group d-flex align-items-center">
                                                    <label className="label" htmlFor="email">Email Address</label>
                                                    <input type="text" className="form-control" placeholder="johndoe@email.com" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group d-flex align-items-center">
                                                    <label className="label" htmlFor="phone">Phone no.</label>
                                                    <input type="text" className="form-control" placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group d-flex align-items-center">
                                                    <label className="label" htmlFor="password">Password</label>
                                                    <input type="password" className="form-control" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group d-flex align-items-center">
                                                    <label className="label" htmlFor="website">Website</label>
                                                    <input type="text" className="form-control" placeholder="Website" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 my-4">
                                                <div className="form-group">
                                                    <div className="w-100">
                                                        <label className="checkbox-wrap checkbox-primary">I agree all statements in terms of service
                                                            <input type="checkbox" defaultChecked />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-secondary submit p-3">Create an account</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="social-wrap">
                                        <p className="or">
                                            <span>or</span>
                                        </p>
                                        <p className="mb-3 text-center">Signup with this services</p>
                                        <p className="social-media d-flex justify-content-center">
                                            <a href="#" className="social-icon google d-flex align-items-center justify-content-center"><span className="fa fa-google" /></a>
                                            <a href="#" className="social-icon facebook d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></a>
                                            <a href="#" className="social-icon twitter d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
                                        </p>
                                    </div>
                                    <div className="w-100 text-center">
                                        <p className="mt-4">I'm already a member! <a href="#signin">Sign In</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            );
            {'}'}
        </div>
    );
}


export default Signup;