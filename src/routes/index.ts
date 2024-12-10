import About from "./about/About.svelte";
import Home from "./home/Home.svelte";

export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];
