import React from 'react';
import Aux from '../hoc/Aux';

const holiday = (props) => {
  
  return (
    <>
        <td>{props.holiday.name}</td>
        <td>{props.holiday.date}</td>
    </>
  );
};

export default holiday;