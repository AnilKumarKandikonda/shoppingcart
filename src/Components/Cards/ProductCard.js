import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
const ProductCard = ({ product, handleAddToCart, cartProduct, handleRemoveToCart }) => {
    const getProductQuantity = (count) => {
        if (count > 20) {
            return " left"
        } else if (count < 3) {
            return " (low stock)"
        } else if (count < 10) {
            return " (selling fast)"
        }
    }
    // console.log('cart product', cartProduct);
    return (
        <Card>
            <CardImg top width="300" height="250" src={product.image} alt={product.name} className='p-2' />
            <CardBody>
                <CardTitle className='product-card-title'><strong>{product.title}</strong></CardTitle>
                <CardSubtitle style={{ color: 'blue' }}>${product.price} CAD</CardSubtitle>
                <CardText className='product-card-description'>{product.description}</CardText>
                <CardText className='product-card-description'>{product.rating.count} <span style={{ color: 'orangered' }}>
                    {getProductQuantity(product.rating.count)}</span></CardText>
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