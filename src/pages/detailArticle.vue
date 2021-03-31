<template>
  <div class="detail">
    <Article
      :key="article.nom"
      :article="article"
      v-bind:nom="article.nom"
      v-bind:prix="article.prix"
      v-bind:description="article.description"
      v-bind:id="article._id"
    />
  </div>
</template>

<script>
import Article from "../components/Article";
export default {
  name: "detailArticle",
  components: { Article },
  computed: {
    article() {
      const article = this.$store.state.articles.find(
        (element) => element._id === this.$route.params.id
      );
      return article;
    },
  },
};
</script>