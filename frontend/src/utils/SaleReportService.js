import axios from 'axios';

const API_URL = 'http://localhost:5000/api/report';

export const fetchSales = async () => {
    return axios.get(API_URL);
};

export const createSale = async (saleData) => {
    return axios.post(API_URL, saleData);
};


export const updateSale = async (id, saleData) => {
    return axios.put(`${API_URL}/${id}`, saleData);
};

export const deleteSale = async (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
