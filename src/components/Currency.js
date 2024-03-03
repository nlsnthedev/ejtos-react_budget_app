import React, { useState,useContext,useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
const [currency, setCurrency] = useState('');
const { dispatch } = useContext(AppContext);

const handleChange = (event) => {
    setCurrency(event.target.value);
    changeCurrency();
  };
  const selectStyle = {
    backgroundColor: 'green',
    color: 'white',
 };
const optionStyle = {
      backgroundColor: 'green',
      color: 'white',
};
  
  const changeCurrency = () => {
    dispatch({
        type: 'CHG_CURRENCY',
        payload: currency,
    });
  };

useEffect(() => {
    console.log(currency); changeCurrency();
}, [currency,changeCurrency]);


return (
    <div className="alert alert-secondary">
    <select id="inputGroupSelect02" style={selectStyle} onChange={handleChange}>
            <option defaultValue>Currency</option>
            <option style={optionStyle} value="$" name="dollar">$ Dollar</option>
            <option style={optionStyle} value="£" name="pound">£ Pound</option>
            <option style={optionStyle} value="€" name="euro">€ Euro</option>
            <option style={optionStyle} value="₹" name="ruppee">₹ Ruppee</option>
              </select>
              </div>
);
};

export default Budget;