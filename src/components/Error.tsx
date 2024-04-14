/* eslint-disable @typescript-eslint/no-unused-vars */
import useJsonFetch from "../hooks/useJsonFetch";

export default function Error() {
  const url = 'http://localhost:7070/error';
  const [data, loading, error] = useJsonFetch(url, []);

  return (
    <>
      {!error && <div>Error</div>}
    </>
  )
}