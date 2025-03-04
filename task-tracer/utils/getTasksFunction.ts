const getTasks=async()=>{
const data=await fetch("https://jsonplaceholder.typicode.com/todos");
const tasks=await data.json();
return tasks;
}
export {getTasks}