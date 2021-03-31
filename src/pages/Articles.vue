<template>
  <div class="list-articles">
    <div v-if="isLoading">Chargement en cours ...</div>
    <Article
      v-else
      v-for="article in articles"
      v-bind:key="article.nom"
      v-bind:article="article"
      v-bind:nom="article.nom"
      v-bind:prix="article.prix"
      v-bind:description="article.description"
      v-bind:id="article._id"
    />
  </div>
</template>

<style>
.list-articles {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>

<script>
import Article from "../components/Article";
export default {
  name: "Articles",
  components: { Article },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    this.$axios
      .get("https://node-api-lp.herokuapp.com/articles")
      .then((response) => {
        this.$store.state.articles = response.data;
        this.isLoading = false;
      });
  },
  computed: {
    articles() {
      return this.$store.state.articles;
    },
  },
};
</script>