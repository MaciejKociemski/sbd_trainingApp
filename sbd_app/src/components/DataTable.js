// import React from "react";

// const DataTable = ({ data }) => {
//   if (!data || data.length === 0) {
//     return <p>Brak danych do wyświetlenia.</p>;
//   }

//   const headers = data[0];
//   const rows = data.slice(1);

//   return (
//     <table border="1">
//       <thead>
//         <tr>
//           {headers.map((header, index) => (
//             <th key={index}>{header}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {rows.map((row, rowIndex) => (
//           <tr key={rowIndex}>
//             {row.map((cell, cellIndex) => (
//               <td key={cellIndex}>{cell}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default DataTable;