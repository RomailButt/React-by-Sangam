import { useState, useEffect } from "react";
import "./App.css";
import styles from "./style.module.css";
import TodoItem from "./components/todo-item";
import TodoDetailsDialog from "./components/todo-details";
import { Skeleton } from "@mui/material";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setüpenDlaing] = useState(false);

  async function fetchedTodoListFunc() {
    try {
      setLoading(true);
      const fetchedTodoList = await fetch("https://dummyjson.com/todos");
      const result = await fetchedTodoList.json();
      console.log(result);
      if (result?.todos && result?.todos.length > 0) {
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMessage(""); // if you have any error
      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMessage(""); // if you have any error
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchListOfCurrentTodo(getCurrentTodoId) {
    // console.log(getCurrentTodoId);
    try {
      const apiResponse = await fetch(
        `https://dummyjson.com/todos/${getCurrentTodoId}`
      );
      const result = await apiResponse.json();
      if (result) {
        setTodoDetails(result);
        setüpenDlaing(true);
      } else {
        setTodoDetails(null);
        setüpenDlaing(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchedTodoListFunc();
  }, []);

  if(loading) return <Skeleton variant="rectangular" width={100} height={118} />

  return (
    <>
    <TodoDetailsDialog todoDetails={todoDetails} openDialog={openDialog} setüpenDlaing={setüpenDlaing} setTodoDetails={setTodoDetails}/>
      <div className={styles.mainWrapper}>
        <h1 className={styles.headerTitle}>
          Simple Todo App using Meterial UI
        </h1>
        <div className={styles.todoListWrapper}>
          {todoList && todoList?.length > 0
            ? todoList.map((item) => {
                return (
                  <TodoItem
                    fetchListOfCurrentTodo={fetchListOfCurrentTodo}
                    todo={item}
                    key={item.id}
                  />
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}

export default App;
