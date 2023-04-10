import { useEffect, useState } from 'react';

import api from '../services/api';

const useFetch = (
  url,
  method,
  body
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const response = await api({
            url,
            method,
            data: body,
          });
          setData(response?.data);
        } catch (e) {
          setError(e);
        } finally {
          setLoading(false);
        }
      }, 0)
    };

    fetchData().then((r) => r);
  }, [url]);

  return [loading, error, data];
}

export { useFetch };
