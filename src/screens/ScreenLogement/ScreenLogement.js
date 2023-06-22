import React from 'react'
import { useParams } from 'react-router-dom';

const ScreenLogement = () => {

  const { id } = useParams(); // Récupère l'ID depuis l'URL
  
  return (
    <div>ScreenLogement</div>
  )
}

export default ScreenLogement