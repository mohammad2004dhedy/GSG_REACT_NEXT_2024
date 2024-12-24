import DateBanner from "./Date/DateBanner.component.tsx";
import FormComponent from "./FormComponent/FormComponent.component.tsx";
import TodoData from "./TodoDataComponent/TodoData.component.tsx";
import ToDoItems from "./ToDoItems/ToDoItems.component.tsx";
import { useState } from "react";
import { Itodo } from "./assets/ItodoData.ts";
import "./App.css";
function App() {
  const [IdCounter, setIdcounter] = useState<number>(0);
  const [tasksData, settodoData] = useState<Array<Itodo>>([]);
  function addNewTask(newTask: Itodo) {
    settodoData([...tasksData, { ...newTask, id: IdCounter }]);
    setIdcounter(IdCounter + 1);
  }
  function setTaskDone(id: number) {
    const index: number = tasksData.findIndex((t) => t.id === id);
    const newTasksData: Array<Itodo> = [...tasksData];
    newTasksData[index].isDone = !newTasksData[index].isDone;
    settodoData(newTasksData);
  }
  function deleteTask(id: number) {
    const index:number = tasksData.findIndex((task) => task.id === id);
    const newTasksData: Array<Itodo> = [...tasksData];
    newTasksData.splice(index, 1);
    settodoData(newTasksData);
  }
  const numberOFTasks: number = tasksData.length;
  const numberOfDoneTasks: number = tasksData.filter(
    (task) => task.isDone
  ).length;
  const numberOfUrgentTasks: number = tasksData.filter(
    (task) => task.isUrgent
  ).length;
  return (
    <div className="App">
      <DateBanner />
      <FormComponent onAddTask={addNewTask} />
      <TodoData
        tasksNumber={numberOFTasks}
        doneTasks={numberOfDoneTasks}
        urgentTasks={numberOfUrgentTasks}
      />
      <ToDoItems items={[...tasksData]} onComplete={setTaskDone} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
