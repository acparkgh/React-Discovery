import React from 'react';

const Constant = () => {

  const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ;
  
  const evenNumbers = arr.filter( num => num % 2 === 0 );
  const squared = evenNumbers.map( num => num * 2 );
   
  return (
    <div>
      { squared.map( num => <button>{num}</button> ) }
    </div>
  );
};

export default Constant;