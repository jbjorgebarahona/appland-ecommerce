import React from 'react'
import "../css/Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../redux/StateProvider';
function Subtotal() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value) =>(
            <>
            <p>
              Subtotal ({basket?.length}):
              <strong>  </strong>

            </p>
            <small className='subtotal__gift'>
                <input type="checkbox"/>This order contain a gift

            </small>


            </>
        )}

        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Lps"}
   
        />

        <button>Procesar Carrito</button>
    </div>
  )
}

export default Subtotal