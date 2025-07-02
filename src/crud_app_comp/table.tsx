import React, { useState, useEffect } from 'react';

interface TableRow {
  name: string;
  email: string;
}

interface TableProps {
  data: TableRow[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
}

const TableComponent: React.FC<TableProps> = ({ data, onDelete, onEdit }) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');

  useEffect(() => {
    if (editIndex !== null) {
      setEditName(data[editIndex].name);
      setEditEmail(data[editIndex].email);
    }
  }, [editIndex, data]);

  const handleUpdate = (index: number) => {
    onEdit(index);
    setEditIndex(null);
  };

  return (
    <div className="container">
      <h1>Employee List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <td align='center'>Name</td>
            <td align='center'>Email</td>
            <td align='center'>Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            index === editIndex ?
              <tr key={index}>
                <td><input type='text' value={editName} onChange={(e) => setEditName(e.target.value)} className='m-1' /></td>
                <td><input type='text' value={editEmail} onChange={(e) => setEditEmail(e.target.value)} className='m-1' /></td>
                <td>
                  <button onClick={() => handleUpdate(index)}>Update</button>
                </td>
              </tr>
              :
              <tr key={index}>
                <td align='center'>{row.name}</td>
                <td align='center'>{row.email}</td>
                <td align='center'>
                  <div>
                    <input type="button" value='Edit' className='m-1' onClick={() => setEditIndex(index)} />
                    <input type="button" value='Delete' className='m-1' onClick={() => onDelete(index)} />
                  </div>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
