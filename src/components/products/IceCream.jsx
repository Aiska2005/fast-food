import React from 'react'
import IceCreamsData from '../../../menus/ice-cream.json'
import Cards from '../ui/cardsProducts/Cards'

const IceCreams = () => {



   return (
      <div id='ice-creams'>
         <div>
            <div className='mt-cards'>
               <img className='cov-cards' src="https://cupprint.com/wp-content/uploads/2018/07/ice-cream-cups.jpg" alt="" />
               <h3 className='title-hero-cards'>Ice-cream</h3>
            </div>
            <div className='Cards' >
               <div className='contrl-Cards'>
                  {IceCreamsData.map(e => {
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

export default IceCreams