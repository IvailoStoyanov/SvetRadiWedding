

import React, { useContext, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { getGroup } from '../../../pages/api/guests';
import { GuestsContext } from '../../../contexts/GuestsContext';

const LoadingNames = () => {
  return (
    <>
      <div className={styles.optionsWrapper}>
        <div className={styles.optionWrapper}>
          <input
            type="radio"
            name="loading"
            value="loading"
            disabled
          />
          <div className={styles.nameLoader}></div>
        </div>
        <div className={styles.optionWrapper}>
          <input
            type="radio"
            name="loading"
            value="loading"
            disabled
          />
          <div className={styles.nameLoader}></div>
        </div>
      </div>
    </>
  );
};

export default LoadingNames;
