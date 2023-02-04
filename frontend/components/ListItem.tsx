import React from 'react'

type ListItemProps = {
  data: Produksjonsplass
}

const ListItem = ({data} : ListItemProps) => {
  return (
    <div className="bg-emerald-600 mt-12 px-4 py-6">
      <h3 className='text-white'>Gårdsnummer: {data.gaardsnummer}</h3>
      <p className='text-white'>Kommune: {data.kommunenummer}</p>
      <p className='text-white'>Bruksnr: {data.bruksnummer}</p>
      <p className='text-white'>Bygningsnr: {data.bygningsnummer}</p>
      <p className='text-white'>Koordinater: {data?.koordinater ?? "ingen koordinater funnet"}</p>
      <p className='text-white'>Koordinatsystem: {data.koordinatsystem}</p>
      <p className='text-white'>last changed: {data.lastchanged}</p>
      <p className='text-white'>Kommune: {data.opprettetdato}</p>
      <p className='text-white'>ID: {data.produksjonsplassid}</p>
      
    </div>
  )
}

export default ListItem