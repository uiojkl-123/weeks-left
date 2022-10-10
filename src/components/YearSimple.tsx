import { IonCheckbox } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useAgeStore } from '../store/ageStore';
import './YearSimple.scss';

interface WeekProps {
    year: number;
}

export const YearSimple: React.FC<WeekProps> = (props) => {

    const { year } = props;

    const { birth } = useAgeStore();

    const [week, setWeek] = useState<number>(100);
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {
        if (!year) { return }
        const today = new Date();
        const thatYear = new Date(year, 0, 1);
        if (thatYear < today) {
            const passedWeekCountThisYear = Math.floor((today.getTime() - new Date(year, 0, 1).getTime()) / (1000 * 60 * 60 * 24 * 7));
            if (passedWeekCountThisYear > 52) {
                setWeek(passedWeekCountThisYear);
                setChecked(true);
            }
        }

    }, [birth, year])


    return (
        year ?
            checked ? <div className="yearSimple" style={{ width: week + '%', background: 'var(--ion-color-primary)' }}></div> : null
            : null
    );
}
