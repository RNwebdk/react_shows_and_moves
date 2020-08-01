export const showReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_SHOWS':
      console.log('SEARCH_SHOWS', action.payload);
      return {
        ...state,
        shows: action.payload
      };
    case 'ADD_SHOW':
      console.log('Adding show to localstorage');
      // return [
      //   ...state,
      //   {
      //     // add something here
      //   }
      // ];

      // YOU SHOULD BE RETURNING AN OBJECT FOR STATE AND THEN CREATING
      // PROPERTIES INSIDE OF THAT OBJECT SO
      return {
        ...state,
        someArray: [
          {
            // some obejct
          }
        ]
      };

    default:
      return state;
  }
};
