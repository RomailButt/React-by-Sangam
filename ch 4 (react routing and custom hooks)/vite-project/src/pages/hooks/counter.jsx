import React, { memo } from 'react'

const Counter = ({countValue,onClickHandleCount}) => {
console.log('this is getting rendered',countValue , onClickHandleCount)
  return (
    <>
    <p>{countValue}</p>
    <button onClick={onClickHandleCount}>Click</button>
    </>
  )
}

export default memo(Counter)