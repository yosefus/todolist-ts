import { FormEventHandler } from 'react';
import { IoIosSend } from "react-icons/io"

interface IParams {
   onSubmit: FormEventHandler;
}

export const Form = ({ onSubmit }: IParams) => {
   return (<>
      <h1 >to do list</h1>
      <form onSubmit={onSubmit} >
         <input required name='name' type="text" placeholder='new task...' />
         <input min={new Date().toISOString().split("T")[0]} name='date' type="date" />
         <button type='submit'><IoIosSend /></button>
      </form>
   </>
   )
}
