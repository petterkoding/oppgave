import React, { ReactNode } from 'react'
import Koordinater from './Koordinater'
import FeilMelding from './FeilMelding'

type ListItemProps = {
  data: Produksjonsplass
}

const ListItem = ({data} : ListItemProps) => {

  const ParseStr : ParseString = (s:string) : ReactNode => {
    return JSON.parse(s)
  }

  return (
    <div className="bg-[#25325c] mt-12 px-4 py-6 space-y-1">
      <h3 className='text-white'>Gårdsnummer: {data.gaardsnummer}</h3>
      <p className='text-white'>Kommune: {data.kommunenummer}</p>
      <p className='text-white'>Bruksnr: {data.bruksnummer}</p>
      <p className='text-white'>Bygningsnr: {data.bygningsnummer}</p>
      <div className='text-white'>Koordinater: {data?.koordinater ? <Koordinater koordinater={data?.koordinater} parseFunc={ParseStr}/> : <FeilMelding errorMessage='ingen koordinater'/>}</div>
      <div className='text-white'>Koordinatsystem: {data.koordinatsystem ?? <FeilMelding errorMessage='ingen koordinatsystem'/>}</div>
      <p className='text-white'>last changed: {data.lastchanged}</p>
      <p className='text-white'>Kommune: {data.opprettetdato}</p>
      <p className='text-white'>ID: {data.produksjonsplassid}</p>
    </div>
  )
}

export default ListItem    