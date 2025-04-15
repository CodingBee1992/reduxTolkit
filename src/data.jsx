import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
	reducerPath: 'products',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
	endpoints: builder => ({
		// get all products

		getAllProduct: builder.query({
			query: () => '/products',
		}),


        getProductsById:builder.query({
            query:(id)=>`/products/${id}`
        }),

		addNewProduct: builder.mutation({
			query:(newProduct)=>({
				url:`/products/add`,
				method:"POST",
				headers:{"Content-type": 'application/json'},
				body:newProduct
			})
		}),
		updateProduct: builder.mutation({
			query:({updatedProduct,id})=>({
				url:`/products/${id}`,
				method:'PUT',
				headers:{'Content-type':'application/json'},
				body:updatedProduct
			})
		}),
		deleteProduct: builder.mutation({
			query:(id)=>({
				url:`/products/${id}`,
				method:"DELETE",
				headers:{'Content-type':'application/json'}
			})
		})
	}),
})

export const {useGetAllProductQuery,useGetProductsByIdQuery,useAddNewProductMutation,useUpdateProductMutation,useDeleteProductMutation} = productsApi