<template>
  <div class="inquire">
    <v-container fluid>
      <h1>Inquire Now</h1>
      <v-layout row>
        <v-flex>
          <h2>We'd Love to hear from you!</h2>
          <h3
            class="subheading"
          >If you like to know more about this service, please use the contact form below.</h3>
          <v-card class="mt-3" style="max-width: 500px;">
            <v-toolbar color="indigo" cards dark flat>
              <v-btn icon>
                <v-icon>far fa-comment-dots</v-icon>
              </v-btn>
              <v-card-title class="title font-weight-regular">Message Us</v-card-title>
            </v-toolbar>
            <v-form ref="form" v-model="form" class="pa-3 pt-4">
              <v-select v-model="select" :items="items" label="Select" required></v-select>

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
              <v-textarea v-model="bio" auto-grow color="deep-purple" label="Message" rows="2"></v-textarea>
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
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Inquire",
  data: () => ({
    select: null,
    items: [
      "Business Process Automation",
      "Cross-Platform App",
      "Embedded Systems"
    ],
    agreement: false,
    bio: "",
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
        (v || "").length >= len || `Invalid character length, required ${len}`,
      required: v => !!v || "This field is required"
    }
  })
};
</script>

<style>
</style>
