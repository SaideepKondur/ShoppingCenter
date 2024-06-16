import React, { useEffect } from 'react';  
import { fetchData } from '../../../redux/slices/productSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SingleProduct from '../singleproduct/SingleProduct';
import './ProductList.css';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { LoadingOutlined } from '@ant-design/icons';
import { Space, Spin } from 'antd';
import { useLocation } from 'react-router-dom'
import HeaderImage from '../../../images/HeaderImage.jpg';

function ProductList() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const status = useSelector(state => state.productReducer.status);
  const error = useSelector(state => state.productReducer.error)

  const cart = useSelector((state) => state.cartReducer.cart);


  useEffect(() => { 
    dispatch(fetchData())
        // fetchData();

  }, []);

  // console.log('Products:', products);
  // console.log('Status:', status);
  // console.log('Error:', error);

  // displayImage(() => {
  //   const img = document.createElement('img');
  //   img.src = 'redux-app/src/images/HeaderImage.jpg';
  //   img.alt = 'Sample Image';
  //   return img;
  // })

  if(status === 'loading') {
    return <Spin style = {{position:'absolute', top: '40%', left: '50%'}} indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />;
  };

  if(status === 'failed') {
    return <> 
    <h2> < br/>< br/>< br/>Uh oh! Looks like something went wrong.</h2>
    < br/>
    <p>Error: {error}</p>


    </>
  }



  return (
    <div className ='home'>
      <img src={HeaderImage} alt="Header Image" className="header-image" />
      <div className='ProductList'>
      {/* item.images[0].includes('.jpeg') || item.images[0].includes('imgur') ? <SingleProduct key={item.id} product={item} />: '' */}
      {products.map((item) => (
        <SingleProduct key={item.id} product={item} />
      ))}
      </div>
    </div>
  );
}

export default ProductList






