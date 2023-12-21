import axios from 'axios';

const API_URL = 'http://localhost:5000'

export const getFreezer = () => axios.get(`${API_URL}/api/freezers`);
export const createFreezer = (freezer) => axios.post(`${API_URL}/api/freezers`, freezer);
export const updateFreezer = (id, freezer) => axios.put(`${API_URL}/api/freezers/${id}`, freezer);
export const deleteFreezer = (id) => axios.delete(`${API_URL}/api/freezers/${id}`);