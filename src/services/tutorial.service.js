/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const API_URL = "http://localhost:8000/api/v1";

const getAll = () => {
    return axios.get(`${API_URL}/tutorials`);
}

const get = (id) => {
    return axios.get(`${API_URL}/tutorials/${id}`);
}

const create = (title, description) => {
    return axios.post(`${API_URL}/tutorials`, {title, description});
}
const update = (id, data) => {
    return axios.put(`${API_URL}/tutorials/${id}`,data);
}
const deleteTutorial = (id) => {
    return axios.delete(`${API_URL}/tutorials/${id}`);
}
const deleteAll = () => {
    return axios.delete(`${API_URL}/tutorials`);
}
const findByTitle = (title) => {
    return axios.get(`${API_URL}/tutorials?title=${title}`);
}

export default {
create,
getAll,
get,
update,
deleteTutorial,
deleteAll,
findByTitle,
};

