import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import './styles.css';

const ProductDetails = (props) => {

    const [product, setProduct] = useState({});

    const getProduct = async () => {
        const { id } = props.match.params;
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
    }
    
    useEffect(() => {
        getProduct();
    }, []);

    return(
        <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>
                URL: <a href={product.url}>{product.url}</a>
            </p>
                <a className="link" href="/">
                    Voltar
                </a>
        </div>
    );
}

export default ProductDetails;