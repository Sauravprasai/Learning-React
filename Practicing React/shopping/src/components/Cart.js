import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeProduct = (product) => {
    dispatch(remove(product));
  };

  const totalCost = cartProducts.reduce((acc, product) => acc + product.price, 0);
  const tax = (0.13 * totalCost).toFixed(2);
  const finalCost = (totalCost + parseFloat(tax)).toFixed(2);

  const cards = cartProducts.map((product) => (
    <div className="col-md-6 col-lg-4 mb-4" key={product.id}>
      <Card className="h-100 shadow-sm">
        <div className="text-center">
          <Card.Img
            className="Card_Image"
            variant="top"
            src={product.image}
            style={{ width: "150px", height: "150px", margin: "10px auto" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>NPR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }} className="text-center">
          <Button variant="danger" onClick={() => removeProduct(product)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {cards.length > 0 ? cards : <p className="text-center w-100">No products in the cart.</p>}
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="p-4 bg-light rounded shadow-sm">
            <h3>Cart Summary</h3>
            <p>Total Cost: <strong>NPR {totalCost.toFixed(2)}</strong></p>
            <p>Tax 13%: <strong>NPR {tax}</strong></p>
            <p>Final Cost: <strong>NPR {finalCost}</strong></p>
            <Button variant="success" className="w-100">Proceed to Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
