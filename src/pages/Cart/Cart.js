import React, { useEffect } from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import { connect } from "react-redux";
import { fetchCartProductsDetails } from './actions/cartAction';
import { addProductToCart, removeProductToCart, clearCartDetails } from '../Cart/actions/cartAction';
import CartCard from "../../Components/Cards/cartCard";
import { NavLink } from "react-router-dom";

/**
 * Cart component represents the page displaying the shopping cart.
 *
 * @param {Object} props - Component properties.
 * @param {Array} props.cartData - Array of products in the cart.
 * @param {Function} props.onProductAddToCart - Callback function to handle adding a product to the cart.
 * @param {Function} props.onProductRemoveToCart - Callback function to handle removing a product from the cart.
 * @param {Function} props.onClearCart - Callback function to clear the cart.
 * @param {Function} props.onCartDetailsFetch - Callback function to fetch cart details.
 * @returns {JSX.Element} - Rendered React element for the Cart component.
 */
const Cart = ({ cartData, onProductAddToCart, onProductRemoveToCart, onClearCart, onCartDetailsFetch }) => {

    useEffect(() => {
        onCartDetailsFetch();
    }, [onCartDetailsFetch]);

    /**
     * Handles the action of adding a product to the cart.
     *
     * @param {Object} product - Product object to be added to the cart.
     */
    const handleAddToCart = (product) => {
        onProductAddToCart(product);
    }

    /**
     * Handles the action of removing a product from the cart.
     *
     * @param {Object} product - Product object to be removed from the cart.
     */
    const handleRemoveToCart = (product) => {
        onProductRemoveToCart(product);
    }

     /**
     * Calculates the total price of items in the cart.
     *
     * @returns {number} - The total price of items in the cart.
     */
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

/**
 * Maps the state properties to the component's props.
 *
 * @param {Object} state - Redux state.
 * @returns {Object} - Props containing the cart data.
 */
const mapStateToProps = (state) => {
    return {
        cartData: state.cart.cartProducts,
    }
}

/**
 * Maps the dispatch functions to the component's props.
 *
 * @param {Function} dispatch - Redux dispatch function.
 * @returns {Object} - Props containing the callback functions for dispatching actions.
 */
const mapDispatchToProps = (dispatch) => {
    return {
        onCartDetailsFetch: () => dispatch(fetchCartProductsDetails()),
        onProductAddToCart: (product) => dispatch(addProductToCart(product)),
        onProductRemoveToCart: (product) => dispatch(removeProductToCart(product)),
        onClearCart: () => dispatch(clearCartDetails()),
    }
}

// Connecting the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Cart);