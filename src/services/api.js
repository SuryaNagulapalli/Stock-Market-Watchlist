import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Replace with your backend URL

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Login failed';
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Registration failed';
  }
};

export const fetchWatchlist = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/watchlist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch watchlist';
  }
};

export const addToWatchlist = async (symbol, token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/watchlist`,
      { symbol },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to add to watchlist';
  }
};

export const removeFromWatchlist = async (symbol, token) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/watchlist/${symbol}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to remove from watchlist';
  }
};

export const fetchAlerts = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/alerts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch alerts';
  }
};

export const createAlert = async (alertData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/alerts`, alertData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to create alert';
  }
};

export const deleteAlert = async (alertId, token) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/alerts/${alertId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to delete alert';
  }
};

export const searchStocks = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stocks/search?query=${query}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to search stocks';
  }
};