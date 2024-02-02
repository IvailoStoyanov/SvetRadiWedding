import styles from './index.module.scss';
import React from 'react';

const Timetable = () => {
  return (
    <div className={styles.timetableWrapper}>
      <h2 className={styles.sectionTitle}>Програма</h2>
      <ul className={styles.list}>
        <li>
          <img src="timetable/house.svg" alt="настаняване" className={styles.icon} />
          <p className={styles.time}>16:30</p>
          <p className={styles.timestampInfo}>Добре дошли в Пасарел Лейк Клуб</p>
        </li>
        <li>
          <img src="timetable/rings.svg" alt="пръстени" className={styles.icon} />
          <p className={styles.time}>17:00</p>
          <p className={styles.timestampInfo}>Граждански ритуал</p>
        </li>
        <li>
          <img src="timetable/cocktail.svg" alt="коктейли" className={styles.icon} />
          <p className={styles.time}>17:30</p>
          <p className={styles.timestampInfo}>Коктейл и снимки</p>
        </li>
        <li>
          <img src="timetable/dinner.svg" alt="вечеря" className={styles.icon} />
          <p className={styles.time}>19:00</p>
          <p className={styles.timestampInfo}>Вечеря</p>
        </li>
        <li>
          <img src="timetable/party.svg" alt="парти" className={styles.icon} />
          <p className={styles.time}>22:00</p>
          <p className={styles.timestampInfo}>Парти</p>
        </li>
      </ul>
    </div>
  );
};

export default Timetable;
