import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { BsPlusCircleFill } from "react-icons/bs";
import { PiMinusCircleFill } from "react-icons/pi";


const ExpenseItem = (props) => {
    const { dispatch, currency} = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };
    const decreaseAllocation = () => {
        const exp = {
            cost: -10,
        };
        dispatch({
            type: 'SUBTRACT_EXPENSE',
            payload: exp
        });
    };
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><BsPlusCircleFill color='green' size={20} onClick={event=> increaseAllocation(props.name)}></BsPlusCircleFill></td>
        <td><PiMinusCircleFill color='red' size={20} onClick={decreaseAllocation}>-</PiMinusCircleFill></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;

