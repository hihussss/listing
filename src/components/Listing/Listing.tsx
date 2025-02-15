
import React from 'react'

import { Ietsy } from '../../data/etsy'
import  styles from './listing.module.css'
import { Title } from '../title/title'
type  etsyProps = {
  etsy: Ietsy[]
}

export const Listing = ({etsy}: etsyProps) => {
  
  return (
     
    <div className="item-list">
    {etsy.map((etsy) => (
        
        <div key={etsy.listing_id} className="item">
    <div className="item-image">
      <a href={etsy.url}>
        <img alt = {etsy.title}  src={etsy.MainImage?.url_570xN}/>
      </a>
    </div>
    <div className="item-details">
      <p className="item-title"><Title TitleData = {etsy.title}/></p>
      <p className="item-price">{etsy.currency_code === "USD" ? "$" : etsy.currency_code === "EUR" ?  "€" : ""} {etsy.price} {etsy.currency_code === "USD" || etsy.currency_code === "EUR" ?  "": etsy.currency_code}</p>
      <p className={styles.itemquantity + ' ' + (etsy.quantity <= 10 ? styles.levellow : (10 < etsy.quantity && etsy.quantity <= 20) ? styles.levelmedium : styles.levelhigh)}>{etsy.quantity} left</p>
    </div>
  </div>
    )
    )}  
    
    </div>
  )
}
