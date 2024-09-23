import React, { useContext } from 'react'
import { GlobalContext } from '../../context'

const ButtonComponent = () => {
    const {theme , setTheme} = useContext(GlobalContext);
  const handleClick = ()=>{
    const changeTheme = theme === 'light' ? 'black' : 'light';
    setTheme(changeTheme);
  }    
  return (
    <>
    <button onClick={handleClick}>Change Color</button>
    </>
  )
}

export default ButtonComponent