import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { listProductsService } from '../../services/Products.services';


const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Aqui deberia ir la carga de los productos reales....
        listProductsService()
        .then((res)=>{
            console.log(res.data.detalle);
            setProducts(res.data.detalle);
        })
        .catch((err)=>{
            console.log(err);
        });
    }, []);



    let addProductToCart = (product) => {

    }


    return (
        <main>

            <div className="mt-5 p-5">
                <div className="row">
                    <div className="col-md-10">
                        <div className="row">
                            {products.map((product) => {
                                return (
                                    <div className="col-sm-6 col-md-4" key={product._id}>
                                        <div className="card mb-4">
                                            <img src={product.imagen} className="card-img-top" alt='test' />

                                            <div className="card-body">
                                                <h3>${product.precio}</h3>
                                                <h4 className='card-title'>{product.nombre}</h4>
                                                <p className="card-text">{product.descripcion}</p>

                                                <div className="d-grid gap-2">
                                                    <button type="button" className="btn btn-primary btn-sm" onClick={() => addProductToCart(product)}>Agregar al carrito</button>
                                                    <Link to={`/detail-product/${product._id}`} className="btn btn-warning btn-sm">Detalle</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>

            </div>



        </main>
    );
}

export default ProductList;