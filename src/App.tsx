import React from 'react';

import './App.css';
import { Listing } from './components/Listing/Listing';
import { etsy } from './data/etsy';






function App() {
 
  
  return (
    <div>
      <Listing etsy = {etsy}
      
            />
    </div>
  );
}

export default App;
