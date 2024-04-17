import React from "react";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterOptions {
  [filterName: string]: FilterOption[];
}

interface FilterProps {
  filterOptions: FilterOptions;
  onFilterChange: (filterName: string, value: string) => void;
}

const Filter = ({ filterOptions, onFilterChange }: FilterProps) => {
  function capitalizeFirstLetter(str: string): string {
    // Handle empty strings
    if (!str) return str;

    // Return the string with the first letter capitalized and the rest lowercase
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <>
      <div className="filterContainer">
        <h2>Filters</h2>
        {Object.keys(filterOptions).map((filterName: string) => (
          <div key={filterName} className="test">
            <h3>{capitalizeFirstLetter(filterName)}</h3>
            {filterOptions[filterName].map((option: any) => (
              <label className="filterLabel" key={option.value}>
                <input
                  className="checkMark"
                  type="checkbox"
                  value={option.value}
                  onChange={(e) => onFilterChange(filterName, e.target.value)}
                />
                {option.label}
              </label>
            ))}
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default Filter;
