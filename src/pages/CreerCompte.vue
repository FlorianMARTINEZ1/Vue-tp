<template>
  <div class="card">
    <div class="card-content">
      <h4>Création d'un compte</h4>
      <FormAccount />
      <a @click="saveData" class="waves-effect waves-light btn-small">Créer</a>
      <p>{{ creer }}</p>
    </div>
  </div>
</template>

<script>
import FormAccount from "../components/formAccount";
export default {
  name: "CreerAccount",
  components: { FormAccount },
  data() {
    return {
      creer: "",
    };
  },
  methods: {
    saveData() {
      const bodyFormData = new URLSearchParams();
      bodyFormData.append("email", document.querySelector("#email").value);
      bodyFormData.append(
        "password",
        document.querySelector("#password").value
      );
      this.$axios({
        method: "post",
        url: "https://node-api-lp.herokuapp.com/newAccount",
        data: bodyFormData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => (console.log(response))(window.alert("Compte créé")))
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
  },
};
</script>