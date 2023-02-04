import React from 'react'
import ListItem from './ListItem'

type ListProps = {
  list: Produksjonsplass[]
}

const List = ({list} : ListProps) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {list?.map((el) => (
        <ListItem key={el.produksjonsplassid} data={el}/>
      ))}
    </div>
  )
}

export default List