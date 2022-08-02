import React from 'react';
import "../css/Home.css";
import {headerItems,products} from "../utils/ProductsData";
import Slider from '../componentes/Slider';
import Banner1 from "../BannerImages/Banner1.jpg";
import Banner2 from "../BannerImages/Banner2.jpg";
import Banner3 from "../BannerImages/Banner3.jpg";
import Banner4 from "../BannerImages/Banner4.jpg";
import Banner5 from "../BannerImages/Banner5.jpg";
import Banner6 from "../BannerImages/Banner6.jpg";
import  Product from "../componentes/Product"


function Home ()  {

  const bannerImages = [Banner1,Banner2,Banner3,Banner4,Banner5,Banner6];
  return (
    
    <div>
        <div className='item-container'>
        {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
        </div>
        <div className='home'>
            <div className='home-container'>
            <Slider images={bannerImages}/>
      <div className='home-row'>
        <Product 
        id='123456'
        title='camisa Spiderman manga larga'  
        price={29.99} 
        image='https://ae01.alicdn.com/kf/HTB1B6c5k67nBKNjSZLeq6zxCFXan/Camiseta-deportiva-3D-para-hombre-camisa-de-iron-Man-Capit-n-Am-rica-Thor-Cosplay-disfraz.jpg_Q90.jpg_.webp'
        rating={5}
        />
       
        <Product
         id='12348'
         title='camisa Spiderman manga larga'  
         price={29.99} 
         image='https://http2.mlstatic.com/D_NQ_NP_902037-MLM43262820513_082020-O.jpg'
         rating={5}
        />
      </div>

      <div className='home-row'>
      <Product 
        id='123456'
        title='camisa Spiderman manga larga'  
        price={29.99} 
        image='https://ae01.alicdn.com/kf/HTB1B6c5k67nBKNjSZLeq6zxCFXan/Camiseta-deportiva-3D-para-hombre-camisa-de-iron-Man-Capit-n-Am-rica-Thor-Cosplay-disfraz.jpg_Q90.jpg_.webp'
        rating={5}
        />
       
        <Product
         id='12348'
         title='camisa Spiderman manga larga'  
         price={29.99} 
         image='https://http2.mlstatic.com/D_NQ_NP_902037-MLM43262820513_082020-O.jpg'
         rating={5}
        />
        <Product
         id='12348'
         title='camisa Spiderman manga larga'  
         price={29.99} 
         image='https://http2.mlstatic.com/D_NQ_NP_902037-MLM43262820513_082020-O.jpg'
         rating={5}
        />
      </div>

      <div className='home-row'>
      <Product
         id='12348'
         title='camisa Spiderman manga larga'  
         price={29.99} 
         image='https://http2.mlstatic.com/D_NQ_NP_902037-MLM43262820513_082020-O.jpg'
         rating={5}
        />
      
      </div>
            <div style={{marginTop:"40px"}}>{/*Bact to top*/}</div>
            </div>
        </div>
      </div>
   
  );
}


export default Home;
