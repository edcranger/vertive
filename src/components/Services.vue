<template>
  <v-flex x12 class="indigo text-xs-center round white--text pa-2">
    <v-btn large round flat color="white">
      <v-icon large class="mr-2">archive</v-icon>
      <h1>Services</h1>
    </v-btn>

    <v-layout row wrap>
      <v-flex xs12 sm4 pa-3 v-for="(sData, index) in servicesData" :key="index">
        <v-card>
          <v-img class="white--text" :src="sData.imgSrc">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox></v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="headline">{{sData.name}}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange" route :to="{name: sData.link, params: sData.link }">Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  name: "Services",
  props: ["techLogos", "servicesData"],
  components: {}
};
</script>

<style>
</style>
