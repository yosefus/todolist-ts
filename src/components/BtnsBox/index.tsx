import React from 'react'
import { MouseEventHandler } from 'react';

interface IParams {
   handleDidAll: Function;
   handleDeleteAll: MouseEventHandler;
}

export const BtnsBox = ({ handleDidAll, handleDeleteAll }: IParams) => {
   return (
      <>
         <button onClick={() => handleDidAll(true)} >did it all</button>
         <button onClick={() => handleDidAll(false)}>didn't do any</button>
         <button onClick={handleDeleteAll} >delete all</button>
      </>
   )
}
