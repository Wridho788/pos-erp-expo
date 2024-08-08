import axios from 'axios';

const API_URL = 'https://api.example.com/dashboard'; // Replace with your actual API URL

export const fetchDashboardData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error);
    throw error; // Rethrow error to be handled by the calling function
  }
};
