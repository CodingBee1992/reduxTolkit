import { useAddNewProductMutation } from "../data"


const AddNewProduct = () => {

    const [addNewProduct,{data,isError,isLoading}] = useAddNewProductMutation()
   
    if(isError){
        return <h1>Error</h1>
    }
    if(isLoading){
        return <h1>Loading....</h1>
    }

    const handleAddProduct =async () => {
        try {
            const newProductData = {
                id:1,
                title:"Rico",
                description:"Rico and Jumbo demolition team"
            }
            await addNewProduct(newProductData)
        } catch (err) {
            console.error("Error adding new product:", err)
        }
    }
  return (
    <div>
        <h1>{data?.id}</h1>
        <h1>{data?.title}</h1>
        <h1>{data?.description}</h1>
        <button onClick={handleAddProduct} disabled={isLoading} className="p-2 bg-teal-500">Add New Product</button>
    </div>
  )
}

export default AddNewProduct