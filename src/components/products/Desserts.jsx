import React from 'react'
import DessertsData from '../../../menus/desserts.json'
import Cards from '../ui/cardsProducts/Cards'

const Desserts = () => {



   return (
      <div id='desserts'>
         <div>
            <div className='mt-cards'>
               <img className='cov-cards' src="https://mykaleidoscope.ru/uploads/posts/2021-09/1632135272_3-mykaleidoscope-ru-p-chizkeik-shokoladnii-krasivo-foto-3.jpg" alt="" />
               <h3 className='title-hero-cards'>Desserts</h3>
            </div>
            <div className='Cards' >
               <div className='contrl-Cards' >
               {DessertsData.map(e => {
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

export default Desserts