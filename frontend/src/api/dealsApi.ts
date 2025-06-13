import axios from 'axios';
import type { FetchFilteredDeals } from '../types';

const BASE_URL = 'http://localhost:3001';

export const fetchFilteredDeals = async ({ filters, setDeals } : FetchFilteredDeals) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/deals/filter`, filters);
    setDeals(response.data);
  } catch (error) {
    console.error('Error fetching filtered deals:', error);
  }
};

export const fetchAllCategories = async (setAllCategories: React.Dispatch<React.SetStateAction<string[]>>) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/deals`);
    setAllCategories(response.data);
  } catch (error) {
    console.error('Error fetching categories deals:', error);
  }
};