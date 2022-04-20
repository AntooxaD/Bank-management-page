import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addBank = createAction('banks/add', contact => ({
    payload: {
        id: nanoid(),
        ...contact,
    },
}));

export const deleteBank = createAction('banks/delete');

export const filterBanks = createAction('banks/changeFilter');
