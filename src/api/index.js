import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  return instance.post('signup', userData);
  // promise return 필수 register를 호출하고 비동기 로직 처리
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
