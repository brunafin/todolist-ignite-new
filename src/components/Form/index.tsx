import { List } from '../List';
import iconPlus from '../../assets/plus.svg';
import S from './styles.module.scss';
import React, { useState } from 'react';

interface ITaskProps {
  id: number;
  content: string;
  isDone: boolean;
}

export function Form() {
  const [taskText, setTaskText] = useState<string>('');
  const [taskList, setTaskList] = useState<ITaskProps[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (taskText.trim().length) {
      setTaskList([...taskList, { id: taskList.length + 1, content: taskText, isDone: false }])
      setTaskText('');
    }
  }

  return (
    <>
      <form className={S.form} onSubmit={handleSubmit}>
        <input
          value={taskText}
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={(event) => setTaskText(event.target.value)}
        />
        <button>Criar
          <img src={iconPlus} alt="" title="Nova tarefa" />
        </button>
      </form>
      <List taskList={taskList} setTaskList={setTaskList} />
    </>
  )
}
