import React from 'react'
import { MouseEventHandler } from 'react';

interface IParams {
   handleDidAll: Function;
   handleDeleteAll: MouseEventHandler;
   len: number;
}

export const BtnsBox = ({ handleDidAll, handleDeleteAll, len }: IParams) => {
   return (
      <>
         <button disabled={!len} onClick={() => handleDidAll(true)} >did it all</button>
         <button disabled={!len} onClick={() => handleDidAll(false)}>didn't do any</button>
         <button disabled={!len} onClick={handleDeleteAll} >delete all</button>
      </>
   )
}
