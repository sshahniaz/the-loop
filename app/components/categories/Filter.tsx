import React from 'react'

interface FilterOption {
  label: string;
  value: string;
}

interface FilterOptions {
  [ filterName: string ]: FilterOption[];
}

interface FilterProps {
  filterOptions: FilterOptions;
  onFilterChange: (filterName: string, value: string) => void;
}

const Filter  = ({filterOptions, onFilterChange}: FilterProps) => {
  

  return (
     <div>
      <h2>Filters</h2>
      {Object.keys(filterOptions).map((filterName: string) => (
        <div key={filterName}>
          <h3>{filterName}</h3>
          {filterOptions[filterName].map((option : any) => (
            <label key={option.value}>
              <input
                type="checkbox"
                value={option.value}
                onChange={(e) => onFilterChange(filterName, e.target.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Filter