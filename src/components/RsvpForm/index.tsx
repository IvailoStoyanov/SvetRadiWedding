import { useContext } from 'react';
import SelectedGuest from './SelectedGuest';
import NamesComponent from './NamesComponent'
import NamesList from './NamesList'
import styles from './index.module.scss';
import { GuestsContext } from '../../contexts/GuestsContext';
import LoadingNames from './LoadingNames';

const RsvpForm = () => {
  const context = useContext(GuestsContext);

  if (context === null) {
    return null;
  }

  const {
    guestsGroupContext,
    isFetching,
  } = context;

  return guestsGroupContext?.length ? <SelectedGuest /> : (
    <div className={styles.formWrapper}>
      <h2>Ще дойдете ли?</h2>
      <p>Може да попълните RSVP за Вас и Вашата група.</p>
      <NamesComponent />
      {isFetching ? <LoadingNames /> : <NamesList />}
    </div>
  );
};

export default RsvpForm;
