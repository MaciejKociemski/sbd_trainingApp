// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>sbd training App</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           {/* Edit <code>src/App.jsx</code> and save to test HMR */}
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React, { useState } from "react";
import FileUploader from "./components/FileUploader";
import DataTable from "./components/DataTable";
import Chart from "./components/Chart";

const App = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = (uploadedData) => {
    setData(uploadedData);
  };

  return (
    <div>
      <h1>Aplikacja do prezentacji danych z Excela</h1>
      <FileUploader onFileUpload={handleFileUpload} />
      <h2>Podgląd danych</h2>
      <DataTable data={data} />
      <h2>Wykres danych</h2>
      <Chart data={data} />
    </div>
  );
};

export default App;
