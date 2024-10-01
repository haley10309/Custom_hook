/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useEffect } from "react";

export function useFetch(baseURL, initialType) {
  const [data, setData] = useState(null);

  const fetchURL = (type) => {
    fetch(baseURL + "/" + type)
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  useEffect(() => {
    fetchURL(initialType);
  }, []);
  return {
    data,
    fetchURL,
  };
}
