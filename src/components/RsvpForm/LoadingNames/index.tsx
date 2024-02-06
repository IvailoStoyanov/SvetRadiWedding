import styles from './index.module.scss';

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
