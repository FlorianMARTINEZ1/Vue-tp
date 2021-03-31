<template>
  <div class="article card">
    <div class="card-content article-detail">
      <div class="info_desc">
        <div class="info">
          <div class="nom teal-text">{{ article.nom }}</div>
          <div class="prix teal-text">{{ article.prix }} €</div>
        </div>
        <div class="description">{{ article.description }}</div>
        <div class="id">id : {{ article._id }}</div>
        <div class="row">
          <div class="col s4">
            <a
              :href="`https://qryc2.csb.app/#/detail/${article._id}`"
              class="waves-effect waves-light btn-small"
              >details</a
            >
          </div>
          <div class="col s4">
            <a
              @click="deleteArticle()"
              class="waves-effect waves-light btn-small"
              >Supprimer</a
            >
          </div>
          <div class="col s4">
            <a
              :href="`https://qryc2.csb.app/#/update/${article._id}`"
              class="waves-effect waves-light btn-small"
              >Modifier</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.article {
  margin: 10px;
}
.article .info {
  margin: 0 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.article .article-detail {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.article .description {
  text-align: justify;
  width: 80%;
  margin-left: 10px;
}
</style>

<script>
export default {
  name: "Article",
  props: ["article"],
  methods: {
    deleteArticle: function () {
      this.$store.dispatch("deleteArticle", this.article._id);
    },
  },
};
</script>