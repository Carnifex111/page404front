import { createStore } from "effector";
import { getAllProjectsFx } from "../app/api/projects";

export const $allProjects = createStore([]).on(
  getAllProjectsFx.doneData,
  (_, data) => data
);
