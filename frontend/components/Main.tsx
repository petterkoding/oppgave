import useFetch from '../hooks/api'
import Form from './Form'
import List from './List'

const Main = () => {
    const {data, loading, errors} : ResponseData= useFetch("http://localhost:5000/produksjonsplass")

    console.log(data)

    if(loading) return <p>Loading...</p>

  return (
    <div>
        <List list={data}/>
        <Form selectOptions={data}/>
    </div>
  )
}

export default Main