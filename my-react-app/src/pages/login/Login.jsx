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
                login(response.data.detalle);
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
                    icon:'error',
                    title: 'Mensaje',
                    text: 'Error en login'
                });
            })
        // como esto mando esto al backend estoy al 50%
    }


    return (
        <div className="login-wrap">
            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab"></label>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="sign-in-htm">
                        <div className="group">
                            <label className="label" htmlFor="user">Email</label>
                            <input id="user" type="email" className="input" required onChange={handleInputChange} value={formLogin.email} name='email'/>
                        </div>
                        <div className="group">
                            <label className="label" htmlFor='password'>Contraseña</label>
                            <input id="pass" type="password" className="input" required onChange={handleInputChange} value={formLogin.password} name='password'/>
                        </div>
                        <div className="group">
                            <input id="check" type="checkbox" className="check" defaultChecked />
                            <label><span className="icon" /> Keep me Signed in</label>
                        </div>
                        <div className="group">
                            <input type="submit" className="button" defaultValue="Sign In" />
                        </div>
                        <div className="hr" />
                        <div className="foot-lnk">
                            <a href="#forgot">Forgot Password?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Login;