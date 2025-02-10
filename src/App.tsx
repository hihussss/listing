import React from 'react';

import './App.css';
import { Listing } from './components/Listing/Listing';
import etsy from "./data/etsy.json"

export interface MyInterface {
  listing_id: number,
  url: string,
  MainImage: object,
  title: string,
  currency_code: string,
  price: string,
  quantity: number
}

function App() {
  const data:MyInterface = JSON.parse(etsy)
  return (
    <div>
      <Listing {...data} />
    </div>
  );
}

export default App;
