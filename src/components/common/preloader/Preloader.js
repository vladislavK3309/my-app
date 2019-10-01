import React from "react";
import preloader from '../../../assets/img/loader.svg'

const Preloader= (props) => {
  return <div>
    <img src={preloader} alt='loader'/>
  </div>
};

export default Preloader;