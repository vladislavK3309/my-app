import React from 'react'
import p from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";


export default function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pokai_Bucht_auf_Oahu.jpg/1200px-Pokai_Bucht_auf_Oahu.jpg"
        alt=""/>
      <div className={p.descriptionBlock}>
        <img src={props.profile.photos.large} alt="avatar"/>
      </div>
    </div>
  )
};