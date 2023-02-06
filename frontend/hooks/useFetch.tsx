import  {useEffect, useState} from 'react'

const useFetch = (url : string)  => {

    const [data, setData] = useState<Produksjonsplass[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [errors, setErrors] = useState<unknown>()
   

    useEffect(()=>{
        const controller = new AbortController()
        const signal = controller.signal
        const fetchData = async ()  => {
            try{
                const response = await fetch(url, {signal})
                const data : Produksjonsplass[] = await response.json()
                console.log("LOG-FROM-APICALL",data)
                setData(data)
                setLoading(false)
                
                
            } catch(err){
                setErrors(err)
                console.log(err)
            } 
        }
        fetchData()
        
        return () => controller.abort()
    
    },[])


  return {data, loading, errors}
}

export default useFetch