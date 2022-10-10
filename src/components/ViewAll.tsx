import React, { useEffect, useState } from 'react';
import { useAgeStore } from '../store/ageStore';
import './ViewAll.scss';
import { YearSimple } from './YearSimple';

interface ViewAllProps {

}

export const ViewAll: React.FC<ViewAllProps> = (props) => {

    const { birth } = useAgeStore();

    const [birthYear, setBirthYear] = useState<number>();

    useEffect(() => {
        setBirthYear(birth.getFullYear());
    }, [])


    return (
        <div className='veiwAllContainer'>
            <div className='title'>전체</div>
            <div className="viewAll">
                {birthYear &&
                    Array.from(Array(100).keys()).map((year, yearIndex) => {
                        return (
                            <YearSimple year={birthYear + yearIndex}></YearSimple>
                        )
                    })
                }
            </div>
        </div>
    );
}
