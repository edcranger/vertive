<template>
  <div class="view-message px-3">
    <v-container class="elevation-3">
      <v-list expand subheader>
        <v-card-actions>
          <v-btn flat route to="/adminDashboard/messages">
            <v-icon large class="mr-2">fas fa-long-arrow-alt-left</v-icon>
            <span>back</span>
          </v-btn>

          <v-spacer></v-spacer>
          <!---Deleting Dialog--->
          <v-dialog v-model="dialogDeleteMessage" width="500">
            <template v-slot:activator="{ on }">
              <v-btn app flat v-on="on">
                <v-icon class="trasbin">delete</v-icon>
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline red white--text" primary-title>Delete</v-card-title>

              <v-card-text>Are you sure you want delete this message?</v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark depressed color="red" app @click="deleteMessage(param)">Delete</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
        <div class="mt-5" v-for="adminData in adminDatas" :key="adminData.id">
          <div v-if="adminData.id == param">
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{adminData.title}}</v-list-tile-title>
                <v-list-tile-sub-title>Name</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{adminData.headline}}</v-list-tile-title>
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
                <v-list-tile-title>This product</v-list-tile-title>
                <v-list-tile-sub-title>Asking for</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <p style="text-align: justify " class="pa-3">{{adminData.subtitle}}</p>
          </div>
        </div>
      </v-list>

      <v-divider></v-divider>
      <v-btn @click="powerOn">clickMe</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "viewMessage",
  props: ["adminDatas"],
  data() {
    return {
      dialogDeleteMessage: false,
      param: this.$route.params.message_id
    };
  },
  methods: {
    boom() {
      this.$emit("clickRead", this.param);
    },
    deleteMessage(data) {
      this.$emit("deleteMes", data);
      this.$router.replace("/adminDashboard/messages");
    },
    powerOn() {
      var request = new XMLHttpRequest();

      request.open(
        "PUT",
        "188.166.206.43/e8097c404a814f2b842fa925b2a52f8f/update/D13"
      );

      request.setRequestHeader("Content-Type", "application/json");

      request.onreadystatechange = function() {
        if (this.readyState === 4) {
          console.log("Status:", this.status);
          console.log("Headers:", this.getAllResponseHeaders());
          console.log("Body:", this.responseText);
        }
      };

      var body = ["1", "2"];

      request.send(JSON.stringify(body));
    }
  },

  created() {
    this.boom();
  }
};
</script>

<style>
</style>

