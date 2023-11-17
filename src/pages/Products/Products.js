import React, { useEffect } from "react";
// import Aux from '../../Auxilliary/Auxilliary';
import { Container, Row, Col } from 'reactstrap';

import { connect } from "react-redux";
import { fetchProductsDetails } from './actions/productAction';
import { addProductToCart, removeProductToCart } from '../Cart/actions/cartAction';
import ProductCard from "../../Components/Cards/ProductCard";

const Products = ({ onProductsFetch, productsList, cartData, onProductAddToCart, onProductRemoveToCart }) => {
    useEffect(() => {
        onProductsFetch();
    }, [onProductsFetch]);

    const handleAddToCart = (product) => {
        onProductAddToCart(product);
    }

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

const mapStateToProps = (state) => {
    return {
        productsLoading: state.products.productsLoading,
        productsList: state.products.productsList,
        productsFail: state.products.productsFail,

        cartData: state.cart.cartProducts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onProductsFetch: () => dispatch(fetchProductsDetails()),
        onProductAddToCart: (product) => dispatch(addProductToCart(product)),
        onProductRemoveToCart: (product) => dispatch(removeProductToCart(product)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);