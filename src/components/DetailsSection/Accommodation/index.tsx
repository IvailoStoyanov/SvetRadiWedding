import { useEffect, useState } from 'react';
import { getAccommodations } from '../../../api/accomm';
import styles from './index.module.scss';
import { AccommodationType } from '../../../Types/types';

const Accommodation = () => {
    const [available, setAvailable] = useState('');
    const [taken, setTaken] = useState('');

    const convertToString = (dataArray: AccommodationType[]) => {
        return dataArray.map((record: AccommodationType) => record.fields.name).join(', ');
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAccommodations();
                const availableAccomm = data.filter((item: AccommodationType) => item.fields.status === 'available');
                const takenAccomm = data.filter((item: AccommodationType) => item.fields.status === 'taken');

                setAvailable(convertToString(availableAccomm));
                setTaken(convertToString(takenAccomm));
            } catch (error) {
                console.error('Error fetching accommodations:', error);
            }
        };

        fetchData();
    }, []);

    return <div className={styles.accommodationWrapper}>
        <h2>Настаняване</h2>
        <div className={styles.detailItem}>
            <p>
                <b>поема се от гостите</b><br />
                повече информация за условията на настаняване <a href='https://drive.google.com/file/d/1jXAOiNaRMfGS0RPelYOmtNFPRFKks1FK/view?usp=drivesdk'>прочетете тук</a>
            </p>
            <h4>Свободни:</h4>
            <p className={styles.accommodationParagraph}>{available}</p>
            <h4>Заети:</h4>
            <p className={styles.accommodationParagraph}>{taken}</p>
        </div>
    </div>
}

export default Accommodation;