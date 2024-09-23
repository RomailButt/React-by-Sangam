import React, { useEffect, useState } from "react";

const UseFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch(url, { ...options });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const result = await res.json();
      setData(result);
      setError(null);
    } catch (error) {
      setError(error.message); 
    } finally {
      setLoading(false); 
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default UseFetch;
