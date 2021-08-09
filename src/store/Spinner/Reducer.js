const initialState = {
  showSpinner: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SPINNER':
      return {
        showSpinner: !state.showSpinner,
      };
    default:
      return state;
  }
}

export default reducer;
