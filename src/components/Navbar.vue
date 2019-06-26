<template>
  <nav>
    <v-toolbar app class="purple darken-4">
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up white"></v-toolbar-side-icon>
      <v-img :src="require('@/assets/logo.png')" class="mr-5" contain width="170" max-width="150"/>

      <v-spacer></v-spacer>

      <div v-for="link in links" :key="link.text" class="hidden-sm-and-down">
        <v-btn flat class="white--text" route :to="link.route">{{link.text}}</v-btn>
      </div>
      <v-btn round color="orange" class="white--text">Get in Touch</v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <!--use column to stack 2 elements on top of each other-->
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-img :src="require('@/assets/logo.png')"></v-img>

          <p class="white--text subheading mt-1">Vertive Interactive</p>
        </v-flex>
        <!---Adding popup component -->
        <v-flex class="mt-4 mb-3">
          <Popup @projectAdded="snackbar = true"/>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-list-title class="white--text">{{link.text}}</v-list-list-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      links: [
        { text: "Home", route: "/", icon: "fas fa-home" },
        { text: "Careers", route: "/careers", icon: "supervised_user_circle" },
        { text: "About", route: "/about", icon: "fas fa-copyright" }
      ]
    };
  }
};
</script>

<style>
</style>
