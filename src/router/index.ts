import ProjectsLayouts from '@/modules/projects/layouts/ProjectsLayouts.vue';
import { createRouter, createWebHistory } from 'vue-router';
declare global {
  interface ImportMeta {
    env: {
      BASE_URL: string;
    };
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'projects' },
      component: ProjectsLayouts,
      children: [
        {
          path: 'projects',
          name: 'projects',
          component: () => import('@/modules/projects/views/ProjectsView.vue'),
        },
      ],
    },
  ],
});

export default router;
