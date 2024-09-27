import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { readStudent, createStudent, deleteStudent } from './api';
import { Student } from './interface';
import { useTable, Column } from 'react-table';
import { useForm, SubmitHandler } from 'react-hook-form';

// Fetch data from the API
const fetchData = async (): Promise<Student[]> => {
  const response = await fetch(readStudent);

  if (!response.ok) {
    throw new Error('Failed to fetch students');
  }

  const data = await response.json();
  return data.data; // Adjust according to your API response structure
};

// Add new student to the API
const addData = async (studentObj: Student): Promise<Student> => {
  const response = await fetch(createStudent, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(studentObj),
  });

  if (!response.ok) {
    throw new Error('Failed to add student');
  }

  const data = await response.json();
  return data; // Adjust according to your API response structure
};

// Delete student from the API
const deleteStudentData = async (id: string): Promise<void> => {
  const response = await fetch(deleteStudent, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    throw new Error('Failed to delete student');
  }
};

const CrudTanStack = () => {
  const queryClient = useQueryClient();
  
  // Use form handling
  const { register, handleSubmit, formState: { errors } } = useForm<Student>();
  
  // Fetch the student list
  const { data: studentList = [], isLoading, isError } = useQuery<Student[], Error>({
    queryKey: ['studentList'],
    queryFn: fetchData,
  });

  // Handle student editing
  const handleEdit = (student: Student) => {
    console.log('Editing:', student);
  };

  // Mutation for deleting a student
  const { mutateAsync: handleDeleteStudent } = useMutation({
    mutationFn: deleteStudentData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['studentList'] });
    },
  });

  // Delete student handler
  const handleDelete = async (id: any) => {
    try {
      await handleDeleteStudent(id);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  // Define table columns
  const columns: Column<Student>[] = useMemo(() => [
      { Header: 'ID', accessor: '_id' },
      { Header: 'First Name', accessor: 'firstName' },
      { Header: 'Last Name', accessor: 'lastName' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Phone', accessor: 'phone' },
      {
        Header: 'Actions',
        Cell: ({ row }: { row: { original: Student } }) => (
          <div className="flex space-x-2">
            <button
              className="text-blue-500 hover:underline"
              onClick={() => handleEdit(row.original)}
            >
              Edit
            </button>
            <button
              className="text-red-500 hover:underline"
              onClick={() => handleDelete(row.original._id)}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    [] // Dependencies for useMemo
  );

  // Mutation for adding a new student
  const { mutateAsync: handleAddNewStudent } = useMutation({
    mutationFn: addData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['studentList'] });
    },
  });

  // Form submission handler
  const onSubmit: SubmitHandler<Student> = async (student) => {
    try {
      await handleAddNewStudent(student);
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  // Use react-table to set up table properties
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: studentList,
  });
  // Loading and error states
  if (isLoading) return <div className="text-center">Loading...</div>;
  if (isError) return <div className="text-center text-red-500">Error fetching students</div>;


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student List</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['firstName', 'lastName', 'email', 'phone'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block capitalize">{field}</label>
              <input
                {...register(field as keyof Student, { required: `${field} is required!` })}
                className="input"
                type={field === 'email' ? 'email' : 'text'}
              />
              {errors[field as keyof Student] && (
                <p className="text-red-500">{errors[field as keyof Student]?.message}</p>
              )}
            </div>
          ))}
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Add New Student</button>
      </form>

      <table {...getTableProps()} className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} key={column.id} className="py-2 px-4 text-left">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
          {rows.map((row,index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={index} className="hover:bg-gray-100">
                {row.cells.map((cell,index) => (
                  <td {...cell.getCellProps()} key={index} className="py-2 px-4">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTanStack;
