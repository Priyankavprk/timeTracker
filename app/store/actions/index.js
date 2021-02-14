export function addTask(data) {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: 'ADD_TASK',
        payload: {
          data,
        },
      });
    } catch (err) {
      console.error('Error: ', err);
    }
  };
}
