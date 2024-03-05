import './App.css'
import GetData from './components/GetData';
import Loading from './components/Loading';
import Error from './components/Error';

function App() {
  return (
    <>
      <GetData />
      <Loading />
      <Error />
    </>
  )
}

export default App
