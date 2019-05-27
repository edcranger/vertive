<template>
  <v-flex x12 class="indigo text-xs-center round white--text pa-2">
    <v-btn large round flat color="white">
      <v-icon large class="mr-2">archive</v-icon>
      <h1>Services</h1>
    </v-btn>

    <v-layout row wrap>
      <v-flex xs12 sm4 pa-3>
        <v-card>
          <v-img class="white--text" :src="require('@/assets/services/1.png')">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox></v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="headline">Web Application (PWA)</span>
              <br>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facere.</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Details</v-btn>
            <v-btn flat color="orange">Pricing</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm4 pa-3>
        <v-card>
          <v-img class="black--text" :src="require('@/assets/services/3.png')">
            <v-container fill-height fluid>
              <v-layout fill-height></v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="headline">Mobile Application</span>
              <br>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facere.</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Details</v-btn>
            <v-btn flat color="orange">Pricing</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm4 pa-3>
        <v-card>
          <v-img class="white--text" :src="require('@/assets/services/2.png')">
            <v-container fill-height fluid>
              <v-layout fill-height></v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="headline">Desktop Application</span>
              <br>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facere.</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Details</v-btn>
            <v-btn flat color="orange">Pricing</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  name: "Services",
  props: ["techLogos"]
};
</script>

<style>
</style>
