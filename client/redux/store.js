import {configureStore} from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import {
    useDispatch as useDispatchBase,
    useSelector as useSelectorBase,
  } from 'react-redux';

import {createWrapper} from 'next-redux-wrapper'

function makeStore() {
    return configureStore({
        reducer: {
            auth: authSlice
        }
    })
}

export const store = makeStore()

export const useDispatch = () => useDispatchBase();
export const useSelector = (selector) =>  useSelectorBase(selector);

export const wrapper = createWrapper(makeStore)