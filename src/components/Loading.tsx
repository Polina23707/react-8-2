/* eslint-disable @typescript-eslint/no-unused-vars */
import useJsonFetch from "../hooks/useJsonFetch";

export default function Loading() {
  const url = 'http://localhost:7070/loading';
  const [data, loading, error] = useJsonFetch(url, []);
  return (
    <>
      {loading && <div>Loading...</div>}
      {/* {!loading && <div>{data.response}</div>} */}
    </>
  )
}