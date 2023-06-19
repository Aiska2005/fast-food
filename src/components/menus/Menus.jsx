import React from 'react';
import Breads from '../products/Breads';
import Burgers from '../products/Burgers';
import Chocolate from '../products/Chocolate';
import Desserts from '../products/Desserts';
import FriedChicken from '../products/FriedChicken';
import IceCreams from '../products/IceCream';
import Pizzas from '../products/Pizzas';
import Sandwiches from '../products/Sandwiches';
import Steaks from '../products/Steaks';
import './Menus.css';
import SliderMenus from './sliderMenus/SliderMenus';


const Menus = () => {

  return (
    <div>
      <div className='control-menus-slide-contents'>
         <div className='control-menus-slide'>
          <div className='control-menus-slide-position-stycky'>
            <SliderMenus/>
          </div>
         </div>
         <div className='control-menus-contents'>
          <Burgers/>
          <Pizzas/>
          <Steaks/>
          <Sandwiches/>
          <FriedChicken/>
          <Breads/>
          <IceCreams/>
          <Chocolate/>
          <Desserts/>
         </div>
      </div>
    </div>
  )
}

export default Menus
