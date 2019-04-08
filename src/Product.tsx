import * as React from 'react';
import {IProduct} from "./ProductsData";

import Tabs from "./Tabs";
import withLoader from "./withLoader";

interface IProps {
    product?: IProduct;
    inBasket: boolean;
    onAddToBasket: () => void;
}

const Product: React.SFC<IProps> = props => {
    const product = props.product;

    const handleAddClick = () => {
        props.onAddToBasket();
    };

    if (!product) {
        return null;
    }

    return (
        <React.Fragment>
            <h1>{product.name}</h1>
            <Tabs>
                <Tabs.Tab name="Description"
                          initialActive={true}
                          heading={() => <b>Description</b>}>
                    <p>{product.description}</p>
                </Tabs.Tab>
                <Tabs.Tab name="Reviews"
                          heading={() => <b>Reviews</b>}>
                    <div>
                        <ul className="product-reviews">
                            {
                                product.reviews.map(review => (
                                    <li key={review.reviewer} className="product-reviews-item">
                                        <i>"{review.comment}"</i>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </Tabs.Tab>
            </Tabs>

            <p className="product-price">
                {
                    new Intl.NumberFormat("en-US", {
                        currency: "USD",
                        style: "currency"
                    }).format(product.price)
                }
            </p>
            {!props.inBasket && (<button onClick={handleAddClick}>Add to basket</button>)}
        </React.Fragment>)
};

export default withLoader(Product);