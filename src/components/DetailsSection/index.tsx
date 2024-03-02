import styles from './index.module.scss';
import krapetsImage from "../../assets/krapets-beatch.jpeg";

const DetailsSection = () => {

  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.dressCodeWrapper}>
        <div className={styles.dressCodeContent}>
          <h2>Дрескод</h2>
          <p>Формално облечени</p>
        </div>
      </div>

      <div className={styles.locationDetailsWrapper}>
        <h2 className={styles.locationAndTransportHeadline}>Локация <br />и транспорт</h2>
        <div className={`${styles.detailItem} ${styles.transportAndLocation}`}>
          <a target="_blank" href='https://maps.app.goo.gl/tBYTjS1Rkr9XVp437'>
            Къмпинг Крапец - Google Maps
            <img src={krapetsImage} alt='снимка от плажа в Крапец' />
          </a>
          <ul>
            <li>организиран транспорт</li>
            <li>неорганизиран транспорт</li>
          </ul>
        </div>
      </div>

      <div className={styles.accommodationWrapper}>
        <h2>Настаняване</h2>
        <div className={styles.detailItem}>
          <p className={styles.details}>
            <b>---поема се от гостите---</b>
          </p>
          <p>
            повече информация за условията на настаняване <a href='https://drive.google.com/file/d/1jXAOiNaRMfGS0RPelYOmtNFPRFKks1FK/view?usp=drivesdk'>линк</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
