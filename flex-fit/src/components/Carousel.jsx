import React from 'react'
import "./Carousel.css"



export const Carousel = ({data}) => {
  return (
<div>{data.map((item, index) => {
        return <img src={item.src} alt={item.alt} key={index}></img>
    })}</div>
  )
}
