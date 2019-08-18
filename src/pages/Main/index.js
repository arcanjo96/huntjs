import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

const Main = () => {

    const [products, setProducts] = useState([]);
    const [productInfo, setProductInfo] = useState({});
    const [page, setPage] = useState(1);

    const loadProducts = async (p = 1) => {
        const response = await api.get(`/products?page=${p}`);
        const { docs, ...info } = response.data;
        setProducts(docs);
        setProductInfo(info);
        setPage(p);
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const nextPage = () => {
        if(page === productInfo.pages) return;
        const pageNumber = page + 1;
        loadProducts(pageNumber);
    }

    const prevPage = () => {
        if(page === 1) return;
        const pageNumber = page - 1;
        loadProducts(pageNumber);
    }

    console.log(page);

    return(
       <div className="product-list">
           {products.map(product => (
               <article key={product._id}>
                   <strong>{product.title}</strong>
                   <p>{product.description}</p>
                   <Link to={`/products/${product._id}`}>Acessar</Link>
               </article>
           ))}
           <div className="actions">
               <button disabled={page === 1} onClick={prevPage}>Anterior</button>
               <button disabled={page === productInfo.pages} onClick={nextPage}>Próximo</button>
           </div>
       </div>
    );
}

export default Main;