import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

/**
 * ProductCard component represents a card displaying information about a product.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.product - Product object containing information like id, title, price, image, and description.
 * @param {Function} props.handleAddToCart - Callback function to handle adding a product to the cart.
 * @param {Object} props.cartProduct - Product object representing the same product in the cart.
 * @param {Function} props.handleRemoveToCart - Callback function to handle removing a product from the cart.
 * @returns {JSX.Element} - Rendered React element for the ProductCard component.
 */

const ProductCard = ({ product, handleAddToCart, cartProduct, handleRemoveToCart }) => {
    return (
        <Card>
            {/* Card image displaying the product */}
            <CardImg top width="300" height="250" src={product.image} alt={product.name} className='p-2' />
            <CardBody>
                {/* Displaying the title of the product */}
                <CardTitle className='product-card-title'><strong>{product.title}</strong></CardTitle>
                {/* Displaying the price of the product in CAD with blue color */}
                <CardSubtitle style={{ color: 'blue' }}>${product.price} CAD</CardSubtitle>
                <CardText className='product-card-description'>{product.description}</CardText>
                {/* Conditional rendering based on whether the product is in the cart */}
                {(cartProduct.id !== undefined && cartProduct.id === product.id) ? <div className="d-flex align-items-center" style={{ justifyContent: 'space-evenly' }}>
                    <Button color="danger" className="mr-2" onClick={() => handleRemoveToCart(product)}>
                        -
                    </Button>
                    <span className="mr-2">{cartProduct.quantity}</span>
                    <Button color="success" onClick={() => handleAddToCart(product)}>
                        +
                    </Button>
                </div> : <Button color="primary" onClick={() => handleAddToCart(product)} className="mt-2">
                    Add to Cart
                </Button>}
            </CardBody>
        </Card>
    )
}

export default ProductCard;