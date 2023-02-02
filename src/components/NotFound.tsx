import { ClipboardText } from 'phosphor-react'

import styles from './NotFound.module.css'

export function NotFound() {
  return(
    <div className={styles.containerNotFoundList}>
      <div className={styles.notFoundList}>
          <ClipboardText size={80}/>
          <p>Você ainda não tem tarefas cadastradas</p>
          <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}