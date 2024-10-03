

import "./Product.css";
// import Prices from "./Prices";

function Product({ title, price = 1, features = [] }) {
    const list = features.map((feature, index) => <li key={index}>{feature}</li>);
    let isDiscount = price > 30000;
    let styles = { backgroundColor: isDiscount ? "pink" : "" };

    return (
        <div className="Product" style={styles}>
            <h4>{title}</h4>
            <p>Title</p>
            <p>Description</p>
            <h3>{title}</h3>
            <h5>Price: {price}</h5>
            <ul>{list}</ul>
            {isDiscount && <p>Discount of 5%</p>}
        </div>
    );
}

export default Product;