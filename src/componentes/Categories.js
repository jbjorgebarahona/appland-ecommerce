import React from 'react'
import "../css/Categories.css"
import MenShop from "../img/menMarvel.png"
import WomenShop from "../img/womenMarvel.png"
export const Categories = () => {
  return (
    <div className="directory">
      <div className="wrap">

        <div
          className="item"
          style={{
            backgroundImage: `url(${WomenShop})`
          }}
        >
         {/* <Link to="/search/womens">
            Shop Womens
          </Link> */}
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${MenShop})`
          }}
        >{/*
          <Link to="/search/mens">
            Shop Mens
        </Link>*/}
        </div>
      </div>
    </div>
  )
}
