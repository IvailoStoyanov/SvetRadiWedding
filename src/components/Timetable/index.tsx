import suitcase from '../../assets/timetableIcons/suitcase.svg'
import rings from '../../assets/timetableIcons/rings.svg'
import cocktails from '../../assets/timetableIcons/cocktails.svg'
import tent from '../../assets/timetableIcons/tent.svg'
import food from '../../assets/timetableIcons/food.svg'
import cake from '../../assets/timetableIcons/cake.svg'
import party from '../../assets/timetableIcons/party.svg'

import styles from './index.module.scss';

const Timetable = () => {
  return (
    <div className={styles.timetableWrapper}>
      <h2 className={styles.sectionTitle}>Програма</h2>
      <ul className={styles.list}>
        <li>
          <img src={suitcase} alt="настаняване" className={styles.icon} />
          <p className={styles.time}>14:00</p>
          <p>Настаняване</p>
        </li>
        <li>
          <img src={rings} alt="пръстени" className={styles.icon} />
          <p className={styles.time}>17:00</p>
          <p>Ритуал на плажа</p>
        </li>
        <li className={styles.largeText}>
          <img src={cocktails} alt="коктейли" className={styles.icon} />
          <p className={styles.time}>17:30</p>
          <p>Коктейл и снимки с гостите</p>
        </li>
        <li className={styles.largeText}>
          <img src={tent} alt="коктейли" className={styles.icon} />
          <p className={styles.time}>18:30</p>
          <p>Добре дошли в бара на къмпинга</p>
        </li>
        <li>
          <img src={food} alt="вечеря" className={styles.icon} />
          <p className={styles.time}>19:00</p>
          <p>Вечеря</p>
        </li>
        <li>
          <img src={cake} alt="вечеря" className={styles.icon} />
          <p className={styles.time}>22:00</p>
          <p>Торта</p>
        </li>
        <li>
          <img src={party} alt="парти" className={styles.icon} />
          <p className={styles.time}>22:00</p>
          <p>Парти</p>
        </li>
      </ul>
    </div>
  );
};

export default Timetable;
