import React from 'react'
import BreadssData from '../../../menus/breads.json'
import Cards from '../ui/cardsProducts/Cards'

const Breads = () => {



   return (
      <div id='breads'>
         <div >
         <div className='mt-cards'>
         <img className='cov-cards' src="https://top-fon.com/uploads/posts/2023-01/1674639098_top-fon-com-p-fon-dlya-prezentatsii-khleb-vsemu-golova-35.jpg" alt="" />
         <h3 className='title-hero-cards'>Breads</h3>
         </div>
            <div className='Cards' >
               <div className='contrl-Cards'>
                  {BreadssData.map(e => {
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

export default Breads