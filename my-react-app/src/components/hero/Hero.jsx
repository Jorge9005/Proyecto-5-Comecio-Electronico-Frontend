import './hero.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='restaurant-hero vh-100 w-100'>
            <div className='hero-content'>
                <h1 className='text-light'>¡Ven a disfrutar de las mejores hamburguesas!</h1>
                <h2>¡Si te gusta la famosa Western Bacon no te quedes esperando!</h2>
                <NavLink to="/products" className='btn-hero btn-warning btn position-absolute bottom-0 end-0 me-2 mb-2 text-uppercase fw-bold text-light'>
                    Compra Aquí</NavLink>
            </div>
        </div>
    )
}

export default Hero;