import React, { useContext } from 'react';
import SelectedGuest from './SelectedGuest';
import NamesComponent from './NamesComponent'
import NamesList from './NamesList'
import styles from './index.module.scss';
import { GuestsContext } from '../../contexts/GuestsContext';
import LoadingNames from './LoadingNames';

const RsvpForm = () => {
  const {
    guestsGroupContext,
    isFetching,
  } = useContext(GuestsContext);

  return guestsGroupContext.length ? <SelectedGuest /> : (
    <div className={styles.formWrapper}>
      <h2>Присъствие</h2>
      <p>Моля, попълнете нужната информация.</p>
        <NamesComponent />
        {isFetching ? <LoadingNames /> : <NamesList />}
    </div>
  );
};

export default RsvpForm;
