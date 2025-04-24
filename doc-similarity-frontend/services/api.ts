import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Change to your backend URL

export const compareDocuments = async (files: File[]) => {
  const formData = new FormData();
  files.forEach(file => formData.append('files', file));

  const response = await axios.post(`${API_URL}/compare`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return response.data;
};