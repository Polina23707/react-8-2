import useJsonFetch from "../hooks/useJsonFetch";

export default function Error() {
  const url = 'http://localhost:7070/error';
  const [data, loading, error] = useJsonFetch(url, []);
  console.log('start' + url);
  console.log(error);
  console.log('finish' + url);

  return (
    <>
      {!error && <div>Error</div>}
    </>
  )
}