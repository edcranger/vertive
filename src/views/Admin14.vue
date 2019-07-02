<template>
  <v-app class="split-bg">
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm8 md6 lg5>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <h1 class="flex my-4 purple--text">Vertive Admin Login</h1>
                </div>
                <v-form>
                  <v-text-field
                    append-icon="person"
                    name="login"
                    label="Email"
                    type="text"
                    :rules="[rules.required, rules.email]"
                    v-model="email"
                    required
                  ></v-text-field>
                  <v-text-field
                    @keyup.enter="login"
                    append-icon="lock"
                    name="password"
                    label="Password"
                    id="password"
                    :rules="[rules.required]"
                    type="password"
                    v-model="password"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <div class="login-btn">
                <v-spacer></v-spacer>
                <v-btn
                  @click="login"
                  block
                  color="purple"
                  class="white--text"
                  :loading="loading"
                >Login</v-btn>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { fb } from "../firebase";

export default {
  name: "admin14",
  data: () => ({
    loading: false,
    email: "",
    password: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      email: v => (v || "").match(/@/) || "Please enter a valid email"
    }
  }),
  methods: {
    login() {
      this.loading = true;
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.loading = true;
          this.$router.replace("/adminDashboard");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    }
  }
};
</script>
<style scoped lang="css">
.split-bg {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>