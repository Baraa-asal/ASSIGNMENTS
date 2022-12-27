import React from "react";
import IsDone from "./IsDone";

const TodoListTable = (props) => {
  let randomItem = false;

  return (
    <div style={{fontFamily: 'courier' , display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'space-between'}} className="p-2 rounded">
      <h2>To Do List:</h2>

      <table style={{width: 800}} className="table">
        <thead style={{backgroundColor: 'black'}} className="thead-dark">
          <tr style={{color: 'white'}}>
            <th  scope="col">#</th>
            <th scope="col-4">Task</th>
            <th scope="col">Complete</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        
          {
            props.todoList.map((todoItem, idx) => {
              //Each Item on the To Do List is a Row on the Table 
              return (
                <tr key={idx}>
                  <th scope="row">{idx + 1}</th>
                  <td>
                    <IsDone todoItem={todoItem} />
                  </td>


                  {/* Check Box that changes is a Task if Complete or not */}
                  <td>
                    <input
                      type="checkbox"
                      checked={todoItem.complete}
                      onChange={(e) =>
                        props.handleCompleteChecked(idx, e.target.checked)
                      }
                    />
                  </td>


                  {/* **** Delete Button to Delete Task ******** */}
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => props.deleteTask(idx)}
                    >
                      <strong>Delete</strong>
                    </button>
                  </td>
                </tr>
              );
            })
          }
        
      </table>
    </div>
  );
};

export default TodoListTable;
