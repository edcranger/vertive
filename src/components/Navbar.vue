<template>
  <v-toolbar app class="indigo">
    <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-img
      :src="require('@/assets/logo.png')"
      class="mr-5"
      contain
      height="348"
      width="128"
      max-width="190"
    />

    <v-spacer></v-spacer>

    <div v-for="link in links" :key="link.text" class="hidden-sm-and-down">
      <v-btn flat class="white--text" route :to="link.route">{{link.text}}</v-btn>
    </div>

    <v-btn round color="orange" class="white--text">Get in Touch</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      links: [
        { text: "Home", route: "/" },
        { text: "Careers", route: "/careers" },
        { text: "About", route: "/about" }
      ]
    };
  }
};
</script>

<style>
</style>
