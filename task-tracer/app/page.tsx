"use client";
import React from "react";
import classes from "./page.module.css";
import { getTasks } from "@/utils/getTasksFunction";
import TaskItem from "@/components/TaskItem/TaskItem";
// ما ركزت على الستايل وحاولت اركز على الوظائف الاساسية بسبب ضيق الوقت برمضان 🥲
const Page = () => {
  const [tasks, setTasks] = React.useState<TaskTracer.TaskItem[]>([]);
  React.useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data.slice(0, 5));

    };
    fetchTasks();
  }, []);
  console.log(tasks);
  return <div className={classes.page}>
    {tasks.map((task) => <TaskItem key={task.id} data={task} />)}
  </div>;
};

export default Page;
