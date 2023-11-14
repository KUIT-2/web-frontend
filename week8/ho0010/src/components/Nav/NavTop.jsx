import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavTop = () => {

  const navigate = useNavigate();

  const handelBack = () => {
    navigate(-1);
  }

  return (

    <img alt='back' onClick={handelBack} src="{week8\ho0010\src\asset\arrowBack.svg}" />

  )
}
export default NavTop