<template>
  <div>
    <Article
      :key="article.nom"
      :article="article"
      v-bind:nom="article.nom"
      v-bind:prix="article.prix"
      v-bind:description="article.description"
      v-bind:id="article._id"
    />
    <div class="card">
      <div class="card-content">
        <formArticle />
        <a @click="updateData" class="waves-effect waves-light btn-small"
          >Mettre à jour</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Article from "../components/Article";
import formArticle from "../components/formArticle";
export default {
  name: "updateArticle",
  components: { Article, formArticle },
  computed: {
    article() {
      const article = this.$store.state.articles.find(
        (element) => element._id === this.$route.params.id
      );
      return article;
    },
  },
  methods: {
    updateData() {
      let newArticle = this.article;
      if (document.querySelector("#nom").value !== "") {
        newArticle.nom = document.querySelector("#nom").value;
      }
      if (document.querySelector("#prix").value !== "") {
        newArticle.prix = document.querySelector("#prix").value;
      }
      if (document.querySelector("#desc").value !== "") {
        newArticle.description = document.querySelector("#desc").value;
      }
      console.log(newArticle);
      this.$store.dispatch("updateArticle", newArticle);
    },
  },
};
</script>