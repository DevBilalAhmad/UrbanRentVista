import React, { useState } from 'react';
import Component2 from './Component2';

const ParentComponent = () => {
  const [query1, setQuery1] = useState('');
  const [showComponent2, setShowComponent2] = useState(false);

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery1(newQuery);
    setShowComponent2(newQuery.length > 0);  // Show Component2 only when there's a query
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query1}
        onChange={handleInputChange}
        placeholder="Type your query here..."
        className="border border-gray-300 rounded-md p-2 w-full"
      />
      {showComponent2 && <Component2 query={query1} />}
    </div>
  );
};

export default ParentComponent;
