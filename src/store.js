import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    jwt: ""
  },
  getters: {},
  mutations: {
    deleteArticle: (state, payload) => {
      const userToken = window.localStorage.getItem("usertoken");
      axios({
        method: "get",
        url: `https://node-api-lp.herokuapp.com/removeArticle/${payload}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          authorization: `bearer ${userToken}`
        }
      })
        .then((response) => console.log(response))
        .catch((error) => {
          console.error("There was an error!", error);
        });
      document.location.reload();
    },
    updateArticle: (state, payload) => {
      console.log(payload);

      const bodyFormData = new URLSearchParams();
      bodyFormData.append("nom", payload.nom);
      bodyFormData.append("prix", payload.prix);
      bodyFormData.append("description", payload.description);
      const userToken = window.localStorage.getItem("usertoken");
      console.log(userToken);
      console.log(bodyFormData);
      axios({
        method: "post",
        url: `https://node-api-lp.herokuapp.com/update/${payload._id}`,
        data: bodyFormData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          authorization: `bearer ${userToken}`
        }
      })
        .then((response) => console.log(response))
        .catch((error) => {
          console.error("There was an error! ", error);
        });
    }
  },
  actions: {
    deleteArticle: (context, payload) => {
      context.commit("deleteArticle", payload);
    },
    updateArticle: (context, payload) => {
      context.commit("updateArticle", payload);
    }
  }
});
