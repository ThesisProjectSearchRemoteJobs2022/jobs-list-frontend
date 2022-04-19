import axios from 'axios';

export default axios.create({
  baseURL: `https://web-app-jobs-2022-api.herokuapp.com/api/v1/getJobs?trabajo=ingeniero`
});