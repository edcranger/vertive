<template>
  <div class="messages px-3">
    <v-layout row>
      <v-flex xs12>
        <v-card class="elevation-5">
          <v-toolbar color="purple darken-4" dark>
            <v-toolbar-title>Inquiries</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>check_circle</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list two-line>
            <h1 class="pa-4" v-if="adminDatas.length == 0">No Messages</h1>
            <template v-for="(adminData, index) in adminDatas">
              <v-list-tile
                :key="adminData.title"
                route
                :to="{name: 'viewMessage', params: {message_id: adminData.id }}"
                avatar
                ripple
                @click="boom(index);"
              >
                <v-list-tile-content>
                  <v-list-tile-title :class="{'font-weight-black': adminData.unRead } ">
                    <v-icon
                      size="15"
                      color="green"
                      class="mb-1"
                      v-if="adminData.unRead"
                    >fas fa-envelope</v-icon>
                    <v-icon
                      size="15"
                      color="grey"
                      class="mb-1"
                      v-else-if="!adminData.unRead"
                    >fas fa-envelope-open</v-icon>
                    {{ adminData.title }}
                  </v-list-tile-title>
                  <v-list-tile-sub-title class="text--primary">{{ adminData.headline }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ adminData.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action @click="toggle(index)">
                  <v-list-tile-action-text>{{ adminData.action }}</v-list-tile-action-text>
                  <v-icon v-if="selected.indexOf(index) < 0" color="grey lighten-1">star_border</v-icon>

                  <v-icon v-else color="yellow darken-2">star</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < adminData.length" :key="index"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "messages",
  props: ["adminDatas"],

  data() {
    return {
      selected: [2]
    };
  },
  methods: {
    toggle(index) {
      //transfer this function to the adminDashboard and then emit the index from @click="toggle(index)" back to the parent
      // const i = this.selected.indexOf(index);
      // if (i > -1) {
      //   this.selected.splice(i, 1);
      // } else {
      //   this.selected.push(index);
      // }
    }
    // ,
    // boom(index) {
    //   this.$emit("clickRead", index);

    // }
  }
};
</script>

<style>
</style>
