import React, { ReactNode } from 'react'

type ContainerProps ={
    children : ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0">
        {children}
    </div>
  )
}

export default Container