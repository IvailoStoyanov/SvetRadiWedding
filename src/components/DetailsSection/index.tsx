import styles from './index.module.scss';
// import { useIsMobile } from "../../hooks/useIsMobile"
import pasarelImage from "../../assets/pasarel.jpg";

const DetailsSection = () => {
  // const isMobile = useIsMobile();

  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.dressCodeWrapper}>
        {/* {!isMobile && <img src="/branches/desktop/dresscodeLeft.svg" alt="Tree branch" className={styles.leftLeaf} />} */}
        <div className={styles.dressCodeContent}>
          <h2>Дрескод</h2>
          <div className={styles.detailItem}>
            <p className={styles.centeredText}>Официално облекло</p>
          </div>
        </div>
        {/* {!isMobile && <img src="/branches/desktop/dresscodeRight.svg" alt="Tree branch" className={styles.rightLeaf} />} */}
      </div>

      <h2 className={styles.locationAndTransportHeadline}>Локация <br />и транспорт</h2>
      <div className={`${styles.detailItem} ${styles.transportAndLocation}`}>
        <a target="_blank" href='https://goo.gl/maps/h3HdEUdbdGjwmQrT9'>
          <img src={pasarelImage} alt='снимка от дрон на Пасарел Лейк Клуб' />
        </a>
        <div className={styles.transportAndLocationContentWrapper}>
          <a target="_blank" href='https://goo.gl/maps/h3HdEUdbdGjwmQrT9'>
            Pasarel Lake Club - Google Maps
          </a>
          <p>На Ваше разположение са следните начини за транспорт:</p>
          <ul>
            <li>Yellow Taxi</li>
            <li>Drink & Drive</li>
            <li>
              Автобус №3 <br/>(0:10 - 23:15 на всеки 30 мин.)
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.accommodationWrapper}>
        {/* {!isMobile && <img src="/branches/desktop/accommodationLeft.svg" alt="Tree branch" className={styles.accommodationLeftLeaf} />} */}
        <div className={styles.accommodationContent}>
          <h2>Настаняване</h2>
          <div className={`${styles.detailItem} ${styles.accommodation}`}>
            <p>
              Възможност за настаняване има само <b>в София. </b>
              При необходимост, моля, свържете се с нас за съдействие и запазване на нощувка -
              в рамките на срока за отговор на сватбената покана.
            </p>
          </div>
        </div>
        {/* {!isMobile && <img src="/branches/desktop/accommodationRight.svg" alt="Tree branch" className={styles.accommodationRightLeaf} />} */}
      </div>
    </div>
  );
};

export default DetailsSection;
