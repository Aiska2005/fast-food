import React from 'react'
import SandwichesData from '../../../menus/sandwiches.json'
import Cards from '../ui/cardsProducts/Cards'

const Sandwiches = () => {

   return (
      <div id='sandwiches'>
         <div>
            <div className='mt-cards'>
               <img className='cov-cards' src="https://kartinkin.net/uploads/posts/2022-09/1662151623_9-kartinkin-net-p-treugolnie-buterbrodi-oboi-11.jpg" alt="" />
               <h3 className='title-hero-cards'>Sandwiches</h3>
            </div>
            <div className='Cards' >
               <div className='contrl-Cards'>
               {SandwichesData.map(e => {
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

export default Sandwiches