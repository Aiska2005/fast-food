import React from 'react'
import FriedChickenData from '../../../menus/fried-chicken.json'
import Cards from '../ui/cardsProducts/Cards'

const FriedChicken = () => {

   return (
      <div id='fried-chicken'>
         <div>
            <div className='mt-cards'>
               <img className='cov-cards' src="https://thebigos.com.tr/images/slider/03.jpg" alt="" />
               <h3 className='title-hero-cards'>fried-chicken</h3>
            </div>
            <div className='Cards' >
               <div className='contrl-Cards'>
               {FriedChickenData.map(e => {
                  return (
                     <Cards key={e.id} item={e} />
                  )
               })}
               </div>
            </div>
         </div>
      </div>
   )
}

export default FriedChicken