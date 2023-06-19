import React, { useState } from 'react'
import Modal from '../../modal/Modal'
import './Cards.css'

const Cards = (props) => {

   const [modals, setModals] = useState(false)


   const mdlsOpns = () => {
      setModals(true)
      if (typeof window != 'undefined' && window.document) {
         document.body.style.overflow = 'hidden'
      }
   }

   const mdlsCls = () => {
      setModals(false)
      if (typeof window != 'undefined' && window.document) {
         document.body.style.overflow = 'auto'
      }
   }



   return (
      <div>
         <div  key={props.item.id} className='modl-control'>
            <div className='modls'>
               <Modal price={props.item.price} dsc={props.item.dsc} name={props.item.name} img={props.item.img} show={modals} clsMdls={mdlsCls} />
            </div>
         </div>
         <div style={{ cursor: 'pointer' }} onClick={mdlsOpns} >
            <div className='control-card'>
               <img className='img-products' src={props.item.img} />
               <div className='title-cards'>
                  <div className='title-name-dsc-cards'>
                     <h3>{props.item.name}</h3>
                     <p>{props.item.dsc}</p>
                  </div>
                  <div className='price-cards'>
                     <p style={{ padding: '5px 75px', }}>${props.item.price}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cards
