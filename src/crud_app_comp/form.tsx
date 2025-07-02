import React, { useState, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
}

interface FormComponentProps {
  onSubmit: (data: FormData) => void;
  editData: FormData | null;
}

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit, editData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setEmail(editData.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [editData]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <div className='container margin-left-100'>
      <h1>{editData ? 'Edit Employee' : 'Add Employee'}</h1>
      <div className="w-50">
        <form className="card p-4 mt-4" onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
            />
          </div>
          <div className='form-group'>
            <label htmlFor="exampleInputName1">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputName1"
              placeholder="Enter name"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
