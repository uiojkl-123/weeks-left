import { IonCheckbox } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useAgeStore } from '../store/ageStore';

interface WeekProps {
    year?: number;
    index: number;
}

export const Week: React.FC<WeekProps> = (props) => {

    const { index, year } = props;

    const { birth } = useAgeStore();

    const [checked, setChecked] = useState<boolean>();

    useEffect(() => {
        if (!year) { return }
        const today = new Date();
        const week = new Date(year, 0, 1 + index * 7);
        if (week < today) {
            setChecked(true);
        }

        return () => {
        }
    }, [birth, year])


    return (
        <IonCheckbox className="Week" checked={checked} disabled></IonCheckbox>
    );
}
