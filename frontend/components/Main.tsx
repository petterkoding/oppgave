import useFetch from '../hooks/api'
import Form from './Form'
import List from './List'

const Main = () => {
    const {data, loading} : ResponseData= useFetch("http://localhost:5000/produksjonsplass")


  return (
    <div>
      {loading ? <p>...loading</p> : <List list={data}/>}
      
      <Form selectOptions={data}/>
    </div>
  )
}

export default Main