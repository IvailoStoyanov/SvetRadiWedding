import React, { useContext } from 'react';
import FoodAlergies from './FoodAlergies';
import Transport from './Transport';
import FoodMenu from './FoodMenu';
import Affirmation from './Affirmation';
import styles from './index.module.scss';
import { GuestsContext } from '../../../contexts/GuestsContext';
import { updateGuestGroup } from '../../../pages/api/guests';
import { useRouter } from 'next/router'

const SelectedGuest = () => {
  const {
    guestsGroupContext,
  } = useContext(GuestsContext);

  const router = useRouter();

  const handleSubmit = () => {
    updateGuestGroup(guestsGroupContext)
    .then(() => router.push('formSuccess'));
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>
        <img
          src={guestsGroupContext.length === 1 ? "/user.svg" : "/group.svg"}
          alt="Netlify Logo"
          className={styles.icon} />
        {guestsGroupContext[0].fields.groupName}
      </h3>

      <Affirmation />
      <FoodMenu/>
      <FoodAlergies />
      <Transport />
      <button className={styles.button} onClick={handleSubmit}>Изпрати потвърждението</button>
      
    </div>
  )
};

export default SelectedGuest;
