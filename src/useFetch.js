import { useState, useEffect } from "react";
function useFetch(url) {
  const [data, setData] = useState(null); // Holds the fetched data
  const [loading, setLoading] = useState(true); // Tracks loading state
  const [error, setError] = useState(null); // Tracks any errors during fetch

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url); // Fetch data from the URL
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json(); // Parse response JSON
        setData(result); // Store data in state
      } catch (err) {
        setError(err); // Catch and store any errors
      } finally {
        setLoading(false); // Mark loading as complete
      }
    };

    fetchData(); // Call fetch function when component mounts or URL changes
  }, [url]); // Dependency array ensures fetch runs when URL changes

  return { data, loading, error }; // Return state values for use in components
}

export default useFetch;
