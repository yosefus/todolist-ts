import React from 'react'
import { FormEventHandler } from 'react';

interface IParams {
   onSubmit: FormEventHandler;
}

export const Form = ({ onSubmit }: IParams) => {
   return (
      <form onSubmit={onSubmit} >
         <input required name='name' type="text" placeholder='new task...' />
         <input min={new Date().toISOString().split("T")[0]} name='date' type="date" />
         <button type='submit'>create</button>
      </form>
   )
}
