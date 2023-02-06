import useFetch from '../hooks/useFetch'
import FeilMelding from './FeilMelding'
import Form from './Form'
import List from './List'

const Main = () => {
    const {data, loading, errors}  = useFetch("http://localhost:5000/produksjonsplass")

    const isError = (err: unknown) : err is Error => err instanceof Error;
   
      if(errors instanceof TypeError){
        console.log("TypeError: ", errors.message)
        return <FeilMelding errorMessage={`Noe gikk galt. ${errors}`}/>
      }
    
  return (
    <div>
      {loading ? <p>...loading</p> : <List list={data}/>}
      
      <Form selectOptions={data}/>
    </div>
  )
}

export default Main