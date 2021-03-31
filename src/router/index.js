import Articles from "../pages/Articles";
import CreerArticle from "../pages/CreerArticle";
import CreerCompte from "../pages/CreerCompte";
import Login from "../pages/Login";
import detailArticle from "../pages/detailArticle";
import updateArticle from "../pages/updateArticle";
import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Articles, name: "Articles" },
  { path: "/newarticle", component: CreerArticle, name: "CreerArticle" },
  { path: "/newaccount", component: CreerCompte, name: "CreerCompte" },
  { path: "/login", component: Login, name: "Login" },
  { path: "/detail/:id", component: detailArticle, name: "detailArticle" },
  { path: "/update/:id", component: updateArticle, name: "updateArticle" }
];

Vue.prototype.$axios = axios;

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;
