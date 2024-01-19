import axios from 'axios';

const BASE_URL = "https://findpaddle-api.onrender.com/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
: null;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token:`Bearer ${TOKEN}` },
});