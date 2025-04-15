import { useGetProductsByIdQuery } from "../data"


const SpecificProduct = () => {


    const {data}= useGetProductsByIdQuery(2)



  return (
    <div>
        <h1>{data?.brand}</h1>
        <h1>{data?.category}</h1>
    </div>
  )
}

export default SpecificProduct