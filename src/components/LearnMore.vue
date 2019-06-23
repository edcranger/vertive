<template>
  <div class="learn-more">
    <v-btn large class :color="servicesInfo.color" dark @click.stop="dialog = true">Learn More</v-btn>
    <v-dialog v-model="dialog" full-width>
      <v-card class>
        <v-card-title :class="servicesInfo.classHeading">
          <h3 class="white--text ml-4">{{servicesInfo.title}}</h3>
        </v-card-title>
        <v-container fluid>
          <v-layout row wrap>
            <!-- <v-flex xs12 md6>
              <v-icon size="80" color="cyan" class="ml-3">fas fa-angle-double-down</v-icon>
              <v-card-text class="subheading">{{servicesInfo.content}}</v-card-text>
            </v-flex>-->
            <v-flex xs12 md6>
              <v-card-action>
                <Inquire :servicesInfo="servicesInfo"/>
              </v-card-action>
            </v-flex>
          </v-layout>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" flat="flat" @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Inquire from "@/components/Inquire";
export default {
  name: "LearnMore",
  components: {
    Inquire
  },
  props: ["servicesInfo"],
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style>
</style>
