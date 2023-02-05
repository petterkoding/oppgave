import React,{useState, useEffect, ReactElement} from 'react'

type KProps = {
  koordinater: string | null | undefined
  parseFunc: ParseString
}

const Koordinater = ({koordinater, parseFunc}: KProps) : ReactElement => {

  if(!koordinater){
    return <></>
  }

  const [coordinates, setCoordinates] = useState<Koordinater>()

  useEffect(()=>{
    setCoordinates(parseFunc(koordinater))
  },[])

  return (
   
      <div className="text-white">
      <p>
      Koordinater:
      {coordinates?.coordinates.map((el, idx)=>(
        <span key={idx} className="mr-2"> {idx === 0 ? el + "," : el}</span>
        ))}
        </p>
        
        <p>CRS: {coordinates?.crs.properties.name}</p>
        
        <p>Type: {coordinates?.type}</p>
        
        </div>
        
      
  )
}

export default Koordinater