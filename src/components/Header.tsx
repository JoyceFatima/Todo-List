import styles from './Header.module.css';

import logoHeader from '../assets/images/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.headerLogo} src={logoHeader} alt="Logo Rocket" />
      <h1 className={styles.title}>todo</h1>
    </header>
  )
}