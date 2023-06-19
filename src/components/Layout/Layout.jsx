import { Layout } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

const Layouts = () => {
  return (
    <div className='container'>
      <Layout>
         <main className='container'>
            <Outlet/>
         </main>
         <footer className='container'>
            <div>
               <Footer/>
            </div>
         </footer>
      </Layout>
    </div>
  )
}

export default Layouts
