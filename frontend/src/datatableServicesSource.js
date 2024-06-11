import axios from 'axios';


export const serviceColumns =[
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 50 
    },
    {
        field:"name", 
        headerName:"Ramen", 
        width:150, 
    },
    {
      field:'description', 
      headerName:'Description', 
      width:600
  },
    {
        field:'price', 
        headerName:'Price', 
        width:100
    },
    {
        field:'spice_level', 
        headerName:'Spiciness', 
        width:150
    },
    


];

//data

const API_URL = process.env.REACT_APP_RAMENS_API_URL;
console.log(API_URL);
export const getRamenData = async () => {
  const response = await axios.get(`${API_URL}/ramens`);
  return response.data.data.ramens;
};  
export const postRamenData = async (data) => {
  const response = await axios.post(`${API_URL}/ramens`, data);
  return response.data;
};
export const patchRamenData = async (id, data) => {
  const response = await axios.patch(`${API_URL}/ramens/${id}`, data);
  return response.data;
};
export const deleteRamenData = async (id) => {
  console.log(id);
  const response = await axios.delete(`${API_URL}/ramens/${id}`);
  console.log(response.data);
  return response.data;
};


;