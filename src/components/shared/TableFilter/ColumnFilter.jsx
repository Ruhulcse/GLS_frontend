import React from 'react';

function ColumnFilter({ column }) {
  const { filterValue, setFilter } = column; // Fix the prop destructuring

  return (
    <span>
      Search:{' '}
      <input
        value={filterValue || ''}
        onChange={(e) => setFilter(e.target.value || undefined)} // Avoid setting an empty string
        placeholder="Filter..."
        style={{ height:"30px",width:"100px",padding:"4px", borderRadius:"5px" }}
      />
    </span>
  );
}

export default ColumnFilter;
