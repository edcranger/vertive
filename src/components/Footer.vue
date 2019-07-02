<template>
  <v-footer dark class="footer mt-4">
    <v-card class="flex purple darken-4" flat tile>
      <v-card-title class="purple darken-4">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :href="icon.link" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019 —
        <strong>Vertive Interactive</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      {
        link: `https://www.facebook.com/vertiveinteractive/`,
        icon: "fab fa-facebook"
      },
      {
        link: `#`,
        icon: "fab fa-instagram"
      }
    ]
  })
};
</script>

<style>
.footer {
  margin-top: 11rem;
  width: 100%;
  bottom: 0;
  position: absolute;
}
</style>
