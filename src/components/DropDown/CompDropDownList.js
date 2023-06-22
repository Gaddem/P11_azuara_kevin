import React,{useState} from 'react'
import "./StyleDropDownList.css"
import chevron from "../../img/icons/Chevron.png";

const CompDropDownList = ({title,content}) => {
  const [listeOpen,setListeOpen] = useState(false);
  
  return (
    <div className='containerDropDownList '>
      <div className='rowContainDropDownList' onClick={() => setListeOpen(!listeOpen)} >
        <p className='titleDropDownList'>{title}</p>
        <img className='chevronDropDonwList' src={chevron} alt="DropDown" />
      </div>
      {listeOpen &&

      <div className='containerContentDropDownList'>
        <p className='contentDropDownList'>{content}</p>
      </div>

      }
    </div>
  )
}

export default CompDropDownList