<template>
  <div class="card">
    <div class="card-content">
      <h4>Création d'un article</h4>
      <FormArticle />
      <a @click="saveData" class="waves-effect waves-light btn-small">Créer</a>
    </div>
  </div>
</template>

<script>
import FormArticle from "../components/formArticle";
export default {
  name: "CreerArticle",
  components: { FormArticle },
  methods: {
    saveData() {
      const bodyFormData = new URLSearchParams();
      bodyFormData.append("nom", document.querySelector("#nom").value);
      bodyFormData.append("prix", document.querySelector("#prix").value);
      bodyFormData.append("description", document.querySelector("#desc").value);
      const userToken = window.localStorage.getItem("usertoken");
      this.$axios({
        method: "post",
        url: "https://node-api-lp.herokuapp.com/newArticle",
        data: bodyFormData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          authorization: `bearer ${userToken}`,
        },
      })
        .then((response) => console.log(response))
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
  },
};
</script>