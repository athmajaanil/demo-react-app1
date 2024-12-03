import React from "react";
import useFetch from "./useFetch";

const UseFetchDemo = () => {
  const url = "https://jsonplaceholder.typicode.com/posts"; // Example API endpoint
  const { data, loading, error } = useFetch(url); // Use custom hook

  if (loading) return <p>Loading...</p>; // Display while loading
  if (error) return <p>Error: {error.message}</p>; // Display on error

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fetched Data</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseFetchDemo;
