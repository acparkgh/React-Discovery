import React, {Component} from 'react';
import Holiday from '../component/Holiday';

// class Holidays extends Component {
  
//   render() {

//     const holidays = [
//       { name: "New Year's Day", date: "Jan 1, 2021" },
//       { name: "Matin Luther King Jr. Day", date: "Jan 18, 2021" },
//       { name: "Memorial Day", date: "May 31, 2021" },
//       { name: "Independence Day", date: "July 5, 2021" },
//       { name: "Labor Day", date: "Sept 6, 2021" },
//       { name: "Veterans Day", date: "Nov 11, 2021" },
//     ]

//     const holidayTable = holidays.map(holiday => 
//       { return (
//           <tr><Holiday holiday={holiday} /></tr> 
           
//         )
//       })
//     return (
//       <table>
//          {holidayTable}
//       </table>

//     )
//   }     
// }  

class Holidays extends Component {
  
  render() {
   const holidays = [
     { name: "New Year's Day", date: "Jan 1, 2021" },
     { name: "Matin Luther King Jr. Day", date: "Jan 18, 2021" },
     { name: "Memorial Day", date: "May 31, 2021" },
     { name: "Independence Day", date: "July 5, 2021" }, 
     { name: "Labor Day", date: "Sept 6, 2021" },
     { name: "Veterans Day", date: "Nov 11, 2021" },
   ];
   const holidayTable = holidays.map(holiday =>{
    return (
     <tr><Holiday holiday={holiday} /></tr>
    );
   });
   console.log(holidayTable)
   return (
    <table>{holidayTable}</table>
   );
  };
 };

export default Holidays;
