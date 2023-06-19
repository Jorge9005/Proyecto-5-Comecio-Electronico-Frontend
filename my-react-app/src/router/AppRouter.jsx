import {Route, Routes, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import PerfilUsuario from '../pages/PerfilUsuario';
import About from '../pages/About';
import ProductList from '../pages/products/ProductsList';



function AppRouter() {
    return (
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/perfil_usuario' element={<PerfilUsuario/>}/>
        <Route path="/products" element={<ProductList />} />
        <Route path="/" element={<Navigate to="home"/>}/>
    </Routes>
    );
}

export default AppRouter;