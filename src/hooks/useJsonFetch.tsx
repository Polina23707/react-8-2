import { useState, useEffect } from "react";

export default function useJsonFetch(url: string, opts: any) {
  
  const [data, setData] = useState<any>(opts)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    
    const fetchList = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const result = await response.json();
        setData(result);
      } catch (e: any) {
        setError(e);
        console.error('Error: ' + e.message);
      } finally {
        setIsLoading(false);
      }
    }
  fetchList();
  }, [])
  return([data, isLoading, error]);
}
