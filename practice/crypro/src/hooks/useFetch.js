import { useState } from "react";

export const useFetch = (callback) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetch = async (...args) => {
    try {
      setLoading(true);
      const response = await callback(...args);
      console.log(response);
      return response;
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return [fetch, isLoading, error];
};
