import Vue from 'vue';
import Router from 'vue-router';
import Blog from '@/components/Blog';
import About from '@/components/About';
import Projects from '@/components/Projects';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
    },
  ],
  mode: 'history',
});
