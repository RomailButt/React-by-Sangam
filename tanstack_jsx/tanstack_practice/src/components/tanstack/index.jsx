import { useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { readStudent, createStudent, deleteStudent } from "./api";
import { useTable } from "react-table";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify

// Fetch data from the API
const fetchData = async () => {
  const response = await fetch(readStudent);

  if (!response.ok) {
    throw new Error("Failed to fetch students");
  }

  const data = await response.json();
  return data.data; // Adjust according to your API response structure
};

// Add new student to the API
const addData = async (studentObj) => {
  const response = await fetch(createStudent, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentObj),
  });

  if (!response.ok) {
    throw new Error("Failed to add student");
  }

  return await response.json(); // Adjust according to your API response structure
};

// Delete student from the API
const deleteStudentData = async (id) => {
  const response = await fetch(deleteStudent, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });

  if (!response.ok) {
    throw new Error("Failed to delete student");
  }
};

const CrudTanStack = () => {
  const queryClient = useQueryClient();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { data: studentList = [], isLoading, isError } = useQuery({
    queryKey: ["studentList"],
    queryFn: fetchData,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteStudentData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["studentList"] });
      toast.success("Student deleted successfully!"); // Toast on success
    },
  });

  const addMutation = useMutation({
    mutationFn: addData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["studentList"] });
      toast.success("Student added successfully!"); // Toast on success
    },
    onError: () => {
      toast.error("Failed to add student!"); // Toast on error
    },
  });

  const onSubmit = async (student) => {
    try {
      await addMutation.mutateAsync(student);
    } catch (error) {
      console.error("Error adding student:", error);
      toast.error("Error adding student!"); // Toast on error
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMutation.mutateAsync(id);
    } catch (error) {
      console.error("Error deleting student:", error);
      toast.error("Error deleting student!"); // Toast on error
    }
  };

  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "_id" },
      { Header: "First Name", accessor: "firstName" },
      { Header: "Last Name", accessor: "lastName" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phone" },
      { Header: "Date of Birth", accessor: "dateOfBirth", Cell: ({ cell }) => new Date(cell.value).toLocaleDateString() }, // Format date
      { Header: "Joined", accessor: "joined", Cell: ({ cell }) => new Date(cell.value).toLocaleDateString() }, // Format date
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <div className="flex space-x-2">
            <button className="text-blue-500 hover:underline" onClick={() => console.log("Editing:", row.original)}>
              Edit
            </button>
            <button className="text-red-500 hover:underline" onClick={() => handleDelete(row.original._id)}>
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: studentList,
  });

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (isError) return <div className="text-center text-red-500">Error fetching students</div>;

  return (
    <div className="container mx-auto p-6">
      <ToastContainer /> {/* Add ToastContainer */}
      <h1 className="text-3xl font-bold mb-6 text-center">Student Management</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["firstName", "lastName", "email", "phone", "dateOfBirth"].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                {field}
              </label>
              <input
                {...register(field, { required: `${field} is required!` })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
                type={field === "email" ? "email" : "text"}
                placeholder={field === "dateOfBirth" ? "YYYY-MM-DD" : ""}
              />
              {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field].message}</p>}
            </div>
          ))}
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add Student
        </button>
      </form>

      <table {...getTableProps()} className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="py-2 px-4 text-left text-gray-600 font-medium">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-100">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="py-2 px-4">
                    {cell.render("Cell")}
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
