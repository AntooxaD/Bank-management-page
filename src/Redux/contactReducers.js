import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { addBank, deleteBank, filterBanks } from './contactActions';

const items = createReducer([], {
    [addBank]: (state, { payload }) =>
        state.find(({ name }) => name === payload.name)
            ? alert(`${payload.name} is already in contacts`)
            : [...state, payload],
    [deleteBank]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
    [filterBanks]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({ items, filter });

export default contactsReducer;
