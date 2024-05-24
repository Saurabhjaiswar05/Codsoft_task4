import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';

function App() {

  const [product, setProduct] = useState([
    {
      url:"https://5.imimg.com/data5/SELLER/Default/2023/10/352764690/TY/AR/NS/194012307/9-snk-310-white-43-bruton-white-original-imageqffhw7mk4mg-bb-500x500.jpeg",
      name:"White shoues",
      category:"Shoes",
      seller:"AMZ Seller Ghz",
      price:1999
    },
    {
      url:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11795714/2022/6/20/82f23b68-8d08-44d6-8d44-8ab9b175493c1655697699428-Titan-Men-Black-Analogue-Watch-451655697699148-1.jpg",
      name:"Titan Black Watch",
      category:"Watches",
      seller:"Watch Ltd Siyana",
      price:2599
    },
    {
      url:"https://www.livemint.com/lm-img/img/2024/02/16/600x338/10_best_laptop_brands_1708068001197_1708068008163.jpg",
      name:"AMZ Laptop 8GB RAM",
      category:"Laptops",
      seller:"Delhi Laptops",
      price:26000
    },
    {
      url:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b0981ff-45f8-40c3-9372-32430a62aaea/dunk-high-womens-shoes-LwCxXJ.png",
      name:"Nike Jordan Shoes",
      category:"Shoes",
      seller:"AMZ Seller Ghz",
      price:1999
    },
    {
      url:"https://media.dior.com/couture/ecommerce/media/catalog/product/A/K/1712143301_M1296ZEGH_M911_E01_GH.jpg?imwidth=3000",
      name:"Hand Bag",
      category:"Bags",
      seller:"AMZ Seller Ghz",
      price:1899
    },
    {
      url:"https://images.samsung.com/is/image/samsung/assets/africa_en/smartphones/galaxy-s23-ultra/galaxy-s23-ultra-highlights-kv.jpg?$ORIGIN_JPG$",
      name:"Samsung Galaxu s23",
      category:"Mobiles",
      seller:"AMZ Seller Ghz",
      price:150000
    },
    {
      url:"https://www.thewalkdeal.com/cdn/shop/products/Never-Give-Up-TheFight.jpg?v=1640673347",
      name:"Never give up t-shirt",
      category:"T-shirts",
      seller:"AMZ Seller Ghz",
      price:900
    },
    {
      url:"https://assets-prd.ignimgs.com/2023/10/10/iphone-3-1696976782998.jpg",
      name:"I Phone 14 pro",
      category:"Shoes",
      seller:"AMZ Seller Ghz",
      price:80000
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setshowCart] = useState(false);


  const addToCart =(data)=>{
    setCart([...cart,{...data, quantity : 1}])

  }

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1); // Remove item at the specified index
    setCart(updatedCart);
  };

  const handleShow = (value)=>{
    setshowCart(value);
  }

  
  return (
    <div>
    <Header  count={cart.length} 
    handleShow={handleShow}
   
     />
    {
      showCart ? (<CartList cart={cart }
      removeFromCart={removeFromCart}
     
      />) :(<ProductList product={product} addToCart={addToCart} />)
    }
    
    
    </div>
  );
}

export default App;
