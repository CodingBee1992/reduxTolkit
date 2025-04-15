import React from 'react'
import { useUpdateProductMutation } from '../data'

const UpdateProduct = () => {

    const [updateProduct,{data,isError,isLoading}] =useUpdateProductMutation()

    if(isError){
        return <h1>Error</h1>
    }
    if(isLoading){
        return <h1>Loading....</h1>
    }

    const handleUpdate = async () => {
        try {
            const updatedProductData = {
                
                title:"JUmbo",
                description:"Rico and Jumbo destroyer team"
            }
            await updateProduct({
                id:195,
                updatedProduct:updatedProductData
            })
        } catch (error) {
            console.error('Something goes wrong', error)
        }
    }

  return (
    <div>
        <h1>{data?.id}</h1>
        <h1>{data?.title}</h1>
        <h1>{data?.description}</h1>
        <button onClick={handleUpdate} disabled={isLoading} className="p-2 bg-teal-500">Update Product</button>
    </div>
  )
}

export default UpdateProduct