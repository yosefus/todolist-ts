import styles from '../Main/style.module.scss'
import { BiTimeFive } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"
import { ITask } from '../../utiles/interfaces';

interface IParams {
   handleDeleteOne: Function;
   handleDone: Function;
   t: ITask
}

export const ListItem = ({ handleDone, t, handleDeleteOne }: IParams) => {
   const oneDay = 24 * 60 * 60 * 1000

   const diffDays = (date: any) => Math.round(Math.abs((Date.now() - Date.parse(date)) / oneDay))

   const rgbaStringByDiff = (diff: number) =>
      `rgba(255,${diff * 10 > 255 ? 255 : diff < 0 ? 0 : diff * 10},0,1`

   return (
      <li onClick={() => handleDone(t._id)}
         className={styles[t.done ? "done" : ""]} >
         <p> {t.name}</p>
         <span>
            {t.date && <BiTimeFive style={{ color: rgbaStringByDiff(diffDays(t.date)), opacity: 0.5 }} />}
            <button onClick={(e) => handleDeleteOne(e, t._id)}>
               <AiFillDelete />
            </button>
         </span>
      </li>)
}
