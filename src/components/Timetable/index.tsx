import house from '../../assets/timetable/house.svg'
import ring from '../../assets/timetable/rings.svg'
import cocktail from '../../assets/timetable/cocktail.svg'
import diner from '../../assets/timetable/diner.svg'
import party from '../../assets/timetable/party.svg'

import styles from './index.module.scss';

const Timetable = () => {
  return (
    <div className={styles.timetableWrapper}>
      <h2 className={styles.sectionTitle}>Програма</h2>
      <ul className={styles.list}>
        <li>
          <img src={house} alt="настаняване" className={styles.icon} />
          <p className={styles.time}>16:30</p>
          <p className={styles.timestampInfo}>Добре дошли в Пасарел Лейк Клуб</p>
        </li>
        <li>
          <img src={ring} alt="пръстени" className={styles.icon} />
          <p className={styles.time}>17:00</p>
          <p className={styles.timestampInfo}>Граждански ритуал</p>
        </li>
        <li>
          <img src={cocktail} alt="коктейли" className={styles.icon} />
          <p className={styles.time}>17:30</p>
          <p className={styles.timestampInfo}>Коктейл и снимки</p>
        </li>
        <li>
          <img src={diner} alt="вечеря" className={styles.icon} />
          <p className={styles.time}>19:00</p>
          <p className={styles.timestampInfo}>Вечеря</p>
        </li>
        <li>
          <img src={party} alt="парти" className={styles.icon} />
          <p className={styles.time}>22:00</p>
          <p className={styles.timestampInfo}>Парти</p>
        </li>
      </ul>
    </div>
  );
};

export default Timetable;
