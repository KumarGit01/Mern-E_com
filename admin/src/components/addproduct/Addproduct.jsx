import React, { useState } from 'react';
import "./Addproduct.css";
import upload_area from '../../assets/upload_area.svg';

const Addproduct = () => {
    const [image, setImage] = useState(null);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: "",
    });

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    }

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const addProduct = async () => {
        console.log(productDetails);
        let responseData;
        let product = { ...productDetails }; // Create a copy of productDetails
        let formData = new FormData();
        formData.append('product', image); // Make sure the field name matches Multer configuration

        try {
            const response = await fetch('https://backend-server-2.onrender.com/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            });

            responseData = await response.json();

            if (responseData.success) {
                product.image = responseData.image_url;
                console.log(product);
            await fetch('https://backend-server-2.onrender.com/addproducts',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((res)=>res.json()).then((data)=>{
                data.success ? alert("product Added") : alert("failed")
            })
            
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Type Here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Type Here' />
                </div>
            </div>
            <div className="addproduct-inputfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector' >
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor='file-input'>
                    <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thubnail-img' alt="Upload Area" />
                </label>
                <input onClick={imageHandler} type='file' name='product' id='file-input' hidden />
            </div>
            <button onClick={()=>addProduct()} className='addproduct-btn'>Add</button>
        </div>
    );
}

export default Addproduct;
