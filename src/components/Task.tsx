import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

interface ListProps {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskProps {
  list: ListProps;
  data: ListProps[];
  setState: (element: ListProps[]) => void;
  onDeleteTask: (id: number) => void;
}

export function Task({ list, data, setState, onDeleteTask }: TaskProps) {
  function handleToggleCompleted(list: ListProps) {
    setState(
      data.map((task) => {
        if (task.id === list.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  }

  function handleDeleteTask() {
    onDeleteTask(list.id);
  }

  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <input
            className={styles.roundedCheckbox}
            type="checkbox"
            checked={list.completed}
            onClick={() => handleToggleCompleted(list)}
          />
          <label>{list.title}</label>
          <div>
            <button onClick={handleDeleteTask} title="Deletar tarefa">
              <Trash size={20} />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
