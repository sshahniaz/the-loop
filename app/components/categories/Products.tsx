import React, {useState, useEffect} from 'react'
import Filter, { FilterOption } from './Filter'
import { set } from 'lodash';


interface Product{
  name: string;
  price: number;
  colour: string;
  material: string;
  condition: string;
}

interface FilterOptions {
  price: FilterOption[];
  condition: FilterOption[];
  colour: FilterOption[];
  material: FilterOption[];
  [key: string]: FilterOption[];
}

interface ProductsProps {
  products: Product[];
  filters?: {
    [type in keyof FilterOptions]: string | boolean;
  }
  filterOptions?: FilterOptions;
}



const Products = ({ products, filters, filterOptions }: ProductsProps) => {

  const [ filteredProducts, setFilteredProducts ] = useState<Product[]>(products);
  //filter state
  
  const [filterState, setFilterState] = useState<{
    [type in keyof FilterOptions]: string | boolean;
  }>({
    price: '',
    condition: '',
    colour: '',
    material: ''
  });
  

  useEffect(() => {
    const appliedFilters = Object.entries(filters || {}).filter(([ key, value ]) => value);
    console.log(appliedFilters)
    const filteredData = products.filter((product) => {
      let match = true;
      appliedFilters.forEach(([filterType, filterValue]) => {
        switch (filterType) {
          case 'price':
            if(typeof filterValue !== 'string') return console.warn('Invalid price filter value');
            const [minPrice, maxPrice] = filterValue.split('-').map(parseInt);
            if (product.price < minPrice || product.price > maxPrice) {
              match = false;
            }
            break;
          case 'condition':
            if (product.condition !== filterValue) {
              match = false;
            }
            break;
          case 'colour':
            if (product.colour !== filterValue) {
              match = false;
            }
            break;
          case 'material':
            if (product.material !== filterValue) {
              match = false;
            }
            break;
          default:
            console.warn(`Unhandled filter type: ${filterType}`); // Warn about unknown filter types
        }
      });
      return match;
    });
    setFilteredProducts(filteredData);
  }, [products, filters]);


    const handleFilterChange = (type: string, value: string | boolean) => {
      setFilterState({
        ...filterState,
        [type]: value
      });

      
    };

  return (
    <div>
      <div className="filters">
        {/* Render all filter components */}
        {filterOptions && Object.keys(filterOptions).map((filterType) => (
          <Filter
            key={filterType}
            type={filterType}
            options={filterOptions[filterType] || {}}
            onFilterChange={handleFilterChange}
          />
        ))}
      </div>
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <li key={index}>
              {/* Display product details based on product data */}
              {product.name} - ${product.price}
            </li>
          ))
        ) : (
          <p>No products found matching your filters.</p>
        )}
      </ul>
    </div>
  )
}

export default Products