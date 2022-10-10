import { string } from 'prop-types';
import create from 'zustand';
import { devtools } from 'zustand/middleware'
import { AgeStoreType } from '../model/store';

const store = (set: any): AgeStoreType => ({
    birth: new Date(),
})

/**
 * **생일 스토어**
 */
export const useAgeStore = create(devtools(store));