import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export function addTask(data) {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: 'ADD_TASK',
        payload: {
          data: {
            id: uuidv4(),
            ...data,
          },
        },
      });
    } catch (err) {
      console.error('Error: ', err);
    }
  };
}
