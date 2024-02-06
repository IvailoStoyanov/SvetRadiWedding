import styles from './Footer.module.scss'
// import { useIsMobile } from "./../../hooks/useIsMobile"

export default function Footer() {
  // const isMobile = useIsMobile();

  return (
    <>
      <footer className={styles.footer}>
        {/* {
          isMobile ?
            <img src="/branches/mobile/footer.svg" alt="Tree branch" className={styles.branch} /> :
            <div className={styles.desktopBranchesWrapper}>
              <img src="/branches/desktop/formLeft.svg" alt="Tree branch" className={styles.branchLeft} />
              <img src="/branches/desktop/formRight.svg" alt="Tree branch" className={styles.branchRight} />
            </div>
        } */}
      </footer>
    </>
  )
}
