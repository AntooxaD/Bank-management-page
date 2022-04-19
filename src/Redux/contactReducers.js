import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './contactActions';

const items = createReducer([], {
    [addContact]: (state, { payload }) =>
        state.find(({ name }) => name === payload.name)
            ? alert(`${payload.name} is already in contacts`)
            : [...state, payload],
    [deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
    // [editData]: (state, {payload}) =>
});
const filter = createReducer('', {
    [filterContact]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({ items, filter });

export default contactsReducer;
