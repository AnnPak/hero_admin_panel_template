export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroDeleted = (id) => {
    return {
        type: 'HEROES_DELETING_ITEM',
        payload: id,
    }
}

export const heroAdded = (heroes) => {
    return {
        type: 'HEROES_ADDING_ITEM',
        payload: heroes,
    }
}
