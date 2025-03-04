import React from "react";
import classes from "./TaskItem.module.css";
import Image from "next/image";
import Link from "next/link";
import copytitle from "@/utils/copyFunction";
interface Iprops {
  data: TaskTracer.TaskItem;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TaskItem = (props: Iprops) => {
  const { data } = props;
  return (
    <div className={classes.item}>
      <div className={classes.content}>
        <Image
          src={
            data.completed ? "/images/checked.webp" : "/images/sandClock.jpg"
          }
          alt="task status"
          width={50}
          height={50}
        />
        <p className={classes.text}>{data.title}</p>
      </div>
      <div className={classes.actions}>
       <Link href={`/task/${data.id}`}>
         <Image
          src="/images/eyeIcon.png"
          alt="see details"
          width={30}
          height={30}
          title="See Details"
        />
       </Link>
        <Image
          src="/images/copyIcon.png"
          alt="copy to clipord"
          width={30}
          height={30}
          onClick={()=>{copytitle(data.title)}}
          title="copy to clipboard"
        />
      </div>
    </div>
  );
};

export default TaskItem;
