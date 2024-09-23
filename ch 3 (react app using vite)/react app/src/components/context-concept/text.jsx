import React, { useContext } from 'react'
import { GlobalContext } from '../../context';

const TextComponent = () => {
const {theme , setTheme} = useContext(GlobalContext);
  return (
    <>
    <h1  style={{color: theme === 'light' ? 'red' : 'blue'}}>Romail</h1>
    </>
  )
}

export default TextComponent;