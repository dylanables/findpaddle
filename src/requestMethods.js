import axios from 'axios';

const BASE_URL = "https://findpaddle-api.onrender.com/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWYwY2JhYjNkODMwYTA1MGQxN2Y4MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMDc5MDU0NiwiZXhwIjoxNzAxMDQ5NzQ2fQ.eIjkye3vntBrfXG2Dydpo7ST35-pLVYG00afCuQlHMM";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token:`Bearer ${TOKEN}` },
});