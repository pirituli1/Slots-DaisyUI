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
  return {
    // Properties
    projects,

    // Getters - Computed
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),

    // Actions - methods
    addProject,
  };
});
