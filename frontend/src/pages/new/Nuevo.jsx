import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { postRamenData, patchRamenData } from '../../datatableServicesSource';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Nuevo = ({ inputs, title }) => {
  let { state } = useLocation();
  console.log(state);
  const data = state ? state.data : {};
  console.log(data);
  const [formData, setFormData] = useState(() =>
    inputs.reduce((acc, input) => ({
      ...acc,
      [input.label]: data[input.label] || ''  // Default to empty string or existing data
    }), {})
  );
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    for (const key of Object.keys(formData)) {
      // Convert value to string to ensure .trim() can be used
      const value = String(formData[key]);
      if (!value.trim()) {
        alert(`Please fill out the ${key} field.`);
        return;  // Stop the submission if any field is empty
      }
    }
    if (data.id) {
      console.log(data.id);
      console.log('lo q se manda:')
      console.log(formData);
      const datos = await patchRamenData(data.id, formData);
      console.log('respuesta:')
      console.log(datos);
      navigate('/services');
      return;
    }
    const dataa = await postRamenData(formData);
    console.log('Form Data:')
    console.log(formData);
    console.log('payload:')
    console.log(dataa);
    navigate('/services');
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          
          <div className="right">
            <form onSubmit={handleSubmit}>
              {inputs.map((input) => (
               
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input 
                  type={input.type}
                  placeholder={input.placeholder}
                  defaultValue={data ? data[input.label] : ''}
                  onKeyPress={(event) => {
                    if (input.type === 'number' && !/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  onChange={(event) => {
                    if (input.type === 'number' && event.target.value < 0) {
                      event.target.value = 0;
                      
                    }else if (input.max && event.target.value > input.max) {
                      event.target.value = input.max;
                    }

                    let trimmedValue
                    event.target.value = event.target.value.replace(/^0+/, '');
                    if (input.type === 'number') {
                      trimmedValue = Number(event.target.value);
                    }else{
                      trimmedValue = event.target.value.trimStart();
                    }
                    
                    setFormData({
                      ...formData,
                      
                      [input.label]: trimmedValue,
                    });
                    console.log(formData);
                  }}
                  />
                </div>
              ))}
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nuevo;