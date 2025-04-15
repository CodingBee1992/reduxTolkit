import { useDeleteProductMutation } from '../data'

const DeleteProduct = () => {
	const [deleteProduct, { data, isError, isLoading }] = useDeleteProductMutation()

	if (isError) {
		return <h1>Error</h1>
	}
	if (isLoading) {
		return <h1>Loading....</h1>
	}

	const handleDeleteProduct = async () => {
		try {
			await deleteProduct(4)
		} catch (error) {
			console.error('Something goes wrong', error)
		}
	}

	return (
		<div>
			<h1>{data?.title ? `${data.title} successfully deleted` :""}</h1>
            <button onClick={handleDeleteProduct}>Delete</button>
		</div>
	)
}

export default DeleteProduct
