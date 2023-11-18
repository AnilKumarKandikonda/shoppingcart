import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarText
} from 'reactstrap';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

/**
 * Layout component represents the overall layout structure of the application.
 *
 * @param {Object} props - Component properties.
 * @param {Array} props.cartData - Array of products in the cart.
 * @param {ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} - Rendered React element for the Layout component.
 */
const Layout = (props) => {
    /**
     * Calculates the total quantity of items in the cart.
     *
     * @returns {number} - The total quantity of items in the cart.
     */
    const calculateCartCount = () => {
        let count = 0;
        props.cartData.forEach(item => {
            count += item.quantity;
        });
        return count;
    }
    return (
        <>
            {/* Navbar component with navigation links */}
            <Navbar color="faded" light className="m-3" style={{ borderBottom: '1px solid #ccc' }}>
                <NavbarBrand href="/" className="me-auto">
                    HOME
                </NavbarBrand>
                {/* NavbarText displaying a link to the cart with the total quantity */}
                <NavbarText><NavLink className="btn btn-primary" to='/cart'>Cart - <span className="text-white">{calculateCartCount()}</span></NavLink></NavbarText>
            </Navbar>
            {/* Main content area where child components are rendered */}
            <main>
                {props.children}
            </main>
        </>

    )
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

// Connecting the component to the Redux store
export default connect(mapStateToProps, null)(Layout);