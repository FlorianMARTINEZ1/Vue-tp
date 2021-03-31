<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input
            placeholder=""
            id="email"
            type="email"
            class="validate"
            v-model="email"
          />
          <label for="first_name">Email</label>
        </div>
        <div class="input-field col s6">
          <input
            id="password"
            type="password"
            class="validate"
            v-model="password"
          />
          <label for="password">Mot de passe</label>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormArticle",
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>