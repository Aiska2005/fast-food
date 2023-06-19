import React from 'react'
import ChocolateData from '../../../menus/chocolates.json'
import Cards from '../ui/cardsProducts/Cards'

const Chocolate = () => {



   return (
      <div id='chocolate'>
         <div>
            <div className='mt-cards'>
               <img className='cov-cards' src="https://sun9-15.userapi.com/impg/e-ZIkv0EKTsH4-XPvP4SG1kdmscHnYBUPbwm8Q/0EskEKIT55g.jpg?size=1198x652&quality=96&sign=3aeb281e06da4ed65d8246e3f4d0a630&c_uniq_tag=5os3LwJ3iH-SSjiuFPFFr6I_ET9Unqh_uQlK-qiENsg&type=album" alt="" />
               <h3 className='title-hero-cards'>Chocolate</h3>
            </div>
            <div className='Cards' >
               <div className='contrl-Cards'>
               {ChocolateData.map(e => {
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

export default Chocolate