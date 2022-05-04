
import { useState, ChangeEvent, FC, MouseEvent, useEffect } from 'react'
import { ITask } from '../../utiles/interfaces'
import styles from './style.module.scss'
import uniqid from 'uniqid';
import { Form } from '../Form';
import { BtnsBox } from '../BtnsBox';
import { ListItem } from '../ListItem';



const Main: FC = () => {
   const initialState = localStorage.list ? JSON.parse(localStorage.list) : [],
      [todolist, settodolist] = useState<ITask[]>(initialState)

   useEffect(() => localStorage.setItem("list", JSON.stringify(todolist)), [todolist])

   const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
      e.preventDefault()

      let values: any = {}
      Object.values(e.target).forEach((input: HTMLInputElement) =>
         input.name ? values[input.name] = input.value : null
      )

      settodolist([...todolist, { ...values, done: false, _id: uniqid() }]);
      e.target.reset()
   }

   const handleDeleteOne = (e: MouseEvent<HTMLButtonElement>, id: string): void => {
      e.stopPropagation();
      settodolist(todolist.filter((v: ITask) => v._id !== id))
   }

   const handleDone = (id: string): void =>
      settodolist(todolist.map((v: ITask) => v._id === id ? { ...v, done: !v.done } : v))

   const handleDeleteAll = (): void => settodolist([])

   const handleDidAll = (flag: boolean): void => settodolist(todolist.map((t) => ({ ...t, done: flag })))

   return (
      <div className={styles.all}>

         <div className={styles.header}>
            <Form onSubmit={handleSubmit} />
         </div>

         <div className={styles.main}>
            <ul>
               {!todolist.length &&
                  <li className={styles.msg}>don't you have something to do???</li>
               }
               {todolist.sort((a, b) => a.done ? 1 : -1).map((t: ITask) =>
                  <ListItem
                     t={t}
                     handleDeleteOne={handleDeleteOne}
                     handleDone={handleDone}
                     key={`task${t.name}`} />)}
            </ul>
         </div>

         <div className={styles.btnsBox}>
            <BtnsBox len={todolist.length} handleDeleteAll={handleDeleteAll} handleDidAll={handleDidAll} />
         </div>

      </div>
   )
}

export default Main