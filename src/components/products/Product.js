import "./Product.css";

function Product(props) {
  return (
    <figure className="product">
      <img src={props.img} alt={props.name} />
      <h2>name: {props.name}</h2>
      <p>Price: Rs {props.price}</p>
      <p>Desc: {props.desc}</p>
    </figure>
  );
}

export default Product;
