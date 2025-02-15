import React from 'react'

type TitleProps = {
    TitleData: string
}

export const Title = ({TitleData}: TitleProps) => {
    
    let title = TitleData?.split('')
   
    if (title?.length > 50) {
        title = title.slice(0, 50) 
    }
    const rezult = title?.join('')+ "..."
  return (
    <>{rezult}</>
  )
}
