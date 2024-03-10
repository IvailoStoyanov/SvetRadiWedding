import styles from './index.module.scss';
import krapetsImage from "../../assets/krapets-beatch.jpeg";
import Accommodation from './Accommodation';

const DetailsSection = () => {
  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.dressCodeWrapper}>
        <div className={styles.dressCodeContent}>
          <h2>Дрескод</h2>
          <p>Официално облекло</p>
        </div>
      </div>

      <div className={styles.locationDetailsWrapper}>
        <h2 className={styles.locationAndTransportHeadline}>Локация</h2>
        <div className={`${styles.detailItem}`}>
          <a target="_blank" href='https://maps.app.goo.gl/tBYTjS1Rkr9XVp437'>
            Къмпинг Крапец - Google Maps
            <img src={krapetsImage} alt='снимка от плажа в Крапец' />
          </a>
        </div>
      </div>
      <Accommodation />
    </div>
  );
};

export default DetailsSection;
