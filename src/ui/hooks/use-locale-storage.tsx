import { useEffect, useState } from 'react';

export const useLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);

  const [data, setData] = useState<string | null>(() => {
    const storedData = value ? JSON.parse(value) : '';
    return storedData;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
};
