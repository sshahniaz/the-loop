"use client"
import React, { useState, useEffect } from 'react'
import { fetchProducts } from '@/app/actions/ProductsActions'
import Products from './Products'

import { filterOptions } from './Filter'
// This component will display the main container for the products
interface PContainerProps {
  pType: string
}


const ProductsMainContainer = ({ pType }: PContainerProps) => {
  
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)
  // console.log(pType)
  

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      try {
        // console.log(pType)
        // Fetch products based on the category
        const data: any = await fetchProducts(pType);
        console.log(data)
        setProducts(data)
      } catch (error: unknown) {
        // setError(error)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [ pType ])
  
  return (
    <div>
      <Products products={products} filterOptions={filterOptions}/>
    </div>
  )
}

export default ProductsMainContainer