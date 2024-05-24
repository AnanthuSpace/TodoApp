import { useState } from "react";

function Create(props) {
  const { todoArray, setTodoArray, toast } = props;
  const [newInput, setNewInput] = useState("");

  const add = () => {
    if (newInput.trim().length !== 0) {

      for(let i=0 ; i<todoArray.length ; i++){
        if(todoArray[i].content.toLowerCase() == newInput.toLowerCase()){
          toast("Already entered" , "Red");
          return false
        }
      }

      const obj = {
        content: newInput,
        id: Date(),
        complete: true,
      };
      setTodoArray([obj, ...todoArray]);
      toast("Created" , "green");
      setNewInput("");
    }
  };

  const enterBtn = (event)=>{
    if(event.key === "Enter"){
      if (newInput.trim().length === 0) {
        toast("Enter any value" , "Red");
      }else{
        add()
      }
    }
  }

  return (
    <div className="create-div">
      <input
        type="text"
        className="inputbox"
        value={newInput}
        onKeyPress={enterBtn}
        onChange={(event) => setNewInput(event.target.value)}
      />
      <button className="btn" onClick={add}>
        Add{" "}
      </button>
    </div>
  );
}

export default Create;
