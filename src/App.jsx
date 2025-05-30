import React from 'react'
import AllProducts from './components/AllProducts'
import SpecificProduct from './components/SpecificProduct'
import AddNewProduct from './components/AddNewProduct'
import UpdateProduct from './components/UpdateProduct'
import DeleteProduct from './components/DeleteProduct'

const App = () => {
  return (
    <div className='flex items-center justify-center h-dvh'>
      {/* <AllProducts /> */}
      {/* <SpecificProduct/> */}
      <AddNewProduct />
      <UpdateProduct />
      <DeleteProduct />
    </div>
  )
}

export default App
