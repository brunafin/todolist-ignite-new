import { useState } from "react"
import clipboardIcon from '../../assets/Clipboard.png';
import { HiOutlineTrash } from 'react-icons/hi';
import S from './styles.module.scss';

interface IProps {
  taskList: ITaskProps[],
  setTaskList: (value: ITaskProps[]) => void;
}

interface ITaskProps {
  id: number;
  content: string;
  isDone: boolean;
}

export function List({ taskList, setTaskList }: IProps) {
  const [countDone, setCountDone] = useState<number>(0);

  const checkCount = () => {
    const count = taskList.filter((item) => item.isDone);
    setCountDone(count.length);
  }

  const handleDelete = (taskId: number) => {
    const updatedList = taskList.filter((item) => item.id !== taskId);
    setTaskList(updatedList);
  }

  const handleCheckIsDone = (taskId: number) => {
    const updatedList = taskList.map((item) => {
      if (item.id === taskId) {
        const aux = item;
        aux.isDone = !item.isDone;
        return aux;
      }
      return item;
    });
    setTaskList(updatedList);
    checkCount();
  }

  return (
    <div className={S.list}>
      <header>
        <div>
          <p className={S.list__textTodo}>Tarefas criadas</p><span>{taskList.length}</span>
        </div>
        <div>
          <p className={S.list__textDone}>Concluídas</p><span>{countDone} de {taskList.length}</span>
        </div>
      </header>
      <div className={S.list__box}>
        {taskList.length ? (
          taskList.map((item) => (
            <div key={item.id} className={S.list__box__task}>
              <div>
                <input id={`checkIsDone-${item.id}`} type="checkbox" defaultChecked={item.isDone} onChange={() => handleCheckIsDone(item.id)} />
                <label htmlFor={`checkIsDone-${item.id}`} className={item.isDone ? S.list__box__task__isDone : ''}>
                  {item.content}
                </label>
              </div>
              <button type="button" onClick={() => handleDelete(item.id)}>
                <HiOutlineTrash cursor="pointer" size={18} />
              </button>
            </div>
          ))
        ) : (
          <div className={S.list__box__empty}>
            <img src={clipboardIcon}></img>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </div>
  )
}
