<template>
  <div>
    <nav class="blue-grey darken-4">
      <div class="nav-wrapper">
        <a href="/#/" class="brand-logo"><img src="../assets/logo.png" /></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="https://florianmartinezvuetp.netlify.app/login">Connexion</a></li>
          <li><a href="https://florianmartinezvuetp.netlify.app/newAccount">Créer compte</a></li>
          <li><a href="https://florianmartinezvuetp.netlify.app/newArticle">Créer article</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
nav img {
  height: 100%;
  width: 50px;
}
</style>