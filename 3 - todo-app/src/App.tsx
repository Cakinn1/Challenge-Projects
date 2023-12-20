import { useState } from "react";
import Nav from "./components/Nav";
import TodoList from "./components/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { Theme } from "./redux/themeSlice";

export interface TaskProps {
  todo: string;
  id: number;
  isDone: boolean;
}

// if isdone is clicked we put undefline on todo renderhtml

export interface Todo {
  todo: TaskProps[];
}

export default function App() {
  const [counter, setCounter] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [todo, setTodo] = useState<TaskProps[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  function addToDo() {
    const newTodo: TaskProps = {
      id: counter,
      isDone: isCompleted,
      todo: inputValue,
    };
    const todoTask = todo.map((item) => item.todo);
    const hashSet = new Set(todoTask);
    console.log(hashSet.has(newTodo.todo));

    if (hashSet.has(newTodo.todo)) {
      console.log("duplications");
    } else {
      setCounter(counter + 1);
      setTodo([...todo, newTodo]);
      setInputValue("");
    }
    console.log(todo);
  }

  function deleteTodo(id: number) {
    setTodo(todo.filter((item) => item.id !== id));
  }

  function filterTodos(id: number) {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  }

  const theme = useSelector((state: Theme) => state.theme.isDarkMode);

  return (
    <div
      className="bg-cover duration-300 h-[300px] max-h-[300px] bg-no-repeat"
      style={
        theme
          ? { backgroundImage: "url(/images/bg-desktop-light.jpg)" }
          : { backgroundImage: "url(/images/bg-desktop-dark.jpg)" }
      }
    >
      <div className="max-w-[600px] py-12 mx-auto">
        <Nav
          setInputValue={setInputValue}
          addToDo={addToDo}
          inputValue={inputValue}
        />
        <TodoList
          todo={todo}
          setTodo={setTodo}
          deleteTodo={deleteTodo}
          filterTodos={filterTodos}
        />
      </div>
    </div>
  );
}
