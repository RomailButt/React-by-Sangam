import React, { useCallback, useState } from 'react'
import Counter from './counter';

const UseCallbackHook = () => {
    const [count1 , setCount1] = useState(0);
    const [count2 , setCount2] = useState(0);

    const memorizeCount1 = useCallback(()=> setCount1(count1 + 1), [count1])
    const memorizeCount2 = useCallback(()=> setCount2(count2 + 1), [count2])
  return (
    <>
    <h1>useCallBack</h1>
    <Counter countValue={count1} onClickHandleCount={memorizeCount1}/>
    <Counter countValue={count2} onClickHandleCount={memorizeCount2}/>
    </>
  )
}

export default UseCallbackHook;