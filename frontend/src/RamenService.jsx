import axios from 'axios'; // Install axios: npm install axios

const API_URL = 'https://127.0.0.1:3000/ramens/'; // Replace with your actual API endpoint

const RamenService = {
  async getRamenData() {
    const response = await axios.get(API_URL);
    return response.data;
  },
};

export default RamenService;