import  {useEffect, useState} from 'react'


const useFetch = (url : string) => {

    const [data, setData] = useState<Produksjonsplass[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [errors, setErrors] = useState<Object>({})

useEffect(()=>{

    const controller = new AbortController()
    const signal = controller.signal
    try{

        const fetchData = async () => {
            const res = await fetch(url, {signal})
            if(res.ok){
                const data = await res.json()
                setData(data)
                setLoading(false)
            }
        }

        fetchData()
    } catch(error){
        console.log(error)
        // setErrors(error)
    }

    return () => controller.abort()
    
},[])


  return {data, loading, errors}
}

export default useFetch