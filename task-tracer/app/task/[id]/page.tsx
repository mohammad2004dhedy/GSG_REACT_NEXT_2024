"use client";
import classes from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import copytitle from "@/utils/copyFunction";
interface Iprops {
  params: { id: string };
}
const getTask = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  if (!response.ok) {
    notFound();
  }
  return response.json();
};

const defaultTask: TaskTracer.TaskItem = {
  userId: 0,
  id: 0,
  title: "",
  completed: false,
};
export default function Page(props: Iprops) {
  const [task, setTask] = React.useState<TaskTracer.TaskItem>(defaultTask);
  React.useEffect(() => {
    (async function () {
      const item = await getTask(props.params.id);
      setTask(item);
    })();
  }, [props]);
  return (
    <div className={classes.page}>
      <main className={classes.main}>
        <Image
          src={"/images/taskIcon.png"}
          width={200}
          height={200}
          alt="task icon"
        />

        <h4 className={classes.title}>
          {task.title}{" "}
          <button
            type="button"
            className={classes.copy}
            onClick={() => {
              copytitle(task.title);
            }}
          >
            copy title
          </button>
        </h4>
        <p
          className={`${classes.completed} ${
            task.completed ? classes.done : ""
          }`}
        >
          {task.completed ? "Completed" : "Not completed"}
        </p>
        <span className={classes.id}>{task.id}</span>

        <Link href="/" className={classes.btn}>
          back to main page
        </Link>
      </main>
    </div>
  );
}
