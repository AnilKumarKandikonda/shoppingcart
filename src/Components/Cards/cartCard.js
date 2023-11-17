import React from "react";
import { Card, CardBody, CardSubtitle, CardTitle, Button } from 'reactstrap';

const CartCard = ({ handleAddToCart, handleRemoveToCart, product }) => {
    return (
        <>
            <Card key={product.id} className="mb-3">
                <div className="d-flex">
                    <CardBody>
                        <CardTitle><strong>{product.title}</strong></CardTitle>
                        <CardSubtitle style={{ color: 'blue' }}>${product.price} CAD</CardSubtitle>
                        <div className="d-flex justify-content-end align-end">
                            <div>
                                <Button color="primary" onClick={() => handleRemoveToCart(product)}>
                                    -
                                </Button>
                                <span className="mx-2">{product.quantity}</span>
                                <Button color="primary" onClick={() => handleAddToCart(product)}>
                                    +
                                </Button>
                            </div>
                        </div>
                    </CardBody>
                </div>
            </Card>
        </>
    )
}

export default CartCard;