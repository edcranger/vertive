<template>
  <v-flex x12 class="text-xs-center round white--text pa-2">
    <v-btn large round flat color="orange">
      <v-icon large class="mr-2">archive</v-icon>
      <h1>Services</h1>
    </v-btn>

    <v-layout row wrap>
      <v-flex xs12 sm4 pa-3 v-for="(sData, index) in servicesData" :key="index" class="mb-4">
        <v-card flat>
          <v-img class="white--text" :src="sData.imgSrc"></v-img>
          <v-card-title>
            <div>
              <span class="headline">{{sData.name}}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn :color="sData.color" absolute fab bottom route :to="{name: sData.link }">
              <v-icon>far fa-hand-point-up</v-icon>
            </v-btn>
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
