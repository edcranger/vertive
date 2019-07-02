<template>
  <div class="learn-more white mb-5">
    <v-container fluid>
      <v-layout row wrap class="white">
        <v-flex xs12 md6 class="px-4 mt-3 mb-3">
          <v-snackbar
            color="green"
            class="snackbarShow pa-4"
            v-model="snackbar.snackbar"
            :bottom="snackbar.y === 'bottom'"
            :left="snackbar.x === 'left'"
            :multi-line="snackbar.mode === 'multi-line'"
            :right="snackbar.x === 'right'"
            :timeout="snackbar.timeout"
            :top="snackbar.y === 'top'"
            :vertical="snackbar.mode === 'vertical'"
          >
            Successfully Submitted
            <v-btn color="white" flat @click="snackbar = false">Close</v-btn>
          </v-snackbar>
          <h1 class="text-xs-center">Inquire Now</h1>
          <h2 class="text-xs-center">We'd Love to hear from you!</h2>
          <h3
            class="subheading text-xs-center"
          >If you like to know more about this service, please use the contact form below.</h3>
          <div v-for="item in serviceInfo" :key="item.servId">
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
                  v-model="inquiry.name"
                  :rules="rules.nameRules"
                  color="deep-purple"
                  counter="6"
                  label="Name"
                  style="min-height: 96px"
                  type="name"
                ></v-text-field>
                <v-text-field
                  v-model="inquiry.phone"
                  color="deep-purple"
                  label="Phone number"
                  prefix="+639"
                  mask="phone"
                ></v-text-field>
                <v-text-field
                  v-model="inquiry.email"
                  :rules="[rules.email]"
                  color="deep-purple"
                  label="Email address"
                  type="email"
                ></v-text-field>
                <v-textarea
                  v-model="inquiry.message"
                  auto-grow
                  color="deep-purple"
                  label="Message"
                  rows="2"
                ></v-textarea>
              </v-form>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn flat @click="resetForm">Clear</v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  @click="submitInquiry"
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
              <v-img :src="item.src" contain class="mt-5 mb-4"></v-img>
              <p class="subheading">{{item.content}}</p>
            </container>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
export default {
  name: "learnMore",
  props: ["serviceInfo"],
  components: {},
  data() {
    return {
      serviceId: this.$route.params.service_id,
      snackbar: {
        snackbar: false,
        y: "top",
        x: null,
        mode: "",
        timeout: 6000,
        text: "Hello, I'm a snackbar"
      },
      inquiry: {
        services: this.serviceInfo[this.$route.params.service_id].title,
        message: "",
        email: undefined,
        name: undefined,
        phone: undefined
      },
      dialog: false,
      form: false,
      isLoading: false,

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
  },
  methods: {
    submitInquiry() {
      // Add a second document with a generated ID.
      db.collection("inquiries")
        .add(this.inquiry)
        .then(docRef => {
          this.resetForm();

          this.snackbar.snackbar = true;
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    resetForm() {
      Object.assign(this.$data, this.$options.data.apply(this));
    }
  },
  computed: {}
};
</script>

<style scoped>
.snackbarShow {
  top: 20%;
}
p {
  text-align: justify;
}
</style>
