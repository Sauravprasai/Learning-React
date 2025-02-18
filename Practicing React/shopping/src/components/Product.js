import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Product = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result => setProducts(result))
    }, [])

    const addToCart = (product) =>{
        dispatch(add(product))
    }

    const cards = products.map(product => (
        
        <div className="col-md-3" style={{marginBottom: '10px'}} >
            <Card className="h-100" key={product.id}>
                <div className="text-center">
                    <Card.Img className="Card_Image" variant="top" src={product.image} style={{width: '100px', height: '130px'}} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        NPR: {product.price}
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer style={{background: "white"}} className="text-center">
                    <Button variant="primary" onClick={()=> addToCart(product)}>Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ));
    

    return(
        <>
            <h1>Product Dashboard</h1>
            <div className="row">
                {cards}
            </div>
        </>
    )
}

export default Product;