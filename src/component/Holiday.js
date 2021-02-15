import React from 'react';
import Aux from '../hoc/Aux';

const holiday = (props) => {
const {name, date} = props.holiday
  
  return (
    <>
        {/* <td>{props.holiday.name}</td> */}
        <td>{name}</td>
        {/* <td>{props.holiday.date}</td> */}
        <td>{date}</td>
    </>
  );
};

export default holiday;