import React, { ReactElement } from 'react'

type Error = {
    errorMessage: string
}

const FeilMelding = ({errorMessage}: Error) : ReactElement => {
  return (
    <p className="text-xs text-red-600 first-letter:uppercase ml-2 border-b-[1px] border-red-600 inline">{errorMessage}</p>
  )
}

export default FeilMelding