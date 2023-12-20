import { useEffect, useState } from "react";
import { TaskProps, Todo } from "../App";
import TodoMapped from "./TodoMapped";

interface ToDoListProps extends Todo {
  filterTodos: (value: number) => void;
  setTodo: (value: TaskProps[]) => void;
  deleteTodo: (value: number) => void;
}

export default function TodoList({
  todo,
  filterTodos,
  setTodo,
  deleteTodo,
}: ToDoListProps) {
  const [todoItemsLeft, setTodoItemsLeft] = useState<TaskProps[]>([]);
  const [helperArray, setHelperArray] = useState<TaskProps[]>([]);
  const [storedValue, setStoredValue] = useState<string>("");

  //   function BottomTodoItems ()

  function listenToDo() {
    const filterTodoItems = todo.filter((item) => item.isDone === false);
    setTodoItemsLeft(filterTodoItems);
  }

  function filterCompleted() {
    console.log(todo);
    setTodo(todo.filter((item) => item.isDone === false));
  }

  function filterTodoByValue(value: string) {
    setStoredValue(value);
    if (value === "All") {
      setHelperArray(todo);
    } else if (value === "Active") {
      setHelperArray(todo.filter((item) => item.isDone === false));
    } else if (value === "Completed") {
      setHelperArray(todo.filter((item) => item.isDone === true));
    }
  }
  function InputValues({ value }: { value: string }) {
    return (
      <h1
        className={`${
          storedValue === value ? "text-[#3A7BFD] text-opacity-100" : "text-[#9394A5]"
        }  cursor-pointer  text-opacity-60 dark:text-opacity-100`}
        onClick={() => filterTodoByValue(value)}
      >
        {value}
      </h1>
    );
  }

  useEffect(() => {
    setHelperArray(todo);
    listenToDo();
  }, [todo]);
  return (
    <section className="my-4 shadow-md mx-12 md:mx-0 mb-32 ">
      {helperArray.map((todo) => (
        <TodoMapped
          deleteTodo={deleteTodo}
          filterTodos={filterTodos}
          key={todo.id}
          id={todo.id}
          isDone={todo.isDone}
          todo={todo.todo}
        />
      ))}

      {todo.length > 0 && (
        <div className="md:px-4  flex justify-between relative  duration-300 dark:bg-[#161722] items-center  bg-white py-4">
          <div className="px-4 md:px-0">
            {todoItemsLeft.length === 1 ? (
              <h1 className="text-[#9394A5]">
                {todoItemsLeft.length} item left
              </h1>
            ) : (
              <h1 className="text-[#9394A5]">
                {todoItemsLeft.length} items left
              </h1>
            )}
          </div>
          <div className="flex gap-x-2 dark:bg-[#161722] border-none dark:border-gray-400 dark:border  md:bottom-0 md:w-fit  absolute -bottom-20 shadow-lg w-full md:static rounded-lg  md:justify-normal md:items-start justify-center py-4 items-center md:py-0 bg-white md:bg-none md:shadow-none">
            <InputValues value="All" />
            <InputValues value="Active" />
            <InputValues value="Completed" />
          </div>

          <div className="px-4 md:px-0">
            <h1 className="text-[#9394A5] cursor-pointer" onClick={() => filterCompleted()}>Clear Completed</h1>
          </div>
        </div>
      )}

    </section>
  );
}
