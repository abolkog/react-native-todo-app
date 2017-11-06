import {
  LOADING_FAILED,
  LOADING_SUCCESS,
  LOADING_TASKS
} from './types';

import { AsyncStorage } from 'react-native';
import axios from 'axios';

const handleResponse = (dispatch, data ) => {
  if (data.success) {
    dispatch({ type: LOADING_SUCCESS, tasks: data.tasks })
  }else{
    dispatch({ type: LOADING_FAILED, error: data.message })
  }
}

export const fetchTasks = () => {
  return (dispatch) => {
    dispatch({ type: LOADING_TASKS });

    //Get Token from local storage
    AsyncStorage.getItem('app_token')
      .then(token => {
        //Call the back-end api
        const url = 'https://mean-app-tutorial.herokuapp.com/api/v1/tasks';
        const config = {
          headers: { 'Authorization': `Bearer ${token}` }
        };

        axios.get(url, config)
          .then(resp => handleResponse(dispatch, resp.data))
          .catch(error => console.log(error));

      });
  }
}
