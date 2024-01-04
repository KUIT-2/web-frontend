import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from './NavTop.styles';

const NavTop = () => {

  const navigate = useNavigate();

  const handelBack = () => {
    navigate(-1);
  }

  return (
    <Icon alt='back' onClick={handelBack} />
  )
}
export default NavTop