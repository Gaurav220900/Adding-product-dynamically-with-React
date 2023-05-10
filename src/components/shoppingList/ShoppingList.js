import React, { useState } from "react";
import Product from "../products/Product";
import Form from "../form/Form";

function ShoppingList() {
  const temp = [
    {
      name: "Iphone 11",
      img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: 300,
      desc: "Apple iPhone 11 Pro Max, 64GB, Midnight Green",
    },
    {
      name: "Nike Shoes",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: 100,
      desc: "Apple iPhone 11 Pro Max, 64GB, Midnight Green",
    },
    {
      name: "Titan Watch",
      img: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: 150,
      desc: "Apple iPhone 11 Pro Max, 64GB, Midnight Green",
    },
  ];

  const [products, setProduct] = useState(temp);
  function addProduct(newProduct) {
    setProduct([...products, newProduct]);
  }
  return (
    <section>
      <Form addProduct={addProduct} />
      {products.map((product, idx) => {
        return (
          <Product
            key={idx}
            name={product.name}
            img={product.img}
            desc={product.desc}
            price={product.price}
          />
        );
      })}
    </section>
  );
}

export default ShoppingList;
