import React from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import { connect } from "react-redux";
// import { fetchCartProductsDetails } from './actions/cartAction';
import { addProductToCart, removeProductToCart, clearCartDetails } from '../Cart/actions/cartAction';
import CartCard from "../../Components/Cards/cartCard";
import { NavLink } from "react-router-dom";

const Cart = ({ cartData, onProductAddToCart, onProductRemoveToCart, onClearCart }) => {

    const handleAddToCart = (product) => {
        onProductAddToCart(product);
    }

    const handleRemoveToCart = (product) => {
        onProductRemoveToCart(product);
    }
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartData.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    }
    return (
        <Container>
            <Button className="primary mb-2" onClick={() => onClearCart()}>Clear Cart</Button>
            <Row>
                {cartData.map(product => <Col md={9} key={product.id}>
                    <CartCard product={product}
                        handleAddToCart={handleAddToCart}
                        handleRemoveToCart={handleRemoveToCart} />
                </Col>
                )}
                {cartData.length > 0 ? <Col>
                    <h4>Total</h4>
                    <ul className="list-unstyled">
                        <li><strong>Total Price: </strong> {calculateTotalPrice().toFixed(2)}</li>
                    </ul>
                </Col> : <p>Cart is empty <NavLink to='/'>Keep shopping</NavLink></p>}
            </Row>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        cartData: state.cart.cartProducts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onCartDetailsFetch: () => dispatch(fetchCartProductsDetails())
        onProductAddToCart: (product) => dispatch(addProductToCart(product)),
        onProductRemoveToCart: (product) => dispatch(removeProductToCart(product)),
        onClearCart: () => dispatch(clearCartDetails()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);