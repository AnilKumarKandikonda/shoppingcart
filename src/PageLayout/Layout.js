import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarText
} from 'reactstrap';
import { NavLink } from "react-router-dom";
const Layout = (props) => {
    return (
        <>
            <Navbar color="faded" light className="m-3" style={{ borderBottom: '1px solid #ccc' }}>
                <NavbarBrand href="/" className="me-auto">
                    HOME
                </NavbarBrand>
                <NavbarText><NavLink className="btn btn-primary" to='/cart'>Cart {0}</NavLink></NavbarText>
            </Navbar>
            <main>
                {props.children}
            </main>
        </>

    )
}



export default Layout;