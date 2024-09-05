import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

// const initialLoad = (): Project[] => {
//   return [
//     {
//       id: uuidv4(),
//       name: 'Project 1',
//       task: [],
//     },
//     {
//       id: uuidv4(),
//       name: 'Project 2',
//       task: [],
//     },
//   ];
// };

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', []));

  const addProject = (name: string) => {
    if (name.length === 0) return;

    projects.value.push({
      id: uuidv4(),
      name,
      task: [],
    });
  };

  const addTaskToProject = (projectId: string, taskName: string) => {
    if (taskName.trim().length === 0) return;

    const project = projects.value.find((p) => p.id === projectId);

    if (!project) return;

    project.task.push({
      id: uuidv4(),
      name: taskName,
    });
  };

  const toggleTask = (projectId: string, taskId: string) => {
    const project = projects.value.find((p) => p.id === projectId);
    if (!project) return;

    const task = project.task.find((t) => t.id === taskId);
    if (!task) return;

    task.completedAt = task.completedAt ? undefined : new Date();
  };
  return {
    // Properties
    projects,

    // Getters - Computed
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),

    projectsWithCompletion: computed(() => {
      return projects.value.map((project) => {
        const id = project.id;
        const name = project.name;
        const taskCount = project.task.length;
        const completedTask = project.task.filter((task) => task.completedAt !== undefined);
        const completion = taskCount === 0 ? 0 : completedTask.length / taskCount;
        const completionPercentage = Math.round(completion * 100); // Calcula el porcentaje
        return {
          id,
          name,
          taskCount,
          completionPercentage,
          completedTask,
        };
      });
    }),
    // return {
    //   id,
    //   name,
    //   taskCount,
    //   completion
    //   }
    // Actions - methods
    addProject,
    addTaskToProject,
    toggleTask,
  };
});
