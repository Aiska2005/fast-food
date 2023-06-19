import React, { useState } from 'react'
import BurgersData from '../../../menus/burgers.json'
import Cards from '../ui/cardsProducts/Cards'

const Burgers = () => {

   const [burgers, setB] = useState(BurgersData) // [20] + 21

   

   const newBurger= {
      "id": "the-gramercy-tavern-burger-4-pack",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Gramercy Tavern",
      "dsc": "The Gramercy Tavern Burger - 4 Pack",
      "price": 99,
      "rate": 5,
      "country": "New York, NY"
   }

   //  setB([...burgers, newBurger])

   return (
      <div id='burgers'>
         <div >
            <div className='mt-cards-burgers'>
               <img className='cov-cards' src="https://phonoteka.org/uploads/posts/2021-04/1619337582_37-phonoteka_org-p-burgeri-fon-50.png" alt="" />
               <h3 className='title-hero-cards'>Burgers</h3>
            </div>
            <div className='Cards' >
               <div className='contrl-Cards'>
                  {burgers?.map(e => {
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

export default Burgers
