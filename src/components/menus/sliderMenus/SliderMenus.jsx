import React from 'react'
import { GiCakeSlice, GiChickenLeg, GiChocolateBar, GiHamburger, GiSandwich, GiSlicedBread, GiSteak } from 'react-icons/gi'
import { RiCake3Fill } from 'react-icons/ri'
import './SliderMenus.css'
import { IoPizzaOutline } from 'react-icons/io5'


const SliderMenus = () => {


  return (
    <div>
      <div className='menu-slide-control'>
         <div>
            <h2 style={{fontSize: 30}} >Menus</h2>
         </div>
         <div className='control-menu-loner'>
            <GiHamburger className='img-slider-menu'/>
            <a href='#burgers'>Burger</a>
         </div>
         <div className='control-menu-loner'>
            <IoPizzaOutline className='img-slider-menu'/>
            <a href='#pizzas'>Pizza</a>
         </div>
         <div className='control-menu-loner'>
            <GiSteak className='img-slider-menu' />
            <a href='#steaks'>Steaks</a>
         </div>
         <div className='control-menu-loner'>
            <GiSandwich className='img-slider-menu' />
            <a href='#sandwiches'>Sandwiches</a>
         </div>
         <div className='control-menu-loner'>
            <GiChickenLeg className='img-slider-menu'/>
            <a href='#fried-chicken'>Fried-chicken</a>
         </div>
         <div className='control-menu-loner'>
            <GiSlicedBread className='img-slider-menu'/>
            <a href='#breads'>Breads</a>
         </div>
         <div className='control-menu-loner'>
            <RiCake3Fill className='img-slider-menu'/>
            <a href='#ice-creams'>Ice-cream</a>
         </div>
         <div className='control-menu-loner'>
            <GiChocolateBar className='img-slider-menu'/>
            <a href='#chocolate'>Chocolate</a>
         </div>
         <div className='control-menu-loner'>
            <GiCakeSlice className='img-slider-menu'/>
            <a href='#desserts'>Desserts</a>
         </div>
      </div>
    </div>
  )
}

export default SliderMenus
