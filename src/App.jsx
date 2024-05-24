import { useState , useEffect} from "react";
import Header from "./component/Header";
import Create from "./component/Create";
import Container from "./component/Container";
import "./App.css";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";


function App() {
  const [todoArray, setTodoArray] = useState(()=>{
    const saveTodo = localStorage.getItem("todos");
    return saveTodo ? JSON.parse(saveTodo) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoArray))
  }, [todoArray]);

  const toast = (content , color) => {
    Toastify({
      text: content,
      duration: 1500,
      close: false,
      gravity: "top",
      position: "right",
      style: {
        background: color,
      },
    }).showToast();
  };

  return (
    <>
      <Header />
      <Create todoArray={todoArray} setTodoArray={setTodoArray} toast={toast}  />
      <Container todoArray={todoArray} setTodoArray={setTodoArray} toast={toast} />
    </>
  );
}

export default App;
