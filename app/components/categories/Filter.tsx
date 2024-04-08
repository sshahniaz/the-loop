import React, {useState, ChangeEvent} from 'react'

export const filterOptions  = {
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


export interface FilterOption {
  label: string;
  value: string;
}

interface FilterProps {
  type: string;
  options: FilterOption[];
  onFilterChange: (type: string, value: string | boolean) => void;
}

const Filter = ({ type, options, onFilterChange }: FilterProps) => {
  const [selected, setSelected] = useState<string | boolean>(// Set initial price filter to "$200 & Above" by default
    type === 'price' ? filterOptions.price[4].value : '');


  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = event.target.type === 'checkbox' ? (event.target as HTMLInputElement).checked : event.target.value;
    setSelected(value);

    
    
    onFilterChange(type, value);
  }  

  const renderOptions = () => {
    switch (type) {
      case 'price':
        return (
          <div>
            {options.map((option) => (
              <label key={option.value}>
                <input type="radio" value={option.value} onChange={handleChange} />
                {option.label}
              </label>
            ))}
          </div>
        );
      case 'condition':
      case 'colour':
      case 'material':
        return (
          <select value={selected.toString()} onChange={handleChange}>
            <option value="">All</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };


  return (
    <div>
      <h4>{type}</h4>
      {renderOptions()}
    </div>
  )
}

export default Filter