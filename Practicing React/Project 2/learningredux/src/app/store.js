import {configureStore} from '@reduxjs/toolkit'
import userDetail from '../features/userDetails'

export const store = configureStore({
    reducer: {
        app: userDetail,
    },
});