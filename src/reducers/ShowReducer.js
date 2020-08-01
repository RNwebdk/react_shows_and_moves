export const showReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_SHOWS':
      return {
        ...state,
        shows: action.payload,
      };
    case 'ADD_SHOW':
      console.log('Adding show to localstorage');
      return [
        ...state,
        {
          // add something here
        },
      ];

    default:
      return state;
  }
};
