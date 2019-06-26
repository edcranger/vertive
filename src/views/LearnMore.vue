<template>
  <div class="learn-more white mb-5">
    <v-container fluid>
      <v-layout row wrap class="white">
        <v-flex xs12 md6 class="px-4 mt-3 mb-3">
          <h1 class="text-xs-center">Inquire Now</h1>
          <h2 class="text-xs-center">We'd Love to hear from you!</h2>
          <h3
            class="subheading text-xs-center"
          >If you like to know more about this service, please use the contact form below.</h3>
          <div v-for="item in serviceInfo" :key="item.id">
            <v-card class="mt-3" v-if="item.servId == serviceId">
              <v-toolbar :color="item.color" cards dark flat>
                <v-btn icon>
                  <v-icon>far fa-comment-dots</v-icon>
                </v-btn>
                <v-card-title class="title font-weight-regular">Message Us</v-card-title>
              </v-toolbar>
              <v-form ref="form" v-model="form" class="pa-3 pt-4">
                <v-text-field
                  v-model="item.title"
                  color="deep-purple"
                  disabled
                  label="Services"
                  style="min-height: 96px"
                ></v-text-field>

                <v-text-field
                  v-model="name"
                  :rules="rules.nameRules"
                  color="deep-purple"
                  counter="6"
                  label="Name"
                  style="min-height: 96px"
                  type="name"
                ></v-text-field>
                <v-text-field
                  v-model="phone"
                  color="deep-purple"
                  label="Phone number"
                  prefix="+639"
                  mask="phone"
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="[rules.email]"
                  color="deep-purple"
                  label="Email address"
                  type="email"
                ></v-text-field>
                <v-textarea
                  v-model="message"
                  auto-grow
                  color="deep-purple"
                  label="Message"
                  rows="2"
                ></v-textarea>
              </v-form>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn flat @click="$refs.form.reset()">Clear</v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="!form"
                  :loading="isLoading"
                  class="white--text"
                  color="deep-purple accent-4"
                  depressed
                >Submit</v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-flex>

        <v-flex xs12 md6 class="px-4 mt-5 mb-5">
          <div v-for="item in serviceInfo" :key="item.id">
            <container v-if="item.servId == serviceId">
              <h1 class="text-xs-center">{{item.title}}</h1>
              <v-img :src="item.src" contain class="mt-5"></v-img>
              <p class="subheading">{{item.content}}</p>
            </container>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "learnMore",
  props: ["serviceInfo"],
  components: {},
  data() {
    return {
      serviceId: this.$route.params.service_id,
      services: "",
      message: "",
      dialog: false,
      email: undefined,
      form: false,
      isLoading: false,
      name: undefined,
      phone: undefined,
      rules: {
        nameRules: [
          v => !!v || "Name is required",
          v => (v && v.length <= 10) || "Name must be less than 10 characters"
        ],
        email: v => (v || "").match(/@/) || "Please enter a valid email",
        length: len => v =>
          (v || "").length >= len ||
          `Invalid character length, required ${len}`,
        required: v => !!v || "This field is required"
      }
    };
  }
};
</script>

<style scoped>
p {
  text-align: justify;
}
</style>
