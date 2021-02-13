export function updateData() {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: 'ADD_DATA',
        payload: {
          data: {
            name: 'taskName',
            detail: 'taskDetail',
            isStarted: false,
          },
        },
      });
    } catch (err) {
      console.error('Error: ', err);
    }
  };
}
