import { useGetAllProductQuery } from "../data"


const AllProducts = () => {

    const {data} = useGetAllProductQuery()
   
  return (
    <div>
        {data?.products.map((p)=>(
            <div key={p.id}>
                <h1 >{p.title}</h1>
                <p>{p.description}</p>
            </div>
        ))}
    </div>
  )
}

export default AllProducts