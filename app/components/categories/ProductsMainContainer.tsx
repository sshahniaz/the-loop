'use client'
import React, { useState, useEffect, useRef } from 'react'
import { fetchProducts } from '@/app/actions/ProductsActions'
import Products from './Products'
import Filter from './Filter'

// This component will display the main container for the products
interface PContainerProps {
  pType: string
}

interface Product{
  id: string;
  name: string;
  details: string;
  ownerId: string;
  price: number;
  discount: number | null;
  imageLink: string[];
  colour: string;
  material: string;
  type: string;
  catagory: string;
  subCatagory: string;
  sale: number;
  condition: string;
  transactionsId: string | null;
  [key: string]: any;
}

interface FilterOption {
  label: string;
  value: string;
}

interface FilterOptions {
  [filterName: string]: FilterOption[];
}

interface SelectedFilters {
  [filterName: string]: string | string[]; // string for single value, string[] for multiple values
}


const ProductsMainContainer = ({ pType }: PContainerProps) => {

  const [ initialProducts, setInitialProducts ] = useState<Product[]>()
  const [ products, setProducts ] = useState<Product[]>()
  const [ selectedFilters, setSelectedFilters ] = useState<SelectedFilters>({})
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)
  // console.log(pType)

  const datafilterOptions : FilterOptions  = {
  price: [
    { label: 'Under $25', value: '0-25' },
    { label: '$25 to $50', value: '25-50' },
    { label: '$50 to $100', value: '50-100' },
    { label: '$100 to $200', value: '100-200' },
    { label: '$200 & Above', value: '200-999999' }
  ],
  colour: [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Black', value: 'black' },
    { label: 'White', value: 'white' }
  ],
  material: [
    { label: 'Cotton', value: 'cotton' },
    { label: 'Polyester', value: 'polyester' },
    { label: 'Silk', value: 'silk' },
    { label: 'Leather', value: 'leather' },
    { label: 'Wool', value: 'wool' }
  ],
  condition: [
    { label: 'New', value: 'new' },
    { label: 'Used', value: 'used' }
  ]
  }
  
  // Function to filter products based on selected filters
   
 
  // Function to filter products based on selected filters
  const filteredProducts = (products: Product[] | null): Product[] | [] => {
  // Use initial products as base for filtering
  if (!initialProducts) return []; // Handle case where initial data fails to load

    
    // Check if all filters are empty
  if (Object.keys(selectedFilters).length === 0) {
    return initialProducts; // Return all products if no filters are selected
  }
  // Check if all filter values are empty arrays (no selections)
  const allFiltersEmpty = Object.values(selectedFilters).every(
    (filterValues) => filterValues.length === 0
  );

  // Return all products if all filters are empty
  return allFiltersEmpty ? initialProducts : products?.filter((product) => {
    let match = true;
    for (const [filterName, filterValues] of Object.entries(selectedFilters)) {
      if (!filterValues) continue; // Skip filters with no selection

      if (filterName === 'price') {
        const [minPrice, maxPrice] = filterValues[0].split('-').map(Number);
        match = match && product.price >= minPrice && product.price <= maxPrice;
      } else {
        match = match && filterValues.includes(product[filterName]); // Check for inclusion in other filters (colour, material, etc.)
      }
    }
    return match;
  }) ?? [];
};

const handleFilterChange = (filterName: string, value: string) => {
  // Update filter selections based on value (adding or removing)
  setSelectedFilters((prevSelectedFilters) => {
    const prevSelection = Array.isArray(prevSelectedFilters[filterName]) ? prevSelectedFilters[filterName] : [];

    // Check if value is truthy and not already present
    const updatedSelection = value && !prevSelection.includes(value)
      ? [...prevSelection, value] // Add value if selecting (truthy and unique)
      : prevSelection.filter((v) => v !== value); // Remove value if deselecting

    // Check if the update results in an empty selection
    const isFilterEmpty = updatedSelection.length === 0;
    console.log(updatedSelection);

    // Return updated filters with the new selection
    return isFilterEmpty ? {} : { ...prevSelectedFilters, [filterName]: updatedSelection };
  });
};




  const resetProducts = () => {
    setSelectedFilters({}); // Reset filter selections
  };
  
  
const prevFilters = useRef(selectedFilters);
  useEffect(() => {
    
     // Only refetch if filters changed significantly (excluding initial render)
  const getProducts = async () => {
      setLoading(true)
      try {
        // console.log(pType)
        // Fetch products based on the category
        const data: Product[] = await fetchProducts(pType);
        
        setInitialProducts(data);
        setProducts(data)
      } catch (error: unknown) {
        // setError(error)
      } finally {
        setLoading(false)
      }
    }

  
  
    // Only refetch if filters changed significantly (excluding initial render)
    if (JSON.stringify(prevFilters.current) !== JSON.stringify(selectedFilters) || !initialProducts) {
      getProducts();
    }

   

    prevFilters.current = selectedFilters;

   
  
  }, [ pType, selectedFilters, initialProducts ,Object.keys(selectedFilters).length])

  

const filteredData = filteredProducts(products ?? null);

// Display content based on loading, error, or products
let content;
if (loading) {
  content = <div>Loading products...</div>;
} else if (error) {
  content = <div>Error fetching products: {(error as Error).message}</div>;
} else if (filteredData.length === 0) {
  content = <div>No products found matching your filters.</div>;
} else {
  content = <Products products={filteredData} />;
}

  return (
    <div>
      <Filter filterOptions={
        datafilterOptions
      } onFilterChange={handleFilterChange} />
      <button onClick={resetProducts}>Reset</button>
      {content}
    </div>
  )
}

export default ProductsMainContainer