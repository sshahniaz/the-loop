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
    { label: 'Under £25', value: '0-25' },
    { label: '£25 to £50', value: '25-50' },
    { label: '£50 to £100', value: '50-100' },
    { label: '£100 to £200', value: '100-200' },
    { label: '£200 & Above', value: '200-999999' }
  ],
  colour: [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Orange', value: 'orange' },
    { label: 'Purple', value: 'purple' },
    { label: 'Pink', value: 'pink' },
    { label: 'Cyan', value: 'cyan' },
    { label: 'Magenta', value: 'magenta' },
    { label: 'Black', value: 'black' },
    { label: 'White', value: 'white' },
    { label: 'Gray', value: 'gray' },
    { label: 'Brown', value: 'brown' },
    { label: 'Navy', value: 'navy' },
    { label: 'Teal', value: 'teal' },
    { label: 'Maroon', value: 'maroon' },
    { label: 'Olive', value: 'olive' },
    { label: 'Lime', value: 'lime' },
    { label: 'Silver', value: 'silver' },
    { label: 'Gold', value: 'gold' },
    { label: 'Indigo', value: 'indigo' },
    { label: 'Violet', value: 'violet' },
    { label: 'Turquoise', value: 'turquoise' },
    { label: 'Salmon', value: 'salmon' },
    { label: 'Ivory', value: 'ivory' },
    { label: 'Beige', value: 'beige' },
    { label: 'Coral', value: 'coral' },
    { label: 'Tan', value: 'tan' },
    { label: 'Plum', value: 'plum' },
    { label: 'Powder Blue', value: 'powderblue' },
    { label: 'Misty Rose', value: 'mistyrose' },
    { label: 'Lime Green', value: 'limegreen' },
    { label: 'Orange Red', value: 'orangered' },
    { label: 'Pale Green', value: 'palegreen' },
    { label: 'Sky Blue', value: 'skyblue' },
  ],
  material: [
    { label: 'Wood', value: 'wood' },
    { label: 'Metal', value: 'metal' },
    { label: 'Plastic', value: 'plastic' },
    { label: 'Leather', value: 'leather' },
    { label: 'Fabric', value: 'fabric' },
    { label: 'Glass', value: 'glass' },
    { label: 'Stone', value: 'stone' },
    { label: 'Bamboo', value: 'bamboo' },
    { label: 'Rattan', value: 'rattan' },
    { label: 'Wicker', value: 'wicker' },
    { label: 'Ceramic', value: 'ceramic' },
    { label: 'Vinyl', value: 'vinyl' },
    { label: 'Fiber', value: 'fiber' },
    { label: 'Linen', value: 'linen' },
    { label: 'Suede', value: 'suede' },
    { label: 'Microfiber', value: 'microfiber' },
    { label: 'Silk', value: 'silk' },
    { label: 'Velvet', value: 'velvet' },
    { label: 'Canvas', value: 'canvas' },
    { label: 'Polyester', value: 'polyester' },
    { label: 'Nylon', value: 'nylon' },
    { label: 'Polypropylene', value: 'polypropylene' },
    { label: 'Jute', value: 'jute' },
    { label: 'Cotton', value: 'cotton' },
    { label: 'Rubber', value: 'rubber' },
    { label: 'Latex', value: 'latex' },
    { label: 'Resin', value: 'resin' },
    { label: 'Aluminum', value: 'aluminum' },
    { label: 'Steel', value: 'steel' },
    { label: 'Brass', value: 'brass' },
    { label: 'Bronze', value: 'bronze' },
    { label: 'Copper', value: 'copper' },
    { label: 'Iron', value: 'iron' },
    { label: 'Stainless Steel', value: 'stainless steel' },
    { label: 'Nickel', value: 'nickel' },
    { label: 'Chrome', value: 'chrome' },
    { label: 'Silver', value: 'silver' },
    { label: 'Gold', value: 'gold' },
    { label: 'Platinum', value: 'platinum' },
    { label: 'Titanium', value: 'titanium' },
    { label: 'Acrylic', value: 'acrylic' },
    { label: 'PVC', value: 'pvc' },
    { label: 'Fiberglass', value: 'fiberglass' },
    { label: 'Granite', value: 'granite' }, // Duplicate of "Stone" removed
    { label: 'Marble', value: 'marble' },
    { label: 'Quartz', value: 'quartz' },
    { label: 'Porcelain', value: 'porcelain' },
    { label: 'Terracotta', value: 'terracotta' },
    { label: 'Brick', value: 'brick' },
    { label: 'Concrete', value: 'concrete' },
    { label: 'Clay', value: 'clay' },
    { label: 'Gypsum', value: 'gypsum' },
    { label: 'Plywood', value: 'plywood' },
    { label: 'MDF', value: 'mdf' }, // Case corrected
    { label: 'Chipboard', value: 'chipboard' },
    { label: 'Laminates', value: 'laminates' },
    { label: 'Veneer', value: 'veneer' },
    { label: 'Hardwood', value: 'hardwood' },
    { label: 'Softwood', value: 'softwood' },
  ],
  condition: [
    { label: 'New', value: 'New' },
    { label: 'Used-Good', value: 'Used-Good' },
    { label: 'Used-Fair', value: 'Used-Fair' }
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
      
      {content}
    </div>
  )
}

export default ProductsMainContainer