import React, { useState } from 'react';

const resources = [
  { id: 1, title: 'Resource 1', category: 'Category A' },
  { id: 2, title: 'Resource 2', category: 'Category B' },
  { id: 3, title: 'Resource 3', category: 'Category A' },
  { id: 4, title: 'Resource 4', category: 'Category C' },
];

const Categories = ['All', 'Category A', 'Category B', 'Category C'];

const ResourcesClient = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredResources = selectedCategory === 'All'
    ? resources
    : resources.filter(resource => resource.category === selectedCategory);

  return (
    <div>
      <h1>Resources</h1>
      <div>
        {Categories.map(category => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <ul>
        {filteredResources.map(resource => (
          <li key={resource.id}>{resource.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourcesClient;