import { configureStore } from '@reduxjs/toolkit';
import { cardReducer, changeSearchTerm, submittingCard, deletingCard } from './Slices/cardSlice';
import { formReducer, changeGrade, changeRollNo, changeName } from './Slices/formSlice';

const store = configureStore({
    reducer : {
        cards: cardReducer,
        form: formReducer
    }
});

export {store, changeGrade, changeRollNo, changeName, changeSearchTerm, submittingCard, deletingCard}