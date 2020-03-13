import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  const renderItem = (record) => {
    return (
      <li key={record.id}>{record.title}</li>
    )
  };

  return (
    <div>
      <ul>
        {resources.map((record) => renderItem(record))}
      </ul>
    </div>
  );
}

export default ResourceList;
