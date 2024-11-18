import React, { useState } from "react";
import * as XLSX from "xlsx";

const FileUploader = ({ onFileUpload }) => {
  const [error, setError] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
          onFileUpload(jsonData);
        } catch (error) {
          setError("Nie udało się odczytać pliku.");
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FileUploader;
