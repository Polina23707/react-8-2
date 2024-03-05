import useJsonFetch from "../hooks/useJsonFetch";

export default function GetData() {
  const url = 'http://localhost:7070/data';
  const [data, loading, error] = useJsonFetch(url, []);
  return (
    <>
      <div>Data: {data.status}</div>
    </>
  )
}

