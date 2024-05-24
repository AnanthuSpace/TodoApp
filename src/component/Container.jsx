import List from "./List";

function Container({ todoArray, setTodoArray, toast }) {

const deleteAll = () => {
    setTodoArray([])
    toast("All records deleted" , "Green");
}

  return (
    <div className="container">
      <div className="content">
        {todoArray.length === 0 ? (
          <h3>No records found</h3>
        ) : (
          todoArray.map((elem, i) => {
            return <List key={elem.id} content={elem.content} index={i} elem={elem} todoArray={todoArray} setTodoArray={setTodoArray} complete={elem.complete} toast={toast} />;
          })
        )}
        <div className="dlt">
          {todoArray.length !== 0 && (
            <button className="dlt-btn" onClick={deleteAll}>Delete All</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Container;
