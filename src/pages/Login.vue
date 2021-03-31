<template>
  <div class="card">
    <div class="card-content">
      <h4>Connexion</h4>
      <FormAccount />
      <a @click="saveData" class="waves-effect waves-light btn-small"
        >Connexion</a
      >
      <p>token : {{ token }}</p>
    </div>
  </div>
</template>

<script>
import FormAccount from "../components/formAccount";
export default {
  name: "Login",
  components: { FormAccount },
  data() {
    return {
      token: "",
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
        url: "https://node-api-lp.herokuapp.com/login",
        data: bodyFormData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) =>
          localStorage.setItem(
            "usertoken",
            response.data.jwt
          )((this.token = response.data.jwt))
        )
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
  },
};
</script>