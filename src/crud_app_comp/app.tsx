import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import FormComponent from './form';
import TableComponent from './table';
import Navbar from './navbar';

function App() {
  const [tableData, setTableData] = useState<{ name: string; email: string }[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleSubmit = (data: { name: string; email: string }) => {
    if (editIndex !== null) {
      const updatedData = [...tableData];
      updatedData[editIndex] = data;
      setTableData(updatedData);
      setEditIndex(null);
    } else {
      setTableData([...tableData, data]);
    }
  };

  const handleDelete = (index: number) => {
    const tempData = [...tableData];
    tempData.splice(index, 1);
    setTableData(tempData);
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
  };

  return (
    <>
      <Router>
        <Navbar />
        <section className='section-content'>
          <Routes>
            <Route
              path='/form'
              element={<FormComponent onSubmit={handleSubmit} editData={editIndex !== null ? tableData[editIndex] : null} />}
            />
            <Route
              path='/table'
              element={<TableComponent data={tableData} onDelete={handleDelete} onEdit={handleEdit} />}
            />
          </Routes>
        </section>
      </Router>
    </>
  );
}

export default App;
