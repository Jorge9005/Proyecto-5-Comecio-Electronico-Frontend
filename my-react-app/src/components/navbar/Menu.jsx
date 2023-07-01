import './menu.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import Logo from '../../images/logo.png';


function Menu() {

    const { isLogin, logout, userInfo } = useContext(AuthContext);

    let publicMenu = () => {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark static-top" style={{backgroundColor: 'black'}}>
                <div className="container">
                    <NavLink className="navbar-brand" to="/home">
                        <img src={Logo} alt="Logo" height={40} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">Signup</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

    let privateMenu = () => {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark static-top" style={{backgroundColor: 'black'}}>
                <div className="container">
                    <NavLink className="navbar-brand" to="/home">
                        <img src={Logo} alt="Logo" height={40} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile" style={{ "textDecoration": "underline" }}>{userInfo.nombre}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/checkout"><BsFillCartFill/></NavLink>
                            </li>
                            <button className='btn btn-light btn-sm ms-2' onClick={logout}>Logout</button>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

    return (
        <>
            {
                isLogin ? (privateMenu()) : (publicMenu())
            }
        </>
    );

}

export default Menu;