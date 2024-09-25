import { useState, useEffect } from 'react';

const DataDisplay = () => {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true); 
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const result = await response.json();
        setData(result); 
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
};

export default DataDisplay;
