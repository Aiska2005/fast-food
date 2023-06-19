import React from 'react'
import Pizza from '../../../menus/pizzas.json'
import Cards from '../ui/cardsProducts/Cards'

const Pizzas = () => {
  return (
  
   <div id='pizzas'>
      <div>
         <div className='mt-cards'>
         <img className='cov-cards' src="https://pbs.twimg.com/profile_banners/3096860182/1426774687/1500x500" alt="" />
         <h3 className='title-hero-cards'>Pizzas</h3>
         </div>
      <div className='Cards' >
      <div className='contrl-Cards'>
         {Pizza.map(e => {
            return(
               <Cards key={e.id} item={e}/>
            )
         })}
      </div>
      </div>
      </div>
   </div>

  )
}

export default Pizzas
