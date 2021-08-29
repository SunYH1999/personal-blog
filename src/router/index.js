import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/index.vue";
const routes = [
	{
		path: "/home",
		name: "Home",
		component: Home,
	},
	{
		path: "/passage",
		name: "Passage",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/passage/index.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
