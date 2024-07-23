import React from 'react'
import './styles.css'

interface Props {
  imgSrc: string;
  name: string;
  instagram: string;
}

const PersonCard = ({imgSrc, name, instagram}:Props) => {
  return (
    <div className='img-container'>
      <img className='img-person'src={imgSrc}></img>
      <h2>{name}</h2>
      <h3>{instagram}</h3>
    </div>
  )
}

export default PersonCard