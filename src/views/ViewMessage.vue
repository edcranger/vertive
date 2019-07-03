<template>
  <div class="view-message px-5">
    <v-container class="elevation-3">
      <v-list expand subheader>
        <v-card-actions>
          <v-icon large class="ml-2">message</v-icon>

          <v-spacer></v-spacer>
          <v-btn app flat>
            <v-icon class="trasbin" @click="deleteMessage(param)">delete</v-icon>
          </v-btn>
        </v-card-actions>

        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Name</v-list-tile-title>
            <v-list-tile-sub-title>Edison Ocampo</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Phone Number</v-list-tile-title>
            <v-list-tile-sub-title>+639-958-402-424</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Email</v-list-tile-title>
            <v-list-tile-sub-title>edisonocampo.eo@gmail.com</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Asking about</v-list-tile-title>
            <v-list-tile-sub-title>Internet of Things(IoT)</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <p
          style="text-align: justify "
          class="pa-3"
        >hi, I just want to ask about the program and you can just try to reach me out</p>
      </v-list>

      <v-divider></v-divider>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "viewMessage",
  data() {
    return {
      param: this.$route.params.message_id
    };
  },
  methods: {
    boom() {
      this.$emit("clickRead", this.param);
    },
    deleteMessage(data) {
      this.$emit("deleteMes", data);
    }
  },
  created() {
    this.boom();
  }
};
</script>

<style>
</style>
