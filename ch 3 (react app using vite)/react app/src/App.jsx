import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent  from './components/class-based-component.jsx'
import {FunctionalComponent , FunctionalComponentArrow} from './components/function-based-component.jsx'
import { ProductList } from './components/products/index.jsx'
import Users from './components/users/index.jsx'
import ButtonComponent from './components/context-concept/button.jsx'
import TextComponent from './components/context-concept/text.jsx'
import ReduceComponent from './components/ReduceComponent.jsx'
import FormComponent from './components/form/index.jsx'
import LoginComponent from './components/login/index.jsx'
import RegisterComponent from './components/register/index.jsx'

const dummyProductData = ["product1", "product2", "product3"];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <h1>react js concepts 2024</h1>
        {/* <ClassBasedComponent/> */}
        {/* <FunctionalComponent/>
        <FunctionalComponentArrow/> */}
        {/* <ProductList myname={dummyProductData} mycity='karachi'/> */}
        {/* <Users/> */}
        {/* <ButtonComponent/>
        <TextComponent/> */}
        {/* <ReduceComponent/> */}
        {/* <FormComponent/> */}
        <div className="">
          <LoginComponent/>
          <RegisterComponent/>
        </div>
        
      </div>
    </>
  )
}

export default App
