import React, { useEffect } from "react";
// import Aux from '../../Auxilliary/Auxilliary';
import { Container, Row, Col } from 'reactstrap';

import { connect } from "react-redux";
import { fetchProductsDetails } from './actions/productAction';
import { addProductToCart, removeProductToCart, fetchCartProductsDetails } from '../Cart/actions/cartAction';
import ProductCard from "../../Components/Cards/ProductCard";

/**
 * Products component represents the page displaying a list of products.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.onProductsFetch - Callback function to fetch products.
 * @param {Array} props.productsList - Array of products to be displayed.
 * @param {Array} props.cartData - Array of products in the cart.
 * @param {Function} props.onProductAddToCart - Callback function to handle adding a product to the cart.
 * @param {Function} props.onProductRemoveToCart - Callback function to handle removing a product from the cart.
 * @param {Function} props.onCartDetailsFetch - Callback function to fetch cart details.
 * @returns {JSX.Element} - Rendered React element for the Products component.
 */
const Products = ({ onProductsFetch, productsList, cartData, onProductAddToCart, onProductRemoveToCart, onCartDetailsFetch }) => {
    useEffect(() => {
        onProductsFetch();
        onCartDetailsFetch();
    }, [onProductsFetch, onCartDetailsFetch]);

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
    return (
        <Container>
            <Row>
                {productsList.map(product => {
                    let index = cartData.findIndex(item => item.id === product.id);
                    let cartProduct = {}
                    if (index >= 0) {
                        cartProduct = cartData[index];
                    }
                    return (<Col lg="3" sm="6" md="4" xs="12" key={product.id}>
                        <ProductCard product={product}
                            cartProduct={cartProduct}
                            handleAddToCart={handleAddToCart}
                            handleRemoveToCart={handleRemoveToCart} />
                    </Col>);
                })}
            </Row>
        </Container>
    );
}

/**
 * Maps the state properties to the component's props.
 *
 * @param {Object} state - Redux state.
 * @returns {Object} - Props containing the product list, loading status, and cart data.
 */
const mapStateToProps = (state) => {
    return {
        productsLoading: state.products.productsLoading,
        productsList: state.products.productsList,
        productsFail: state.products.productsFail,

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
        onProductsFetch: () => dispatch(fetchProductsDetails()),
        onProductAddToCart: (product) => dispatch(addProductToCart(product)),
        onProductRemoveToCart: (product) => dispatch(removeProductToCart(product)),
    }
}

// Connecting the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Products);