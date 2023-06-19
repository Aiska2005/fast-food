import React from 'react'
import SteaksData from '../../../menus/steaks.json'
import Cards from '../ui/cardsProducts/Cards'

const Steaks = () => {



   return (
      <div id='steaks'>
         <div >
            <div className='mt-cards'>
               <img className='cov-cards' src="https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/D3cYY3FwQm8aeX54hp01C-R4_Nk=/1440x810/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/IM2VPFX7G2K4VWCPLGHQTQZEK4.jpg" alt="" />
               <h3 className='title-hero-cards'>Steaks</h3>
            </div>
            <div className='Cards' >
               <div className='contrl-Cards'>
               {SteaksData.map(e => {
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

export default Steaks