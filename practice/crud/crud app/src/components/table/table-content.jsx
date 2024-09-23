import React, { useState, useEffect } from 'react';

function TableHead() {
  return (
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Roll No</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Updated At</th>
        <th scope="col">Created At</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
  );
}

function TableData({ getAllStudents }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(getAllStudents);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const apiJson = await response.json();
        setData(apiJson.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [getAllStudents]);

  if (loading) {
    return (
      <tbody>
        <tr>
          <td colSpan="4">Loading...</td>
        </tr>
      </tbody>
    );
  }

  if (error) {
    return (
      <tbody>
        <tr>
          <td colSpan="4">Error: {error.message}</td>
        </tr>
      </tbody>
    );
  }
console.log(data);
  return (
    <tbody>
      {data.length > 0 ? (
        data.map((student, index) => (
          <tr key={student.id}>
            <th scope="row">{index + 1}</th>
            <td>{student.rollno}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.updated_at}</td>
            <td>{student.created_at}</td>
            <td>
              <ActionButton className={'btn btn-primary'} text={'Edit'} id={student.rollno}/>
              <ActionButton className={'btn btn-danger ms-1'} text={'Delete'} id={student.rollno}/>
            </td>

          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4">No data available</td>
        </tr>
      )}
    </tbody>
  );
}

function ActionButton ({id , className , text}){
return <button data-id={id} className={className}>{text}</button>
}

export function Table({ getAllStudents }) {
  return (
    <div className="table-responsive">
      <table className="table caption-top">
        <TableHead />
        <TableData getAllStudents={getAllStudents} />
      </table>
    </div>
  );
}
