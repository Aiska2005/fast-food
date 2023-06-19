import React, { useState } from 'react'
import './Modal.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Modal = ({ show, clsMdls, name, dsc, price, img }) => {

   // show?document.body.style.overflow='hidden':document.body.style.overflow = 'auto'
   const [clos, setClos] = useState(false)

   if (!show) {
      return null;
   }

   const cls = () => {
      setClos(!clos)
   }


   return (
      <div className=''>
         <div className='mdls'>
            <dir className='cont-modals'>
               <div className='contn-crd'>
                  <div className='control-block-card-modl'>
                     <div className='name-x'>
                        <h3>{name}</h3>
                        <AiOutlineCloseCircle className='x' onClick={clsMdls} />
                     </div>
                     <img src={img} />
                     <div className='titl-crd'>
                        <p>{dsc}</p>
                        <p className='price'>${price}</p>
                     </div>
                  </div>
               </div>
            </dir>
         </div>
      </div>
   )
}

export default Modal
