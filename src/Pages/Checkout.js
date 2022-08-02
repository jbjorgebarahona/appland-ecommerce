import React from 'react'
import Subtotal from '../componentes/Subtotal'
import "../css/Checkout.css"
const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='checkout__left'>

        <img
        className='checkout__ad' 
        src='https://www.obsbusiness.school/sites/obsbusiness.school/files/images/istock-675661214.jpg'
        alt=''
        />

        <div>
          <h2 className='checkout__title'>
                Tu Carrito de Compras
          </h2>
          {/*Basket items */}

      </div>
      </div>

      
      <div className='checkout__right'>
       <Subtotal/>
         

      </div>
    
    </div>
  )
}

export default Checkout