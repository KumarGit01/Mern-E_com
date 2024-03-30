import React, { useState, useEffect } from 'react';
import "./Listproduct.css";
import cross_icon from '../../assets/cross_icon.png'
const Listproduct = () => {
  const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://mern-e-com-backend.vercel.app/allproducts');
        const data = await response.json();
        if (data) {
          setProducts(data); // Assuming the fetched data contains an array of products
        } else {
          alert("Failed to fetch products");
        }
      } catch (error) {
        console.error('Error:', error);
        alert("Failed products");
      }
    };
   
    useEffect(() => {

    fetchProducts();
  }, []);

  const removeproduct = async (id)=>{

const response = await fetch('https://mern-e-com-backend.vercel.app/removeproduct',{
method:'POST',
headers:{
  Accept:'application/json',
  'Content-Type': 'application/json',
} ,
body: JSON.stringify({ id:id }),
})

await fetchProducts();

};

  return (
    <div className='list-product'>
      <h1>All Products</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {products.map((product, index) => {
    return  <>    <div key={index} className='listproduct-format-main  listproduct-format '>
<img src={product.image} className='listproduct-product-icon' />
           <p>{product.name}</p>
           <p>${product.old_price}</p>
           <p>${product.new_price}</p>
           <p>{product.category}</p>
           <img src={cross_icon} className='listproduct-remove-icon' onClick={()=>{removeproduct(product.id)}}/>
              </div>
              <hr/>
              </>
})}
      </div>
    </div>
  );
};


export default Listproduct;
