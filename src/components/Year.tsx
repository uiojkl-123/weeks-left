import React, { useEffect, useState } from 'react';
import { useAgeStore } from '../store/ageStore';
import { Week } from './Week';
import './Year.scss';

interface YearProps {
    index: number;
}

export const Year: React.FC<YearProps> = (props) => {

    const { index } = props;
    const { birth } = useAgeStore();

    const [year, setYear] = useState<number>();

    useEffect(() => {
        setYear(birth.getFullYear() + index);
    }, [])


    return (
        <div className="year">
            <div className='right'>
                <div className='year'>{year}</div>
                <div className='age'>{index + 1}살</div>
            </div>
            <div className='weeksContainer'>
                <div className='weeks'>
                    {Array.from(Array(52).keys()).map((week, index) => {
                        return (
                            <Week key={index} year={year} index={index}></Week>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
