import {useEffect, useState} from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => {
        if (response.status > 299 || response.status < 200) {
          throw new Error('' + response.status);
        }
        return response.json();
      })
      .then(json => {
        setData(json);
      })
      .catch(_ => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [url]);

  return {data, loading, error};
}
