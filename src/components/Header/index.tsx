import styles from './Header.module.scss';
import radiSvet from '../../assets/radiSvet.png';

export default function Header({ title }: { title: string }) {
  return <header className={styles.header}>
    <div className={styles.headerWrapper}>
      <h1 className={styles.title}>{title}</h1>
      <img src={radiSvet} alt="Tree branch" style={{ display: "block", margin: "0 auto" }} />
    </div>
  </header>
}
