<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input
            placeholder=""
            id="nom"
            type="text"
            class="validate"
            v-model="nom"
          />
          <label for="nom">Nom</label>
        </div>
        <div class="input-field col s6">
          <input
            id="prix"
            type="number"
            step="0.1"
            class="validate"
            v-model="prix"
          />
          <label for="prix">Prix</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="desc" type="text" class="validate" v-model="desc" />
          <label for="desc">Description</label>
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
      nom: "",
      prix: "",
      desc: "",
    };
  },
};
</script>