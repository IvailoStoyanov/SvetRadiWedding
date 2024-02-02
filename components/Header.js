import styles from './Header.module.scss'
import { useIsMobile } from "../hooks/useIsMobile"

export default function Header({ title }) {
  const isMobile = useIsMobile();

  return <header className={styles.header}>
    <div className={styles.headerWrapper}>
      <h1 className={styles.title}>{title}</h1>
      {/* {
        isMobile ?
          <>
            <img src="/branches/mobile/headerOver.svg" alt="Tree branch" />
            <img
              src="/branches/mobile/ivayloAndRadina.svg"
              alt="Ивайло Стоянов и Радина Рашкова  12.юни.2023"
              className={styles.namesImage}
            />
            <img src="/branches/mobile/headerUnder.svg" alt="Tree branch" />
          </> : <img src="/branches/desktop/header.svg" alt="Tree branch" />
        } */}
      <img src="/branches/radiSvet.png" alt="Tree branch" style={{display: "block", margin: "0 auto"}}/>
    </div>
  </header>
}
