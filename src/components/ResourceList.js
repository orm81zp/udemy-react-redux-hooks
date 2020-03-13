import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
      setResources(response.data);
    })(resource);
  }, [resource])

  return resources;
}

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  const renderItem = (record) => {
    return (
      <li key={record.id}>{record.title}</li>
    )
  };

  return (
    <ul>
      {resources.map((record) => renderItem(record))}
    </ul>
  );
}

export default ResourceList;
