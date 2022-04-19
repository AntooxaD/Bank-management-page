import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('conacts/add', contact => ({
    payload: {
        id: nanoid(),
        ...contact,
    },
}));

export const deleteContact = createAction('contacts/delete');

export const editData = createAction('banks/edit');

export const filterContact = createAction('contacts/changeFilter');
