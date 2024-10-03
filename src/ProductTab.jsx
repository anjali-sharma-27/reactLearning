import Product from "./Product.jsx";

function ProductTab() {
    // It is for rendering array method
    // let options = [<li>"Hi-tech"</li>, <li>"durable"</li>,<li>"fast"</li>];

    // Rendering arrays using map function
    let options = ["hi-tech", "durable", "fast"];

    return (
        <>
            <Product title="Logitech MX Master" />
            <Product title="Apple Pencil 2nd gen" />
            <Product title="Zebronics Zeb-Transformer" />
            <Product title="Petronics Toad 23" />
            <Product title="Phone" price={30000} />
            <Product title="Phone" price={30000} features={options} />
            <Product title="Laptop" price={44000} features={options} />
            <Product title="Pen" price={1} />
        </>
    );
}

export default ProductTab;
