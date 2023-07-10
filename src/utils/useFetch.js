import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      setData(data.items);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
