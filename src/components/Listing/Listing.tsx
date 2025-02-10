import React from 'react'

import { MyInterface } from '../../App'


export const Listing: React.FC<MyInterface>= (props) => {
  const {listing_id, url, MainImage, title, currency_code, price, quantity} = props
  return (
     
    <div className="item-list">
  {[Array(12)].map(() =>
  <div className="item">
    <div className="item-image">
      <a href={props.url}>
        <img alt={props.title} src="https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg"/>
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{props.title}</p>
      <p className="item-price">{props.price}</p>
      <p className="item-quantity level-medium">{`${props.quantity} left`}</p>
    </div>
  </div>)}
</div>
  )
}
