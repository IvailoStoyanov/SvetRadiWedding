import styles from './Header.module.scss';
import inviteMobile from '../../assets/headers/headerMobile.svg';
import inviteDesktop from '../../assets/headers/headerDesktop.png';
import { useIsMobile } from '../../hooks/useIsMobile';

export default function Header({ title }: { title: string }) {
  return <header className={styles.header}>
    <div className={styles.headerWrapper}>
      <h1 className={styles.title}>{title}</h1>
      <img className={styles.image} src={useIsMobile() ? inviteMobile : inviteDesktop} alt="Invitation" />
    </div>
  </header>
}
