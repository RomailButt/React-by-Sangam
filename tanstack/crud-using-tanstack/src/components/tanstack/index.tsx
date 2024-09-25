import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {readStudent , createStudent} from './api';
import {Student} from "./interface"

const fetchData = async (): Promise<Student[]> => {
  const response = await axios.get(readStudent);
  return response.data.data;
};

const addData = async (studentObj: Student): Promise<Student> => {
  const response = await axios.post(
    createStudent,
    studentObj
  );
  return response.data;
};

const CrudTanStack = () => {
  const queryClient = useQueryClient();

  const {
    data: studentList,
    isLoading,
    isError,
  } = useQuery<Student[], Error>({
    queryKey: ["studentList"],
    queryFn: fetchData,
  });

  const { mutateAsync: handleAddNewProductMutation } = useMutation({
    mutationFn: addData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["studentList"] });
    },
  });

  const handleAddNewStudent = async (student: Student) => {
    try {
      await handleAddNewProductMutation(student);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching students</div>;
  }

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {studentList?.map((student) => (
          <li key={student._id}>
            {student.firstName} {student.lastName} - {student.email}
          </li>
        ))}
      </ul>

      <button
        onClick={() =>
          handleAddNewStudent({
            firstName: "Quail",
            lastName: "Huffman",
            email: "zeqapogix@mailinator.com",
            phone: "+1 (516) 741-4545",
            dateOfBirth: "1994-04-14T00:00:00.000Z",
          })
        }
      >
        Add New Student
      </button>
    </div>
  );
};

export default CrudTanStack;
