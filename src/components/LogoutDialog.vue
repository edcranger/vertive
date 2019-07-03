<template>
  <div class="logout-diag logtext-xs-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn large flat depressed v-on="on">
          <v-icon large color="red darken-2">fas fa-sign-out-alt</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline red white--text" primary-title>Logout Admin</v-card-title>

        <v-card-text>Are you sure you want to logout?</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark depressed color="red" app @click="logOut">Logout</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
export default {
  name: "LogoutDialog",
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    logOut() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
