export const getFilter = state => state.contacts.filter;
export const getItems = state => state.contacts.items;

export const getBanks = state => {
    const filter = getFilter(state);
    const items = getItems(state);
    const normalizedFilter = filter.toLowerCase();

    return items.filter(item =>
        item.name.toLowerCase().includes(normalizedFilter),
    );
};
